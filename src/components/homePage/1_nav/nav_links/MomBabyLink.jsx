// react
import React, { useEffect, useState } from "react";

// npm packages
import { useDetectClickOutside } from "react-detect-click-outside";

// media Files
import momBaby from "../../../../assets/img/landingPage/nav/momBaby.svg";
import down_arrow from "../../../../assets/img/landingPage/nav/down_arrow.png";
import dropdown_triangle from "../../../../assets/img/landingPage/nav/dropdown_triangle.svg";

const MomBabyLink = () => {
  // Local variables
  const [openDropdown, setOpenDropDown] = useState(false);

  // close menu items list when clicked outside
  const closeMomBabyDropdown = () => {
    setOpenDropDown(false);
  };
  const momBabyOutsideClickDetector = useDetectClickOutside({
    onTriggered: closeMomBabyDropdown,
  });

  return (
    <div>
      <div ref={momBabyOutsideClickDetector} className="relative">
        <div
          onClick={() => {
            setOpenDropDown(!openDropdown);
          }}
        >
          <img
            src={momBaby}
            alt="Mom &amp; Baby"
            className="w-[40px] mx-auto mb-1"
          />
          <div className="flex items-center gap-1 relative cursor-pointer ">
            <h1 className="font-bold text-xl">Mom &amp; Baby</h1>
            <img
              src={down_arrow}
              alt="..."
              className="absolute top-[50%] -right-4"
            />
          </div>
        </div>

        <div
          className={` ${
            openDropdown ? "block" : "hidden"
          } absolute top-[105%] left-0 w-[200px] z-50 pt-5`}
        >
          <div className="bg-white relative text-[#070707] p-5 pt-10  font-medium text-lg">
            <h1 className="mb-5 cursor-pointer hover:underline underline-offset-2 transition-all">
              Flour Packs.
            </h1>
            <h1 className="mb-5 cursor-pointer hover:underline underline-offset-2 transition-all">
              Dosa Mix
            </h1>
            <h1 className="mb-5 cursor-pointer hover:underline underline-offset-2 transition-all">
              Noodles and Pasta
            </h1>
            <h1 className="mb-5 cursor-pointer hover:underline underline-offset-2 transition-all">
              Rasam &amp; Soups
            </h1>
            <h1 className="mb-5 cursor-pointer hover:underline underline-offset-2 transition-all">
              Spice Blends
            </h1>
            <h1 className="mb-5 cursor-pointer hover:underline underline-offset-2 transition-all">
              Beverage Mixes
            </h1>
            <h1 className="mb-5 cursor-pointer hover:underline underline-offset-2 transition-all">
              Shop All
            </h1>

            <img
              src={dropdown_triangle}
              alt="..."
              className="absolute -top-5 left-5"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MomBabyLink;

// Second variant

const MomBabyLink2 = () => {
  // Local variables
  const [openDropdown, setOpenDropDown] = useState(false);

  // close menu items list when clicked outside
  const closeMomBabyDropdown = () => {
    setOpenDropDown(false);
  };
  const momBabyOutsideClickDetector = useDetectClickOutside({
    onTriggered: closeMomBabyDropdown,
  });

  return (
    <div>
      <div ref={momBabyOutsideClickDetector} className="relative">
        <div
          onClick={() => {
            setOpenDropDown(!openDropdown);
          }}
        >
          <div className="flex items-center gap-1 relative cursor-pointer ">
            <h1 className="font-bold text-base lg:text-lg">Mom &amp; Baby</h1>
            <img
              src={down_arrow}
              alt="..."
              className="absolute top-[50%] -right-4"
            />
          </div>
        </div>

        <div
          className={` ${
            openDropdown ? "block" : "hidden"
          } absolute top-[105%] left-0 w-[200px] z-50 pt-5`}
        >
          <div className="bg-white relative text-[#070707] p-5 pt-10  font-medium text-sm lg:text-base">
            <h1 className="mb-5 cursor-pointer hover:underline underline-offset-2 transition-all">
              Flour Packs.
            </h1>
            <h1 className="mb-5 cursor-pointer hover:underline underline-offset-2 transition-all">
              Dosa Mix
            </h1>
            <h1 className="mb-5 cursor-pointer hover:underline underline-offset-2 transition-all">
              Noodles and Pasta
            </h1>
            <h1 className="mb-5 cursor-pointer hover:underline underline-offset-2 transition-all">
              Rasam &amp; Soups
            </h1>
            <h1 className="mb-5 cursor-pointer hover:underline underline-offset-2 transition-all">
              Spice Blends
            </h1>
            <h1 className="mb-5 cursor-pointer hover:underline underline-offset-2 transition-all">
              Beverage Mixes
            </h1>
            <h1 className="mb-5 cursor-pointer hover:underline underline-offset-2 transition-all">
              Shop All
            </h1>

            <img
              src={dropdown_triangle}
              alt="..."
              className="absolute -top-5 left-5"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export { MomBabyLink2 };
