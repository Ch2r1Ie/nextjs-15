import React from "react";
import Image from "next/image";

interface UserItemProps {
  name: string;
  email: string;
  imageUrl: string;
}

const UserItem: React.FC<UserItemProps> = ({ name, email, imageUrl }) => {
  return (
    <div className="flex items-center justify-between gap-2 rounded-[8px] border p-2 hover:cursor-pointer">
      <Image
        src={imageUrl}
        alt={name}
        className="h-10 w-10 rounded-full object-cover"
      />
      <div className="grow">
        <p className="text-[12px] font-bold">{name}</p>
        <p className="text-[12px] text-neutral-500">{email}</p>
      </div>
    </div>
  );
};

export default UserItem;
