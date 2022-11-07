// React
import React, { useEffect, useState } from "react";

// State Mangement (Recoil JS)
import { useRecoilState } from "recoil";
import cartPageAtom from "../recoil/cartPage/cartPageAtom";

// Media files
import cross from "../assets/img/cartPage/cross.svg";

// Components
import Footer from "../components/global/Footer";

const CartPage = () => {
  // GlobalVariables
  const [cartData, setCartData] = useRecoilState(cartPageAtom);

  // local variables
  const [cartArray, setCartArray] = useState([]);
  const cartItems = [
    {
      name: "Garlic Rasam Powder | Instant Mix",
      unit_price: 100,
      price: 200,
      quantity: 2,
    },
    {
      name: "Kokum Rasam ",
      unit_price: 50,
      price: 50,
      quantity: 1,
    },
    {
      name: "Angaya Podi",
      unit_price: 80,
      price: 400,
      quantity: 5,
    },
    {
      name: "Immumilk ",
      unit_price: 30,
      price: 90,
      quantity: 3,
    },
    {
      name: "Lemon Grass Rasam Powder",
      unit_price: 80,
      price: 400,
      quantity: 5,
    },

    {
      name: "Garlic Rasam Powder | Instant Mix",
      unit_price: 100,
      price: 200,
      quantity: 2,
    },
    {
      name: "Kokum Rasam ",
      unit_price: 50,
      price: 50,
      quantity: 1,
    },
    {
      name: "Angaya Podi",
      unit_price: 80,
      price: 400,
      quantity: 5,
    },
    {
      name: "Immumilk ",
      unit_price: 30,
      price: 90,
      quantity: 3,
    },
    {
      name: "Lemon Grass Rasam Powder",
      unit_price: 80,
      price: 400,
      quantity: 5,
    },

    {
      name: "Garlic Rasam Powder | Instant Mix",
      unit_price: 100,
      price: 200,
      quantity: 2,
    },
    {
      name: "Kokum Rasam ",
      unit_price: 50,
      price: 50,
      quantity: 1,
    },
    {
      name: "Angaya Podi",
      unit_price: 80,
      price: 400,
      quantity: 5,
    },
    {
      name: "Immumilk ",
      unit_price: 30,
      price: 90,
      quantity: 3,
    },
    {
      name: "Lemon Grass Rasam Powder",
      unit_price: 80,
      price: 400,
      quantity: 5,
    },
  ];

  useEffect(() => {
    setCartArray(cartItems);
  }, []);

  return (
    <div className="   ">
      <div className="w-[85%]  mx-auto mb-20">
        <div className="   md:w-[60%] relative  min-h-[80vh] ">
          <h1 className="text-3xl font-bold my-20 text-center md:text-start">
            My cart
          </h1>

          {/* Cart Items for mobile*/}
          <div className=" min-h-[40vh] pb-40 md:hidden">
            <h1 className="text-xl text-[#5B5B5B] mb-5">Item</h1>

            <div className="">
              {cartArray?.map((data, index) => {
                return (
                  <div key={index}>
                    <div className="border-b py-5">
                      <div className="flex items-start justify-between relative  ">
                        <div className="flex gap-5">
                          <div className="bg-[#e9e8e8] w-[100px] aspect-square"></div>
                          <h1 className="text-base">{data?.name}</h1>
                        </div>

                        <img src={cross} alt="..." className="cursor-pointer" />

                        <div className="flex justify-end items-center gap-10  absolute bottom-0 right-0">
                          <div className="flex items-center gap-5">
                            <span
                              className="text-base cursor-pointer"
                              onClick={() => {}}
                            >
                              -
                            </span>
                            <span className="textlg">{data?.quantity}</span>
                            <span className="text-base cursor-pointer">+</span>
                          </div>

                          <h1 className="text-lg font-bold">
                            ₹ <span>{data?.price}</span>
                          </h1>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Cart Items for PC view */}
          <div className="hidden md:block">
            {/* table headers */}
            <div className="grid grid-cols-[50%_12.5%_12.5%_12.5%_12.5%] ">
              <div className=" text-[#6D6D6D]">Item</div>
              <div className="text-center text-[#6D6D6D]">Unit Price</div>
              <div className="text-center text-[#6D6D6D]">Quantity</div>
              <div className="text-center text-[#6D6D6D]">Final Price</div>
              <div className="text-center text-[#6D6D6D]">Remove</div>
            </div>

            <div className=" max-h-[40vh]  overflow-y-scroll mt-2">
              {cartArray?.map((data, index) => {
                return (
                  <div
                    key={index}
                    className="grid grid-cols-[50%_12.5%_12.5%_12.5%_12.5%]  my-5"
                  >
                    <div className="flex items-center gap-5 ">
                      <span className="bg-[#e9e8e8] w-[40px] h-[40px] inline-block"></span>
                      <span>{data?.name}</span>
                    </div>
                    <div className="text-center">{data?.unit_price}</div>
                    <div className="text-center flex justify-center items-start gap-4 ">
                      <span className="cursor-pointer">-</span>
                      <span> {data?.quantity}</span>

                      <span className="cursor-pointer">+</span>
                    </div>
                    <div className="flex item-start justify-center  ">
                      <div className=" min-w-[60px]">
                        <span>Rs.</span>
                        <span className=""> {data?.price}</span>
                      </div>
                    </div>
                    <div className="">
                      <img
                        src={cross}
                        alt="..."
                        className="cursor-pointer mx-auto"
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Checkout */}
          <div className="fixed md:absolute bottom-0 right-0 left-0 py-10 bg-white ">
            <div className="w-[85%] mx-auto md:w-full md:mx-0">
              <div className="flex md:flex-col md:gap-5   justify-between  items-center md:items-end w-full">
                <div>
                  <h2 className="text-black  text-base mb-2">Final Price</h2>
                  <h1 className="text-black font-extrabold text-2xl ">
                    ₹ <span>500</span>
                  </h1>
                </div>

                <div>
                  <div className="bg-[#FCF55C] p-4 px-10 font-extrabold  text-xl ">
                    CHECKOUT
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden md:block">
        <Footer />
      </div>
    </div>
  );
};

export default CartPage;
