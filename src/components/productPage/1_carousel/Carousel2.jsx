//react
import React, { useState } from "react";

// Carousel
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "../../../assets/img/productPage/carousel/product1.svg";
import image2 from "../../../assets/img/productPage/carousel/product2.svg";

// Media files
import leftArrow from "../../../assets/img/landingPage/banner/left_arrow.png";
import rightArrow from "../../../assets/img/landingPage/banner/right_arrow.png";
// State management (Recoil JS)
import { useRecoilState } from "recoil";
import productPageAtom from "../../../recoil/productPage/productPageAtom";

const PreviousBtn = (props) => {
  // console.log(props);
  const { className, onClick } = props;
  return (
    <div className={` ${className} `} onClick={onClick}>
      <img src={leftArrow} alt="previous" className=" -translate-y-5 " />
    </div>
  );
};
const NextBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <img src={rightArrow} alt="previous" className=" -translate-y-5 " />
    </div>
  );
};

const Carousel2 = () => {
  // global variables
  const [productPageApiData, setProductPageApiData] =
    useRecoilState(productPageAtom);

  // const data = [image1, image2];
  return (
    <div className="mt-5  max-w-[600px] ">
      <Slider
        dots
        initialSlide={2}
        infinite
        prevArrow={<PreviousBtn />}
        nextArrow={<NextBtn />}
        customPaging={(i) => {
          return (
            <div className="hidden md:block">
              <img
                src={
                  process.env.REACT_APP_BASE_LINK +
                  "/" +
                  productPageApiData?.slide[i]
                }
                alt=""
              />
            </div>
          );
        }}
        dotsClass="slick-dots custom-dots "
      >
        {productPageApiData?.slide?.map((data, index) => {
          return (
            <div
              key={index}
              className=" w-[90%] sm:w-[80%] max-w-[600px]   mx-auto  aspect-square  text-3xl  outline-0 "
            >
              <img
                src={process.env.REACT_APP_BASE_LINK + "/" + data}
                alt=""
                className="mx-auto w-full"
              />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Carousel2;
