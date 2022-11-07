// react
import React from "react";

// Media files
import blob from "../../../assets/img/landingPage/vaidya/blob.svg";

const Vaidya = () => {
  return (
    <section className="my-16 ">
      <div className="w-[85%] sm:w-[80%] md:[40%]  mx-auto relative max-w-[900px] ">
        <img
          src={blob}
          alt="consult our vaidyas"
          className="w-[100%] md:w-[90%]  mx-auto max-w-[900px]"
        />

        <div className="text-center absolute top-0 left-0 right-0 bottom-0">
          <div className="flex flex-col justify-center items-center h-full w-[80%] mx-auto">
            <h1 className="font-bold text-2xl lg:text-3xl mb-5  w-[60%] mx-auto">
              Consult our <span className="text-[#C57963]">Vaidya</span>
            </h1>
            <p className="text-sm sm:text-base lg:text-lg md:w-[90%]  lg:w-[80%] xl:w-[75%]">
              Consult our team of experienced Doctors &amp; Practitioners, to
              know more about your body and get the right guidance, to attain
              the path of holistic living.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vaidya;
