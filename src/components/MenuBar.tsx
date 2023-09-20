import { Menubar, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";

export function MenuBar() {
  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>
          <i class="fa-solid fa-magnifying-glass"></i>
        </MenubarTrigger>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>
          <i class="fa-regular fa-star"></i>
        </MenubarTrigger>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>
          <i class="fa-solid fa-bars"></i>
        </MenubarTrigger>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>
          <i class="fa-regular fa-user"></i>
        </MenubarTrigger>
      </MenubarMenu>
    </Menubar>
  );
}
