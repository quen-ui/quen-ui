import { GatsbyNode } from "gatsby";
import path from "path";
import { createFilePath } from "gatsby-source-filesystem";

export const onCreateNode: GatsbyNode["onCreateNode"] = ({
  node,
  actions,
  getNode
}) => {
  if (node.internal.type === "Mdx") {
    const rawSlug = createFilePath({ node, getNode, basePath: "docs" });
    const normalizedSlug = rawSlug
      .toLowerCase()
      .replace(/\/$/, "")
    actions.createNodeField({
      node,
      name: "slug",
      value: normalizedSlug,
      demo: false
    });
  }
};

export const createPages: GatsbyNode["createPages"] = async ({
  graphql,
  actions
}) => {
  const { createPage, createRedirect } = actions;

  createRedirect({
    fromPath: "/theming",
    toPath: "/theming/introductiontheming/",
  });
  createRedirect({
    fromPath: "/components",
    toPath: "/components/alert/",
  })

  const result = await graphql<{
    allMdx: {
      nodes: {
        id: string;
        internal: { contentFilePath: string };
        fields: { slug: string };
      }[];
    };
  }>(`
    {
      allMdx {
        nodes {
          id
          internal {
            contentFilePath
          }
          fields {
            slug
          }
        }
      }
    }
  `);

  result.data?.allMdx.nodes.forEach((node) => {
    createPage({
      path: `${node.fields.slug}`,
      component: `${path.resolve(
        "./src/components/MdxPage/index.tsx"
      )}?__contentFilePath=${node.internal.contentFilePath}`,
      context: { id: node.id }
    });
  });

};
