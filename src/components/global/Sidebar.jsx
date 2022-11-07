// React
import React, { useState } from "react";

// State Management (Recoil JS)
import sidebarStatusAtom from "../../recoil/sidebar/sidebarStatusAtom";
import { useRecoilState } from "recoil";

// Media Files
import arrow from "../../assets/img/sidebar/down-arrow.svg";

const Sidebar = () => {
  // Global variables
  const [sidebarStatus, setSidebarStatus] = useRecoilState(sidebarStatusAtom);

  //   Local variables
  const [selectedHeading, setSelectedHeading] = useState(null);

  //   Sidebar Data
  const sidebarData = [
    {
      heading: "Category",
      contents: [
        {
          linkName: "Spice Blends",
        },

        {
          linkName: "Flour Packs",
        },
        {
          linkName: "Dosa Mix",
        },

        {
          linkName: "Rasam & Soups",
        },
        {
          linkName: "Noodles and Pasta",
        },
        {
          linkName: "Beverage Mixes",
        },
        {
          linkName: "Shop All",
        },
      ],
    },

    {
      heading: "Blog",
    },
    {
      heading: "Mom & Baby",
    },

    {
      heading: "Pharma",
      contents: [
        {
          linkName: "Spice Blends",
        },

        {
          linkName: "Flour Packs",
        },
        {
          linkName: "Dosa Mix",
        },

        {
          linkName: "Rasam & Soups",
        },
        {
          linkName: "Noodles and Pasta",
        },
        {
          linkName: "Beverage Mixes",
        },
        {
          linkName: "Shop All",
        },
      ],
    },
    {
      heading: "Doctors",
    },
    {
      heading: "About Us",
      contents: [
        {
          linkName: "Spice Blends",
        },

        {
          linkName: "Flour Packs",
        },
        {
          linkName: "Dosa Mix",
        },

        {
          linkName: "Rasam & Soups",
        },
        {
          linkName: "Noodles and Pasta",
        },
        {
          linkName: "Beverage Mixes",
        },
        {
          linkName: "Shop All",
        },
      ],
    },
  ];

  return (
    <div
      className={` fixed top-0 right-0 bottom-0 transition-all duration-500 ${
        sidebarStatus ? "w-[70%] " : "w-[0px]"
      } overflow-hidden  text-xl bg-[#FCEDD1] z-[100] `}
    >
      <div className="min-w-[300px] ml-0">
        <div className="h-[95px] bg-[#FCEDD1] flex items-center ">
          <h1
            className={`w-[85%] mx-auto transition duration-500  ${
              sidebarStatus ? "opacity-100" : "opacity-100"
            }`}
          >
            Login / Sign up
          </h1>
        </div>

        {/* All Links */}
        <div>
          {sidebarData?.map((data, index) => {
            return (
              <div key={index}>
                <div
                  className="border-[#c57863a4] border-[1px]"
                  onClick={() => {
                    if (selectedHeading === data?.heading && data?.contents) {
                      setSelectedHeading(null);
                    } else if (
                      selectedHeading != data?.heading &&
                      data?.contents
                    ) {
                      setSelectedHeading(data?.heading);
                    }
                  }}
                >
                  <div className=" flex justify-between items-center w-[80%] mx-auto py-7 cursor-pointer">
                    <img
                      src={arrow}
                      alt={data?.heading}
                      className={` transition-all ${
                        data?.contents ? "" : "invisible"
                      }  ${
                        selectedHeading === data?.heading ? "rotate-180" : ""
                      } `}
                    />
                    <h1 className="font-bold   text-right text-base ">
                      {data?.heading}
                    </h1>
                  </div>
                </div>
                <div
                  className={`overflow-y-hidden ${
                    selectedHeading === data?.heading
                      ? "accordian_open  border-b-2 border-b-[#c5786363]"
                      : "accordian_close"
                  }  `}
                >
                  {data?.contents?.map((data, index) => {
                    return (
                      <div key={index}>
                        <div className="border-[#c5786363] border-[1px] cursor-pointer group">
                          <h3 className="text-[#545454] text-sm py-4  w-[80%] mx-auto text-right group-hover:text-black transition">
                            {data?.linkName}
                          </h3>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

const SidebarOverlay = () => {
  // Global variables
  const [sidebarStatus, setSidebarStatus] = useRecoilState(sidebarStatusAtom);
  return (
    <div
      onClick={() => setSidebarStatus(false)}
      className={`fixed top-0 right-0 bottom-0 left-0 transition-all duration-700  ${
        sidebarStatus ? "ease-in block " : "ease-out hidden"
      } overflow-hidden   bg-[#00000023] z-[100] `}
    ></div>
  );
};

export { SidebarOverlay };
