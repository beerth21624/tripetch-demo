'use client';

import React from 'react'
import { NextUIProvider } from "@nextui-org/react";

import NavbarComponent from '../components/Navbar/NavbarComponent'
import DashboardCard from './DashboardCard';
import { Avatar } from "@nextui-org/react";
import { Pagination } from "@nextui-org/react";
import ThankCard from '../components/ThankCard/ThankCard';
import GoBackButton from '../components/GoBackButton';



const page = () => {
    return (
        <NextUIProvider>
            <NavbarComponent title='Organization' />
            <div style={{
                width: '100vw',
                minHeight: '100vh',
                background: "linear-gradient(180deg, #57A87E, 57%, #F9F9F9 78%)",
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'center',
            }}>
                <div className='flex justify-start flex-col gap-4 p-4 items-center bg-gray-100 rounded-t-[20px] w-full min-h-[92vh] '>
                    <div className='flex flex-col w-full text-center'>
                       <p className='text-black/75 font-light text-sm'>Your organization...</p>
                        <p className='text-rose-600 font-bold text-lg'>Tri Petch Isuzu Sales Co., Ltd.</p>
                        <DashboardCard />
                        <div className='bg-white rounded-xl p-4 w-full mt-2 flex'>
                            <img src='/images/goal.png' alt='organization' className='object-cover h-12 w-12' />
                            <div className='flex flex-col gap-1 ml-2 text-left'>
                                <p className='text-black/75 font-bold text-md'>Organization Goal</p>
                                <p className='text-black/75 font-light text-sm'>
                                    save carbon  10000 kg/C02 per month
                                </p>
                              </div>
                         </div>
                    

                        <p className='text-black/75 font-bold text-md mt-4 text-start'>Organization Rank</p>
                        <div className='bg-white rounded-xl p-4 w-full mt-2 flex items-center gap-2'>
                            <p className='text-black'>1</p>
                            <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
                            <div className='flex flex-col gap-1 ml-2 text-left'>
                                <p className='text-black/75 font-bold text-sm'>
                                    karunyaporn kongkam
                                </p>
                                <p className='text-black/75 font-light text-xs'>
                                    730 kg/C02
                                </p>
                            </div>
                        </div>
                        <div className='bg-white rounded-xl p-4 w-full mt-2 flex items-center gap-2'>
                            <p className='text-black'>2</p>
                            <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
                            <div className='flex flex-col gap-1 ml-2 text-left'>
                                <p className='text-black/75 font-bold text-sm'>
                                    jiraporn yodkam
                                </p>
                                <p className='text-black/75 font-light text-xs'>
                                    430 kg/C02
                                </p>
                            </div>
                        </div>
                        <div className=' rounded-xl p-4 w-full mt-2 flex items-center gap-2 bg-teal-600 scale-105'>
                            <p className='text-white'>3</p>
                            <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026702d" />
                            <div className='flex flex-col gap-1 ml-2 text-left'>
                                <p className='text-white font-bold text-sm'>You</p>
                                <p className='text-white font-light text-xs'>
                                    230 kg/C02
                                </p>
                            </div>
                        </div>
                        <div className='bg-white rounded-xl p-4 w-full mt-2 flex items-center gap-2'>
                            <p className='text-black'>4</p>
                            <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026708c" />
                            <div className='flex flex-col gap-1 ml-2 text-left'>
                                <p className='text-black/75 font-bold text-sm'>
                                    thanakorn ekkachai
                                </p>
                                <p className='text-black/75 font-light text-xs'>
                                    130 kg/C02
                                </p>
                            </div>
                        </div>
                        <div className='bg-white rounded-xl p-4 w-full mt-2 flex items-center gap-2'>
                            <p className='text-black'>5</p>
                            <Avatar src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />
                            <div className='flex flex-col gap-1 ml-2 text-left'>
                                <p className='text-black/75 font-bold text-sm'>
                                    nattapong yupin                                </p>
                                <p className='text-black/75 font-light text-xs'>
                                    130 kg/C02
                                </p>
                            </div>
                        </div>
                        <div className="flex justify-between w-full px-5 mb-2 mt-5">
                            <GoBackButton path="/" />
                            <Pagination
                                size="sm"
                                loop
                                showControls
                                color="success"
                                total={2}
                                initialPage={1}
                            />
                        </div>

                        <ThankCard />
                   </div>
                </div>
            </div>
            {/* <BottomBar /> */}
        </NextUIProvider>

    )
}

export default page