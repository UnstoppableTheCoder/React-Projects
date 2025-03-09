import React, { useState } from "react";
import { FaCamera } from "react-icons/fa";
import Tabs from "./Tabs";

const Profile = () => {
  const [bannerUrl, setBannerUrl] = useState(
    "https://img.freepik.com/premium-vector/abstract-banner-design-simple-wave-red-background_1021843-2395.jpg?w=1380"
  );

  const [profileUrl, setProfileUrl] = useState(
    "https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?t=st=1741270859~exp=1741274459~hmac=b46a55fa44488c2efda3cc2c74f5946bc717fbd8632ecd08cb3b2415b1b0c2c4&w=740"
  );

  const handleBannerChange = (event: any) => {
    const file = event.target.files[0];

    if (file) {
      setBannerUrl(URL.createObjectURL(file));
    }
  };

  const handleProfileChange = (event: any) => {
    const file = event.target.files[0];

    if (file) {
      setProfileUrl(URL.createObjectURL(file));
    }
  };

  return (
    <div className="w-[94%] ml-[5rem] box-border">
      {/* Channel Banner */}
      <div className="relative">
        <img
          src={bannerUrl}
          alt="background image"
          className="w-full h-60 object-cover"
        />

        <button className="absolute top-2 right-2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600">
          <label htmlFor="banner-upload" className="cursor-pointer">
            <FaCamera size={24} />
          </label>
          <input
            type="file"
            id="banner-upload"
            accept="image/*"
            className="hidden"
            onChange={handleBannerChange}
          />
        </button>
      </div>

      <div className="flex">
        {/* Channel Logo */}
        <div className="flex items-center ml-4 mt-[2rem]">
          <img
            src={profileUrl}
            alt="Channel Logo"
            className="w-40 h-40 object-cover rounded-full border-white"
          />

          <button className="absolute ml-[3.9rem] mt-[7rem] bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600">
            <label htmlFor="profile-upload" className="cursor-pointer">
              <FaCamera />
            </label>
            <input
              type="file"
              id="profile-upload"
              accept="image/*"
              className="hidden"
              onChange={handleProfileChange}
            />
          </button>
        </div>

        {/* Channel Details */}
        <div className="mt-[2.5rem]">
          <div className="text-2xl font-bold ml-[1rem]">HuXn WebDev</div>
          <p className="ml-[1rem]">1M views</p>
          <p className="mt-2 ml-[1rem]">
            This is a short description of the YouTube channel. It gives an
            overview of the content and what viewes can expect. 9:41
          </p>

          <button className="ml-[1rem] mt-4 bg-red-600 text-white py-2 px-4 rounded hover:bg-red-500">
            Subscribe
          </button>
        </div>
      </div>

      <Tabs />
    </div>
  );
};

export default Profile;
