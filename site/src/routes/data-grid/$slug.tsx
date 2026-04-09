import { createFileRoute } from "@tanstack/react-router";
import { Alert } from "@quen-ui/components";
import MdxPage from "src/components/MdxPage";
import { ILoaderData } from "src/types";

const mdxModules = import.meta.glob("../../docs/data-grid/*.mdx");

const mdxMap: Record<string, () => Promise<any>> = {};

for (const path in mdxModules) {
  const slug = path
    .split("/")
    .pop()!
    .replace(/\.mdx$/, "")
    .toLowerCase();

  mdxMap[slug] = mdxModules[path];
}

export const Route = createFileRoute("/data-grid/$slug")({
  component: RouteComponent,
  head: (props) => {
    return {
      meta: [
        {
          title: `${(props.loaderData as unknown as ILoaderData)?.current.frontmatter?.title} | QuenUI`
        }
      ]
    };
  },
  loader: async ({ params }) => {
    try {
      const slug = params.slug.toLowerCase();
      const importModule = mdxMap[slug];

      const allPages = await Promise.all(
        Object.entries(mdxModules).map(async ([, loader]) => {
          const raw = (await loader()) as ILoaderData["current"];
          return raw.frontmatter;
        })
      );
      const current = await importModule();

      return {
        current,
        allPages
      };
    } catch (err) {
      throw new Error(err as string);
    }
  }
});

function RouteComponent() {
  const data = Route.useLoaderData() as ILoaderData;
  const Page = data.current.default;
  return (
    <>
      <Alert
        type="warning"
        description="Data Grid is in alpha stage and is not recommended for use in production environments"
      />
      <MdxPage frontmatter={data.current.frontmatter}>
        <Page />
      </MdxPage>
    </>
  );
}
