"use client";

import { signOut } from "next-auth/react";
import { DropdownMenuItem } from "./ui/DropdownMenu";

const SignOutButton = () => {
  return (
    <DropdownMenuItem
      className="cursor-pointer"
      onSelect={(event) => {
        // Prevents the default behavior which is to close the menu
        event.preventDefault();
        signOut({
          callbackUrl: `${window.location.origin}/sign-in`,
        });
      }}
    >
      Sign out
    </DropdownMenuItem>
  );
};

export default SignOutButton;
