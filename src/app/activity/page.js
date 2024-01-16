'use client';

import React from 'react'
import { NextUIProvider } from "@nextui-org/react";

import NavbarComponent from '../components/Navbar/NavbarComponent'
import BottomBar from '../components/BottomBar/BottomBar';
import ActivityListCard from '../components/Card/ActivityListCard';
import { Input } from "@nextui-org/react";

//icons
import { Search } from 'lucide-react';
import { ListFilter } from 'lucide-react';
const page = () => {
  return (
    <NextUIProvider>
      <NavbarComponent title='activities' />
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
        <div className='flex justify-start flex-col gap-4 p-4 items-center bg-gray-100 rounded-t-[20px] w-full min-h-[92vh] '>
      <div className='flex w-full align-center'>
        {/* //filter */}
            <ListFilter  size={30} color='#000' className='mr-2'/>
     <input type="text" placeholder="Search" className='bg-gray-200 rounded-md w-full h-10 px-5' />
     
      </div>
          <ActivityListCard title="บริจาคขยะรีไซเคิล"
            description="เช่น ขวดน้ำ กระดาษลัง ให้กับตรีเพชร สามารถเลือกหมวดหมู่ของสิ่งของที่ต้องการบริจาคและนำไปบริจากที่จุดรับที่กำหนด โดยจะมีกำหนดว่าบริจากมากเท่าไหร่ได้กี่ coin ขยะเหล่านี้จะถูกนำไปย่อยสลายอย่างถูกวิธี"
            imageSrc="/images/co2.png"
            buttonText="ดูรายละเอียด"
            coinRange="1-200" />
          <ActivityListCard title="บริจาคขยะรีไซเคิล"
            description="เช่น ขวดน้ำ กระดาษลัง ให้กับตรีเพชร สามารถเลือกหมวดหมู่ของสิ่งของที่ต้องการบริจาคและนำไปบริจากที่จุดรับที่กำหนด โดยจะมีกำหนดว่าบริจากมากเท่าไหร่ได้กี่ coin ขยะเหล่านี้จะถูกนำไปย่อยสลายอย่างถูกวิธี"
            imageSrc="/images/co2.png"
            buttonText="ดูรายละเอียด"
            coinRange="1-200" />
          <ActivityListCard title="บริจาคขยะรีไซเคิล"
            description="เช่น ขวดน้ำ กระดาษลัง ให้กับตรีเพชร สามารถเลือกหมวดหมู่ของสิ่งของที่ต้องการบริจาคและนำไปบริจากที่จุดรับที่กำหนด โดยจะมีกำหนดว่าบริจากมากเท่าไหร่ได้กี่ coin ขยะเหล่านี้จะถูกนำไปย่อยสลายอย่างถูกวิธี"
            imageSrc="/images/co2.png"
            buttonText="ดูรายละเอียด"
            coinRange="1-200" />

        </div>

      </div>
      {/* <BottomBar /> */}
    </NextUIProvider>

  )
}

export default page