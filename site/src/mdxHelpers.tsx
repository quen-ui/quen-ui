import matter from "gray-matter";

export function generateMdxRoutes(type: string) {
  let rawModules: Record<string, string> = {};
  let compModules: Record<string, unknown> = {};
  let basePath = "";
  if (type === "guides") {
    rawModules = import.meta.glob("./docs/guides/*.mdx", {
      eager: true,
      query: "?string"
    });
    compModules = import.meta.glob("./docs/guides/*.mdx", { eager: true });
    basePath = "./docs/guides/";
  } else {
    // Обработайте другие типы или верните пустой массив
    console.warn(`Unknown type: ${type}`);
    return [];
  }

  return Object.keys(rawModules).map((path) => {
    const rawContent = rawModules[path] as string;
    const Component = (compModules[path] as any);

    console.log(rawContent, path);

    // const { data: meta } = matter(rawContent);

    const routePath =
      path
        .replace(basePath, "") // убираем базовую папку
        .replace(/index\.mdx$/, "")
        .replace(/\.mdx$/, "") || "/";

    return {
      path: routePath,
      component: Component.default,
      meta: null
    };
  });
}
