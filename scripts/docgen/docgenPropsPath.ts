import fs from "fs";
import path from "path";
import { parse } from "react-docgen-typescript";
import { PATHS } from "./propsPaths";

interface ParserOptions {
  savePath: string;
  componentPatterns: string[];
}

export async function parseReactComponents(
  options: ParserOptions
): Promise<void> {
  const { savePath, componentPatterns } = options;

  // Configure the parser
  const parserOptions = {
    savePropValueAsString: true,
    shouldExtractLiteralValuesFromEnum: false,
    shouldRemoveUndefinedFromOptional: true,
    propFilter: (prop: any) => {
      if (prop.parent) {
        return !prop.parent.fileName.includes("node_modules");
      }
      return true;
    }
  };

  try {
    // Parse the components
    const components = parse(componentPatterns, {
      ...parserOptions
    });

    // Prepare the output directory
    const dir = path.dirname(savePath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    // Convert components to a serializable format
    const serializableComponents = components.map((component) => ({
      displayName: component.displayName,
      description: component.description,
      props: component.props,
      tags: component.tags,
      methods: component.methods
    }));

    // Save to file
    fs.writeFileSync(
      savePath,
      JSON.stringify(serializableComponents, null, 2),
      "utf-8"
    );

    console.log(
      `Successfully parsed ${components.length} components and saved to ${savePath}`
    );
  } catch (error) {
    console.error("Error parsing React components:", error);
    throw error;
  }
}

// Example usage
const options: ParserOptions = {
  savePath: "./propsComponents.json",
  componentPatterns: PATHS
};

parseReactComponents(options)
  .then(() => console.log("Component parsing completed!"))
  .catch((err) => console.error("Component parsing failed:", err));
