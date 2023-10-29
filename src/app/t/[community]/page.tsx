"use client";

import CommunityBanner from "@/components/CommunityBanner";
import { FC } from "react";

interface IPageProps {
  params: {
    community: string;
  };
}

const page: FC<IPageProps> = ({ params }) => {
  return (
    <>
      <CommunityBanner community={params.community} />
    </>
  );
};

export default page;
