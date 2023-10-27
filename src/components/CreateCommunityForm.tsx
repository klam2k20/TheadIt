"use client";
import { Icons } from "@/components/Icons";
import { Button, buttonVariants } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/Tooltip";
import { useLoginToast } from "@/hooks/use-login-toast";
import { toast } from "@/hooks/use-toast";
import { CreateCommunityPayload } from "@/lib/schemas/community";
import { cn } from "@/lib/utils";
import { TooltipArrow } from "@radix-ui/react-tooltip";
import { useMutation } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const CreateCommunityForm = () => {
  const router = useRouter();
  const [input, setInput] = useState<string>("");
  const { loginToast } = useLoginToast();

  const { mutate: handleCreateCommunity, isPending } = useMutation({
    mutationFn: async () => {
      const payload: CreateCommunityPayload = {
        name: input,
      };
      const { data } = await axios.post("/api/community", payload);
      return data;
    },
    onError: (error) => {
      if (error instanceof AxiosError) {
        if (error.response?.status == 400) {
          return toast({
            title: "Oops! Something went wrong.",
            description:
              "Community names must be 3 to 21 characters in length and can only contain letters, numbers, and underscores. No spaces or special characters are allowed.",
            variant: "destructive",
          });
        } else if (error.response?.status == 401) {
          return loginToast();
        } else if (error.response?.status == 409) {
          return toast({
            title: "Community name taken.",
            description:
              "It looks like this name is already in use. please choose a different name.",
            variant: "destructive",
          });
        }
      }
      return toast({
        title: "We're sorry, but something went wrong on our end.",
        description: "Please try again later.",
        variant: "destructive",
      });
    },
    onSuccess: (data) => {
      router.push(`/t/${data.name}`);
    },
  });

  return (
    <div className="container flex max-w-2xl flex-col gap-4">
      <h1 className="text-xl font-semibold">Create a community</h1>
      <hr className="h-px " />

      <div className="flex flex-col items-start">
        <h2 className="text-lg font-medium">Name</h2>
        <div className="flex items-center gap-2">
          <p className="text-zinc-500">
            Community names including capitalization cannot be changed.
          </p>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Icons.info className="h-4 w-4 text-zinc-500" />
              </TooltipTrigger>
              <TooltipContent
                className="w-[200px] bg-black"
                sideOffset={5}
                side="bottom"
                align="center"
              >
                <TooltipArrow />
                <p className="text-white">
                  {`Names cannot have spaces (e.g., "t/onepiece" not "t/one 
                  piece"), must be between 3-21 characters, and underscores ("_")
                  are the only special characters allowed.`}
                </p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>

      <div className="relative">
        <p className="absolute inset-y-0 left-0 grid w-8 place-content-center text-sm text-zinc-500">
          t/
        </p>
        <Input
          className="pl-6"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          maxLength={21}
        />
      </div>

      <p className="-mt-2 text-sm text-zinc-500">
        {`${21 - input.length} Characters remaining`}
      </p>

      <div className="flex items-center justify-end gap-4">
        <Button
          variant="outline"
          onClick={(event) => {
            event.stopPropagation();
            router.back();
          }}
        >
          Cancel
        </Button>
        <Button
          variant="default"
          disabled={input.length == 0}
          isLoading={isPending}
          onClick={() => handleCreateCommunity()}
        >
          Create Community
        </Button>
      </div>
    </div>
  );
};

export default CreateCommunityForm;
