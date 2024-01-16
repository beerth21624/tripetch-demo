import React from 'react'

const CarbonAndCoin = ({
    isCoin = true,
    isCarbon = true,
    haveBg = true,
}) => {
  return (
    <div className={`flex gap-2 ${haveBg?'bg-white':''} py-1 px-2 rounded-full`}>
      {isCarbon ? (
        <div className="flex gap-2">
          <img
            src="/images/co2.png"
            alt="avatar"
            className="rounded-full w-5 h-5"
          />
          <p className="text-[#169733] text-sm">10-100</p>
        </div>
      ) : null}
      {isCoin ? (
      <div className="flex gap-2">
        <img
          src="/images/coin.png"
          alt="avatar"
          className="rounded-full w-5 h-5"
        />
        <p className="text-[#C08A00] text-sm">20</p>
      </div>
        ) : null}
    </div>
  );
}

export default CarbonAndCoin