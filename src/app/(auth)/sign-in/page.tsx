import { buttonVariants } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import SignInBox from "@/components/SignInBox";

const SignIn: React.FC = () => {
  return (
    <div className="absolute inset-0">
      <div className="mx-auto flex h-full max-w-2xl flex-col items-center justify-center gap-20">
        {/* Home Button */}
        <Link
          href="/"
          className={cn(
            buttonVariants({ variant: "ghost" }),
            "-mt-20 self-start",
          )}
        >
          <ChevronLeft className="mr-2 h-4 w-4" />
          Home
        </Link>

        {/* Sign In */}
        <SignInBox />
      </div>
    </div>
  );
};

export default SignIn;
