'use client'
import Swal from 'sweetalert2'
import { NextUIProvider } from "@nextui-org/react";
import NavbarComponent from './components/Navbar/NavbarComponent'
import ActivityCard from './components/Card/ActivityCard'
import { Player } from '@lottiefiles/react-lottie-player';
import BottomBar from './components/BottomBar/BottomBar';
import { AlertTriangle } from 'lucide-react';
//components
import AlertModal from './components/AlertModal'
import { useEffect } from 'react'

export default function Home() {

  // useEffect(() => {
  //   Swal.fire({
  //     title: "อยู่ระหว่างการพัฒนา",
  //     text: "ระบบนี้ยังไม่สามารถใช้งานได้ในขณะนี้ กรุณากลับมาใหม่อีกครั้งในภายหลัง",
  //     icon: "warning",
  //     allowOutsideClick: false,showConfirmButton: false,
  //   });
  // }
  // , [])

  return (
    <NextUIProvider>
      <NavbarComponent />
     <div style={{
      width:'100vw',
      height:'100vh',
        background: "linear-gradient(180deg, #57A87E, 57%, #F9F9F9 78%)",
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingTop:'8vh',
     }}>

          <p className='text-white 
          text-lg
          font-light
            '>Hello,Sompong </p>
          <p className='text-sm font-thin'>your island is now on #156 ranking</p>

        <p className='text-sm font-thin mt-5'>your carbon saved</p>
        <p className='text-7xl font-semibold drop-shadow-2xl'>2640</p>

          <img src="/images/forest.png" style={{
            height: '250px',
            marginTop: '-40px',
          }} />
        <div className="relative rounded-lg  bg-[#40A999] drop-shadow-md mx-5 mt-5">

          <div className="flex items-center gap-2 p-3">
        <div className='flex justify-center items-center bg-gray-200 rounded-md min-w-[50px] h-[50px]'>
          <AlertTriangle size={30} color='#000'/>
        </div>
            <div>
              <p className=" line-clamp-1 font-bold text-xs  ">เตือนฝุ่นจิ๋ว PM2.5 มลพิษทางอากาศ เป็นภัยร้ายต่อสุขภาพ</p>

              <p className="line-clamp-2 text-[8px] font-extralight ">
                กรมการแพทย์ เตือนฝุ่นจิ๋ว PM 2.5 มลพิษทางอากาศ ส่งผลกระทบเป็นภัยร้ายต่อสุขภาพ เสี่ยงต่อการเกิดโรคเรื้อรัง
                หากได้รับอย่างต่อเนื่องวันที่ 23 พ.ย. 2566 นายแพทย์วีรวุฒิ อิ่มสำราญ รองอธิบดีกรมการแพทย์ เผยว่า ฝุ่นละออง PM 2.5
              </p>
              <p className="text-end text-xs font-extralight">อ่านต่อ</p>
            </div>
          </div>
        </div>
        <div style={{
          width: '100vw',
          overflow: 'scroll',
          display: 'flex',
          gap: '10px',
          marginTop: '16px',
          padding :'0 18px',
          marginBottom:'100px',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',


        }}
        >
          <ActivityCard
            title="Event"
            subtitle="ปลูกป่าชายเลนเพิ่มคาร์บอนเครดิต 2566"
            imageSrc="https://www.mahidol.ac.th/volunteer/wp-content/uploads/2017/05/15094839_1517043981646042_486950271788575766_n-960x480.jpg" />
          <ActivityCard
            title="Event"
            subtitle="ค่ายฝึกอบรมเยาวชนคนรักษ์ทรัพยากรทางทะเลและชายฝั่ง"
            imageSrc="https://www.dmcr.go.th//upload/nws/album/pic-201712221513933999380.JPG" />
        </div>


        
     </div>
      <BottomBar />
    </NextUIProvider>

  )
}
