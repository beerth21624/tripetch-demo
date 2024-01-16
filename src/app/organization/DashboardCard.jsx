import React, { useEffect } from 'react';
import ApexCharts from 'apexcharts';

const DashboardCard = () => {
  useEffect(() => {
    const options = {
      chart: {
        height: "100%",
        maxWidth: "100%",
        type: "area",
        fontFamily: "Inter, sans-serif",
        dropShadow: {
          enabled: false,
        },
        toolbar: {
          show: false,
        },
      },
      tooltip: {
        enabled: true,
        x: {
          show: false,
        },
      },
      fill: {
        type: "gradient",
        gradient: {
          opacityFrom: 0.55,
          opacityTo: 0,
          shade: "#1D7A49",
          gradientToColors: ["#1D7A49"],
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        width: 6,
      },
      grid: {
        show: false,
        strokeDashArray: 4,
        padding: {
          left: 2,
          right: 2,
          top: 0,
        },
      },
      series: [
        {
          name: "New users",
          data: [6500, 6418, 6456, 6526, 6356, 6456],
          color: "#1D7A49",
        },
      ],
      xaxis: {
        categories: [
          "01 February",
          "02 February",
          "03 February",
          "04 February",
          "05 February",
          "06 February",
          "07 February",
        ],
        labels: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
      },
      yaxis: {
        show: false,
      },
    };

    if (document.getElementById("area-chart") && typeof ApexCharts !== 'undefined') {
      const chart = new ApexCharts(document.getElementById("area-chart"), options);
      chart.render();

      // Cleanup the chart on component unmount
      return () => {
        chart.destroy();
      };
    }
  }, []); // Empty dependency array ensures useEffect runs only once on component mount

  return (
    <div className="max-w-sm w-full bg-white rounded-xl shadow dark:bg-gray-800 p-4  mt-2">
      <div className="flex justify-between">
        <div className='text-start'>
          <h5 className="leading-none text-2xl font-bold text-gray-900 dark:text-white pb-2">3202.4 kg/CO2
          </h5>
          <p className="text-sm font-normal text-gray-500 dark:text-gray-400">save carbon in this month</p>
        </div>
        <div className="flex items-center px-2.5 py-0.5 text-base font-semibold text-green-500 dark:text-green-500 text-center">
          12%
          <svg className="w-3 h-3 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13V1m0 0L1 5m4-4 4 4"/>
          </svg>
        </div>
      </div>
      <div id="area-chart"></div>
    </div>
  );
};

export default DashboardCard;
