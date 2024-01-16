'use client';

import React from 'react'
import { NextUIProvider } from "@nextui-org/react";

import NavbarComponent from '../components/Navbar/NavbarComponent'
import { Progress } from "@nextui-org/react";
import ThankCard from '../components/ThankCard/ThankCard';
import GoBackButton from '../components/GoBackButton';
import { Avatar } from "@nextui-org/react";


const page = () => {
    return (
        <NextUIProvider>
            <NavbarComponent title='profile' />
            <div style={{
                width: '100vw',
                minHeight: '100vh',
                background: "linear-gradient(180deg, #57A87E, 57%, #F9F9F9 78%)",
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'center',
            }}>
                <div className='flex justify-start flex-col gap-4 p-4 items-center bg-gray-100 rounded-t-[20px] w-full min-h-[96vh] '>
                    <div className="bg-white rounded-xl p-4 w-full mt-2 flex items-center gap-2">
                        <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
                        <div className="flex flex-col gap-1 ml-2 text-left">
                            <p className="text-black/75 font-bold text-sm">Sarawut Inpol</p>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl p-4 w-full flex flex-col items-center justify-center gap-2">
                    <p className='text-2xl font-semibold text-black '
                    >
                  ฉายา
                    </p>
                    <p className='text-lg font-semibold text-black/70 '
                    >
                        นักรณรงค์เพื่อโลก
                    </p>

                    <img src="/images/campaign.png" alt="earth" className='object-cover h-52' />
                    {/* description */}
                    <p className='text-xs  text-black/75 font-light  '>
                        คุณมีความรู้เกี่ยวกับการลดคาร์บอน พอที่จะสอนคนอื่นได้ แต่ยังขาดความยั่งยืนในการสอน พัฒนาตัวเองเพื่อไประดับต่อไป
                    </p>
               </div>
                        
                    <div className='grid grid-cols-2 gap-2 w-full'>
                        <div className='flex flex-col gap-2 w-full align-center justify-center bg-white rounded-md p-4'>
                            <p className='text-black/75 font-bold text-md text-center'>Activity</p>
                            <p className='text-black/75 font-bold text-3xl text-center text-green-500'>13</p>
                       </div>
                        <div className='flex flex-col gap-2 w-full align-center justify-center bg-white rounded-md p-4'>
                            <p className='text-black/75 font-bold text-md text-center'>Event</p>
                            <p className='text-black/75 font-bold text-3xl text-center text-green-500'>13</p>
                        </div>
                    
                    </div>
                    <div className='flex flex-col gap-2 w-full align-center justify-center bg-white rounded-md p-4'>
                        <p className='text-black/75 font-bold text-md'>Skill</p>
                        <Progress
                            size="md"
                            radius="sm"
                            classNames={{
                                base: "max-w-md",
                                track: "drop-shadow-md border border-default",
                                indicator: "bg-gradient-to-r from-blue-500 to-green-500",
                                label: "tracking-wider font-light text-default-800 text-sm",
                            }}
                            label="การลดคาร์บอน"
                            value={35}
                        />
                        <Progress
                            size="md"
                            radius="sm"
                            classNames={{
                                base: "max-w-md",
                                track: "drop-shadow-md border border-default",
                                indicator: "bg-gradient-to-r from-blue-500 to-green-500",
                                label: "tracking-wider font-light text-default-800 text-sm",
                            }}
                            label="การแยกขยะ"
                            value={55}
                        />
                        <Progress
                            size="md"
                            radius="sm"
                            classNames={{
                                base: "max-w-md",
                                track: "drop-shadow-md border border-default",
                                indicator: "bg-gradient-to-r from-blue-500 to-green-500",
                                label: "tracking-wider font-light text-default-800 text-sm",
                            }}
                            label="การปลูกต้นไม้"
                            value={45}
                        />

                    </div>
                        <GoBackButton path="/" />
                       

                    <ThankCard />
                </div>

            </div>
            {/* <BottomBar /> */}
        </NextUIProvider>

    )
}

export default page