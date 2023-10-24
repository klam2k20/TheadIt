import { User } from "next-auth";
import { Avatar, AvatarFallback } from "@/components/ui/Avatar";
import Image from "next/image";
import { Icons } from "./Icons";

interface IUserAvatarProps {
  user: Pick<User, "name" | "image">;
}

const UserAvatar: React.FC<IUserAvatarProps> = ({ user }) => {
  return (
    <Avatar className="flex aspect-square h-8 w-8 cursor-pointer items-center">
      {user.image ? (
        <div className="relative h-full w-full">
          <Image src={user.image} fill alt={`${user.name}`} />
        </div>
      ) : (
        <AvatarFallback>
          <p className="sr-only">{user.name}</p>
          <Icons.user className="h-4 w-4 bg-transparent" />
        </AvatarFallback>
      )}
    </Avatar>
  );
};

export default UserAvatar;
