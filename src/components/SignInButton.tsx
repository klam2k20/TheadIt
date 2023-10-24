"use client";

import Link from "next/link";
import { buttonVariants } from "./ui/Button";
import { usePathname } from "next/navigation";

const SignInButton = () => {
  const pathname = usePathname();

  return (
    pathname !== "/sign-in" &&
    pathname !== "/sign-up" && (
      <Link href="/sign-in" className={buttonVariants()}>
        Sign In
      </Link>
    )
  );
};

export default SignInButton;
