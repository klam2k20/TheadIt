interface ICommunityInfoProps {
  name: string;
  createdAt: string;
  subscribers: number;
}

const CommunityInfo: React.FC<ICommunityInfoProps> = ({
  name,
  createdAt,
  subscribers,
}) => {
  return (
    <div className="hidden w-full flex-col gap-3 rounded-lg border-2 border-gray-200 bg-white px-6 py-4 lg:flex">
      <div className="-mx-6 -mt-4 flex h-16 items-center gap-2 rounded-t-lg bg-primary px-6">
        <h1 className="text-lg font-bold text-primary-foreground">
          About Community
        </h1>
      </div>

      <p className="max-w-xs text-sm">{`Welcome to ${name}`}</p>

      <p className="max-w-xs text-sm">{`Created ${createdAt}`}</p>
      <p className="max-w-xs text-sm">{`${subscribers} ${
        subscribers > 1 ? "members" : "member"
      }`}</p>
    </div>
  );
};

export default CommunityInfo;
