"use client";

import CommunityBanner from "@/components/CommunityBanner";
import CommunityInfo from "@/components/CommunityInfo";
import CreatePost from "@/components/CreatePost";
import { FC } from "react";
import { getCommunity } from "@/lib/apiRequests";
import { useQuery } from "@tanstack/react-query";
import { notFound } from "next/navigation";

interface IPageProps {
  params: {
    community: string;
  };
}

const Page: FC<IPageProps> = ({ params }) => {
  const { isPending, data, error } = useQuery({
    queryKey: [`${params.community}`],
    queryFn: async () => await getCommunity(params.community),
  });

  if (isPending) return "Loading";
  if (error) return notFound();

  console.log(data);
  return (
    <>
      <CommunityBanner
        community={params.community}
        subscribers={data.subscribers}
      />
      <div className="container max-w-7xl p-6">
        <div className="grid w-full grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="md:col-span-2">
            <CreatePost />
          </div>
          <CommunityInfo
            name={data.name}
            createdAt={data.createdAt}
            subscribers={data.subscribers}
          />
        </div>
      </div>
    </>
  );
};

export default Page;
