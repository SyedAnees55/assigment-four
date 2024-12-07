import React from "react";

const Hero = () => {
  return (
    <div className="flex items-center w-[1920px] h-[829px] top-[92px] left-[1px] pt-[140px] pr-[220px] pb-[140px] pl-[220px] bg-[#043873]">
    <div className="w-[656px] h-[361px] flex flex-col gap-[60px]">
          <div className="w-[656px] h-[238px] flex flex-col  gap-[24px]">
            <div className=" w-[656px] h-[154px]">
              <h2 className="font-serif font-bold text-[64px] text-white leading-[77.45px] -tracking-wide">
                Get More Done with whitepace
              </h2>
            </div>
            <div className="w-[656px] h-[60px]">
              <p className="font-serif font-[400] text-[18px] leading-[30px] tracking-[-2%] text-white">
                Project management software that enables your teams to
                collaborate, plan, analyze and manage everyday tasks
              </p>
            </div>
          </div>
          <button className="w-[219px] h-[63px] rounded-[8px] p-20px gap-[10px] bg-[#4F9CF9]">
            Try whitepace free
          </button>
        </div>
        <div
          className=" w-[700px] h-[549px]  bg-[#C4DEFD] "
        ></div>
    </div>
  );
};

export default Hero;
