import arrow from "/Arrow.png";
import twitter from "/twitter.png";
import print from "/printerest.svg";
import fb from "/facebook.svg"
//
import cross from "/cross.png";

const Home = () => {
  return (
    <div className=" bg-black ">
      <div className="container mx-auto h-120 lg:w-175 ">
        <div className="text-center  pt-14 space-y-6 ">
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
              className="btn font-effa px-7 py-2 border-none bg-[#A8FF35] rounded-full text-black text-xs font-bold mt-3
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

        <div className="flex">
        <div className="text-white flex   mt-5 relative">
          <div className="bg-[#181818] px-5 py-3 flex flex-wrap  items-center gap-3 relative -rotate-4 shadow-lg mb-12 my-5 z-10">
            <img src={twitter} className="w-7 h-7" />
            <h1 className="font-roboto flex items-center gap-1 relative text-white">
              Cryptopunk - Search
              <span className="ml-32 absolute border-gradient-to-r  text-gray-400 text-lg font-light cursor-pointer hover:text-gray-200 transition bg-[#181818] opacity-80">
                <img src={cross} alt="" className="ml-3 " />
              </span>
            </h1>
          </div>

          <div className="bg-[#181818] px-5 py-3  flex flex-wrap items-center gap-3 -rotate-2 relative shadow-lg -ml-14 my-8 mt-9 z-0">
            <img src={print} className="w-7 h-7" />
            <h1 className="font-roboto flex  items-center gap-1 relative  text-white">
              Popular Design - Search
              <span className="ml-32 absolute border-gradient-to-r  text-gray-400 text-lg font-light cursor-pointer hover:text-gray-200 transition bg-[#181818] opacity-80">
                <img src={cross} alt="" className="ml-7" />
              </span>
            </h1>
          </div>


          <div className="bg-[#181818] px-6  flex flex-wrap items-center gap-3 -rotate-2 relative
           shadow-lg -ml-7  my-10 mb-7  z-10">
            <img src={fb} className="w-7 h-7" />
            <h1 className="font-roboto flex items-center gap-1 relative  text-white">
              Product Design - Search
              <span className="ml-32 absolute border-gradient-to-r  text-gray-400 text-lg font-light cursor-pointer hover:text-gray-200 transition bg-[#181818] opacity-80">
                <img src={cross} alt="" className="ml-7" />
              </span>
            </h1>  
          </div>
        </div>
       
        </div>



      </div>
    </div>
  );
};  

export default Home;
