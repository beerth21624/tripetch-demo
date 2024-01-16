'use client';

import React from 'react'
import MainCard from './MainCard'
import CommonCard from './CommonCard'
import ModalForm from './ModalForm';
import Swal from 'sweetalert2';

const Content = () => {
    const [isOpen, setIsOpen] = React.useState(false);


  const cardData = [
    {
      title: "ปลูกป่า 100 ต้น",
      location: "นครนายก",
      imageUrl:
        "https://www.matichonacademy.com/wp-content/uploads/2019/12/P1030674.jpg",
    },
    {
      title: "อบรมการแยกขยะ",
      location: "กรุงเทพ",
      imageUrl:
        "https://www.dailynews.co.th/wp-content/uploads/2022/06/Cover-1100x620%E0%B9%82%E0%B8%A5%E0%B9%82%E0%B8%81%E0%B9%89%E0%B8%9E%E0%B8%B7%E0%B9%89%E0%B8%99%E0%B8%94%E0%B8%B3-124-768x433.jpg",
    },
    {
      title: "วิ่งเพื่อสิ่งแวดล้อม ",
      location: "ชลบุรี",
      imageUrl:
        "https://www.bluechipthai.com/bc-admin/userfiles/image/%E0%B8%A0%E0%B8%B2%E0%B8%9E%E0%B8%9A%E0%B8%A3%E0%B8%A3%E0%B8%A2%E0%B8%B2%E0%B8%81%E0%B8%B2%E0%B8%A8%E0%B9%83%E0%B8%99%E0%B8%87%E0%B8%B2%E0%B8%992.JPG",
    },
    {
      title: "สอนน้องๆ ทำของประดิษฐ์จากขยะ",
      location: "ปทุมธานี",
      imageUrl: "https://i.ytimg.com/vi/XExFMnsLHMo/maxresdefault.jpg",
    },
  ];
  return (
    <>
      <MainCard />
      <div className="grid grid-cols-2 gap-2">
        {cardData.map((item, index) => (
          <div key={index}>
            <CommonCard {...item} setIsOpen={setIsOpen} />
          </div>
        ))}
      </div>
      <ModalForm isOpen={isOpen} 
      onClose={()=>{
        setIsOpen(false)
      }}
        onSubmit={()=>{
            setIsOpen(false)
            Swal.fire({
                icon: 'success',
                title: 'ส่งใบสมัครเรียบร้อยแล้ว',
                text: 'ทางทีมงานจะติดต่อกลับภายใน 24 ชั่วโมง',
                confirmButtonText: 'ตกลง',
              })
        }}
      />
    </>
  );
}

export default Content