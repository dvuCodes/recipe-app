import React from "react";
import { Button } from "./ui/button";
import { auth } from "@/utils/firebase";

const SignOut: React.FC = () => {
  return (
    auth.currentUser && <Button onClick={() => auth.signOut()}>Sign Out</Button>
  );
};

export default SignOut;
