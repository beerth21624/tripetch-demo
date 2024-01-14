import React from 'react'

const ActivityCard = () => {
  return (
    <article className="relative overflow-hidden rounded-lg shadow transition hover:shadow-lg">
      <img
        alt="Office"
        src="https://images.unsplash.com/photo-1503435980610-a51f3ddfee50?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
        <div className="p-4 sm:p-6">
          <time datetime="2022-10-10" className="block text-xs text-white/90">
            {" "}
            10th Oct 2022{" "}
          </time>

          <a href="#">
            <h3 className="mt-0.5 text-lg text-white">
              โครงการปลูกป่า 1 ล้านต้น
            </h3>
          </a>

          <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
            โครงการปลูกป่า 1 ล้านต้น โดยมีวัตถุประสงค์เพื่อเพิ่มพื้นที่ป่าไม้
            และ ปรับปรุงสภาพอากาศ ให้กับโลกใบนี้
          </p>
        </div>
      </div>
    </article>
  );
}

export default ActivityCard