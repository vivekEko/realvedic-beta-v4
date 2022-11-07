// React
import React, { useState } from "react";
// media assets
import arrow from "../../../../assets/img/adminPage/productPage/bottom_arrow.svg";
// State Management (Recoil js)
import { useRecoilState } from "recoil";
import adminProductDetailsSelectedDropDownAtom from "../../../../recoil/adminPage/productDetailsPage/adminProductDetailsSelectedDropDownAtom";

const NameAndStatus = () => {
  const [apiData] = useState([
    {
      data: {
        label: "name",
        lt_value: "Angaya Podi",
        lt_type: "type",
      },
    },
    {
      data: {
        label: "status",
        lt_value: "#00ac69",
        lt_type: "color",
        rt_value: "In Stock",
        rt_type: "text",
        dropdwon_contents: [
          {
            lt_value: "#00ac69",
            lt_type: "color",
            rt_value: "In Stock",
            rt_type: "text",
          },
          {
            lt_value: "#00ac69",
            lt_type: "color",
            rt_value: "Out of Stock",
            rt_type: "text",
          },
        ],
      },
    },

    {
      data: {
        label: "category",
        lt_value: "Spice Blends",
        not_an_input: true,

        dropdwon_contents: [
          {
            rt_value: "Dosa Mix",
            rt_type: "text",
          },
          {
            rt_value: "Rasam Powder",
            rt_type: "text",
          },
        ],
      },
    },
  ]);

  // local variables
  const [selectedDropdown, setSelectedDropdown] = useRecoilState(
    adminProductDetailsSelectedDropDownAtom
  );

  return (
    <div className="mt-10">
      {/* Name and status */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-4">
        {apiData?.map((data, index) => {
          return (
            <div key={index} className="flex-1">
              <div className="w-full relative">
                <label
                  htmlFor={data?.data?.label}
                  className="text-gray-700 text-sm capitalize"
                >
                  {data?.data?.label}
                </label>
                <div
                  className="flex justify-between items-center  border px-2 min-h-[45px]  bg-gray-50 rounded-md cursor-pointer"
                  onClick={() => {
                    selectedDropdown === data?.data?.label &&
                    data?.data?.dropdwon_contents?.length
                      ? setSelectedDropdown(null)
                      : setSelectedDropdown(data?.data?.label);
                  }}
                >
                  {data?.data?.not_an_input === true ? (
                    <div className="">
                      <h1>{data?.data?.lt_value}</h1>
                    </div>
                  ) : (
                    <div>
                      <div
                        className="h-5 w-5 rounded-md "
                        style={{ backgroundColor: data?.data?.lt_value }}
                      ></div>
                    </div>
                  )}

                  <div className="flex justify-start items-center">
                    <h1 className="p-2  block mt-1 ">{data?.data?.rt_value}</h1>
                    {data?.data?.dropdwon_contents && (
                      <div className=" px-1  flex justify-center items-center p-2   mt-1 ">
                        <img
                          src={arrow}
                          alt="select status"
                          className={` ${
                            selectedDropdown === data?.data?.label
                              ? "-rotate-180"
                              : "rotate-0"
                          } transition-all duration-500 `}
                        />
                      </div>
                    )}
                  </div>
                </div>
                {/* dropdown */}
                <div
                  className={` ${
                    selectedDropdown === data?.data?.label &&
                    data?.data?.dropdwon_contents
                      ? " h-[1000%]   transition-all duration-500 "
                      : " transition-all duration-500 h-[0px] "
                  } absolute top-[100%] right-0 min-w-[150px] max-h-[200px]  w-full overflow-hidden`}
                >
                  <div className="mt-2 space-y-2 py-3 bg-gray-50 text-[#545454] shadow-xl border rounded-md h-fit  ">
                    {data?.data?.dropdwon_contents?.map(
                      (dropdowndata, dropdownindex) => {
                        return (
                          <div
                            key={dropdownindex}
                            className=" flex justify-between items-center p-2 hover:bg-gray-100 cursor-pointer transition-all hover:text-black"
                          >
                            <div className="flex-1">
                              <div
                                className="w-5 h-5 rounded-md "
                                style={{
                                  backgroundColor: dropdowndata?.lt_value,
                                }}
                              ></div>
                            </div>

                            <div className="w-full flex-1 text-end ">
                              <h1>{dropdowndata?.rt_value}</h1>
                            </div>
                          </div>
                        );
                      }
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NameAndStatus;
