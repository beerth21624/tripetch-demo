import React from 'react';
import { Button } from "flowbite-react";

const KnowledgeCard = ({ imageUrl, source, title, date, readMoreLink }) => {
  return (
    <article className="rounded-lg border border-gray-100 bg-white p-4 shadow-sm transition hover:shadow-lg sm:p-6 flex items-start gap-2">
      <div className="flex flex-col">
        <p className="text-xs/relaxed text-gray-500">{source}</p>
        <h3 className="mt-0.5 line-clamp-2 text-sm/relaxed font-bold text-gray-900">
          {title}
        </h3>
        <img src={imageUrl} alt="avatar" className="rounded-md w-full h-34" />
        <div className="bg-gray-100 rounded-md p-2 text-xs/relaxed text-gray-500 my-2">
          <p className="font-bold">Skills</p>
          <div className="flex items-center">
            <p className=" text-xs/relaxed text-gray-800 ">
              ความรู้การลดคาร์บอน
            </p>
            <p className=" text-xs/relaxed text-green-500 ml-2">+10</p>
          </div>{" "}
          <div className="flex items-center">
            <p className=" text-xs/relaxed text-gray-800">SDGs</p>
            <p className=" text-xs/relaxed text-green-500 ml-2">+10</p>
          </div>
        </div>
        <Button size="xs" gradientMonochrome="success">
          เริ่มต้นเรียนรู้
        </Button>
      </div>
    </article>
  );
};

export default KnowledgeCard