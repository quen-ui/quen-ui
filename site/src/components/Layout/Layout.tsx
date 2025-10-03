import React, { useMemo, useContext } from "react";
import { Link, Outlet, useRouterState } from "@tanstack/react-router";
import { IconSun, IconMoon } from "@tabler/icons-react";
import {
  Layout as QuenUILayout,
  IMenuDefaultItem,
  Select,
  Flex,
  Title
} from "@quen-ui/components";
import Logo from "../../images/LogoWhite.png";
import { HeaderStyled, ContentStyled } from "./styles";
import { sortPages } from "./helpers";
import { ILoaderData } from "../../types";
import { ThemeContext } from "../../helpers/themeContext";

const Layout = () => {
  const themeContext = useContext(ThemeContext);
  const { loaderData, location, matches } = useRouterState({
    select: (state) => ({
      loaderData: state.matches.at(-1)?.loaderData as unknown as ILoaderData,
      location: state.location,
      matches: state.matches
    })
  });

  const { current, allPages } = loaderData;

  const shouldRenderHeader = location.pathname !== "/";

  const sidebarMenu: IMenuDefaultItem[] = sortPages(allPages ?? []).map(
    (page) => ({
      label: (
        <Link
          to={`${matches[1].pathname}/$slug` as any}
          params={{ slug: page.title.replaceAll(" ", "") } as any}>
          {page.title}
        </Link>
      ),
      key: page.title,
      active: page.title === current?.frontmatter?.title
    })
  );

  const headerMenuItems = useMemo<IMenuDefaultItem[]>(
    () => [
      {
        label: (
          <Link to="/guides/$slug" params={{ slug: "gettingstarted" }}>
            Get started
          </Link>
        ),
        key: "guides",
      },
      {
        label: (
          <Link to="/theming/$slug" params={{ slug: "Introductiontotheming" }}>
            Theming
          </Link>
        ),
        key: "theming",
      },
      {
        key: "components",
        label: (
          <Link to="/components/$slug" params={{ slug: "alert" }}>
            Components
          </Link>
        ),
      },
      {
        key: "hooks",
        label: (
          <Link to="/hooks/$slug" params={{ slug: "useOnClickOutside" }}>
            Hooks
          </Link>
        ),
      },
      {
        key: "helpers",
        label: (
          <Link to="/helpers/$slug" params={{ slug: "deepMerge" }}>
            Helpers
          </Link>
        ),
      }
    ],
    []
  );

  const onChangeTheme = (theme: string | null) => {
    if (theme) {
      themeContext.onChange(theme);
    }
  };

  return (
    <QuenUILayout>
      {shouldRenderHeader && (
        <HeaderStyled
          activeMenuKeys={[current.frontmatter?.group || ""]}
          classNameMenuItem="menu-item"
          logo={
            <Flex gap="xs" align="center">
              <Link to="/">
                <img alt="logo" src={Logo} width={50} height={50} />
              </Link>
              <Title size="s" color="white">
                QuenUI
              </Title>
            </Flex>
          }
          menuItems={headerMenuItems}>
          <Select
            className="select"
            zIndex={200}
            size="s"
            value={themeContext.theme}
            onChangeReturnValue="value"
            items={[
              { label: "Light", value: "light", icon: <IconSun /> },
              { value: "dark", label: "Dark", icon: <IconMoon /> }
            ]}
            onChange={onChangeTheme}
          />
        </HeaderStyled>
      )}
      {shouldRenderHeader && sidebarMenu.length ? (
        <QuenUILayout.Sidebar
          menuItems={sidebarMenu}
          titleDrawer="Menu"
          activeMenuKeys={[current?.frontmatter?.title]}
        />
      ) : null}
      <ContentStyled>
        <Outlet />
      </ContentStyled>
    </QuenUILayout>
  );
};

export default Layout;
