import { MenuBar } from "./MenuBar";

const Footer = () => {
  return (
    <footer className="mt-auto flex justify-center bg-red-100 p-4 just">
      <div className="menu-mobile justify-center">
        <MenuBar />
      </div>
      <div className="bg-white md:max-w-6xl w-full">
        <p>Footer</p>
      </div>
    </footer>
  );
};

export default Footer;
