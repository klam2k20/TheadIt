import Link from "next/link";
import { Icons } from "./Icons";
import GoogleButton from "./GoogleButton";

interface ISignInBoxProps {
  isSignIn?: boolean;
}

const SignInBox: React.FC<ISignInBoxProps> = ({ isSignIn = true }) => {
  return (
    <div className="container flex w-full flex-col items-center justify-center gap-2 sm:w-[400px]">
      {/* Welcome */}
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-2">
          <Icons.logo className="h-6 w-6 tracking-tight" />
          <h1 className="text-2xl font-semibold ">
            {isSignIn ? "Welcome back!" : "Welcome to ThreadIt!"}
          </h1>
        </div>
        <p className="max-w-xs text-sm">
          By continuing, you are setting up a ThreadIt account and agree to our
          User Agreement and Privacy Policy.
        </p>
      </div>

      {/* Google Sign In Button */}
      <GoogleButton />

      {/* Sign Up Button */}
      <p className="text-center text-sm text-muted-foreground">
        {isSignIn ? "New to ThreadIt? " : "Already a ThreadIter? "}
        <Link
          href={isSignIn ? "/sign-up" : "/sign-in"}
          className="text-sm underline underline-offset-4 hover:text-foreground "
        >
          {isSignIn ? "Sign Up" : "Sign In"}
        </Link>
      </p>
    </div>
  );
};

export default SignInBox;
