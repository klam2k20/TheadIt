import { Icons } from "./Icons";
import { Button } from "./ui/Button";

interface ICommunityBannerProps {
  community: string;
}

const CommunityBanner: React.FC<ICommunityBannerProps> = ({ community }) => {
  return (
    <div>
      <div className="h-16 bg-primary md:h-20" />
      <div className="flex h-16 md:h-20">
        <div className="container flex max-w-7xl items-center gap-4 p-6 md:gap-6">
          <div className="flex items-center justify-center rounded-full border-4 border-primary p-2">
            <Icons.rock className="h-6 w-6 md:h-8 md:w-8" />
          </div>
          <div className="flex w-full items-center justify-between md:justify-start md:gap-6">
            <div className="hidden flex-col md:flex">
              <h1 className="text-3xl font-bold">{community}</h1>
              <span className="leading-6 text-zinc-500">{`t/${community}`}</span>
            </div>
            <div className="flex flex-col md:hidden">
              <h1 className="text-2xl font-bold">{`t/${community}`}</h1>
              <span className="leading-6 text-zinc-500">{`207,032 memebers`}</span>
            </div>
            <Button size="lg">Join</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityBanner;
