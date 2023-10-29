"use client";

import CommunityBanner from "@/components/CommunityBanner";
import { db } from "@/lib/db";
import { useQuery } from "@tanstack/react-query";
import { FC } from "react";

interface IPageProps {
  params: {
    community: string;
  };
}

const Page: FC<IPageProps> = ({ params }) => {
  return (
    <>
      <CommunityBanner community={params.community} />
    </>
  );
};

export default Page;
