// React
import React from "react";

// Media Files
import arrow from "../../../assets/img/landingPage/category/arrow.svg";

// State Management (Recoil Js)
import { useRecoilState } from "recoil";
import landingPageAtom from "../../../recoil/landingPage/landingPageAtom";

// Base API Address
import BASE_API_ADDRESS from "../../../misc/baseAddress/BaseAPIAddress";

// routing
import { Link } from "react-router-dom";

const Category = () => {
  // Global Variable
  const [landingPageApiData] = useRecoilState(landingPageAtom);

  return (
    <section className="mt-10">
      <div>
        {/* Heading */}
        <div className="flex justify-between items-center w-[85%] mx-auto ">
          <h1 className="text-xl sm:text-2xl font-bold  ">Shop by category</h1>
          <h3 className="text-[#545454] text-xs font-bold cursor-pointer hover:underline underline-offset-4 ">
            View all
          </h3>
        </div>

        {/* Category grid */}
        <div className="flex flex-col gap-2 md:gap-5 md:flex-wrap md:flex-row md:justify-start   w-full md:w-[85%] mx-auto my-10 ">
          {landingPageApiData?.category?.map((data, index) => {
            return (
              <div key={index} className="">
                <Link to={"/category/" + data?.name}>
                  <div>
                    {data?.name === "Shop All" ? (
                      <div
                        className={` bg-[${data?.color}]  text-white  cursor-pointer group py-9 md:py-7 md:px-2  md:rounded-xl md:w-[250px] flex justify-center items-center   border h-[140px] md:h-[125px] `}
                      >
                        <div className="w-[85%] md:w-[80%] mx-auto flex justify-between items-center ">
                          <h2 className="font-bold text-white  ">
                            {data?.name}
                          </h2>
                          <img
                            src={
                              process.env.REACT_APP_BASE_LINK +
                              "/" +
                              data?.image
                            }
                            alt={data?.image}
                            className="group-hover:scale-110 transition-all"
                          />
                        </div>
                      </div>
                    ) : (
                      <div
                        style={{ backgroundColor: data?.color }}
                        className={`   cursor-pointer group py-9 md:py-7 md:px-2  md:rounded-xl md:w-[250px] md:flex justify-center items-center `}
                      >
                        <div className="w-[85%] md:w-[80%] mx-auto  flex justify-between items-center">
                          <div>
                            <h2 className="font-bold ">{data?.name}</h2>
                            <h5 className="text-xs mt-1 group-hover:underline underline-offset-4 outline-[#dfdfdf] md:hidden">
                              View All
                            </h5>
                          </div>
                          <div>
                            <img
                              src={
                                process.env.REACT_APP_BASE_LINK +
                                "/" +
                                data?.image
                              }
                              alt={data?.image}
                              className="w-[70px] group-hover:scale-110 transition-all"
                            />
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Category;
