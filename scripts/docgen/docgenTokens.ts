import {
  Project,
  Node,
  SyntaxKind,
  ArrowFunction,
  ObjectLiteralExpression
} from "ts-morph";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const tokensDir = path.resolve(
  __dirname,
  "../../packages/theme/src/componentTokens"
);
const outDir = path.resolve(__dirname, "../../");
const outFile = path.join(outDir, "themeComponentTokens.json");

if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

const project = new Project({
  tsConfigFilePath: path.resolve(__dirname, "../../tsconfig.json")
});

function extractReturnObject(
  fn: ArrowFunction | Node
): ObjectLiteralExpression | undefined {
  const body = "getBody" in fn && fn.getBody();
  if (!body) return undefined;

  if (Node.isParenthesizedExpression(body)) {
    return body.getExpressionIfKind(SyntaxKind.ObjectLiteralExpression);
  }

  const returnStmt = fn.getFirstDescendantByKind(SyntaxKind.ReturnStatement);
  return returnStmt?.getFirstDescendantByKind(
    SyntaxKind.ObjectLiteralExpression
  ) as ObjectLiteralExpression;
}

function parseObjectLiteral(
  obj: ObjectLiteralExpression,
  interfaceComments: Record<string, string>,
  parentKey = ""
): Record<string, any> {
  const result: Record<string, any> = {};

  obj.getProperties().forEach((prop) => {
    if (!Node.isPropertyAssignment(prop)) return;

    const key = prop.getName();
    const valueNode = prop.getInitializer();
    if (!valueNode) return;

    const pathKey = parentKey ? `${parentKey}.${key}` : key;

    if (Node.isObjectLiteralExpression(valueNode)) {
      result[key] = parseObjectLiteral(valueNode, interfaceComments, pathKey);
    } else {
      let val = valueNode.getText();

      if (val.includes("??")) {
        val = val.split("??").pop()?.trim() ?? val;
      }
      if (val.includes("?.")) val = val.split("?.").pop()?.trim() ?? val;

      result[key] = {
        value: val,
        description: interfaceComments[key] ?? ""
      };
    }
  });

  return result;
}

function getInterfaceComments(sourceFile: any) {
  let interfaceMap: Record<string, string> = {};
  sourceFile.getInterfaces().forEach((intf: any) => {
    const props: Record<string, string> = {};
    intf.getProperties().forEach((prop: any) => {
      props[prop.getName()] = prop.getJsDocs()?.[0]?.getComment() ?? "";
    });
    interfaceMap = props;
  });
  return interfaceMap;
}

function parseFile(filePath: string) {
  const sourceFile = project.addSourceFileAtPath(filePath);

  const interfaceComments = getInterfaceComments(sourceFile);

  const result: Record<string, any> = {};

  sourceFile.getVariableStatements().forEach((stmt) => {
    const decl = stmt.getDeclarations()[0];
    const name = decl.getName();
    if (!name.startsWith("generate")) return;

    const initializer = decl.getInitializer();
    if (!initializer) return;

    if (
      !Node.isArrowFunction(initializer) &&
      !Node.isFunctionExpression(initializer)
    )
      return;

    const objLiteral = extractReturnObject(initializer);
    if (!objLiteral) return;

    const componentName = name
      .replace(/^generate/, "")
      .replace(/Tokens$/, "")
      .toLowerCase();

    const tokens = parseObjectLiteral(objLiteral, interfaceComments);
    result[componentName] = tokens;
  });

  return result;
}

const files = fs.readdirSync(tokensDir).filter((f) => f.endsWith(".ts"));

const allTokens: Record<string, any> = {};

files.forEach((file) => {
  const filePath = path.join(tokensDir, file);
  Object.assign(allTokens, parseFile(filePath));
});

fs.writeFileSync(outFile, JSON.stringify(allTokens, null, 2), "utf-8");
console.log(`✅ Tokens JSON generated at ${outFile}`);
