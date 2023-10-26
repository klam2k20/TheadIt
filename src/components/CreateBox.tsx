import Link from "next/link";
import { Icons } from "./Icons";
import { buttonVariants } from "./ui/Button";
import { cn } from "@/lib/utils";

const CreateBox = () => {
  return (
    <div className=" hidden h-fit w-full flex-col gap-3 rounded-lg border-2 border-gray-200 bg-white p-3 lg:flex">
      <div className="flex items-center justify-start gap-4">
        <Icons.logo className="h-12 w-12 stroke-1" />
        <h1 className="text-lg font-bold">Home</h1>
      </div>
      <p className="leading-6 text-zinc-500">
        Your personal ThreadIt frontpage. Come here to check in with your
        favorite comunities.
      </p>
      <hr className="my-2 h-1 border-none" />
      <div className="flex flex-col gap-2">
        <Link
          href="/t/create/community"
          className={cn("w-full", buttonVariants({ variant: "default" }))}
        >
          Create Comunitiy
        </Link>
        <Link
          href="/t/create/post"
          className={cn("w-full", buttonVariants({ variant: "secondary" }))}
        >
          Create Posts
        </Link>
      </div>
    </div>
  );
};

export default CreateBox;
