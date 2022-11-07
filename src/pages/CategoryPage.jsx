// React
import React, { useEffect } from "react";

// Media Files
import product from "../assets/img/landingPage/category/rectangle.png";
import Footer from "../components/global/Footer";

// State Management (Recoil Js)
import { useRecoilState } from "recoil";
import categoryPageAtom from "../recoil/categoryPage/categoryPageAtom";
import BASE_API_ADDRESS from "../misc/baseAddress/BaseAPIAddress";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const CategoryPage = () => {
  // Global Variable
  const [categoryPageApiData, setCategoryPageApiData] =
    useRecoilState(categoryPageAtom);

  // Detecting parameters
  const parameters = useParams();

  // API call for category page
  useEffect(() => {
    if (parameters?.category_id) {
      axios
        .get(process.env.REACT_APP_BASE_LINK + "/" + "categoryPage", {
          params: { category: parameters?.category_id },
        })
        .then((resp) => {
          setCategoryPageApiData(resp?.data);
          console.log(resp?.data);
        });
    }
  }, [parameters?.category_id]);

  // products list
  const productsList = [
    {
      //   categoryName: "Shop All",
      categoryName: "Flour Packs",
      products: [
        {
          productName: "Garlic Rasam Powder | Instant Mix ",
          weight: "250g",
          price: 110.0,
        },
        {
          productName: "Kokum Rasam | Instant Mix  ",
          weight: "250g",
          price: 110.0,
        },
        {
          productName: "Lemon Grass Rasam | Instant Mix ",
          weight: "250g",
          price: 110.0,
        },
        {
          productName: "Golden Milk | Turmeric Milk Mix ",
          weight: "250g",
          price: 110.0,
        },
        {
          productName: "Angaya Podi ",
          weight: "250g",
          price: 110.0,
        },
        {
          productName: "Desi Chai Masala ",
          weight: "250g",
          price: 110.0,
        },
        {
          productName: "Garlic Rasam Powder | Instant Mix ",
          weight: "250g",
          price: 110.0,
        },
        {
          productName: "Kokum Rasam | Instant Mix  ",
          weight: "250g",
          price: 110.0,
        },
        {
          productName: "Lemon Grass Rasam | Instant Mix ",
          weight: "250g",
          price: 110.0,
        },
        {
          productName: "Golden Milk | Turmeric Milk Mix ",
          weight: "250g",
          price: 110.0,
        },
        {
          productName: "Angaya Podi ",
          weight: "250g",
          price: 110.0,
        },
        {
          productName: "Desi Chai Masala ",
          weight: "250g",
          price: 110.0,
        },
        {
          productName: "Garlic Rasam Powder | Instant Mix ",
          weight: "250g",
          price: 110.0,
        },
        {
          productName: "Kokum Rasam | Instant Mix  ",
          weight: "250g",
          price: 110.0,
        },
        {
          productName: "Lemon Grass Rasam | Instant Mix ",
          weight: "250g",
          price: 110.0,
        },
        {
          productName: "Golden Milk | Turmeric Milk Mix ",
          weight: "250g",
          price: 110.0,
        },
        {
          productName: "Angaya Podi ",
          weight: "250g",
          price: 110.0,
        },
        {
          productName: "Desi Chai Masala ",
          weight: "250g",
          price: 110.0,
        },
        {
          productName: "Garlic Rasam Powder | Instant Mix ",
          weight: "250g",
          price: 110.0,
        },
        {
          productName: "Kokum Rasam | Instant Mix  ",
          weight: "250g",
          price: 110.0,
        },
        {
          productName: "Lemon Grass Rasam | Instant Mix ",
          weight: "250g",
          price: 110.0,
        },
        {
          productName: "Golden Milk | Turmeric Milk Mix ",
          weight: "250g",
          price: 110.0,
        },
        {
          productName: "Angaya Podi ",
          weight: "250g",
          price: 110.0,
        },
        {
          productName: "Desi Chai Masala ",
          weight: "250g",
          price: 110.0,
        },
        {
          productName: "Garlic Rasam Powder | Instant Mix ",
          weight: "250g",
          price: 110.0,
        },
        {
          productName: "Kokum Rasam | Instant Mix  ",
          weight: "250g",
          price: 110.0,
        },
        {
          productName: "Lemon Grass Rasam | Instant Mix ",
          weight: "250g",
          price: 110.0,
        },
        {
          productName: "Golden Milk | Turmeric Milk Mix ",
          weight: "250g",
          price: 110.0,
        },
        {
          productName: "Angaya Podi ",
          weight: "250g",
          price: 110.0,
        },
        {
          productName: "Desi Chai Masala ",
          weight: "250g",
          price: 110.0,
        },
        {
          productName: "Garlic Rasam Powder | Instant Mix ",
          weight: "250g",
          price: 110.0,
        },
        {
          productName: "Kokum Rasam | Instant Mix  ",
          weight: "250g",
          price: 110.0,
        },
        {
          productName: "Lemon Grass Rasam | Instant Mix ",
          weight: "250g",
          price: 110.0,
        },
        {
          productName: "Golden Milk | Turmeric Milk Mix ",
          weight: "250g",
          price: 110.0,
        },
        {
          productName: "Angaya Podi ",
          weight: "250g",
          price: 110.0,
        },
        {
          productName: "Desi Chai Masala ",
          weight: "250g",
          price: 110.0,
        },
      ],
    },
    {
      categoryName: "Flour Pack",
      products: [
        {
          productName: "Garlic Rasam Powder | Instant Mix ",
          weight: "250g",
          price: 110.0,
        },
        {
          productName: "Kokum Rasam | Instant Mix  ",
          weight: "250g",
          price: 110.0,
        },
        {
          productName: "Lemon Grass Rasam | Instant Mix ",
          weight: "250g",
          price: 110.0,
        },
        {
          productName: "Golden Milk | Turmeric Milk Mix ",
          weight: "250g",
          price: 110.0,
        },
        {
          productName: "Angaya Podi ",
          weight: "250g",
          price: 110.0,
        },
        {
          productName: "Desi Chai Masala ",
          weight: "250g",
          price: 110.0,
        },
        {
          productName: "Garlic Rasam Powder | Instant Mix ",
          weight: "250g",
          price: 110.0,
        },
        {
          productName: "Kokum Rasam | Instant Mix  ",
          weight: "250g",
          price: 110.0,
        },
        {
          productName: "Lemon Grass Rasam | Instant Mix ",
          weight: "250g",
          price: 110.0,
        },
      ],
    },
  ];

  // category list
  const categoryList = [
    {
      categoryName: "Spice Blends",
    },

    {
      categoryName: "Flour Packs",
    },
    {
      categoryName: "Dosa Mix",
    },

    {
      categoryName: "Rasam & Soups",
    },
    {
      categoryName: "Noodles & Pasta",
    },
    {
      categoryName: "Beverage Mixes",
    },
    {
      categoryName: "Shop All",
    },
  ];

  return (
    <div className="">
      {/* Mobile category carousel */}
      {/* <div className="bg-white py-5 md:hidden flex justify-between items-center gap-5 overflow-x-scroll px-5 ">
        {categoryList?.map((data, index) => {
          return (
            <div key={index} className="">
              <div className=" w-[90px] aspect-square bg-[#D9D9D9] rounded-full "></div>
              <h1 className="text-sm text-center leading-4 mt-1 font-bold min-h-[50px]  w-[60%] mx-auto">
                {data?.categoryName}
              </h1>
            </div>
          );
        })}
      </div> */}
      {/* Banner */}
      <div
        className="h-[350px] flex flex-col justify-between md:flex-row  "
        style={{ backgroundColor: categoryPageApiData?.cover?.color }}
      >
        <div className="bg-transparent md:h-full   md:flex justify-start items-center md:flex-1  w-full mx-auto">
          {" "}
          <h1
            className={`text-2xl font-bold py-5 w-[90%] mx-auto ${
              categoryPageApiData?.cover?.name === "Shop All"
                ? "text-white"
                : ""
            } `}
          >
            {categoryPageApiData?.cover?.name}
          </h1>{" "}
        </div>
        <div className=" md:flex-1 md:flex  items-end   w-[90%] mx-auto   ">
          <img
            src={
              process.env.REACT_APP_BASE_LINK +
              "/" +
              categoryPageApiData?.cover?.image
            }
            alt={categoryPageApiData?.cover?.name}
            className="mx-auto md:ml-auto  w-[60%] max-w-[300px]"
          />
        </div>
      </div>

      <h1 className="text-[#797676] text-base w-[90%] mx-auto pt-5">
        {categoryPageApiData?.product?.length} products
      </h1>

      {/* Products list/grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4   gap-5 py-5 mb-20 w-[90%] mx-auto">
        {categoryPageApiData?.product?.map((data, index) => {
          return (
            <div key={index} className="group">
              <Link to={"/product/" + data?.name}>
                <div className="w-full overflow-hidden bg-[#FCEDD1] pt-5 px-5 min-h-[250px] flex justify-center items-end">
                  <img
                    src={process.env.REACT_APP_BASE_LINK + "/" + data?.image}
                    alt={data?.image}
                    className=" group-hover:scale-110 transition-all w-[60%] mx-auto cursor-pointer"
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

      {/* Explore more products */}
      <div
        className={` ${
          categoryPageApiData?.cover?.name === "Shop All" ? "hidden" : "block"
        }`}
      >
        <h1 className="text-2xl font-bold w-[90%] mx-auto text-center md:text-left mb-5">
          Explore more products
        </h1>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4   gap-5 py-5 mb-20 w-[90%] mx-auto">
          {categoryPageApiData?.explore_more?.map((data, index) => {
            return (
              <div key={index} className="group">
                <Link to="/product">
                  <div className="w-full overflow-hidden bg-[#FCEDD1] pt-5 px-5 min-h-[250px] flex justify-center items-end">
                    <img
                      src={process.env.REACT_APP_BASE_LINK + "/" + data?.image}
                      alt={data?.image}
                      className=" group-hover:scale-110 transition-all w-[60%] mx-auto cursor-pointer"
                      onClick={() => {
                        sessionStorage.setItem("selected_product", data?.name);
                      }}
                    />
                  </div>

                  <div className="flex justify-between items-start font-bold text-sm mt-5">
                    <h1
                      className="flex-[0.6] leading-4 text-xs sm:text-sm md:text-base cursor-pointer  md:leading-5"
                      onClick={() => {
                        sessionStorage.setItem("selected_product", data?.name);
                      }}
                    >
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
                    <div
                      className="text-xs sm:text-sm md:text-base w-fit ml-auto mt-2 cursor-pointer underline-offset-4 hover:underline hidden md:block"
                      onClick={() => {
                        sessionStorage.setItem("selected_product", data?.name);
                      }}
                    >
                      View Details
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CategoryPage;
