// react
import React, { useEffect, useState } from "react";

// media files
import pharma from "../../../../assets/img/landingPage/nav/pharma.svg";
import down_arrow from "../../../../assets/img/landingPage/nav/down_arrow.png";
import dropdown_triangle from "../../../../assets/img/landingPage/nav/dropdown_triangle.svg";

// npm packages
import { useDetectClickOutside } from "react-detect-click-outside";

const PharmaLink = () => {
  // Local variables
  const [openDropdown, setOpenDropDown] = useState(false);

  // close menu items list when clicked outside
  const closePharmaDropdown = () => {
    setOpenDropDown(false);
  };
  const productsOutsideClickDetector = useDetectClickOutside({
    onTriggered: closePharmaDropdown,
  });

  return (
    <div ref={productsOutsideClickDetector} className="relative ">
      <div
        onClick={() => {
          setOpenDropDown(!openDropdown);
        }}
      >
        <img src={pharma} alt="Pharma" className="w-[40px] mx-auto mb-1" />
        <div className="flex items-center gap-1 relative cursor-pointer ">
          <h1 className="font-bold text-xl">Pharma</h1>
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
        } absolute top-[105%] z-50 left-0 w-[200px]  pt-5`}
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
  );
};

export default PharmaLink;

// Second Variant

const PharmaLink2 = () => {
  // Local variables
  const [openDropdown, setOpenDropDown] = useState(false);

  // close menu items list when clicked outside
  const closePharmaDropdown = () => {
    setOpenDropDown(false);
  };
  const productsOutsideClickDetector = useDetectClickOutside({
    onTriggered: closePharmaDropdown,
  });

  return (
    <div ref={productsOutsideClickDetector} className="relative ">
      <div
        onClick={() => {
          setOpenDropDown(!openDropdown);
        }}
      >
        <div className="flex items-center gap-1 relative cursor-pointer ">
          <h1 className="font-bold text-base lg:text-lg">Pharma</h1>
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
        } absolute top-[105%] z-50 left-0 w-[200px]  pt-5`}
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
  );
};

export { PharmaLink2 };
