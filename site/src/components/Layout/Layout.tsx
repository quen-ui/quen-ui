import React, { useMemo } from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import { QuenUIProvider, QuenUILightTheme } from "@quen-ui/theme";
import { Layout as QuenUILayout, ILayoutMenuItem } from "@quen-ui/components";
import Logo from "../../images/Logo.png";
import { IDocsQuery } from "../../types";
import { getDocsData } from "./helpers";

interface ILayoutProps {
  children: React.ReactNode;
  location: {
    pathname: string;
  };
  pageContext: {
    frontmatter: {
      group?: string;
      title?: string;
    };
  };
}

const query = graphql`
  {
    allMdx {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            group
            description
            import
            order
            package
            source
            title
          }
        }
      }
    }
  }
`;

const Layout = ({ children, location, pageContext }: ILayoutProps) => {
  const shouldRenderHeader = useMemo(() => {
    return !["/"].some((p) => location.pathname === p);
  }, [location]);
  const data = getDocsData(useStaticQuery(query) as IDocsQuery);
  const menuSidebar = useMemo<ILayoutMenuItem[]>(() => {
    return (
      data.find(({ group }) => pageContext.frontmatter?.group === group) ?? {
        pages: []
      }
    ).pages.map((d) => ({
      label: <Link to={d.slug}>{d.title}</Link>,
      key: d.slug,
      isActive: d.title === pageContext.frontmatter.title
    }));
  }, [data, pageContext]);

  const headerMenuItems: ILayoutMenuItem[] = useMemo(
    () => [
      {
        label: <Link to="/guides/gettingstarted">Get started</Link>,
        key: "guides",
        isActive: pageContext.frontmatter?.group === "guides"
      },
      {
        label: <Link to="/theming">Theming</Link>,
        key: "theming",
        isActive: pageContext.frontmatter?.group === "theming"
      },
      {
        key: "components",
        label: <Link to="/components">Components</Link>,
        isActive: pageContext.frontmatter?.group === "components"
      }
    ],
    [pageContext]
  );

  return (
    <QuenUIProvider theme={QuenUILightTheme}>
      <QuenUILayout>
        {shouldRenderHeader && (
          <QuenUILayout.Header
            logo={
              <Link to="/">
                <img alt="logo" src={Logo} width={50} height={50} />
              </Link>
            }
            menuItems={headerMenuItems}
          />
        )}
        {shouldRenderHeader && menuSidebar.length ? (
          <QuenUILayout.Sidebar menuItems={menuSidebar} />
        ) : null}
        <QuenUILayout.Content>{children}</QuenUILayout.Content>
      </QuenUILayout>
    </QuenUIProvider>
  );
};

export default Layout;
