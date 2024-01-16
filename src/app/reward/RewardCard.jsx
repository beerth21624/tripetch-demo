import React from "react";
import CarbonAndCoin from "../components/CarbonAndCoin";

const RewardCard = ({ title, imageUrl, isCarbon, isCoin, haveBg,coin }) => {
  return (
    <div
      className={`flex flex-col justify-center items-center rounded-lg bg-white drop-shadow-md min-w-[124px] h-[120px] p-4 w-100 ${
        haveBg ? "with-background" : ""
      }`}
      style={{ height: "fit-content" }}
    >
      {title && (
        <p className="text-rose-600 text-sm font-bold mb-2 text-center">
          {title}
        </p>
      )}
      <div className="flex items-center justify-center h-28">
        <img src={imageUrl} alt="avatar" className="rounded-full w-75" />
      </div>
      <CarbonAndCoin
        isCarbon={isCarbon}
        isCoin={isCoin}
        haveBg={haveBg}
        coin={coin}
      />
    </div>
  );
};

export default RewardCard;
