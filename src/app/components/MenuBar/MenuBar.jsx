'use client';
import React from "react";
import { useRouter } from "next/navigation";



const MenuItem = ({ icon, text,path }) => {
    const router = useRouter();
  return (
    <div className="flex flex-col items-center justify-center" onClick={()=>{
        router.push(path)
    }} >
      <div className="flex justify-center items-center bg-[#57A87E] h-[54px] w-[54px] rounded-xl shadow-md">
        {icon}
      </div>
      <p className="text-xs font-normal text-black  mt-1">{text}</p>
    </div>
  );
};

const MenuBar = ({menuItems}) => {


  return (
    <div className="grid grid-cols-4 gap-5 p-2">
      {menuItems.map((item, index) => (
        <MenuItem key={index} {...item}   />
      ))}
    </div>
  );
};

export default MenuBar;
