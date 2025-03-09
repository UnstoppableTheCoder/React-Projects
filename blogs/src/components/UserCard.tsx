import React from "react";
import { FaUserCircle } from "react-icons/fa";

interface UserCardProps {
  person: any;
}

const UserCard = ({ person }: UserCardProps) => {
  return (
    <div className="flex items-center justify-between">
      <section className="flex items-center">
        <FaUserCircle className="text-3xl mr-3 text-gray-500" />
        <span>{person.name}</span>
      </section>

      <button className="cursor-pointer bg-blue-500 py-1 px-2 mx-2 my-1 rounded-lg text-white font-medium hover:bg-blue-600 duration-300 ease-in-out hover:py-2 hover:px-4 hover:mx-0 hover:my-0">
        {person.following ? "Following" : "Follow"}
      </button>
    </div>
  );
};

export default UserCard;
