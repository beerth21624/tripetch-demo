import React, { useEffect, useState } from "react";

const CountdownTimer = () => {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const updateCountdown = () => {
      const currentDate = new Date();
      const lastDay = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth() + 1,
        0
      );
      const timeLeft = lastDay - currentDate;

      const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

      setCountdown({ days, hours, minutes, seconds });
    };

    const intervalId = setInterval(updateCountdown, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="bg-white rounded-xl p-4 w-full mt-2 flex flex-col items-center gap-2">
      <p className=" text-2xl font-bold text-teal-600">
        {countdown.days}d {countdown.hours}h {countdown.minutes}m{" "}
        {countdown.seconds}s
      </p>
      <div className="flex items-center gap-1 ml-2 text-left">
        <p className="text-black/75 font-bold text-sm">Time left</p>
        <p className="text-black/75 font-light text-xs">
          to complete this month
        </p>
      </div>
    </div>
  );
};

export default CountdownTimer;
