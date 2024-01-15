import React from 'react'
import {
  Card,
  CardHeader,
  Image,
} from "@nextui-org/react";


const ActivityCard = ({ title, subtitle, imageSrc }) => {

  return (
    <Card className="col-span-12 sm:col-span-4 min-w-[320px] drop-shadow-md">
      <CardHeader className="absolute z-10 bottom-1 right-1 flex-col items-end justify-between h-full">
        <div className="flex flex-col ">
          <p className="text-md text-white/80 uppercase font-bold">{title}</p>
          <div className="flex flex-row gap-1 justify-end">
            <img
              src="/images/coin.png"
              alt="avatar"
              className="rounded-full w-4 h-4"
            />
            <p className="text-xs text-white/80 uppercase font-bold">40</p>
          </div>
        </div>
        <h4 className="text-white font-medium text-md text-end">{subtitle}</h4>
      </CardHeader>
      <Image
        removeWrapper
        alt="Card background"
        className="z-0 w-full h-full object-cover filter brightness-50"
        src={imageSrc}
      />
    </Card>
  );
};

export default ActivityCard

