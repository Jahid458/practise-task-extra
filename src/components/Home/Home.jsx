import arrow from "/Arrow.png";
import twitter from "/twitter.png";
import print from "/printerest.svg";
import fb from "/facebook.svg";
import basket from "/ball.svg";
import cross from "/cross.png";
import OpenTab from "../OpenTab/OpenTab";

const Home = () => {
  return (
    <>
      <div className=" bg-black  "
        style={{ backgroundImage: "url('/BgHero.png')" }}
      >
        <div className="container mx-auto h-[60vh]   lg:w-175 ">
          <div className="text-center  pt-14 space-y-5 ">
            <h1 className="lg:text-5xl font-effa text-4xl font-black text-white ">
              Minimize your tabs. <br /> Find the trends!
            </h1>
            <p className="text-gray-400 font-effa  mt-4 text-sm justify-center items-center lg:text-lg font-normal">
              Don't let your computer memories consumes
              <br className="lg:hidden" /> all of those browser tabs.
              <br className=" sm:inline" />
              Findtrend let you gathers all of your favorite
              <br className="lg:hidden sm:inline" /> website into one place.
            </p>

            <div className="flex justify-center items-center gap-3">
              <button
                className="btn font-effa px-10 py-5 border-none bg-[#A8FF35] rounded-full text-black text-xs font-bold mt-3
                 flex items-center justify-center"
              >
                Get Started🔥
              </button>
              <div className="leading-1.5 rotate-6  lg:block hidden ">
                <span className="text-white text-xs font-good ">
                  All research <br /> start from here
                </span>
                <img src={arrow} alt="" className="rotate-5 w-10" />
              </div>
            </div>
          </div>
        </div>
  

        <div className="container mx-auto flex justify-center -translate-x-15 items-center pb-20 ">

          <div className=" flex relative ">
           {/* twitter */}
            <div className="bg-[#181818] -translate-y-10  flex px-12 py-3 flex-wrap pt-3  
             relative gap-3 -rotate-9  shadow-lg shadow-[#000000]/80   z-70 ">
              <div className="flex flex-wrap justify-center items-center gap-2">

              <img src={twitter} className="w-7 h-7" />
              <h1 className="font-roboto flex items-center gap-1 relative text-white">
                Cryptopunk - Search
                <span className="ml-32 absolute border-gradient-to-r  text-gray-400 text-lg font-light cursor-pointer hover:text-gray-200 transition bg-[#181818] opacity-80">
                  <img src={cross} alt="" className="ml-7 w-5 " />
                </span>
              </h1>

              </div>
            </div>
            
           {/* printesrest */}
            <div className="bg-[#181818]  flex  px-12 py-3 pt-5 gap-3 relative -mx-35 rotate-4 shadow-lg shadow-[#000000]/80  z-60"  >
              <img src={print} className="w-7 h-7" />
              <h1 className="font-roboto flex items-center gap-1 relative text-white">
                Popular Design - Search
                <span className="ml-32 absolute border-gradient-to-r  text-gray-400 text-lg font-light cursor-pointer hover:text-gray-200 transition bg-[#181818] opacity-80">
                  <img src={cross} alt="" className="ml-7 w-6 " />
                </span>
              </h1>
            </div>
              </div>
           {/* facebook */}
            <div className="bg-[#181818] shadow-lg shadow-[#000000]/80   flex px-12 gap-3 -mt-13 py-4 mx-12 pt-5 relative rotate-3 z-50"  >
              <img src={fb} className="w-7 h-7" />
              <h1 className="font-roboto flex items-center gap-1 relative text-white">
                Product Design - Search
                <span className="ml-32 absolute border-gradient-to-r  text-gray-400 text-lg font-light cursor-pointer hover:text-gray-200 transition bg-[#181818] opacity-80">
                  <img src={cross} alt="" className="ml-5 w-6 " />
                </span>
              </h1>
            </div>
           {/* BAsket BAll     */}
            <div className="bg-[#181818] shadow-lg shadow-[#000000]/80   flex px-12  py-4 gap-3  pt-5 relative -mx-34 rotate-4 mt-9  z-10"  >
              <img src={basket} className="w-7 h-7" />
              <h1 className="font-roboto flex items-center gap-1 relative text-white">
                Elon Musk  - Search
                <span className="ml-32 absolute border-gradient-to-r  text-gray-400 text-lg font-light cursor-pointer hover:text-gray-200 transition bg-[#181818] opacity-80">
                  <img src={cross} alt="" className="ml-5 w-7 " />
                </span>
              </h1>
            </div>

        </div>






      </div>

      <OpenTab />
    </>
  );
};

export default Home;
