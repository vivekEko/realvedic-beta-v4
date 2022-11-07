// react
import React, { useEffect, useState } from "react";
// routing
import { Link } from "react-router-dom";

// Media assets
import image from "../../../assets/img/productPage/carousel/product1.svg";

// State Management (Recoil JS)
import { useRecoilState } from "recoil";
import SearchInputAtom from "../../../recoil/adminPage/productPage/SearchInputAtom";
import adminSidebarStatusAtom from "../../../recoil/adminPage/adminSidebar/adminSidebarStatusAtom";

const ProductList = (props) => {
  // Global variables
  const [adminSidebarIsOpen] = useRecoilState(adminSidebarStatusAtom);
  const [searchInputs, setSearchInputs] = useRecoilState(SearchInputAtom);

  // local variables
  const [selectedProducts, setSelectedProducts] = useState([]);

  // Function to remove selected item from an array
  function arrayRemove(arr, value) {
    return arr.filter(function (geek) {
      return geek !== value;
    });
  }

  const productListData = [
    {
      product_name: "Rasam Powder",
      category: "Spice Blends",
      variants: "500 gm",
      unit_price: 300,
      stock: 25,
      status: "In stock",
      status_color: "yellow",
    },
    {
      product_name: "Multigrain Atta",
      category: "Flour Packs",
      variants: "1kg",
      unit_price: 200,
      stock: 1,
      status: "Out of stock",
      status_color: "orange",
    },
    {
      product_name: "Finger Millets Noodles",
      category: "Noodle & Pasta",
      variants: "200 gm",
      unit_price: 70,
      stock: 15,
      status: "In stock",
      status_color: "red",
    },
    {
      product_name: "Immumilk",
      category: "Beverage & Mixes",
      variants: "100 gm",
      unit_price: 70,
      stock: 167,
      status: "In stock",
      status_color: "green",
    },
    {
      product_name: "Kokum Rasam Powder",
      category: "Spice Blends",
      variants: "50 gm",
      unit_price: 100,
      stock: 0,
      status: "Out of stock",
    },
    {
      product_name: "Rasam Powder",
      category: "Spice Blends",
      variants: "500 gm",
      unit_price: 300,
      stock: 25,
      status: "In stock",
      status_color: "yellow",
    },
    {
      product_name: "Multigrain Atta",
      category: "Flour Packs",
      variants: "1kg",
      unit_price: 200,
      stock: 1,
      status: "Out of stock",
      status_color: "orange",
    },
    {
      product_name: "Finger Millets Noodles",
      category: "Noodle & Pasta",
      variants: "200 gm",
      unit_price: 70,
      stock: 15,
      status: "In stock",
      status_color: "red",
    },
    {
      product_name: "Immumilk",
      category: "Beverage & Mixes",
      variants: "100 gm",
      unit_price: 70,
      stock: 167,
      status: "In stock",
      status_color: "green",
    },
    {
      product_name: "Kokum Rasam Powder",
      category: "Spice Blends",
      variants: "50 gm",
      unit_price: 100,
      stock: 0,
      status: "Out of stock",
    },
    {
      product_name: "Rasam Powder",
      category: "Spice Blends",
      variants: "500 gm",
      unit_price: 300,
      stock: 25,
      status: "In stock",
      status_color: "yellow",
    },
    {
      product_name: "Multigrain Atta",
      category: "Flour Packs",
      variants: "1kg",
      unit_price: 200,
      stock: 1,
      status: "Out of stock",
      status_color: "orange",
    },
    {
      product_name: "Finger Millets Noodles",
      category: "Noodle & Pasta",
      variants: "200 gm",
      unit_price: 70,
      stock: 15,
      status: "In stock",
      status_color: "red",
    },
    {
      product_name: "Immumilk",
      category: "Beverage & Mixes",
      variants: "100 gm",
      unit_price: 70,
      stock: 167,
      status: "In stock",
      status_color: "green",
    },
    {
      product_name: "Kokum Rasam Powder",
      category: "Spice Blends",
      variants: "50 gm",
      unit_price: 100,
      stock: 0,
      status: "Out of stock",
    },
    {
      product_name: "Rasam Powder",
      category: "Spice Blends",
      variants: "500 gm",
      unit_price: 300,
      stock: 25,
      status: "In stock",
      status_color: "yellow",
    },
    {
      product_name: "Multigrain Atta",
      category: "Flour Packs",
      variants: "1kg",
      unit_price: 200,
      stock: 1,
      status: "Out of stock",
      status_color: "orange",
    },
    {
      product_name: "Finger Millets Noodles",
      category: "Noodle & Pasta",
      variants: "200 gm",
      unit_price: 70,
      stock: 15,
      status: "In stock",
      status_color: "red",
    },
    {
      product_name: "Immumilk",
      category: "Beverage & Mixes",
      variants: "100 gm",
      unit_price: 70,
      stock: 167,
      status: "In stock",
      status_color: "green",
    },
    {
      product_name: "Kokum Rasam Powder",
      category: "Spice Blends",
      variants: "50 gm",
      unit_price: 100,
      stock: 0,
      status: "Out of stock",
    },
  ];
  return (
    <div>
      {/* Heading */}
      <div
        className={`relative overflow-x-scroll w-[100%] h-[80vh]  overflow-y-scroll   mx-auto  py-5  `}
      >
        <div className="transition-all sticky  -top-5 bg-white grid justify-between grid-cols-[30px_minmax(300px,1fr)_minmax(150px,200px)_minmax(150px,200px)_minmax(150px,200px)_minmax(150px,200px)]     ">
          <div className="  flex justify-center items-center border-b">
            <input type="checkbox" />
          </div>
          <div className=" p-3 border-b bg-white">
            <h1 className="text-gray-500">Product Name</h1>
          </div>
          <div className="  p-3 border-b bg-white">
            <h1 className="text-gray-500">Category</h1>
          </div>
          <div className="  p-3 border-b bg-white">
            <h1 className="text-gray-500">HSN</h1>
          </div>

          <div className="  p-3 border-b bg-white">
            <h1 className="text-gray-500">Stock</h1>
          </div>
          <div className="  p-3 border-b bg-white">
            <h1 className="text-gray-500">Status</h1>
          </div>
        </div>

        <div className="">
          {props?.apiData
            ?.filter((filtered_value) => {
              if (searchInputs === "") {
                return filtered_value;
              } else if (
                filtered_value?.product_name
                  ?.toLowerCase()
                  ?.includes(searchInputs?.toLowerCase())
              ) {
                return {
                  filtered_value,
                };
              }
            })
            ?.map((data, index) => {
              return (
                <div
                  key={index}
                  className=" grid justify-between  grid-cols-[30px_minmax(300px,1fr)_minmax(150px,200px)_minmax(150px,200px)_minmax(150px,200px)_minmax(150px,200px)] "
                >
                  <div className="  flex justify-center items-center border-b p-3 py-5">
                    <input
                      type="checkbox"
                      onClick={() => {
                        if (selectedProducts?.includes(data?.product_name)) {
                          setSelectedProducts((selectedProducts) =>
                            arrayRemove(selectedProducts, data?.product_name)
                          );
                        } else {
                          setSelectedProducts((selectedProducts) => [
                            ...selectedProducts,
                            data?.product_name,
                          ]);
                        }
                      }}
                    />
                  </div>
                  <Link
                    className=" p-3 py-5 flex items-center gap-3 border-b group"
                    to={"/admin/products/productDetails/" + data?.product_name}
                  >
                    <img
                      src={process.env.REACT_APP_BASE_LINK + "/" + data?.image}
                      alt=""
                      className="w-[50px] aspect-square"
                    />
                    <h1 className="group-hover:underline underline-offset-4 transition-all">
                      {data?.product_name}
                    </h1>
                  </Link>
                  <div className="  p-3 py-5 flex items-center border-b">
                    <h1>{data?.category}</h1>
                  </div>
                  <div className="  p-3 py-5 flex items-center border-b">
                    <h1>{data?.hsn}</h1>
                  </div>

                  <div className="  p-3 py-5 flex items-center border-b">
                    <h1>
                      <span>{data?.total_stock}</span>{" "}
                      <span
                        style={{
                          display:
                            data?.varients?.split("|")?.length > 1
                              ? "inline"
                              : "none",
                        }}
                      >
                        out of {data?.varients?.split("|")?.length} varients
                      </span>
                    </h1>
                  </div>
                  <div className={` py-5 flex items-center  border-b `}>
                    <div
                      className={`p-2 rounded-full flex gap-2 items-center w-[120px]   ${
                        data?.total_stock <= 0
                          ? "bg-[#a7090913] text-[#a70909]"
                          : "bg-[#1dff1517] text-[#00ac69]"
                      } `}
                    >
                      <div
                        className={` ${
                          data?.total_stock <= 0
                            ? "bg-[#a70909]"
                            : "bg-[#00ac69] "
                        }  h-[8px] w-[8px] rounded-full`}
                      ></div>{" "}
                      <h1 className="">
                        {data?.total_stock <= 0 ? "Out of stock" : "in stock"}
                      </h1>
                    </div>
                  </div>
                </div>
              );
            })}
          <div className="p-10 w-full text-center text-[#adadad]">
            No more products
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
