import React from 'react'

const RewardRecommendCard = () => {
  return (
    <div
      className="flex flex-col justify-center items-center rounded-lg  bg-white drop-shadow-md min-w-[124px] h-[120px] p-4"
      style={{ height: "fit-content" }}
    >
      <p className="text-[#57A87D] text-xs font-bold mb-2">Reward</p>
      <img
        src="https://e7.pngegg.com/pngimages/866/216/png-clipart-hamburger-mcdonalds-1-store-museum-fast-food-mcdonalds-french-fries-drinks-food-s-food-fast-food-restaurant.png"
        alt="avatar"
        className="rounded-full w-20 h-20"
      />
    </div>
  );
}

export default RewardRecommendCard