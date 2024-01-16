import React from 'react'

import { Card, CardHeader, Image } from "@nextui-org/react";

//components
import CarbonAndCoin from '../components/CarbonAndCoin'

const MainCard = () => {
  return (
    <Card className="col-span-12 sm:col-span-4 h-[300px]">
        <CardHeader className="absolute z-10 bottom-1 right-1 flex-col items-end justify-between h-full">
            <CarbonAndCoin />
            </CardHeader>
      <CardHeader className="absolute z-10 bottom-1  flex-col !items-start">
        <p className="text-lg text-white uppercase font-bold">
          จิตอาสาเก็บขยะ ปลูกป่าชายเลน
        </p>
        <h4 className="text-white/90 font-light text-xs">
          มาร่วมทำความดีเพื่อโลกน่าอยู่ ชมรม จิตอาสา ประเทศไทย ขอชวนพี่ๆ น้องๆ
          มาร่วมำเพ็ญประโยชน์เก็บขยะ และปลูกป่าชายเลน ณ บางปู จ.สมุทรปราการ.
        </h4>
      </CardHeader>
      <Image
        removeWrapper
        alt="Card background"
        className="z-0 w-full h-full object-cover filter brightness-75"
        src="https://www.sustainablelife.co//uploadedfiles/filemanager//source/Photo-for-PR_29-02.jpg"
      />
    </Card>
  );
}

export default MainCard