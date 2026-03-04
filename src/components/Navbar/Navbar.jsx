import { useState } from "react";
import logo from "/Vector.png";

const Navbar = () => {
  const [active, setActive] = useState("register");

  return (
    <div className="bg-black shadow-sm  ">
      <div className="container mx-auto px-6">
        <div className="navbar  h-20 text-white ">
          <div className="navbar-start flex gap-2">
            <img src={logo} className="h-5 w-5" alt="logo" />
            <a className="text-white text-lg font-semibold">Findtrend</a>
          </div>

          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 gap-2">
              <li>
                <a>About</a>
              </li>
              <li>
                <a>How It Works</a>
              </li>
              <li>
                <a>Pricing</a>
              </li>
              <li>
                <a>Solution</a>
              </li>
              <li>
                <a>Features</a>
              </li>
            </ul>
          </div>

          <div className="navbar-end">
            <div className="hidden lg:flex justify-center items-center gap-4">
              <a
                onClick={() => setActive("login")}
                className={` 
                ${
                  active === "login"
                    ? "btn bg-white text-black rounded-2xl text-md font-medium"
                    : " text-white "
                }`}
              >
                Login
              </a>
              <a
                onClick={() => setActive("register")}
                className={`${
                  active === "register"
                    ? "btn bg-white text-black rounded-2xl text-md font-medium"
                    : "text-white"
                }`}
              >
                Register
              </a>
            </div>

            <div className="dropdown dropdown-end lg:hidden">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>

              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 p-4  shadow bg-base-100 text-black  w-52 space-y-2"
              >
                <li>
                  <a>About</a>
                </li>
                <li>
                  <a>How It Works</a>
                </li>
                <li>
                  <a>Pricing</a>
                </li>
                <li>
                  <a>Solution</a>
                </li>
                <li>
                  <a>Features</a>
                </li>
                <hr className="mt-2" />

                <li>
                  <a
                    onClick={() => setActive("login")}
                    className={` 
                ${
                  active === "login"
                    ? "btn bg-white text-black rounded-2xl text-md font-medium"
                    : " text-white "
                }`}
                  >
                    Login
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => setActive("register")}
                    className={`${
                      active === "register"
                        ? "btn bg-white text-black rounded-2xl text-md font-medium"
                        : "text-black"
                    }`}
                  >
                    Register
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
