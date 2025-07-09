export interface IFrontmatter {
  title: string;
  description?: string;
  props: string[];
  import: string;
  source: string;
  package: string;
  group?: string;
  order: number;
  slug: string;
  demo?: boolean;
}

export interface IDocsQuery {
  allMdx: {
    edges: {
      node: { frontmatter: IFrontmatter, fields: { slug: string } };
    }[];
  };
}
