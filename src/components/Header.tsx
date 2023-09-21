import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

const Header = () => {
  return (
    <header className="flex p-4  justify-center ">
      <div className="flex md:max-w-6xl w-full bg-white">
        <h1>This is the header</h1>
        <div className="flex items-center space-x-2 ml-auto">
          <Switch id="airplane-mode" />
          <Label htmlFor="airplane-mode">Dark Mode</Label>
        </div>
      </div>
    </header>
  );
};

export default Header;
