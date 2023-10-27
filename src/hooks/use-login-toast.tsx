import { buttonVariants } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { toast } from "./use-toast";

export const useLoginToast = () => {
  const loginToast = () => {
    const { dismiss } = toast({
      title: "Login required.",
      description: "Please sign in to continue.",
      variant: "destructive",
      action: (
        <Link
          onClick={() => dismiss()}
          href="/sign-in"
          className={cn("text-black", buttonVariants({ variant: "outline" }))}
        >
          Sign In
        </Link>
      ),
    });
  };

  return { loginToast };
};
