import React from 'react'

import { AlertTriangle } from "lucide-react";

const NewsCard = () => {
  return (
    <div className="relative rounded-lg  bg-[#40A999] drop-shadow-md mx-5 mt-5">
      <div className="flex items-center gap-2 p-3">
        <div className="flex justify-center items-center bg-gray-200 rounded-md min-w-[50px] h-[50px]">
          <AlertTriangle size={30} color="#000" />
        </div>
        <div>
          <p className=" line-clamp-1 font-bold text-xs  ">
            เตือนฝุ่นจิ๋ว PM2.5 มลพิษทางอากาศ เป็นภัยร้ายต่อสุขภาพ
          </p>

          <p className="line-clamp-2 text-[8px] font-extralight ">
            กรมการแพทย์ เตือนฝุ่นจิ๋ว PM 2.5 มลพิษทางอากาศ
            ส่งผลกระทบเป็นภัยร้ายต่อสุขภาพ เสี่ยงต่อการเกิดโรคเรื้อรัง
            หากได้รับอย่างต่อเนื่องวันที่ 23 พ.ย. 2566 นายแพทย์วีรวุฒิ อิ่มสำราญ
            รองอธิบดีกรมการแพทย์ เผยว่า ฝุ่นละออง PM 2.5
          </p>
          <p className="text-end text-xs font-extralight">อ่านต่อ</p>
        </div>
      </div>
    </div>
  );
}

export default NewsCard