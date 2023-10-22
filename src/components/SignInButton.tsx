"use client";

import { cn } from "@/lib/utils";
import { Button } from "./ui/Button";
import { useState } from "react";
import { Icons } from "./Icons";
import { signIn } from "next-auth/react";
import { useToast } from "@/hooks/use-toast";

interface ISignInButtonProps extends React.HTMLAttributes<HTMLDivElement> {}

const SignInButton: React.FC<ISignInButtonProps> = ({
  className,
  ...props
}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { toast } = useToast();

  const handleSignIn = async () => {
    setIsLoading(true);
    try {
      await signIn("google");
    } catch (error) {
      toast({
        title: "Uh oh! Something went wrong.",
        description: "There was a problem signing in.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      className={cn(className, "flex w-full items-center justify-center")}
      {...props}
    >
      <Button
        isLoading={isLoading}
        size="sm"
        onClick={handleSignIn}
        className="w-full"
      >
        {isLoading ? null : <Icons.google className="mr-2 h-4 w-4" />}
        Google
      </Button>
    </div>
  );
};

export default SignInButton;
