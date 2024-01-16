import React from 'react'
import { Card, CardBody, CardHeader, Image } from '@nextui-org/react'
import CarbonAndCoin from '../components/CarbonAndCoin';

//icon
import { MapPin } from "lucide-react";

const CommonCard = () => {
  return (
    <Card className="py-1">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold">ปลูกป่า 100 ต้น</p>
        <div className="flex gap-1 items-center">
            <MapPin size={12} color="#000" />
        <small className="text-default-500">นครนายก</small>
        </div>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src="https://www.matichonacademy.com/wp-content/uploads/2019/12/P1030674.jpg"
          width={270}
        />
        <div className="flex justify-center mt-2">
          <CarbonAndCoin />
        </div>
      </CardBody>
    </Card>
  );
}

export default CommonCard