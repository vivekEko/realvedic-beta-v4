// react
import React, { useEffect, useState } from "react";

// media assets
import search from "../../../assets/img/adminPage/productPage/searchIcon.svg";
import arrow from "../../../assets/img/adminPage/productPage/bottom_arrow.svg";
import { useRecoilState } from "recoil";
import SearchInputAtom from "../../../recoil/adminPage/productPage/SearchInputAtom";
import adminproductListFilterAtom from "../../../recoil/adminPage/productPage/adminproductListFilterAtom";

const ProductSearchAndFilter = () => {
  // Global variables
  const [, setSearchInputs] = useRecoilState(SearchInputAtom);
  const [adminProductlistFilterValues, setAdminProductListFilterValues] =
    useRecoilState(adminproductListFilterAtom);

  // Local variables
  const [filterIsOpen, setFilterIsOpen] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [selectedStock, setSelectedStock] = useState([]);

  // useEffect(() => {
  //   async function apiCall() {
  //     const clockInOut = await axios({
  //       method: "post",
  //       url: process.env.REACT_APP_BASE_LINK + "/clockInOut",
  //       data: {
  //         emp_id: localStorage.getItem("emp_id"),
  //         t_type: "",
  //       },
  //     });

  //   console.log(first)
  //   }

  //     apiCall()
  // }, [adminProductlistFilterValues]);

  // Function to remove selected item from an array
  function arrayRemove(arr, value) {
    return arr.filter(function (geek) {
      return geek != value;
    });
  }

  const filterData = [
    {
      filterName: "Stock",
      filterOptions: [
        "Less than 10",
        "Less than 20",
        "Less than 50",
        "Greater than 50",
      ],
    },
    {
      filterName: "Category",
      filterOptions: [
        "Spice Blends",
        "Flour Packs",
        "Dosa Mix",
        "Rasam & Soups",
        "Noodle & Pasta",
        "Beverage & Mixes",
        "Health Mix",
      ],
    },
    {
      filterName: "Status",
      filterOptions: ["Out of stock", "In stock"],
    },
  ];

  return (
    <div className="my-3 flex gap-5 items-center justify-between ">
      <div className="bg-gray-50 flex items-center gap-2 p-2 px-4 rounded-lg overflow-x-hidden w-[70%] max-w-[400px] ">
        <img src={search} alt="search for products" className="w-[25px]" />
        <input
          type="text"
          placeholder="Search products"
          className="bg-gray-50 py-2 outline-none border-0 placeholder-gray-300 text-sm w-full "
          onChange={(e) => setSearchInputs(e.target.value)}
        />
      </div>

      <div className="w-[30%]  relative">
        <div
          onClick={() => {
            setFilterIsOpen(!filterIsOpen);
          }}
          className="bg-gray-50 p-4 max-w-[100px] ml-auto rounded-lg text-[#545454] text-sm w-full flex justify-between items-center cursor-pointer"
        >
          <h1 className="text-center">Filters</h1>
          <img
            src={arrow}
            alt="filters"
            className={`transition-all ${
              filterIsOpen ? "rotate-180" : "rotate-0"
            } `}
          />
        </div>
        <div
          className={` ${
            filterIsOpen ? "block" : "hidden"
          } absolute top-[100%] right-0  w-[300px] py-2 z-50`}
        >
          <div className=" border-gray-50 p-5 rounded-md bg-gray-50 shadow-xl">
            {/* Stock */}
            <div className="flex gap-5 py-4  border-b ">
              <div className="flex-[0.3]">
                <h1 className="text-gray-600 text-base">
                  {filterData[0]?.filterName}
                </h1>
              </div>
              <div className="flex-[0.7]  ">
                {filterData[0]?.filterOptions?.map((filters, idx) => {
                  return (
                    <div
                      key={idx}
                      className="p-1  mb-1 w-fit cursor-pointer flex gap-2"
                      onClick={() => {
                        if (selectedStock?.includes(filters)) {
                          setSelectedStock([]);
                        } else {
                          setSelectedStock(filters);
                        }
                      }}
                    >
                      <input
                        type="checkbox"
                        name={filters}
                        value={filters}
                        checked={selectedStock === filters ? true : false}
                        onChange={() => {
                          if (selectedStock?.includes(filters)) {
                            setSelectedStock([]);
                          } else {
                            setSelectedStock(filters);
                          }
                        }}
                      />
                      <h3 className={`text-sm  text-gray-500 `}>{filters}</h3>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Category */}
            <div className="flex gap-5 py-4  border-b ">
              <div className="flex-[0.3]">
                <h1 className="text-gray-600 text-base">
                  {filterData[1]?.filterName}
                </h1>
              </div>
              <div className="flex-[0.7]  ">
                {filterData[1]?.filterOptions?.map((filters, idx) => {
                  return (
                    <div
                      key={idx}
                      className="p-1  mb-1 w-fit cursor-pointer flex gap-2"
                      onClick={() => {
                        // if array consists of this particular filter than remove it
                        if (selectedCategory?.includes(filters)) {
                          setSelectedCategory((selectedCategory) =>
                            arrayRemove(selectedCategory, filters)
                          );
                        }
                        // if array doesnt consists of this particular filter than add it
                        else {
                          setSelectedCategory((selectedCategory) => [
                            ...selectedCategory,
                            filters,
                          ]);
                        }
                      }}
                    >
                      <input
                        type="checkbox"
                        name={filters}
                        value={filters}
                        checked={
                          selectedCategory?.includes(filters) ? true : false
                        }
                        onChange={() => {
                          if (selectedCategory?.includes(filters)) {
                            setSelectedCategory((selectedCategory) =>
                              arrayRemove(selectedCategory, filters)
                            );
                          } else {
                            setSelectedCategory((selectedCategory) => [
                              ...selectedCategory,
                              filters,
                            ]);
                          }
                        }}
                      />
                      <h3 className={`text-sm  text-gray-500 `}>{filters}</h3>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Status */}
            <div className="flex gap-5 py-4  ">
              <div className="flex-[0.3]">
                <h1 className="text-gray-600 text-base">
                  {filterData[2]?.filterName}
                </h1>
              </div>
              <div className="flex-[0.7]  ">
                {filterData[2]?.filterOptions?.map((filters, idx) => {
                  return (
                    <div
                      key={idx}
                      className="p-1  mb-1 w-fit cursor-pointer flex gap-2"
                      onClick={() => {
                        if (selectedStatus?.includes(filters)) {
                          setSelectedStatus([]);
                        } else {
                          setSelectedStatus(filters);
                        }
                      }}
                    >
                      <input
                        type="checkbox"
                        name={filters}
                        value={filters}
                        checked={selectedStatus === filters ? true : false}
                        onChange={() => {
                          if (selectedStatus?.includes(filters)) {
                            setSelectedStatus([]);
                          } else {
                            setSelectedStatus(filters);
                          }
                        }}
                      />
                      <h3 className={`text-sm  text-gray-500 `}>{filters}</h3>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className=" flex justify-end mt-5">
              <button
                onClick={() => {
                  setFilterIsOpen(false);
                  setAdminProductListFilterValues({
                    selectedStock,
                    selectedCategory,
                    selectedStatus,
                  });
                }}
                className="text-center p-3 font-bold cursor-pointer bg-[#fcedd1] text-[#C57963] text-sm rounded-md active:scale-95 transition"
              >
                Apply Filters
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSearchAndFilter;
