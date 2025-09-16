import { writeFileSync } from "node:fs";
import { resolve, dirname } from "node:path";

import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const content = `User-agent: *
Allow: /

Sitemap: https://quen-ui.github.io/quen-ui/sitemap.xml
`;

const filePath = resolve(__dirname, "../dist/robots.txt");
writeFileSync(filePath, content);
