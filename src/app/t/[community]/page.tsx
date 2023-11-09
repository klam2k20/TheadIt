"use client";

import CommunityBanner from "@/components/CommunityBanner";
import CommunityInfo from "@/components/CommunityInfo";
import CreatePost from "@/components/CreatePost";
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
      <div className="container max-w-7xl p-6">
        <div className="grid w-full grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="md:col-span-2">
            <CreatePost />
          </div>
          <CommunityInfo />
        </div>
      </div>
    </>
  );
};

export default Page;
