
import React from 'react';
import { Checkbox } from "@nextui-org/react";

//components
import CarbonAndCoin from "../components/CarbonAndCoin";

const DairyCard = ({  title, description }) => {
        const [checked, setChecked] = React.useState(false);

  return (
    <div className="flex justify-start items-center rounded-lg bg-white drop-shadow-md w-full h-[75px] p-4 ">

      <Checkbox
        color="success"
        isSelected={checked}
        onValueChange={setChecked}
      ></Checkbox>
      <div className="flex flex-col justify-center">
        <p className="text-black/70 text-sm font-bold">{title} 
        <span className="text-green-500 text-xs font-bold ml-2">+ 10</span>
        </p>
        <p className="text-black/60 text-xs">{description}</p>
      </div>
    </div>
  );
}

export default DairyCard;