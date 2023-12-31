import { getAuthSession } from "@/lib/auth";
import Link from "next/link";
import { Icons } from "./Icons";
import UserMenu from "./UserMenu";
import { buttonVariants } from "./ui/Button";

const Navbar = async () => {
  const session = await getAuthSession();

  return (
    <div className="fixed inset-x-0 top-0 z-10 h-16 border-b border-zinc-300 bg-zinc-100 py-2">
      <div className="container flex h-full max-w-7xl items-center justify-between gap-2">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Icons.logo className="h-8 w-8" />
          <p className="hidden text-xl font-bold text-primary md:block">
            TheadIt
          </p>
        </Link>

        {/* Searchbar */}

        {/* Login/SignUp */}
        {session ? (
          <UserMenu user={session.user} />
        ) : (
          <Link href="/sign-in" className={buttonVariants()}>
            Sign In
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
