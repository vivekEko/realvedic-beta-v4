// react
import React from "react";
import { Link } from "react-router-dom";

// media files
import blog from "../../../assets/img/landingPage/nav/blog.svg";
import doc from "../../../assets/img/landingPage/nav/doc.svg";

// components
import MomBaby from "./nav_links/MomBabyLink";
import PharmaLink from "./nav_links/PharmaLink";
import Products from "./nav_links/ProductsLink";

const Nav = () => {
  return (
    <nav className="bg-[#fcedd1] hidden md:block">
      <div className="w-[85%] lg:w-[70%] flex justify-between items-center gap-10  mx-auto py-10">
        <div>
          <Link to="/about_us">
            <img src={blog} alt="Blog" className="w-[40px] mx-auto mb-1" />

            <h1 className="font-bold text-xl">Blog</h1>
          </Link>
        </div>

        <MomBaby />
        <Products />
        <PharmaLink />
        <div>
          <img src={doc} alt="Doc" className="w-[40px] mx-auto mb-1" />
          <div className="flex items-center gap-1 relative">
            <h1 className="font-bold text-xl">Doctors</h1>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
