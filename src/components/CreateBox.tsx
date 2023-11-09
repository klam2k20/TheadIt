import Link from "next/link";
import { Icons } from "./Icons";
import { buttonVariants } from "./ui/Button";
import { cn } from "@/lib/utils";

const CreateBox = () => {
  return (
    <div className="hidden w-full flex-col gap-3 rounded-lg border-2 border-gray-200 bg-white px-6 py-4 lg:flex">
      <div className="-mx-6 -mt-4 flex h-16 items-center gap-2 rounded-t-lg bg-primary px-6">
        <Icons.logo className="h-8 w-8 stroke-primary-foreground" />
        <h1 className="text-lg font-bold text-primary-foreground">Home</h1>
      </div>

      <p className="max-w-xs text-sm">
        Your personal ThreadIt frontpage. Come here to check in with your
        favorite comunities.
      </p>

      <div className="flex flex-col gap-3">
        <Link
          href="/t/create"
          className={cn("w-full", buttonVariants({ variant: "default" }))}
        >
          Create Comunitiy
        </Link>
        <Link
          href="/t/submit"
          className={cn("w-full", buttonVariants({ variant: "outline" }))}
        >
          Create Posts
        </Link>
      </div>
    </div>
  );
};

export default CreateBox;
