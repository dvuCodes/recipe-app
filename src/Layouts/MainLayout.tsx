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
    <div className="flex flex-col min-h-screen">
      <SignIn />
    </div>
  );
};

export default MainLayout;
