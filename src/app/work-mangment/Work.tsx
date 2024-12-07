import React from "react";

const Work = () => {
  return (
    <div className=" border-x-2 border-black w-[1920px] h-[1588px] top-921px left-1px flex flex-col pt-[140px] pr-[220px] pb-[140px] pl-[220px] gap-[100px]">
      <div className="w-[1480px] h-[547px] flex gap-[60px] items-center">
        <div className="w-[672px] h-[411px] flex flex-col gap-[60px]">
          <div className="w-[672px] h-[288px] flex-col gap-[24px]">
            <div className="w-[672px] h-[174px]">
              <h1 className="font-serif  font-[700] text-[72px] leading-[87.14px] tracking-[-2%] text-[#212529]">
                Project Management
              </h1>
            </div>
            <div className="w-[672px] h-[90px]">
              <p className="font-serif font-[400] text-[18px] leading-[30px] tracking-[-2%] text-[#212529]">
                Images, videos, PDFs and audio files are supported. Create math
                expressions and diagrams directly from the app. Take photos with
                the mobile app and save them to a note.
              </p>
            </div>
          </div>
          <button className="w-[185px] h-[63px] rounded-[8px] pt-[20px] pr-[40px] pb-[20px] pl-[40px] gap-[10px] bg-[#4F9CF9]">
            Get Started
          </button>
        </div>
        <div className="w-[700px] h-[547px] bg-[#C4DEFD]"></div>
      </div>
      {/*SECOUND BOX*/}
      <div className=" items-center w-[1480px] h-[661px] flex gap-[100px] ">
        <div className=" w-[710px] h-[661px] ">
          <img src="./R.png" alt="work" className="w-[710px] h-[661px]" />
        </div>
        <div className=" p-5 w-[670px] h-[294px] flex flex-col  gap-[60px]">
          <div className="w-[670px] h-[171px] flex flex-col gap-[24px]">
            <h1 className="font-serif font-[700] text-[72px] leading-[87.14px] text-[#212529] tracking-[-2%]">Work together </h1>
            <p className="font-serif font-[400] text-[18px] leading-[30px] translate-[-2%] text-[#212529]">
              With whitepace, share your notes with your colleagues and
              collaborate on them. You can also publish a note to the internet
              and share the URL with others.
            </p>
          </div>
          <button className="w-[186px] h-[63px] rounded-[6px] pt-[20px] pr-[40px] pb-[20px] pl-[40px] bg-[#4F8CF9]">Try it now</button>
        </div>
      </div>
    </div>
  );
};

export default Work;
