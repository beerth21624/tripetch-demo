'use client';

import React, { useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
import { Line } from "react-chartjs-2";

const DashboardCard = () => {
 const data = {
   labels: [
     "01",
     "02",
     "03",
     "04",
     "05",
     "06",
     "07",
   ],
   datasets: [
     {
       label: "Carbon Savings (kg/CO2)",
       data: [30, 40, 20, 50, 60, 35, 45], // Example carbon savings data
       borderColor: "#1D7A49",
       borderWidth: 2,
       fill: false,
     },
   ],
 };

 const options = {
   scales: {
     x: {
       grid: {
         display: false,
       },
     },
     y: {
       grid: {
         display: false,
       },
       ticks: {
         display: false,
       },
     },
   },
   plugins: {
     legend: {
       display: false,
     },
   },
 };

  return (
    <div className="max-w-sm w-full bg-white rounded-xl shadow dark:bg-gray-800 p-4 mt-2">
      <div className="flex justify-between">
        <div className="text-start">
          <h5 className="leading-none text-2xl font-bold text-gray-900 dark:text-white pb-2">
            3202.4 kg/CO2
          </h5>
          <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
            save carbon in this month
          </p>
        </div>
        <div className="flex items-center px-2.5 py-0.5 text-base font-semibold text-green-500 dark:text-green-500 text-center">
          12%
          <svg
            className="w-3 h-3 ms-1"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13V1m0 0L1 5m4-4 4 4"
            />
          </svg>
        </div>
      </div>
      <Line data={data} options={options}
       />
    </div>
  );
};

export default DashboardCard;
