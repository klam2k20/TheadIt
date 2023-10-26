"use client";
import { cn } from "@/lib/utils";
import CloseModalButton from "./CloseModalButton";
import { useRouter } from "next/navigation";

interface IModalProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const Modal: React.FC<IModalProps> = ({ children, className }) => {
  const router = useRouter();

  return (
    <div
      className="fixed inset-0 z-10 bg-zinc-900/20"
      onClick={() => router.back()}
    >
      <div
        className={cn(
          "container flex h-full max-w-lg items-center justify-center",
          className,
        )}
      >
        <div className="relative h-fit w-full rounded-lg bg-white px-4 pb-4 pt-8">
          <CloseModalButton className="absolute right-2 top-2 h-8 w-8 rounded-md p-1" />
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
