import { Button } from "./ui/button";
import { GoogleAuthProvider, AuthError } from "firebase/auth";
import { auth } from "../utils/firebase";

const SignIn: React.FC = () => {
  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await auth.signInWithPopup(provider);
    } catch (error) {
      const err = error as AuthError;
      console.log("Error signing in with Google: ", err.message);
    }
  };
  return <Button onClick={signInWithGoogle}>Sign In</Button>;
};

export default SignIn;
