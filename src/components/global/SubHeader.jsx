import React from "react";
import search from "../../assets/img/header/search.svg";

const SubHeader = () => {
  return (
    <div className=" md:hidden  my-4 ">
      <div className="flex justify-center items-center w-[90%] mx-auto  border-[2px]  px-2 border-[#C57963] p-2">
        <input type="text" className="outline-none border-0  flex-1 " />
        <img src={search} alt="search" className="w-[25px]" />
      </div>
    </div>
  );
};

export default SubHeader;
