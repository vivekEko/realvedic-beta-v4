// react
import React, { useEffect, useRef } from "react";
import { useState } from "react";

// media files
import image from "../../../assets/img/productPage/carousel/product1.svg";
import image2 from "../../../assets/img/productPage/carousel/product2.svg";
import NameAndStatus from "./form_components/NameAndStatus";

// icons
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";

// Global variables
import { useRecoilState } from "recoil";
import variantsDataAtom from "../../../recoil/adminPage/productDetailsPage/variantsDataAtom";
import BASE_API_ADDRESS from "../../../misc/baseAddress/BaseAPIAddress";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import productImageUploadAtom from "../../../recoil/adminPage/productDetailsPage/productImageUploadAtom";

const ProductDetailsEditForm = (props) => {
  // Global variables
  const [variantsData, setVariantsData] = useRecoilState(variantsDataAtom);
  const [selectedImage, setSelectedImage] = useRecoilState(
    productImageUploadAtom
  );
  const [imagesLength, setImagesLength] = useState();
  const [imageArray, setImageArray] = useState(null);

  // local variables
  const [selectedData, setSelectedData] = useState({
    status: false,
  });

  useEffect(() => {
    setVariantsData(props?.apiData?.variants);
    setImagesLength(props?.apiData?.images?.length);
    setImageArray(props?.apiData?.images);
  }, [props?.apiData]);

  useEffect(() => {
    if (imageArray) {
      props?.setApiData({ ...props?.apiData, images: imageArray });
    }
  }, [imageArray]);

  return (
    <div className="mt-10 w-full mx-auto ">
      {/* Images */}
      <div className="  flex flex-col gap-5 sm:flex-row">
        <div className="aspect-square w-full sm:max-w-[300px] sm:min-w-[200px] border border-dashed border-gray-500">
          {props?.apiData?.images?.map((data, index) => {
            if (index === 0) {
              return (
                <div key={index}>
                  <img
                    src={process.env.REACT_APP_BASE_LINK + "/" + data}
                    alt=""
                    className="w-full"
                  />
                </div>
              );
            }
          })}

          {/* {props?.apiData?.images ? (
            <img
              src={
                process.env.REACT_APP_BASE_LINK +
                "/" +
                props?.apiData?.images[0]
              }
              alt=""
              className="w-full "
            />
          ) : (
            <label className=" relative aspect-square max-h-[80px] w-[80px] border border-dashed border-gray-300 flex justify-center items-center cursor-pointer">
              <input
                type="file"
                className="absolute top-0 bottom-0 left-0 right-0 hidden "
                accept="image/*"
              />
              <AddRoundedIcon fontSize="large" className="text-gray-300" />
            </label>
          )} */}
        </div>
        <div className="flex gap-5 flex-wrap items-start ">
          {props?.apiData?.images?.map((data, index) => {
            if (index != 1) {
              return (
                <div
                  key={index}
                  className="aspect-square max-h-[80px] w-[80px] border border-dashed border-gray-500"
                >
                  <img
                    src={process.env.REACT_APP_BASE_LINK + "/" + data}
                    alt=""
                    className="w-full "
                  />
                </div>
              );
            }
          })}

          {imagesLength >= 3 ? (
            <label className=" relative aspect-square max-h-[80px] w-[80px] border border-dashed border-gray-300 flex justify-center items-center cursor-pointer">
              <input
                type="file"
                className="absolute top-0 bottom-0 left-0 right-0 hidden "
                accept="image/*"
                onChange={(event) => {
                  console.log(event?.target?.files[0]);
                  setImageArray([...imageArray, event?.target?.files[0]]);
                }}
              />
              <AddRoundedIcon fontSize="large" className="text-gray-300" />
            </label>
          ) : (
            ""
          )}
        </div>
      </div>
      {/* <NameAndStatus /> */}

      <div className="mt-10 grid grid-cols-2 gap-5">
        {/* Name */}
        <div className="">
          <label className="text-gray-700 text-sm">Name</label>
          <input
            type="text"
            className="p-2 rounded-md block  border-gray-400 border w-full outline-none"
            value={props?.apiData?.name}
            onChange={(e) =>
              props?.setApiData({ ...props?.apiData, name: e?.target?.value })
            }
          />
        </div>

        {/* Status */}
        <div className="">
          <h1 className="text-gray-700 text-sm mb-1">Status</h1>

          <div className="relative  rounded-md  border-gray-400 border w-full outline-none flex justify-between items-center ">
            <h2
              className=" p-2 cursor-pointer flex-1"
              onClick={() =>
                setSelectedData({
                  ...selectedData,
                  status: !selectedData?.status,
                })
              }
            >
              {props?.apiData?.status}
            </h2>

            <span
              onClick={() =>
                setSelectedData({
                  ...selectedData,
                  status: !selectedData?.status,
                })
              }
              className={` text-gray-500 ${
                selectedData?.status ? "-rotate-180" : "rotate-0"
              } transition-all `}
            >
              <KeyboardArrowDownRoundedIcon />
            </span>

            <div
              className={` ${
                selectedData?.status
                  ? "max-h-[900px] border border-gray-400  rounded-md mt-2 bg-white shadow-2xl"
                  : "max-h-0"
              } transition-all duration-150  ease-in-out absolute  right-0 left-0  top-[99%] overflow-hidden`}
            >
              {props?.apiData?.statusList?.map((data, index) => {
                return (
                  <h2
                    key={data}
                    value={data}
                    className="p-2 py-3 hover:bg-[#fcedd1] transition-all cursor-pointer"
                    onClick={() => {
                      setSelectedData({
                        ...selectedData,
                        status: !selectedData?.status,
                      });

                      props?.setApiData({
                        ...props?.apiData,
                        status: data,
                      });
                    }}
                  >
                    {data}
                  </h2>
                );
              })}
            </div>
          </div>
        </div>

        {/* Category */}
        <div className="">
          <h1 className="text-gray-700 text-sm mb-1">Category</h1>

          <div className="relative  rounded-md  border-gray-400 border w-full outline-none flex justify-between items-center ">
            <h2
              className=" p-2 cursor-pointer flex-1"
              onClick={() =>
                setSelectedData({
                  ...selectedData,
                  category: !selectedData?.category,
                })
              }
            >
              {props?.apiData?.category}
            </h2>

            <span
              onClick={() =>
                setSelectedData({
                  ...selectedData,
                  category: !selectedData?.category,
                })
              }
              className={` text-gray-500 ${
                selectedData?.category ? "-rotate-180" : "rotate-0"
              } transition-all `}
            >
              <KeyboardArrowDownRoundedIcon />
            </span>

            <div
              className={` ${
                selectedData?.category
                  ? "max-h-[900px] border border-gray-400  rounded-md mt-2 bg-white shadow-2xl"
                  : "max-h-0"
              } transition-all duration-150  ease-in-out absolute  right-0 left-0  top-[99%] overflow-hidden`}
            >
              {props?.apiData?.categoryList?.map((data, index) => {
                return (
                  <h2
                    key={data}
                    value={data}
                    className="p-2 py-3 hover:bg-[#fcedd1] transition-all cursor-pointer"
                    onClick={() => {
                      props?.setApiData({
                        ...props?.apiData,
                        category: data,
                      });
                      setSelectedData({
                        ...selectedData,
                        category: !selectedData?.category,
                      });
                    }}
                  >
                    {data}
                  </h2>
                );
              })}
            </div>
          </div>
        </div>

        {/* hsn */}
        <div className="">
          <h1 htmlFor="hsn" className="text-gray-700 text-sm mb-1">
            HSN
          </h1>
          <h1 className="py-2 rounded-md block   w-full outline-none">
            {props?.apiData?.hsn}
          </h1>
        </div>
      </div>
      {/* variants */}
      <div className="border-gray-300 border rounded-md pt-5 pl-5 mt-5">
        <div className="mb-2 ">
          <h1>All Variants</h1>
        </div>
        <div className="grid grid-cols-4 gap-5  py-5">
          <h1 className="text-sm text-gray-500">Variant</h1>
          <h1 className="text-sm text-gray-500">Price</h1>
          <h1 className="text-sm text-gray-500">Quantity</h1>
          <h1 className="text-sm text-gray-500">SKU</h1>
        </div>

        <div className="h-[200px] overflow-y-scroll py-5 pr-5">
          {variantsData?.map((data, index) => {
            return (
              <div key={index} className="grid grid-cols-4 gap-5 mb-5">
                <h1>{data?.variantName}</h1>
                <div className="flex gap-1 items-center rounded-md px-2 border-gray-400 border">
                  <span>₹</span>
                  <input
                    type="number"
                    defaultValue={data?.price}
                    onChange={(e) =>
                      setVariantsData((variantsData) =>
                        variantsData?.map((obj, idx) => {
                          if (idx === index) {
                            return {
                              ...obj,
                              price: e?.target?.value,
                            };
                          }

                          return obj;
                        })
                      )
                    }
                    className="p-2  block   w-full outline-none"
                  />
                </div>
                <input
                  type="number"
                  defaultValue={data?.quantity}
                  onChange={(e) =>
                    setVariantsData((variantsData) =>
                      variantsData?.map((obj, idx) => {
                        if (idx === index) {
                          return {
                            ...obj,
                            quantity: e?.target?.value,
                          };
                        }

                        return obj;
                      })
                    )
                  }
                  className="p-2 rounded-md block  border-gray-400 border w-full outline-none"
                />

                <input
                  type="text"
                  defaultValue={data?.sku}
                  onChange={(e) =>
                    setVariantsData((variantsData) =>
                      variantsData?.map((obj, idx) => {
                        if (idx === index) {
                          return {
                            ...obj,
                            sku: e?.target?.value,
                          };
                        }

                        return obj;
                      })
                    )
                  }
                  className="p-2 rounded-md block  border-gray-400 border w-full outline-none"
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* Sibling products */}
      {/* <div className="mt-5">
        <div className="">
          <h1 className="text-gray-700 text-sm mb-1">Sibling product</h1>

          <div className="relative  rounded-md  border-gray-400 border w-full outline-none flex justify-between items-center ">
            <h2
              className=" p-2 cursor-pointer flex-1"
              onClick={() =>
                setSelectedData({
                  ...selectedData,
                  sibling_product: !selectedData?.sibling_product,
                })
              }
            >
              {props?.apiData?.sibling_product?.name}
            </h2>

            <span
              onClick={() =>
                setSelectedData({
                  ...selectedData,
                  sibling_product: !selectedData?.sibling_product,
                })
              }
              className={` text-gray-500 ${
                selectedData?.sibling_product ? "-rotate-180" : "rotate-0"
              } transition-all `}
            >
              <KeyboardArrowDownRoundedIcon />
            </span>

            <div
              className={` ${
                selectedData?.sibling_product
                  ? "max-h-[900px] border border-gray-400  rounded-md mt-2 bg-white shadow-2xl"
                  : "max-h-0"
              } transition-all duration-150  ease-in-out absolute  right-0 left-0  bottom-[99%] overflow-hidden`}
            >
              {props?.apiData?.productList?.map((data, index) => {
                return (
                  <h2
                    key={data}
                    value={data}
                    className="p-2 py-3 hover:bg-[#fcedd1] transition-all cursor-pointer"
                    // onClick={() => {
                    //   props?.setApiData((apiData) =>
                    //     apiData?.sibling_product?.map((obj, idx) => {
                    //       if (data === idx) {
                    //         return {
                    //           ...obj,
                    //           name: obj?.name,
                    //         };
                    //       }

                    //       return obj;
                    //     })
                    //   );
                    //   setSelectedData({
                    //     ...selectedData,
                    //     sibling_product: !selectedData?.sibling_product,
                    //   });
                    // }}
                  >
                    {data}
                  </h2>
                );
              })}
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default ProductDetailsEditForm;
