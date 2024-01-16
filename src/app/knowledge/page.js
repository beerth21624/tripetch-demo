'use client';

import React from 'react'
import { NextUIProvider } from "@nextui-org/react";

import NavbarComponent from '../components/Navbar/NavbarComponent'
import { Progress } from "@nextui-org/react";
import KnowledgeVideo from './KnowledgeVideo';
import KnowledgeCard from './KnowledgeCard';
import { Tabs, Tab, Card, CardBody, CardHeader } from "@nextui-org/react";

const page = () => {

    const knowledgeData = [
        {
            imageUrl: 'https://static.thairath.co.th/media/dFQROr7oWzulq5Fa5LFcjU38UB9af29kCWia8A9Gq6svo1JqK6lOzlGBGoFwyyCqijh.webp',
            source: 'thairath.co.th',
            title: 'มูลนิธิสืบนาคะเสถียร เปิดสาเหตุ ค้านสร้างอุโมงค์ผันน้ำ ช่วยภัยแล้งเมืองกาญจน์',
            date: '16 ม.ค. 2567 16:19 น',
            readMoreLink: 'https://www.thairath.co.th/news/sustainable/2755598',
        },
        {
            imageUrl: 'https://static.thairath.co.th/media/dFQROr7oWzulq5Fa5LFcjU38UB9af29kCWia8A9Gq6svo1JqK6lOzlGBGoFwyyCqijh.webp',
            source: 'thairath.co.th',
            title: 'มูลนิธิสืบนาคะเสถียร เปิดสาเหตุ ค้านสร้างอุโมงค์ผันน้ำ ช่วยภัยแล้งเมืองกาญจน์',
            date: '16 ม.ค. 2567 16:19 น',
            readMoreLink: 'https://www.thairath.co.th/news/sustainable/2755598',
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
                        <p className='text-black/75 font-bold text-md'>Recommend</p>
                    </div>
                    <KnowledgeVideo videoId='qbdJIheGgXU' auto={true} />
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

            </div>
            {/* <BottomBar /> */}
        </NextUIProvider>

    )
}

export default page