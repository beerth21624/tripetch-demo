"use client";

import React from "react";
import { NextUIProvider } from "@nextui-org/react";

import NavbarComponent from "../components/Navbar/NavbarComponent";
import ActivityListCard from "../components/Card/ActivityListCard";
import { Pagination } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import ThankCard from "../components/ThankCard/ThankCard";
import GoBackButton from "../components/GoBackButton";
import { Avatar } from "@nextui-org/react";
import CountdownTimer from "./CountdownTimer";

//icons
import { ListFilter } from "lucide-react";
const page = () => {
  const userData = [
    {
      rank: 1,
      avatarSrc: "https://i.pravatar.cc/150?u=a04258a2462d826712d",
      name: "nattapong yupin",
      carbonFootprint: "130",
    },
    {
      rank: 2,
      avatarSrc: "https://i.pravatar.cc/150?u=a04258114e29026708c",
      name: "thanakorn ekkachai",
      carbonFootprint: "130",
    },
    {
      rank: 3,
      avatarSrc: "https://i.pravatar.cc/150?u=a04258114e29026702d",
      name: "You",
      carbonFootprint: "230",
    },
    {
      rank: 4,
      avatarSrc: "https://i.pravatar.cc/150?u=a04258114e29026702d",
      name: "chayut kong",
      carbonFootprint: "230",
    },
    {
      rank: 5,
      avatarSrc: "https://i.pravatar.cc/150?u=a04258114e29026702d",
      name: "Mintra dannok",
      carbonFootprint: "230",
    },
  ];

  const UserListItem = ({ rank, avatarSrc, name, carbonFootprint }) => {
    return (
      <div className="bg-white rounded-xl p-4 w-full mt-2 flex items-center gap-2">
        <p className="text-black">{rank}</p>
        <Avatar src={avatarSrc} />
        <div className="flex flex-col gap-1 ml-2 text-left">
          <p className="text-black/75 font-bold text-sm">{name}</p>
          <p className="text-black/75 font-light text-xs">
            {carbonFootprint} kg/CO2
          </p>
        </div>
      </div>
    );
  };

  const LastDayOfMonth = () => {
    const date = new Date();
    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    const lastDayOfMonth = lastDay.getDate();
    return lastDayOfMonth;
  };

  function renderTime() {
    const date = new Date();
    const day = date.getDate();
    const lastDayOfMonth = LastDayOfMonth();
    const time = lastDayOfMonth - day;

    return (
      <div className="bg-white rounded-xl p-4 w-full mt-2 flex items-center gap-2">
        <p className="text-black">{time}</p>
        <div className="flex flex-col gap-1 ml-2 text-left">
          <p className="text-black/75 font-bold text-sm">Day left</p>
          <p className="text-black/75 font-light text-xs">
            to complete this month
          </p>
        </div>
      </div>
    );
  }
  return (
    <NextUIProvider>
      <NavbarComponent title="ranking" />
      <div
        style={{
          width: "100vw",
          minHeight: "100vh",
          background: "linear-gradient(180deg, #57A87E, 57%, #F9F9F9 78%)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <div className="flex justify-start flex-col gap-4 p-4 items-center bg-gray-100 rounded-t-[20px] w-full min-h-[100vh] ">
          <CountdownTimer />
          <div className="bg-white rounded-xl p-4 w-full mt-2 flex flex-col  gap-2">
            <p className="text-black/65 font-bold text-sm">Prize</p>
            <div className="flex items-center gap-2">
              <img
                src="/images/coin.png"
                alt="1st"
                className="object-cover h-12 w-12"
              />
              <div className="flex flex-col gap-1 ml-2 text-left">
                <p className="text-black/75 font-bold text-sm">1st</p>
                <p className="text-black/75 font-light text-xs">500 coins</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <img
                src="/images/coin.png"
                alt="1st"
                className="object-cover h-12 w-12"
              />
              <div className="flex flex-col gap-1 ml-2 text-left">
                <p className="text-black/75 font-bold text-sm">2nd</p>
                <p className="text-black/75 font-light text-xs">300 coins</p>
              </div>
            </div>
         
          </div>
          <div className="flex flex-col gap-1 w-full">
            {userData.map((user, index) => (
              <UserListItem key={index} {...user} />
            ))}
          </div>
          <div className="flex justify-between w-[100vw] px-5 mb-2">
            <GoBackButton path="/" />
            <Pagination
              size="sm"
              loop
              showControls
              color="success"
              total={3}
              initialPage={1}
            />
          </div>

          <ThankCard />
        </div>
      </div>
    </NextUIProvider>
  );
};

export default page;
