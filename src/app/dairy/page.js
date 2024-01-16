"use client";

import React from "react";
import { NextUIProvider } from "@nextui-org/react";

import NavbarComponent from "../components/Navbar/NavbarComponent";
import DairyCard from "./DairyCard";
import ThankCard from "../components/ThankCard/ThankCard";
import GoBackButton from "../components/GoBackButton";

const page = () => {
  function getDate() {
    const date = new Date();
    const day = date.getDate();
    const month = date.toLocaleString("default", { month: "short" });
    const year = date.getFullYear();
    return `${day} ${month} ${year}`;
  }

    const checkboxCardData = [
        {
            title: "ใช้ถุงผ้าออกไปซื้อของ",
            description: "เมื่อต้องการซื้อของให้นำถุงผ้ามาใช้แทนถุงพลาสติก"
        },
        {
            title: "เลือกการเดินทางด้วยรถจักรยาน",
            description: "ลดการใช้รถยนต์เพื่อลดปริมาณมลพิษทางอากาศ"
        },
        {
            title: "ปิดไฟหลังจากใช้งาน",
            description: "เพื่อประหยัดพลังงานและลดการปล่อยก๊าซเรือนกระจก"
        },
        {
            title: "ลดการใช้บริการแบบพกพา",
            description: "ใช้บริการออนไลน์แทนการต้องเดินทางเพื่อไปรับบริการ"
        },
        {
            title: "ลดการใช้น้ำพลังงาน",
            description: "ปิดน้ำที่ไม่จำเป็นตลอดเวลา"
        },
        {
            title: "รีไซเคิลของเสีย",
            description: "ให้ทิ้งขยะที่สามารถรีไซเคิลได้ที่ถุงทำจากวัสดุที่รีไซเคิลได้"
        },
        {
            title: "ปลูกต้นไม้",
            description: "เพื่อลดการกระจายก๊าซเรือนกระจก"
        },
        {
            title: "ใช้หลอดไฟ LED",
            description: "ลดการใช้พลังงานและประหยัดค่าใช้จ่าย"
        },
        {
            title: "ลดการใช้ถุงพลาสติก",
            description: "นำถุงผ้าติดตัวไปใช้เมื่อต้องการซื้อของ"
        },
        {
            title: "ปิดเครื่องใช้ไฟฟ้าเมื่อไม่ใช้",
            description: "ปิดเครื่องใช้ไฟฟ้าเมื่อไม่ได้ใช้งาน"
        },
    ];

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
        <div className="flex justify-start flex-col  p-4 items-center bg-gray-100 rounded-t-[20px] w-full min-h-[92vh] ">
          <p className="text-2xl font-bold text-center text-black/75 mb-0">
                      Daily Check   
          </p>
                  <p className="text-md  text-center text-black/75">({getDate()})</p>
          
          <div className="mt-3 relative">
            <p className="text-lg font-bold text-center text-white absolute bottom-8 left-1/2 transform -translate-x-1/2 ">
                0/10
            </p>
            <img src="/images/dairy.png" alt="dairy" />
          </div>
                  <p className="text-sm  text-center text-black/75">
                      you have 10 mission to complete today
                  </p>

                  <div className="flex flex-col mt-3 w-full gap-2">
                  {checkboxCardData.map((data, index) => (
                        <DairyCard
                            key={index}
                            title={data.title}
                            description={data.description}
                        />
                    ))}
                  </div>
                      <div className="flex justify-start w-[100vw] px-5 mt-5">
                          <GoBackButton path="/" />
                      </div>
        </div>
 
        <ThankCard />
      </div>
      {/* <BottomBar /> */}
    </NextUIProvider>
  );
};

export default page;
