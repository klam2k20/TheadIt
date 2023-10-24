"use client";

import { useRouter } from "next/navigation";
import { Button } from "./ui/Button";
import { X } from "lucide-react";

interface ICloseModalButtonProps
  extends React.HTMLAttributes<HTMLButtonElement> {}

const CloseModalButton: React.FC<ICloseModalButtonProps> = ({ className }) => {
  const router = useRouter();
  return (
    <Button
      variant={"secondary"}
      className={className}
      onClick={() => router.back()}
    >
      <X className="h-4 w-4" />
    </Button>
  );
};

export default CloseModalButton;
