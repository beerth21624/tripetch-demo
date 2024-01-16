import React from 'react'
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Button,
} from "@nextui-org/react";


const NewsMainCard = () => {
  return (
    <Card className="col-span-12 sm:col-span-4 h-[300px]">
      <CardHeader className="absolute z-10 bottom-4 flex-col !items-start">
        <h4 className="text-white font-bold text-xl">
          10 ข่าวสิ่งแวดล้อม <br /> ต้องติดตามปีในปี 2567
        </h4>
      </CardHeader>
      <Image
        removeWrapper
        alt="Card background"
        className="z-0 w-full h-full object-cover filter brightness-75"
        src="https://www.sarakadee.com/wp-content/uploads/2021envinews04.jpg"
      />
    </Card>
  );
}

export default NewsMainCard