import arrow from "/Arrow.png";
import twitter from "/twitter.png";
import print from "/printerest.svg";
import fb from "/facebook.svg"
import basket from '/ball.svg'
import cross from "/cross.png";

const Home = () => {
  return (
    <div className=" bg-black"
    style={{backgroundImage:"url('/BgHero.png')"}}
    >
      <div className="container mx-auto h-96 lg:w-175 ">
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

          </div>

      <div className=" flex justify-center items-center">
        <div className="text-white flex mt-5 relative gap-5">
          
          <div className="bg-[#181818] px-8 py-3 flex flex-wrap  items-center
           gap-3 relative -rotate-10 shadow-lg mb-12 my-8 z-50">
            <img src={twitter} className="w-7 h-7" />
            <h1 className="font-roboto flex items-center gap-1 relative text-white">
              Cryptopunk - Search
              <span className="ml-32 absolute border-gradient-to-r  text-gray-400 text-lg font-light cursor-pointer hover:text-gray-200 transition bg-[#181818] opacity-80">
                <img src={cross} alt="" className="ml-3 " />
              </span>
            </h1>
          </div>


          <div className="bg-[#181818] px-10 flex flex-wrap items-center gap-3 
          rotate-4 relative shadow-lg -ml-16 my-10 z-30">
            <img src={print} className="w-7 h-7" />
            <h1 className="font-roboto flex  items-center gap-1 relative  text-white">
              Popular Design - Search
              <span className="ml-32 absolute border-gradient-to-r  text-gray-400 text-lg font-light cursor-pointer hover:text-gray-200 transition bg-[#181818] opacity-80">
                <img src={cross} alt="" className="ml-7" />
              </span>
            </h1>
          </div>

          <div className="bg-[#181818] px-7  flex flex-wrap items-center gap-3 -rotate-2 relative
           shadow-lg -ml-12 -mt-0.5 mb-22 z-20">
            <img src={fb} className="w-7 h-7" />
            <h1 className="font-roboto flex items-center gap-1 relative  text-white">
              Product Design -  Search
              <span className="ml-32 absolute border-gradient-to-r  text-gray-400 text-lg font-light cursor-pointer hover:text-gray-200 transition bg-[#181818] opacity-80">
                <img src={cross} alt="" className="ml-7" />
              </span>
            </h1>  
          </div>

          <div className="bg-[#181818] px-4 py-3 mb-16 mt-5 flex flex-wrap items-center gap-3 
          rotate-10 relative shadow-lg -ml-12   z-10">
            <img src={basket} className="w-7 h-7" />
            <h1 className="font-roboto  flex items-center gap-1 relative  text-white pr-6">
              Elon Musk - Search
              <span className=" absolute right-0 border-gradient-to-r text-gray-400 text-lg
               font-light cursor-pointer hover:text-gray-200 transition bg-[#181818] opacity-80">
                <img src={cross}  className="w-5 h-5"  />
              </span>
            </h1>  
          </div>  
        </div>
        </div>
    </div>
  );
};  

export default Home;
