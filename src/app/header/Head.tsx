import React from "react";

const Header = () => {
  return (
    <div className=" border-b-[0.5px]  border-blue-100 flex justify-between items-center left-[1px] p-[25px] pl-[220px] pr-[220px] bg-[#043873] h-[90px] w-[1920px]">
      <img
        src="./Logo.png"
        alt="whit-space logo"
        className="w-[191px] h-[34px] mt-[2.5]"
      />
      <div className="flex gap-[20px] w-[737.5px] h-[60px] items-center ml-[100px]">
        <ul className="flex items-center w-[549px] h-[23px] gap-[32px] text-white">
          <li>Products</li>
          <li>Solutions</li>
          <li>Resources</li>
          <li>Pricing</li>
        </ul>
        <button
          className="
        h-[50px]
        w-[100px]
        rounded-[8px]
        bg-[#FFE492]
        "
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Header;
