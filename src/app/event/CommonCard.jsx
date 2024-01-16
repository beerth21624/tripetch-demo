import React from "react";
import { Card, CardBody, CardHeader, Image } from "@nextui-org/react";
import CarbonAndCoin from "../components/CarbonAndCoin";
import { MapPin } from "lucide-react";
import { Button } from "flowbite-react";

const CommonCard = ({ title, location, imageUrl, setIsOpen }) => {
  return (
    <Card className="py-1 h-56  ">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold line-clamp-1">{title}</p>
        <div className="flex gap-1 items-center">
          <MapPin size={12} color="#000" />
          <small className="text-default-500">{location}</small>
        </div>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <div className="h-24 flex items-center">
          <Image
            alt="Card background"
            className="object-cover rounded-xl"
            src={imageUrl}
            width={270}
            height={150}
          />
        </div>
        <div className="flex flex-col items-center justify-center mt-2">
          <CarbonAndCoin />
          <Button size="xs" gradientMonochrome="success" className="w-full" onClick={()=>{
            setIsOpen(true)
          }}>
            ร่วมกิจกรรม
          </Button>
        </div>
      </CardBody>
    </Card>
  );
};

export default CommonCard;
