import React from "react";

import { Menu } from "lucide-react";


export default function NavbarComponent({title}) {


  return (
    <div
      style={{
        width: "100vw",
        padding: "20px",
        //background if scroll y > 0
        background: "linear-gradient(180deg, #57A87D 0%, #57A87D 100%)",
        zIndex: 100,
      }}
    >
      <div className="flex justify-between">
        <div className="flex items-center">
          <Menu size={32} />
          {title ? <h1 className="text-white text-xl  ml-2">{title}</h1> : null}
        </div>
        <div className="flex align-baseline bg-gray-200 rounded-full h-fit pe-2">
          <img
            src="/images/coin.png"
            alt="avatar"
            className="rounded-full w-6 h-6"
          />
          <p className="text-black text-md ml-1">1000</p>
        </div>
      </div>
    </div>
  );
}
