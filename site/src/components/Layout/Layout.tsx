import React, { useMemo } from "react";
import {
  Link,
  Outlet,
  useRouterState,
} from "@tanstack/react-router";
import { QuenUIProvider, QuenUILightTheme } from "@quen-ui/theme";
import { Layout as QuenUILayout, ILayoutMenuItem } from "@quen-ui/components";
import Logo from "../../images/LogoWhite.png";
import { HeaderStyled } from "./styles";
import { sortPages } from "./helpers";
import { ILoaderData } from "src/types";

const Layout = () => {
  const { loaderData, location, matches } = useRouterState({
    select: (state) => ({
      loaderData: state.matches.at(-1)?.loaderData as unknown as ILoaderData,
      location: state.location,
      matches: state.matches,
    })
  });

  const { current, allPages } = loaderData;

  const shouldRenderHeader = location.pathname !== "/";

  const sidebarMenu: ILayoutMenuItem[] = sortPages(allPages ?? []).map(
    (page) => ({
      label: (
        <Link
          to={`${matches[1].pathname}/$slug` as any}
          params={{ slug: page.title.replaceAll(" ", "") } as any}>
          {page.title}
        </Link>
      ),
      key: page.title,
      isActive: page.title === current?.frontmatter?.title
    })
  );

  const headerMenuItems: ILayoutMenuItem[] = useMemo(
    () => [
      {
        label: (
          <Link to="/guides/$slug" params={{ slug: "gettingstarted" }}>
            Get started
          </Link>
        ),
        key: "guides",
        isActive: current.frontmatter?.group === "guides"
      },
      {
        label: (
          <Link to="/theming/$slug" params={{ slug: "Introductiontotheming" }}>
            Theming
          </Link>
        ),
        key: "theming",
        isActive: current.frontmatter?.group === "theming"
      },
      {
        key: "components",
        label: (
          <Link to="/components/$slug" params={{ slug: "alert" }}>
            Components
          </Link>
        ),
        isActive: current.frontmatter?.group === "components"
      }
    ],
    []
  );

  return (
    <QuenUIProvider theme={QuenUILightTheme}>
      <QuenUILayout>
        {shouldRenderHeader && (
          <HeaderStyled
            classNameMenuItem="menu-item"
            logo={
              <Link to="/">
                <img alt="logo" src={Logo} width={50} height={50} />
              </Link>
            }
            menuItems={headerMenuItems}
          />
        )}
        {shouldRenderHeader && sidebarMenu.length ? (
          <QuenUILayout.Sidebar menuItems={sidebarMenu} />
        ) : null}
        <QuenUILayout.Content>
          <Outlet />
        </QuenUILayout.Content>
      </QuenUILayout>
    </QuenUIProvider>
  );
};

export default Layout;
