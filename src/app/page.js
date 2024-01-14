'use client'
import Swal from 'sweetalert2'
import { NextUIProvider } from "@nextui-org/react";
import NavbarComponent from './components/Navbar/NavbarComponent'
import ActivityCard from './components/Card/ActivityCard'


//components
import AlertModal from './components/AlertModal'
import { useEffect } from 'react'

export default function Home() {

  useEffect(() => {
    Swal.fire({
      title: "อยู่ระหว่างการพัฒนา",
      text: "ระบบนี้ยังไม่สามารถใช้งานได้ในขณะนี้ กรุณากลับมาใหม่อีกครั้งในภายหลัง",
      icon: "warning",
      allowOutsideClick: false,showConfirmButton: false,
    });
  }
  , [])
  return (
    <NextUIProvider>
      <div >
        <NavbarComponent />
        {/* header name activity */}
        <div className="flex justify-center items-center p-5">
          <h1 className="text-xl font-bold">กิจกรรมทั้งหมด</h1>
        </div>
        <div className="grid grid-cols-2 gap-4 p-5">
          <ActivityCard />
          <ActivityCard />
          <ActivityCard />
          <ActivityCard />
          </div>

      </div>
    </NextUIProvider>

  )
}
