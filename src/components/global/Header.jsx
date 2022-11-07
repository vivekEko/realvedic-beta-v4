// React
import React from "react";
import { useNavigate } from "react-router-dom";

// Routing
import { Link } from "react-router-dom";

// Media files
import logo from "../../assets/img/header/realvedic_logo.svg";
import avatar from "../../assets/img/header/avatar.svg";
import search from "../../assets/img/header/search.svg";
import cart from "../../assets/img/header/cart.svg";
import back from "../../assets/img/header/back_arrow.svg";

// State Management (Recoil JS)
import sidebarStatusAtom from "../../recoil/sidebar/sidebarStatusAtom";
import homePageStatusAtom from "../../recoil/misc/homePageStatusAtom";
import { useRecoilState } from "recoil";

// components
import { MomBabyLink2 } from "../homePage/1_nav/nav_links/MomBabyLink";
import { PharmaLink2 } from "../homePage/1_nav/nav_links/PharmaLink";
import { ProductsLink2 } from "../homePage/1_nav/nav_links/ProductsLink";

const Header = () => {
  return (
    <div className=" bg-[#fcedd1] md:bg-white py-3 sticky right-0 left-0 top-0 z-[95] ">
      <div className="flex justify-between items-center w-[85%] mx-auto ">
        {/* Logo container */}
        <div className="w-fit flex-1  md:flex-none ">
          <Link to="/">
            <img
              src={logo}
              alt="Realvedic Logo"
              className="mb-2 w-[100px] md:w-[80px] lg:w-[100px]  "
            />
          </Link>
        </div>

        {/* header icons */}
        <div className="flex justify-between items-center gap-5 ">
          <img
            src={avatar}
            alt="avatar"
            className="w-[25px] lg:w-[30px] hidden md:block"
          />
          <img src={search} alt="search" className="w-[25px] lg:w-[30px]" />
          <Link to="/cart/">
            <img
              src={cart}
              alt="cart"
              className="w-[25px] lg:w-[30px] mr-[35px]"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;

// Second Variant Header
const Header2 = () => {
  return (
    <div className=" bg-[#FCEDD1] md:bg-white py-3 sticky top-0 z-[95] md:static ">
      <div className="flex justify-between items-center w-[85%] mx-auto ">
        {/* Logo container */}
        <div className="w-fit flex-1  md:flex-none ">
          <Link to="/">
            <img
              src={logo}
              alt="Realvedic Logo"
              className="mb-2 w-[100px] md:w-[80px] lg:w-[100px]  "
            />
          </Link>
        </div>

        {/* nav links */}
        <div className="  justify-around items-center gap-10  mx-auto py-5 hidden md:flex  flex-1 px-5">
          <div>
            <Link to="/about_us">
              <h1 className="font-bold text-base lg:text-lg">Blog</h1>
            </Link>
          </div>

          <MomBabyLink2 />
          <ProductsLink2 />
          <PharmaLink2 />
          <div>
            <div className="flex items-center gap-1 relative">
              <h1 className="font-bold text-base lg:text-lg">Doctors</h1>
            </div>
          </div>
        </div>

        {/* header icons */}
        <div className="flex justify-between items-center gap-5 ">
          <img
            src={avatar}
            alt="avatar"
            className="w-[25px] lg:w-[30px] hidden md:block"
          />
          <img src={search} alt="search" className="w-[25px] lg:w-[30px]" />
          <Link to="/cart/">
            <img
              src={cart}
              alt="cart"
              className="w-[25px] lg:w-[30px] mr-[35px]"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export { Header2 };

const Hamburger = () => {
  // Global variables
  const [sidebarStatus, setSidebarStatus] = useRecoilState(sidebarStatusAtom);
  return (
    <div
      className={`  md:hidden flex-1 md:flex-auto flex justify-end z-[150] fixed right-5  top-9  `}
    >
      <div
        onClick={() => setSidebarStatus(!sidebarStatus)}
        className={` ${sidebarStatus ? "py-3  " : "py-1 "} cursor-pointer  `}
      >
        <div className=" w-fit  ">
          {/* Fist bar */}
          <div className="flex justify-start items-center gap-1 ">
            <div
              className={`  ${
                sidebarStatus ? "hidden" : "block"
              } h-[4px] w-[4px] bg-[#C57963] rounded-full`}
            ></div>
            <div
              className={`h-[3px] transition  ${
                sidebarStatus ? "w-[25px] rotate-45 " : "w-[20px]"
              } bg-[#C57963] rounded-lg `}
            ></div>
          </div>

          {/* Second bar */}
          <div
            className={` ${
              sidebarStatus ? "hidden transition duration-500" : "flex"
            }  justify-start items-center gap-1 my-[4px]`}
          >
            <div className="h-[4px] w-[4px] bg-[#C57963] rounded-full"></div>
            <div className="h-[3px] w-[18px] bg-[#C57963] rounded-lg"></div>
          </div>

          {/* Third bar */}
          <div className="flex justify-start items-center gap-1">
            <div
              className={` ${
                sidebarStatus ? "hidden" : "block"
              } h-[4px] w-[4px] bg-[#C57963] rounded-full`}
            ></div>
            <div
              className={`h-[3px] transition  ${
                sidebarStatus
                  ? "w-[25px] -rotate-45 -translate-y-[4px] "
                  : "w-[20px]"
              } bg-[#C57963] rounded-lg `}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Hamburger };

// Back button

const BackButton = () => {
  //   Global variable
  const [homeIsActive, setHomeIsActive] = useRecoilState(homePageStatusAtom);
  // go back feature
  const navigate = useNavigate();

  return (
    <div
      className={`z-[150]  md:hidden  ${
        homeIsActive ? "hidden" : "block"
      }  fixed left-2  top-9 cursor-pointer`}
    >
      <img
        src={back}
        alt="..."
        className="w-[15px]"
        onClick={() => navigate(-1)}
      />
    </div>
  );
};

export { BackButton };
