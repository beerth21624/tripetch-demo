"use client";

import React from "react";
import { NextUIProvider } from "@nextui-org/react";

//components
import NavbarComponent from "../components/Navbar/NavbarComponent";
import { Carousel } from 'flowbite-react';
import MenuBar from "../components/MenuBar/MenuBar";
import CarbonAndCoin from "../components/CarbonAndCoin";
import RewardCard from "./RewardCard";


//icons
import { Pizza, ShoppingBag, Clapperboard } from "lucide-react";

const page = () => {



    const menuItems = [
        { icon: <Pizza size={32} />, text: "food&drink", path: "" },
        { icon: <ShoppingBag />, text: "shopping", path: "" },
        { icon: <Clapperboard />, text: "entertainment", path: "" },
        {
            icon: <img src="https://www.benewsonline.com/wp-content/uploads/2020/04/Isuzu-Logo-New.jpg" alit='isusu' style={{
            width: '32px',
        }} />

        , text: "Isuzu", path: "" },
  
    ];
    return (
        <NextUIProvider>
            <NavbarComponent title="rewards" />
            <div
                style={{
                    width: "100vw",
                    minHeight: "100vh",
                    background: "linear-gradient(180deg, #57A87E, 57%, #F9F9F9 78%)",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    paddingBottom: '4vh',
                }}
            >
                <div className="flex justify-start flex-col gap-4 p-4 items-center bg-gray-100 rounded-t-[20px] w-full min-h-[92vh] ">
                    <div className="h-44 w-[100vw] p-4 rounded-lg overflow-hidden relative">
                        <div className='
                        absolute
                        top-6
                        left-[50%]
                        transform
                        -translate-x-1/2
                        '
                        style={{
                            zIndex: 1,
                        }}>
                            <div  className=" flex items-center rounded-full ps-2 bg-white bg-opacity-50 
                            ">
                            <p className=' text-black font-bold 
                        text-md '>Discount 15%</p>
                            <CarbonAndCoin isCarbon={false} haveBg={false} coin={100} />
                            </div>
                        </div>

                        <Carousel leftControl="" rightControl="" slideInterval={2000}>
                            <img src="https://www.brandbuffet.in.th/wp-content/uploads/2021/10/Cafe-Amazon-BE-Cover-1.jpg" alt="..."style={{
                                filter: 'brightness(70%)',
                            }}/>
                            <img src="https://blog.job4thai.com/wp-content/uploads/%E0%B8%AB%E0%B9%89%E0%B8%B2%E0%B8%87%E0%B9%80%E0%B8%8B%E0%B9%87%E0%B8%99%E0%B8%97%E0%B8%A3%E0%B8%B1%E0%B8%A5.jpg" alt="..." style={{
                                filter: 'brightness(70%)',
                            }} />
                        </Carousel>
                    </div>
                    <div>
                        <MenuBar menuItems={menuItems} />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <RewardCard />
                        <RewardCard />
                        <RewardCard />
                        <RewardCard />
                    </div>

                </div>
            </div>
            {/* <BottomBar /> */}
        </NextUIProvider>
    );
};

export default page;
