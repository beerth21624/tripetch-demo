'use client';

import React from 'react'
import { NextUIProvider } from "@nextui-org/react";

import NavbarComponent from '../components/Navbar/NavbarComponent'
import KnowledgeVideo from './KnowledgeVideo';
import KnowledgeCard from './KnowledgeCard';
import ThankCard from '../components/ThankCard/ThankCard';
import GoBackButton from '../components/GoBackButton';
import { Pagination } from '@nextui-org/react';


const page = () => {

    const knowledgeData = [
        {
            imageUrl: 'https://i.ytimg.com/vi/96IznvYmeRI/maxresdefault.jpg',
            source: 'youtube',
            title: 'เรื่องที่ควรรู้ก่อนนำ SDGs ไปใช้',
            date: '16 ม.ค. 2567 16:19 น',
            readMoreLink: 'https://youtu.be/96IznvYmeRI?si=37kZ6zePV7VVLNbA',
        },
        {
            imageUrl: 'https://thailand.opendevelopmentmekong.net/wp-content/uploads/sites/5/2018/07/SEP-for-SDGs_TH.png',
            source: 'youtube',
            title: 'การพัฒนาที่ยั่งยืน',
            date: '16 ม.ค. 2567 16:19 น',
            readMoreLink: 'https://www.youtube.com/watch?v=P8YrSsJDiAU&t=77s',
        },
    ]

    return (
        <NextUIProvider>
            <NavbarComponent title='knowledge' />
            <div style={{
                width: '100vw',
                minHeight: '100vh',
                background: "linear-gradient(180deg, #57A87E, 57%, #F9F9F9 78%)",
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'center',
                paddingBottom: '4vh',
            }}>
                <div className='flex justify-start flex-col gap-2 p-4 items-center bg-gray-100 rounded-t-[20px] w-full min-h-[92vh] '>
                    <div className='bg-white rounded-md p-4 w-full'>
                        <p className='text-black/75 font-bold text-md mb-2'>Sustainable development goals</p>
                        <KnowledgeVideo videoId='qbdJIheGgXU' auto={true} />
                    </div>
                   
                    <div className='bg-white rounded-md p-4 w-full'>
                        <p className='text-black/75 font-bold text-md'>บทเรียน (10)</p>
                        </div>
                    {knowledgeData.map((item, index) => (
                        <KnowledgeCard
                            key={index}
                            {...item}
                        />
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
            {/* <BottomBar /> */}
        </NextUIProvider>

    )
}

export default page