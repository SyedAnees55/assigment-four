import React from 'react'

const WORK = () => {
  return (
    <div className="w-[1920px] h-[574px]  top-[2513px] p-[250px] bg-[#043873]">
      <div className="w-[1481px] h-[294px] flex flex-col  gap-[60px]">
        <div className="w-[1064px] h-[171px] flex flex-col gap-[24px]">
          <div className="w-[1064px] h-[87px]">
            <h1 className="font-serif font-[700] text-[60px] leading-[87.14px] tracking-[-2%] text-[#ffffff] text-center">
              Your work, everywhere you are
            </h1>
          </div>
          <div className="w-[1064px] h-[60px]">
            <p className="font-serif font-[400] text-[18px] leading-[30px] tracking-widest text-center text-[#ffffff]">
              Access your notes from your computer, phone or tablet by
              synchronising with various services, including whitepace, Dropbox
              and OneDrive. The app is available on Windows, macOS, Linux,
              Android and iOS. A terminal app is also available!
            </p>
          </div>
        </div>
        <button className='w-[195px] h-[63px] ml-96 rounded-[8px] pt-[20px] pr-[40px] pb-[20px] pl-[40px]  bg-[#4F9CF9]'>try Taskey</button>
      </div>
    </div>
  );
}

export default WORK
