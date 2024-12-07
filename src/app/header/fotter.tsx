import React from 'react'

const  Fotter = () => {
  return (
    <div className="w-[1920px] h-[461px]  top-[3626px] pt-[50px] flex justify-center pr-[350px] flex-col items-center bg-[#244568]">
      <div className="w-[1000px] h-[400px] flex p-[30px] items-center gap-[100px] border-t-2 border-white">
        <div className="text-white w-[350px] h-[200px] p-[5px]">
          <img src="./Logo.png" alt="hero" className="w-[144px] h-[34px]" />
          <p className='font-serif font-[400] text-[18px] '>
            whitepace was created for the new ways we live and work. We make a
            better workspace around the world
          </p>
        </div>
        <div className="text-white w-[350px] h-[200px]"> 
            <h1 className='font-serif  text-[28px] font-[700]'>Product</h1>
            <ul>
                <li>Overview</li>
                <li>Pricing</li>
                <li>Customer stories</li>
            </ul>
        </div>
        <div className=" w-[350px] h-[200px] text-white ">
            <h1 className='font-serif font-[700] text-[28px]'>
                Resources
            </h1>
            <ul>
                <li>Blog</li>
                <li>Guides & tutorials</li>
                <li> Help center</li>
            </ul>
             </div>
        <div className="text-white w-[350px] h-[200px]"> 
            <h1 className='font-serif font-[700] text-[28px]'>
                Compony
            </h1>
            <ul>
                <li>About Us</li>
                <li>Careers</li>
                <li>Media Kit</li>
            </ul>
        </div>
      </div>
      <div className='w-[1000px] p-3 bg-transparent flex justify-center border-x-2 border-blue-100'><h3 className='text-center w-[100px] border-t-2 border-blue-100 text-white'>Back to top</h3></div>
    </div>
  );
}

export default Fotter
