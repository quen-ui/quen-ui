import { createRootRoute, Outlet, HeadContent } from "@tanstack/react-router";

const RootLayout = () => <Outlet />;

export const Route = createRootRoute({
  component: () => (
    <>
      <HeadContent />
      <RootLayout />
    </>
  ),
});
