import { FreshContext } from "$fresh/server.ts";
import Menu from "../islands/Menu.tsx";

type MenuProps = {
  selected: "Agenda Client Side" | "Agenda Server Side";
};

const Layout = async (req: Request, ctx: FreshContext) => {
  const Component = ctx.Component;
  const route = ctx.route;
  const page = route.split("/").pop();
  const selected = page === "" ? "Agenda Client Side" : "Agenda Server Side";

  return (
    <>
      <div class="layout">
        <h1>My Agenda</h1>
      </div>
      <>
        <Menu selected={selected} />
        <Component />
      </>
    </>
  );
};

export default Layout;
