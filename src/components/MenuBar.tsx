import { Menubar, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";
import { NavLink } from "react-router-dom";

export function MenuBar() {
  return (
    <nav>
      <Menubar className=" border-0">
        <MenubarMenu>
          <MenubarTrigger>
            <NavLink to="/">
              <i className="fa-solid fa-magnifying-glass"></i>
            </NavLink>
          </MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>
            <NavLink to="/favorites">
              <i className="fa-regular fa-star"></i>
            </NavLink>
          </MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>
            <NavLink to="/profile">
              <i className="fa-regular fa-user"></i>
            </NavLink>
          </MenubarTrigger>
        </MenubarMenu>
      </Menubar>
    </nav>
  );
}
