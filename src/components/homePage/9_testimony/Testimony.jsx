// React
import React, { useEffect, useState } from "react";

// Media Files
import blob1 from "../../../assets/img/landingPage/team/blob1.png";
import blob2 from "../../../assets/img/landingPage/team/blob2.png";
import blob3 from "../../../assets/img/landingPage/team/blob3.png";
import blob4 from "../../../assets/img/landingPage/team/blob4.png";
import profileImg from "../../../assets/img/landingPage/team/rectangle.png";

// State Management (Recoil Js)
import { useRecoilState } from "recoil";
import landingPageAtom from "../../../recoil/landingPage/landingPageAtom";

// Base API Address
import BASE_API_ADDRESS from "../../../misc/baseAddress/BaseAPIAddress";

// Carousel / Banner
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

// Carousel
const handleDragStart = (e) => e.preventDefault();
const responsiveObject = {
  0: {
    items: 1,
  },

  768: {
    items: 2,
  },
  1024: {
    items: 3,
  },
  1200: {
    items: 4,
  },
};

const Testimony = () => {
  // Global Variable
  const [landingPageApiData] = useRecoilState(landingPageAtom);

  // local variables
  const [, setSelectedIndex] = useState(0);
  const [testimonials, setTestimonials] = useState();

  const testimonyItems = landingPageApiData?.testimonial?.map((data, index) => {
    return (
      <div
        key={index}
        onDragStart={handleDragStart}
        role="presentation"
        className="mx-5 "
      >
        {/* Image with vector*/}
        <div className="relative mx-auto w-fit ">
          <img
            src={process.env.REACT_APP_BASE_LINK + "/" + data?.back}
            alt="..."
            className="w-64  "
          />
          <img
            src={process.env.REACT_APP_BASE_LINK + "/" + data?.front}
            alt="..."
            className="absolute rounded-full w-40   aspect-square z-10 top-[25%]   "
          />
        </div>

        <div className="mt-10 sm:w-[90%] mx-auto">
          <p className="text-center text-sm">{data?.content}</p>
        </div>
      </div>
    );
  });

  useEffect(() => {
    setTestimonials(testimonyItems);
  }, [landingPageApiData]);

  return (
    <section className="mt-10">
      <div>
        {/* Heading */}
        <div className="flex justify-between items-center w-[85%] mx-auto ">
          <h1 className="text-xl font-bold">Testimony</h1>
        </div>

        <div className="w-[85%] mx-auto my-10">
          <AliceCarousel
            mouseTracking
            autoPlay={false}
            autoPlayInterval={2000}
            infinite={true}
            items={testimonials}
            disableButtonsControls
            renderDotsItem={(e) => {
              return (
                <div
                  className={`transition lg:hidden
                   ${
                     e?.isActive === "__active"
                       ? //  &&
                         //  e?.activeIndex === selectedIndex
                         "bg-[#C57963] h-[8px] w-[8px]"
                       : "bg-[#FCEDD1] h-[6px] w-[6px]"
                   }
                   rounded-full mx-2`}
                ></div>
              );
            }}
            responsive={responsiveObject}
            onSlideChanged={(e) => {
              setSelectedIndex(e.item);
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Testimony;
