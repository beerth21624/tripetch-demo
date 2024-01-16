"use client"; 

import React from "react";
import { NextUIProvider } from "@nextui-org/react";

//components
import NavbarComponent from "../components/Navbar/NavbarComponent";
import MainCard from "./MainCard";
import CommonCard from "./CommonCard";
import ThankCard from "../components/ThankCard/ThankCard";
import GoBackButton from "../components/GoBackButton";
import { Pagination } from "@nextui-org/react";
import ModalForm from "./ModalForm";
import Content from "./Content";

//icons
import { ListFilter } from "lucide-react";
const page = () => {

  return (
    <NextUIProvider>
      <NavbarComponent title="events" />
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
          <Content />
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
