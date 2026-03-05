import React from 'react'
import cross from "/cross.png";

const OpenTab = () => {
  return (
    <div className='conatainer mx-auto h-96 bg-[#A8FF35] flex flex-col justify-center items-center'>
            <h1 className='text-7xl font-bold font-effa'>Open new tabs is sh*t </h1>

            <div className="bg-white rounded-2xl p-5 mt-5">
                 <div className="bg-[#181818] px-8 py-3 flex flex-wrap  items-center
                           gap-3 relative  shadow-lg mb-12 my-8 z-50">
                            <img className="w-7 h-7" />
                            <h1 className="font-roboto flex items-center gap-1 relative text-white">
                              Findtrend Elon Musk
                              <span className="ml-32 absolute border-gradient-to-r  text-gray-400 text-lg font-light cursor-pointer hover:text-gray-200 transition bg-[#181818] opacity-80">
                                <img src={cross} alt="" className="ml-3 " />
                              </span>
                            </h1>
                          </div>
            </div>
    </div>
  )
}

export default OpenTab