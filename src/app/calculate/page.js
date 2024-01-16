"use client";

import React from "react";
import { NextUIProvider } from "@nextui-org/react";

import NavbarComponent from "../components/Navbar/NavbarComponent";
import { Slider } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import ThankCard from "../components/ThankCard/ThankCard";
import GoBackButton from "../components/GoBackButton";
//icons
import { ListFilter } from "lucide-react";
import Swal from "sweetalert2";
const page = () => {
  return (
    <NextUIProvider>
      <NavbarComponent title="calculate" />
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
        <div className="flex justify-start flex-col gap-4 p-4 items-center   w-full min-h-[100vh] ">
          <div className="bg-white rounded-xl p-4 w-full mt-2 flex flex-col items-center gap-2 ">
            <div className="flex flex-col gap-1 w-full">
                          <p className="text-black/75 font-bold text-sm">meal</p>

              <Slider
                color="success"
                step={0.01}
                maxValue={1}
                minValue={0}
                defaultValue={0.4}
                className="max-w-md"
              />
            </div>
                      <div className="flex flex-col gap-1 w-full">
                          <p className="text-black/75 font-bold text-sm">smartphone</p>

                          <Slider
                              color="success"
                              step={0.01}
                              maxValue={1}
                              minValue={0}
                              defaultValue={0.9}
                              className="max-w-md"
                          />
                      </div>
                      <div className="flex flex-col gap-1 w-full">
                          <p className="text-black/75 font-bold text-sm">computer/laptop</p>

                          <Slider
                              color="success"
                              step={0.01}
                              maxValue={1}
                              minValue={0}
                              defaultValue={0.8}
                              className="max-w-md"
                          />
                      </div>
                      <div className="flex flex-col gap-1 w-full">
                          <p className="text-black/75 font-bold text-sm">air conditioner</p>

                          <Slider
                              color="success"
                              step={0.01}
                              maxValue={1}
                              minValue={0}
                              defaultValue={0.2}
                              className="max-w-md"
                          />
                      </div>
                      <div className="flex flex-col gap-1 w-full">
                          <p className="text-black/75 font-bold text-sm">transport</p>

                          <Slider
                              color="success"
                              step={0.01}
                              maxValue={1}
                              minValue={0}
                              defaultValue={0.6}
                              className="max-w-md"
                          />
                      </div>
          </div>
          <Button
            auto
            size="sm"
            className="w-75"
            color="default"
            shadow
            rounded
            onClick={() => {
              //ยังไม่พร้อมใช้งาน
              Swal.fire({
                icon: "warning",
                title: "Oops...",
                text: "This function is not ready yet!",
              });
            }}
          >
            Advance Calculate
          </Button>
          <div className="flex flex-col justify-center items-center gap-1 mt-5">
            <p className="text-rose-700 text-7xl font-semibold drop-shadow-2xl ">
              8712
            </p>
            <p className="text-white text-sm font-light mb-5">
              carbon produced
            </p>

            <p className="text-[#195838] text-5xl font-semibold drop-shadow-2xl ">
              2640
            </p>
            <p className="text-white text-sm font-light">carbon saved</p>
            <p
              className="text-white ont-light "
              style={{
                fontSize: "10px",
              }}
            >
              increase carbon saved by daily saved, activities and projects
            </p>
          </div>
          <img
            src="/images/forest.png"
            style={{
              height: "250px",
              marginTop: "-30px",
            }}
          />
          <div className="w-full text-center">
            <GoBackButton />
          </div>
          <ThankCard />
        </div>
      </div>
    </NextUIProvider>
  );
};

export default page;
