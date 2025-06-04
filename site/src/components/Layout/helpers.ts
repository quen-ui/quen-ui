import { IFrontmatter, IDocsQuery } from "../../types";
interface GroupPages {
  query: IDocsQuery;
  group: string;
}

const GROUPS = [
  { group: "guides", order: [] },
  { group: "theming", order: [] },
  { group: "components", order: [] }
];

function sortPages(pages: (IFrontmatter & { slug: string})[]) {
  const clone = [...pages];
  clone.sort((a, b) => {
    if ("order" in a && "order" in b) {
      if (a.order === b.order) {
        return a.title.toLowerCase().localeCompare(b.title.toLowerCase());
      }

      return a.order - b.order;
    }

    return a.title.toLowerCase().localeCompare(b.title.toLowerCase());
  });

  return clone;
}

export function groupPages({ query, group }: GroupPages): {
  pages: IFrontmatter[];
  group: string;
} {
  const pages = query.allMdx.edges
    .map(({ node }) => ({...node.frontmatter, slug: node.fields.slug }))
    .filter((page) => page.group === group);

  return { pages: sortPages(pages), group };
}

export function getDocsData(query: IDocsQuery) {
  return GROUPS.map((data) => groupPages({ ...data, query }));
}
