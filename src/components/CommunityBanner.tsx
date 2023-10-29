import { Icons } from "./Icons";
import { Button } from "./ui/Button";

interface ICommunityBannerProps {
  community: string;
}

const CommunityBanner: React.FC<ICommunityBannerProps> = ({ community }) => {
  return (
    <div>
      <div className="h-16 bg-primary md:h-20" />
      <div className="flex h-16 items-center md:h-20">
        <div className="container flex max-w-7xl items-center gap-6">
          <div className="flex h-12 w-12 items-center justify-center rounded-full border-4 border-primary md:h-16 md:w-16">
            <Icons.rock className="h-6 w-6 md:h-8 md:w-8" />
          </div>
          <div className="flex w-full items-center justify-between md:justify-start md:gap-6">
            <div className="flex flex-col">
              <h1 className="text-2xl font-bold md:text-3xl">{community}</h1>
              <span className="leading-6 text-zinc-500">{`t/${community}`}</span>
            </div>
            <Button size="lg">Join</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityBanner;
