import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Outlet } from "react-router-dom";
import SignIn from "@/components/SignIn";
import { auth } from "../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const MainLayout = () => {
  const [user] = useAuthState(auth);

  if (user) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex justify-center grow ">
          <div className=" flex flex-col w-full md:max-w-6xl ">
            <Outlet />
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen items-center p-10">
      <article className="flex flex-col text-center">
        <h1 className="text-4xl">Let's Cook</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci est
          sed inventore accusantium culpa porro, fugit natus molestiae debitis,
          quaerat cum repellendus. Aperiam dicta reiciendis tempore ab et natus
          voluptatem! Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Adipisci est sed inventore accusantium culpa porro, fugit natus
          molestiae debitis, quaerat cum repellendus. Aperiam dicta reiciendis
          tempore ab et natus voluptatem! Lorem ipsum dolor sit amet
          consectetur, adipisicing elit. Adipisci est sed inventore accusantium
          culpa porro, fugit natus molestiae debitis, quaerat cum repellendus.
          Aperiam dicta reiciendis tempore ab et natus voluptatem! Lorem ipsum
          dolor sit amet consectetur, adipisicing elit. Adipisci est sed
          inventore accusantium culpa porro, fugit natus molestiae debitis,
          quaerat cum repellendus. Aperiam dicta reiciendis tempore ab et natus
          voluptatem!
        </p>
      </article>

      <div className="">
        <SignIn />
      </div>
    </div>
  );
};

export default MainLayout;
