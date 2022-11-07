// react
import React from "react";

// media files
import product from "../../../assets/img/landingPage/category/rectangle.png";

// State Management (Recoil Js)
import { useRecoilState } from "recoil";
import landingPageAtom from "../../../recoil/landingPage/landingPageAtom";

// Base API Address
import BASE_API_ADDRESS from "../../../misc/baseAddress/BaseAPIAddress";
import { Link } from "react-router-dom";

const BestSeller = () => {
  // Global Variable
  const [landingPageApiData] = useRecoilState(landingPageAtom);

  return (
    <section className="mt-10">
      <div>
        {/* Heading */}
        <div className="flex justify-between items-center w-[85%] mx-auto mb-5">
          <h1 className="text-xl font-bold">Best Sellers</h1>
        </div>

        {/* bestseller grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4   gap-5 py-5 w-[85%] mx-auto">
          {landingPageApiData?.best_seller?.map((data, index) => {
            return (
              <div key={index} className="group">
                <Link to={"/product/" + data?.name}>
                  <div className="w-full overflow-hidden bg-[#FCEDD1]  min-h-[250px] flex justify-center items-end">
                    <img
                      src={process.env.REACT_APP_BASE_LINK + "/" + data?.image}
                      alt={data?.image}
                      className=" group-hover:scale-110 transition-all w-full mx-auto cursor-pointer "
                    />
                  </div>

                  <div className="flex justify-between items-start font-bold text-sm mt-5">
                    <h1 className="flex-[0.6] leading-4 text-xs sm:text-sm md:text-base cursor-pointer  md:leading-5">
                      {data?.name}
                    </h1>
                    <div className="flex-[0.4]">
                      <h1 className="p-3 bg-[#FCEDD1] w-fit ml-auto text-xs sm:text-sm md:text-base">
                        {data?.weight}
                      </h1>
                    </div>
                  </div>
                  <div className="">
                    <div className="ml-auto w-fit my-2  text-xs sm:text-sm md:text-base">
                      Rs. {data?.price?.toFixed(2)}
                    </div>
                    <div className="bg-[#FCF55C] text-xs sm:text-sm md:text-base text-center font-bold p-2 px-8 w-fit ml-auto cursor-pointer active:scale-95 transition-all">
                      ADD TO CART
                    </div>
                    <div className="text-xs sm:text-sm md:text-base w-fit ml-auto mt-2 cursor-pointer underline-offset-4 hover:underline hidden md:block">
                      View Details
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>

        <div className="text-xl p-3 px-4 bg-[#FCF55C] w-fit mx-auto font-bold hidden md:block my-10 cursor-pointer active:scale-95 transition-all">
          View all
        </div>
      </div>
    </section>
  );
};

export default BestSeller;
