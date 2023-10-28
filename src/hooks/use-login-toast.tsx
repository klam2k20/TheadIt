import { buttonVariants } from "@/components/ui/Button";
import { ToastAction } from "@/components/ui/Toast";
import Link from "next/link";
import { toast } from "./use-toast";

export const useLoginToast = () => {
  const loginToast = () => {
    toast({
      title: "Login required.",
      description: "Please sign in to continue.",
      variant: "destructive",
      action: (
        <ToastAction altText="Navigate to sign in" asChild>
          <Link
            href="/sign-in"
            className={buttonVariants({ variant: "default" })}
          >
            Sign In
          </Link>
        </ToastAction>
      ),
    });
  };

  return { loginToast };
};
