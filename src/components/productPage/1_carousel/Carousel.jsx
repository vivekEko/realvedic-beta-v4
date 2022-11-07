import React, { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const items = [
  <div
    className=" w-[90%] sm:w-[80%] max-w-[600px]   mx-auto  bg-[#d9d9d9] aspect-square flex justify-center items-center text-3xl"
    data-value="1"
  >
    1
  </div>,
  <div
    className=" w-[90%] sm:w-[80%] max-w-[600px]   mx-auto  bg-[#d9d9d9] aspect-square flex justify-center items-center text-3xl"
    data-value="2"
  >
    2
  </div>,
  <div
    className=" w-[90%] sm:w-[80%] max-w-[600px]   mx-auto  bg-[#d9d9d9] aspect-square flex justify-center items-center text-3xl"
    data-value="3"
  >
    3
  </div>,
  <div
    className=" w-[90%] sm:w-[80%] max-w-[600px]   mx-auto  bg-[#d9d9d9] aspect-square flex justify-center items-center text-3xl"
    data-value="4"
  >
    4
  </div>,
  <div
    className=" w-[90%] sm:w-[80%] max-w-[600px]   mx-auto  bg-[#d9d9d9] aspect-square flex justify-center items-center text-3xl"
    data-value="5"
  >
    5
  </div>,
  <div
    className=" w-[90%] sm:w-[80%] max-w-[600px]   mx-auto  bg-[#d9d9d9] aspect-square flex justify-center items-center text-3xl"
    data-value="6"
  >
    6
  </div>,
];

const Carousel = () => {
  const thumbItems = (items, [setThumbIndex, setThumbAnimation]) => {
    return items.map((item, i) => (
      <div
        key={i}
        className=" w-[80px] lg:w-[100px]  aspect-square"
        onClick={() => (setThumbIndex(i), setThumbAnimation(true))}
      >
        {item}
      </div>
    ));
  };

  const [mainIndex, setMainIndex] = useState(0);
  const [mainAnimation, setMainAnimation] = useState(false);
  const [thumbIndex, setThumbIndex] = useState(0);
  const [thumbAnimation, setThumbAnimation] = useState(false);
  const [thumbs] = useState(
    thumbItems(items, [setThumbIndex, setThumbAnimation])
  );

  const slideNext = () => {
    if (!thumbAnimation && thumbIndex < thumbs.length - 1) {
      setThumbAnimation(true);
      setThumbIndex(thumbIndex + 1);
    }
  };

  const slidePrev = () => {
    if (!thumbAnimation && thumbIndex > 0) {
      setThumbAnimation(true);
      setThumbIndex(thumbIndex - 1);
    }
  };

  const syncMainBeforeChange = (e) => {
    setMainAnimation(true);
  };

  const syncMainAfterChange = (e) => {
    setMainAnimation(false);

    if (e.type === "action") {
      setThumbIndex(e.item);
      setThumbAnimation(false);
    } else {
      setMainIndex(thumbIndex);
    }
  };

  const syncThumbs = (e) => {
    setThumbIndex(e.item);
    setThumbAnimation(false);

    if (!mainAnimation) {
      setMainIndex(e.item);
    }
  };

  return [
    <div className="mt-5  max-w-[600px]">
      <AliceCarousel
        activeIndex={mainIndex}
        animationType="slide"
        animationDuration={800}
        disableDotsControls
        disableButtonsControls
        infinite
        items={items}
        mouseTracking={!thumbAnimation}
        onSlideChange={syncMainBeforeChange}
        onSlideChanged={syncMainAfterChange}
        touchTracking={!thumbAnimation}
      />

      <div className="thumbs  relative mt-5 w-[240px] lg:w-[300px]  mx-auto ">
        <AliceCarousel
          activeIndex={thumbIndex}
          autoWidth
          disableDotsControls
          disableButtonsControls
          items={thumbs}
          mouseTracking={false}
          onSlideChanged={syncThumbs}
          touchTracking={!mainAnimation}
        />
        <div
          onClick={slideNext}
          className=" absolute z-20 right-[-10px]  rotate-180  top-[15%]   w-fit  h-[50px] flex justify-end items-center   opacity-80 hover:opacity-100  group cursor-pointer text-black"
        >
          &lang;
        </div>

        <div
          onClick={slidePrev}
          className=" absolute z-20 left-[-10px]  top-[15%]   w-fit  h-[50px] flex justify-end items-center   opacity-80 hover:opacity-100  group cursor-pointer text-black"
        >
          &lang;
        </div>
      </div>
    </div>,
  ];
};

export default Carousel;
