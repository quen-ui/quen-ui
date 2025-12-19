import React, { useMemo, useContext } from "react";
import { Link, Outlet, useRouterState } from "@tanstack/react-router";
import { IconSun, IconMoon } from "@tabler/icons-react";
import { useTheme } from "@quen-ui/theme";
import { useMediaQuery } from "@quen-ui/hooks";
import {
  Layout as QuenUILayout,
  IMenuDefaultItem,
  Flex,
  Title,
  Switch
} from "@quen-ui/components";
import Logo from "../../images/LogoWhite.png";
import { HeaderStyled, ContentStyled, SidebarStyled } from "./styles";
import { groupPagesBySubgroup } from "./helpers";
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
  const theme = useTheme();
  const isDesktop = useMediaQuery("(min-width: 769px)");

  const sidebarMenu = groupPagesBySubgroup(allPages ?? [], matches);

  const headerMenuItems = useMemo<IMenuDefaultItem[]>(
    () => [
      {
        label: (
          <Link to="/guides/$slug" params={{ slug: "gettingstarted" }}>
            Get started
          </Link>
        ),
        key: "guides"
      },
      {
        label: (
          <Link to="/theming/$slug" params={{ slug: "Introductiontotheming" }}>
            Theming
          </Link>
        ),
        key: "theming"
      },
      {
        key: "components",
        label: (
          <Link to="/components/$slug" params={{ slug: "alert" }}>
            Components
          </Link>
        )
      },
      {
        key: "hooks",
        label: (
          <Link to="/hooks/$slug" params={{ slug: "useOnClickOutside" }}>
            Hooks
          </Link>
        )
      },
      {
        key: "helpers",
        label: (
          <Link to="/helpers/$slug" params={{ slug: "deepMerge" }}>
            Helpers
          </Link>
        )
      }
    ],
    []
  );

  const onChangeTheme = (value: boolean) => {
    if (value) {
      themeContext.onChange("dark");
    } else {
      themeContext.onChange("light");
    }
  };

  return (
    <QuenUILayout>
      {shouldRenderHeader && (
        <HeaderStyled
          activeMenuKeys={[current.frontmatter?.group || ""]}
          classNameMenuItem="menu-item"
          logo={
            <Flex gap="xs" align="center" className="logo-wrapper">
              <Link to="/">
                <img alt="logo" src={Logo} width={50} height={50} />
                <Title size="s" color="white">
                  QuenUI
                </Title>
              </Link>
              {!isDesktop && (
                <Switch
                  value={themeContext.theme === "dark"}
                  className="theme-switch"
                  onChange={onChangeTheme}
                  size="s"
                  thumbIcon={
                    themeContext.theme === "dark" ? (
                      <IconMoon
                        style={{ color: theme.colors[theme.primaryColor][9] }}
                      />
                    ) : (
                      <IconSun
                        style={{ color: theme.colors[theme.primaryColor][9] }}
                      />
                    )
                  }
                />
              )}
            </Flex>
          }
          menuItems={headerMenuItems}>
          {isDesktop && (
            <Switch
              value={themeContext.theme === "dark"}
              onChange={onChangeTheme}
              size="s"
              thumbIcon={
                themeContext.theme === "dark" ? (
                  <IconMoon
                    style={{ color: theme.colors[theme.primaryColor][9] }}
                  />
                ) : (
                  <IconSun
                    style={{ color: theme.colors[theme.primaryColor][9] }}
                  />
                )
              }
            />
          )}
        </HeaderStyled>
      )}
      {shouldRenderHeader && sidebarMenu.length ? (
        <SidebarStyled
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
