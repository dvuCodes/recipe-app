import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { MenuBar } from "./MenuBar";
import SignOut from "./SignOut";

const Header = () => {
  return (
    <header className="flex p-4 justify-center top-0 w-full sticky bg-white z-10 border-b">
      <div className="flex md:max-w-6xl w-full gap-2 justify-between items-center">
        <h1>Get Cookin</h1>
        <div className="menu-desktop ml-auto">
          <MenuBar />
        </div>

        <div className="flex items-center space-x-2">
          <Switch id="airplane-mode" />
          <Label htmlFor="airplane-mode">
            <i className="fa-solid fa-moon"></i>
          </Label>
          <SignOut />
        </div>
      </div>
    </header>
  );
};

export default Header;
