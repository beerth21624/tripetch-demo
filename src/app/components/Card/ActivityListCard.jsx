'use client';

import React from 'react'
import { Button } from "@nextui-org/react";

const ActivityListCard = () => {
  return (
    <article className="rounded-lg  bg-[#57A87D] p-4 shadow-md transition hover:shadow-lg sm:p-6">
      <a href="#">
        <h3 className="mt-0.5 text-md font-medium text-while-900">
          บริจาคขยะรีไซเคิล
        </h3>
      </a>

      <p className="mt-1 line-clamp-3 text-xs font-light text-while-500">
        เช่น ขวดน้ำ กระดาษลัง ให้กับตรีเพชร
        สามารถเลือกหมวดหมู่ของสิ่งของที่ต้องการบริจาคและนำไปบริจากที่จุดรับที่กำหนด
        โดยจะมีกำหนดว่าบริจากมากเท่าไหร่ได้กี่ coin
        ขยะเหล่านี้จะถูกนำไปย่อยสลายอย่างถูกวิธี
      </p>
      <div className="flex justify-between flex-row gap-1  mt-4 ">
        <div className="flex gap-2">
          <img
            src="/images/co2.png"
            alt="avatar"
            className="rounded-full w-6 h-6"
          />
          <p className="text-[#CDFFD8]">1-200</p>
        </div>
        <Button radius="sm" size='sm' className="bg-[#CDFFD8]">
          ดูรายละเอียด
        </Button>
      </div>
    </article>
  );
}

export default ActivityListCard