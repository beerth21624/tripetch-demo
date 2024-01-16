"use client";

import React from "react";
import { NextUIProvider } from "@nextui-org/react";

import NavbarComponent from "../components/Navbar/NavbarComponent";
import ActivityListCard from "../components/Card/ActivityListCard";
import { Pagination } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import ThankCard from "../components/ThankCard/ThankCard";
import GoBackButton from "../components/GoBackButton";
//icons
import { ListFilter } from "lucide-react";
const page = () => {
  return (
    <NextUIProvider>
      <NavbarComponent title="activities" />
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
          <div className="flex w-full align-center">
            {/* //filter */}
            <ListFilter size={30} color="#000" className="mr-2" />
            <input
              type="text"
              placeholder="Search"
              className="bg-gray-200 rounded-md w-full h-10 px-5"
            />
          </div>
          <ActivityListCard
            title="บริจาคขยะรีไซเคิล"
            description="เช่น ขวดน้ำ กระดาษลัง ให้กับตรีเพชร สามารถเลือกหมวดหมู่ของสิ่งของที่ต้องการบริจาคและนำไปบริจากที่จุดรับที่กำหนด โดยจะมีกำหนดว่าบริจากมากเท่าไหร่ได้กี่ coin ขยะเหล่านี้จะถูกนำไปย่อยสลายอย่างถูกวิธี"
            imageSrc="/images/co2.png"
            buttonText="ดูรายละเอียด"
            coinRange="200"
          />
          <ActivityListCard
            title="เข้าร่วมนิทรรศการเปลี่ยนขยะเป็นศิลปะ"
            description="เข้าร่วมนิทรรศการที่มีหัวข้อเป็นการสร้างความยั่งยืนให้กับสังคม 
เข้าร่วมนิทรรศการต่างๆ
ออกบูธตามนิทรรศการต่างๆ"
            imageSrc="/images/co2.png"
            buttonText="ดูรายละเอียด"
            coinRange="100"
          />
          <ActivityListCard
            title="ลดการใช้น้ำและไฟฟ้า"
            description="โดยดูจากเดือนก่อนหน้าหากสามารถใช้น้ำได้ไม่แตกต่างจากเดือนก่อนหน้าเกิน 3 เปอร์เป็นจะได้รับ coin และหากสามารถลดได้เกิน 10 เปอร์เซ็นจะได้รับโบนัส coin"
            imageSrc="/images/co2.png"
            buttonText="ดูรายละเอียด"
            coinRange="400"
          />
          <ActivityListCard
            title="บริจากเสื้อผ้ามือ 2"
            description="บริจาคเสื้อผ้ามือ 2 ให้กับผู้ยากไร้และชุมชน"
            imageSrc="/images/co2.png"
            buttonText="ดูรายละเอียด"
            coinRange="300"
          />
          <ActivityListCard
            title="อาสาเพื่อแปรรูปขยะ"
            description="เข้าร่วมกิจกรรมอาสาเพื่อแปรรูปขยะเพื่อนำไปใช้ใหม่"
            imageSrc="/images/co2.png"
            buttonText="ดูรายละเอียด"
            coinRange="200"
          />
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
