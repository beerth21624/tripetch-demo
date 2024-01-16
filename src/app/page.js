'use client'
import { NextUIProvider } from "@nextui-org/react";

//components
import { useEffect } from 'react'
import NavbarComponent from './components/Navbar/NavbarComponent'
import ActivityCard from './components/Card/ActivityCard'
import NewsCard from './components/Card/NewsCard'
import RewardRecommendCard from './components/Card/RewardRecommendCard'
import MenuBar from './components/MenuBar/MenuBar';
import Swal from 'sweetalert2'

//icons
import {
  Activity,
    CalendarCheck,
    Gift,
    Calculator,
    BookOpenText,
    Rocket,
  Building2,
  BarChart4,
  User, MessagesSquare
} from "lucide-react";

export default function Home() {

  useEffect(() => {
    Swal.fire({
      title: "อยู่ระหว่างการพัฒนา",
      text: "ระบบกำลังอยู่ในช่วงการพัฒนา โปรดรอการปรับปรุงเพิ่มเติม",
      icon: "warning",
    });
  }
  , [])

  const menuItems = [
    { icon: <Rocket size={32} />, text: "Dairy", path: "/dairy" },
    { icon: <Activity size={32} />, text: "Activity", path: "/activity" },
    { icon: <CalendarCheck size={32} />, text: "Event", path: "/event" },
    { icon: <MessagesSquare size={32} />, text: "News&Tips", path: "/news" },
    { icon: <Gift size={32} />, text: "Reward", path: "/reward" },
    { icon: <Calculator size={32} />, text: "Calculate", path: "/calculate" },
    { icon: <BarChart4 size={32} />, text: "Ranking", path: "/ranking" },
    { icon: <Building2 />, text: "Organization", path: "/organization" },
    { icon: <BookOpenText size={32} />, text: "Knowledge", path: "/knowledge" },
    { icon: <User />, text: "Profile", path: "/profile" },
    //ส่งต่อ
    //แชร์รถ
    //สินค้า
  ];
  return (
    <NextUIProvider>
      <NavbarComponent />
     <div style={{
      width:'100vw',
      minHeight:'100vh',
        background: "linear-gradient(180deg, #57A87E, 37%, #E9E9E9 78%)",
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingTop: '4vh',
        paddingBottom: '4vh',
     }}>

          <p className='text-white 
          text-lg
          font-light
            '>Hello,Sompong </p>
  

        <p className='text-sm font-thin mt-3'>your carbon saved</p>
        <p className='text-7xl font-semibold drop-shadow-2xl '>2640</p>
        <p className='text-xl font-semibold'> #156 ranking</p>

          <img src="/images/forest.png" style={{
            height: '250px',
            marginTop: '-40px',
          }} />
        <MenuBar menuItems={menuItems} />
        <NewsCard />

        <div style={{
          width: '100vw',
          overflow: 'scroll',
          display: 'flex',
          gap: '10px',
          marginTop: '16px',
          padding :'0 18px',
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
        <div style={{
          width: '100vw',
          overflow: 'scroll',
          display: 'flex',
          gap: '10px',
          marginTop: '16px',
          padding :'0 18px',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
        >
          <RewardRecommendCard />
          <RewardRecommendCard />
          <RewardRecommendCard />
        </div>


        
     </div>
      {/* <BottomBar /> */}
    </NextUIProvider>

  )
}
