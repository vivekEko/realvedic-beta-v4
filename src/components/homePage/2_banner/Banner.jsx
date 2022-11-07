// React
import React, { useEffect, useState } from "react";

// Media files
import leftArrow from "../../../assets/img/landingPage/banner/left_arrow.svg";
// import leftDarkArrow from "../../../assets/img/landingPage/banner/left_dark_arrow.png";
// import rightDarkArrow from "../../../assets/img/landingPage/banner/right_dark_arrow.png";
import rightArrow from "../../../assets/img/landingPage/banner/right_arrow.svg";
import banner1 from "../../../assets/img/landingPage/banner/banner1.svg";
import banner2 from "../../../assets/img/landingPage/banner/banner2.svg";

// Base API
import BASE_API_ADDRESS from "../../../misc/baseAddress/BaseAPIAddress";

// Carousel / Banner
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

// State management (Recoil JS)
import landingPageAtom from "../../../recoil/landingPage/landingPageAtom";
import { useRecoilState } from "recoil";

// Carousel
const handleDragStart = (e) => e.preventDefault();
const responsiveObject = {
  0: {
    items: 1,
  },
};

const Banner = () => {
  // local variables
  const [, setSelectedIndex] = useState(0);
  const [firstBannerArray, setFirstBannerArray] = useState([]);
  const [secondBannerArray, setSecondBannerArray] = useState([]);

  // Global variables
  const [landingPageApiData] = useRecoilState(landingPageAtom);

  // Banner Items
  const FirstBannerItems = landingPageApiData?.banner_1?.map((data, index) => {
    return (
      <div
        onDragStart={handleDragStart}
        role="presentation"
        className=" flex justify-center h-full  items-center w-full  "
      >
        <div className="  mx-1 w-full bg-[#d9d9d9] flex justify-center items-center text-xl text-black ">
          <img
            src={process.env.REACT_APP_BASE_LINK + "/" + data}
            alt={data}
            className="w-full"
          />
        </div>
      </div>
    );
  });

  const SecondBannerItems = landingPageApiData?.banner_2?.map((data, index) => {
    return (
      <div
        onDragStart={handleDragStart}
        role="presentation"
        className=" flex justify-center h-full  items-center w-full  "
      >
        <div className="  mx-1 w-full bg-[#d9d9d9] flex justify-center items-center text-xl text-black ">
          <img
            src={process.env.REACT_APP_BASE_LINK + "/" + data}
            alt={data}
            className="w-full"
          />
        </div>
      </div>
    );
  });

  useEffect(() => {
    setFirstBannerArray(FirstBannerItems);
    setSecondBannerArray(SecondBannerItems);
  }, [landingPageApiData]);

  return (
    <section className="mt-5 ">
      {/* carousel */}
      <div className="  w-[85%] mx-auto relative">
        <div className=" h-full mx-auto relative md:flex justify-center items-center ">
          <div className="md:w-[50%]">
            <AliceCarousel
              mouseTracking
              autoPlay={false}
              autoPlayInterval={2000}
              infinite={true}
              disableDotsControls
              items={firstBannerArray}
              responsive={responsiveObject}
              renderPrevButton={() => {
                return (
                  <div className=" absolute z-20 left-[-20px]  md:left-[10px]  top-[40%] w-[50px]  h-[50px] flex justify-start items-center   opacity-80 hover:opacity-100  group cursor-pointer">
                    <img src={leftArrow} alt="..." className="md:hidden" />
                    <img
                      src={leftArrow}
                      alt="..."
                      className="hidden md:block w-[20px] h-[30px]"
                    />
                  </div>
                );
              }}
              renderNextButton={() => {
                return (
                  <div className=" absolute z-20 right-[-20px]  md:right-[10px]  top-[40%]   w-[50px]  h-[50px] flex justify-end items-center   opacity-80 hover:opacity-100  group cursor-pointer">
                    <img src={rightArrow} alt="..." className="md:hidden" />
                    <img
                      src={rightArrow}
                      alt="..."
                      className="hidden md:block w-[20px] h-[30px]"
                    />
                  </div>
                );
              }}
              onSlideChanged={(e) => {
                setSelectedIndex(e.item);
              }}
            />
          </div>

          <div className="md:w-[50%]">
            <AliceCarousel
              mouseTracking
              autoPlay={false}
              autoPlayInterval={2000}
              infinite={true}
              disableDotsControls
              items={secondBannerArray}
              responsive={responsiveObject}
              renderPrevButton={() => {
                return (
                  <div className=" absolute left-[-20px] md:left-[10px] top-[40%] w-[50px]  h-[50px] flex justify-start items-center   opacity-80 hover:opacity-100  group cursor-pointer">
                    <img src={leftArrow} alt="..." className="md:hidden" />
                    <img
                      src={leftArrow}
                      alt="..."
                      className="hidden md:block w-[20px] h-[30px]"
                    />
                  </div>
                );
              }}
              renderNextButton={() => {
                return (
                  <div className="absolute right-[-20px] md:right-[10px]  top-[40%]  w-[50px]  h-[50px] flex justify-end items-center   opacity-80 hover:opacity-100  group cursor-pointer">
                    <img src={rightArrow} alt="..." className="md:hidden" />
                    <img
                      src={rightArrow}
                      alt="..."
                      className="hidden md:block w-[20px] h-[30px]"
                    />
                  </div>
                );
              }}
              onSlideChanged={(e) => {
                setSelectedIndex(e.item);
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
