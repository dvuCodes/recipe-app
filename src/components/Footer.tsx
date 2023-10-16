import { MenuBar } from "./MenuBar";

const Footer = () => {
  return (
    <footer className="mt-auto flex items-center justify-center p-4 just gap-2 sticky bottom-0 ">
      <div className="menu-mobile justify-center w-full">
        <MenuBar />
      </div>
      <div className="bg-white md:max-w-6xl w-full text-center">
        <p>@DatVu2023</p>
      </div>
    </footer>
  );
};

export default Footer;
