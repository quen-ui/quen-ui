import { SitemapStream, streamToPromise } from "sitemap";
import { createWriteStream } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));

(async () => {
  const sitemap = new SitemapStream({
    hostname: "https://quen-ui.github.io/quen-ui/"
  });
  [
    "/quen-ui",
    "/quen-ui/#/guides/gettingstarted",
    "/quen-ui/#/guides/Contributing",
    "/quen-ui/#/guides/UsagewithTypeScript",
    "/quen-ui/#/guides/Browsersupport",
    "/quen-ui/#/guides/Support",
    "/quen-ui/#/theming/Introductiontotheming",
    "/quen-ui/#/theming/QuenUIProvider",
    "/quen-ui/#/theming/Colors",
    "/quen-ui/#/theming/Typography",
    "/quen-ui/#/theming/CSSvariables",
    "/quen-ui/#/components/alert",
    "/quen-ui/#/components/Avatar",
    "/quen-ui/#/components/Badge",
    "/quen-ui/#/components/Breadcrumbs",
    "/quen-ui/#/components/Button",
    "/quen-ui/#/components/Card",
    "/quen-ui/#/components/Checkbox",
    "/quen-ui/#/components/Divider",
    "/quen-ui/#/components/Drawer",
    "/quen-ui/#/components/Dropdown",
    "/quen-ui/#/components/Flex",
    "/quen-ui/#/components/Image",
    "/quen-ui/#/components/InputNumber",
    "/quen-ui/#/components/Layout",
    "/quen-ui/#/components/Loader",
    "/quen-ui/#/components/Modal",
    "/quen-ui/#/components/Notification",
    "/quen-ui/#/components/Progress",
    "/quen-ui/#/components/RadioButton",
    "/quen-ui/#/components/Select",
    "/quen-ui/#/components/Switch",
    "/quen-ui/#/components/Tabs",
    "/quen-ui/#/components/Tag",
    "/quen-ui/#/components/Text",
    "/quen-ui/#/components/Textarea",
    "/quen-ui/#/components/TextField",
    "/quen-ui/#/components/Title",
    "/quen-ui/#/components/Tooltip"
  ].forEach((url) =>
    sitemap.write({ url, lastmod: new Date(), changefreq: "daily" })
  );

  sitemap.end();
  const xml = await streamToPromise(sitemap);
  const filePath = resolve(__dirname, "../dist/sitemap.xml");
  createWriteStream(filePath).write(xml);
})();
