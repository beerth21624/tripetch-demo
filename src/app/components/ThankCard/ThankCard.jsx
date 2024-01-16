'use client';

import React from 'react'

const ThankCard = () => {
  return (
    <div className=" rounded-md p-2 w-full mt-2 flex items-center justify-between gap-2 bg-white text-black">
      <div className="flex flex-col ml-2 text-left">
        <p className="font-bold text-md mb-1">ขอบคุณที่ช่วยรักษาโลกใบนี้</p>
        <p className="font-light text-xs">ทุกสิ่งเป็นจริงได้</p>
          <p
            className="text-black"
            style={{
              fontSize: "10px",
            }}
          >
            Powered by{" "}
            <span className="text-rose-600 font-bold">Tri Petch Group</span>
        </p>
      </div>
      <img src="/images/planet-earth.png" alt="avatar" className=" w-16 h-16" />
    </div>
  );
}

export default ThankCard