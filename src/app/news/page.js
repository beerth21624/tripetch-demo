'use client';

import React from 'react'
import { NextUIProvider } from "@nextui-org/react";

import NavbarComponent from '../components/Navbar/NavbarComponent'
import { Tabs, Tab, Card, CardBody, CardHeader } from "@nextui-org/react";
import NewsCard from './NewsCard';
import NewsMainCard from './NewsMainCard';

const page = () => {
    const newsData = [{
        imageUrl: 'https://static.thairath.co.th/media/dFQROr7oWzulq5Fa5LFcjU38UB9af29kCWia8A9Gq6svo1JqK6lOzlGBGoFwyyCqijh.webp',
        source: 'thairath.co.th',
        title: 'มูลนิธิสืบนาคะเสถียร เปิดสาเหตุ ค้านสร้างอุโมงค์ผันน้ำ ช่วยภัยแล้งเมืองกาญจน์',
        date: '16 ม.ค. 2567 16:19 น',
        readMoreLink: 'https://www.thairath.co.th/news/sustainable/2755598',
    },{
        imageUrl: 'https://static.thairath.co.th/media/dFQROr7oWzulq5Fa5LFcjpZ46wijlX9c3yN5GBrAFtLxdbOI7Ha324ksTrzWxEXRl2i.webp',   
        source: 'thairath.co.th',
        title:'คนกรุงอย่าชะล่าใจ ฝุ่น PM 2.5 เช้านี้เกินค่ามาตรฐาน จำนวน 11 พื้นที่',
        date: '16 ม.ค. 2567 16:19 น',
        readMoreLink:'https://www.thairath.co.th/news/society/2755439',
        }, {
        imageUrl: 'https://static.thairath.co.th/media/dFQROr7oWzulq5Fa5LFcjpOXUzEePSq5eqrwOmXxmSUN3PJGb85NRgpaRbVRbnqq70X.webp',
            source: 'thairath.co.th',
        title: '"ผอ.ขยะ" ฉายาครูรักษ์โลกชวนคัดแยกขยะตั้งแต่ต้นทาง ลดภาวะโลกร้อน',
        date: '16 ม.ค. 2567 16:19 น',
        readMoreLink: 'https://www.thairath.co.th/news/sustainable/2755466',
        }, {
        imageUrl: 'https://static.thairath.co.th/media/dFQROr7oWzulq5Fa5LFcjNgb5lOFHWPJt1tzqCNr7a1nZeRgcKyesgHd3k6rbgUyjnJ.webp',
            source: 'thairath.co.th',
        title: 'รู้จัก Low Carbon Event การจัดกิจกรรมที่คำนึงถึงผลกระทบต่อ "สิ่งแวดล้อม"',
        date: '16 ม.ค. 2567 16:19 น',
        readMoreLink: 'https://www.thairath.co.th/news/sustainable/2755256',
        }, {
        imageUrl: 'https://static.thairath.co.th/media/dFQROr7oWzulq5Fa5LFby1rTWPJDTa6AIqFLlqeBPyDwJ18GAp7KAbVtPU8GXMwp61v.webp',
            source: 'thairath.co.th',
        title: 'บราซิลตัดไม้ในป่าแอมะซอนลดลง 50% ในปี 2566',
        date: '16 ม.ค. 2567 16:19 น',
        readMoreLink: 'https://www.thairath.co.th/news/foreign/2754801',
        }]

    function renderContent() {
        return (
            <div className="flex flex-col gap-2">
               {newsData.map((news,index) => (
                  <div key={index}>
                        <NewsCard {...news} />
                    </div>
               ))}
            </div>
        )

    }

    function renderNoData(){
        return (
            <div className="flex  justify-center items-center  gap-2" style={{
                height: '60vh',
            
            }}>
                <div className="flex flex-col justify-center items-center">
                    <img src="/images/no-data.png" alt="empty" className="h-28" />
                    <h1 className="text-lg">ไม่มีข้อมูล</h1>
                    <p className="text-sm text-black/50">ขออภัย ขณะนี้ยังไม่มีข้อมูลให้แสดงผล</p>
                </div>
            </div>
        )
    }

    let tabs = [
        {
            id: "Latest",
            label: "Latest",
            content: renderContent()
        },
        {
            id: "tips",
            label: "Tips",
            content: renderNoData()
        },
        {
            id: "recycle",
            label: "Recycle",
            content: renderNoData()
        }, {
            id: "economics",
            label: "Economics",
            content: renderNoData()
        }
    ];

    return (
        <NextUIProvider>
            <NavbarComponent title='news&tips' />
            <div style={{
                width: '100vw',
                minHeight: '100vh',
                background: "linear-gradient(180deg, #57A87E, 57%, #F9F9F9 78%)",
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'center',
                paddingBottom: '4vh',
            }}>
                <div className='flex justify-start flex-col gap-4 p-4 items-center bg-gray-100 rounded-t-[20px] w-full min-h-[92vh] '>
                    <NewsMainCard />
                    <div className="flex w-full flex-col">
                        <Tabs variant='bordered' aria-label="Tabs variants" items={tabs}>
                            {(item) => (
                                <Tab key={item.id} title={item.label}>
                                    <Card>
                                        <CardBody>
                                            {item.content}
                                        </CardBody>
                                    </Card>
                                </Tab>
                            )}
                        </Tabs>
                    </div>

                </div>

            </div>
            {/* <BottomBar /> */}
        </NextUIProvider>

    )
}

export default page