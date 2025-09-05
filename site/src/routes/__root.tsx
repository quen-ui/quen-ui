import { createRootRoute, Outlet, HeadContent } from "@tanstack/react-router";
import NotFoundPage from "../pages/NotFoundPage";
import ErrorPage from "../pages/ErrorPage";

const RootLayout = () => <Outlet />;

export const Route = createRootRoute({
  component: () => (
    <>
      <HeadContent />
      <RootLayout />
    </>
  ),
  notFoundComponent: NotFoundPage,
  errorComponent: ErrorPage
});
