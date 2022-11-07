// React
import React, { useEffect } from "react";
import { useState } from "react";

// Assets
import mini_logo from "../../../assets/img/adminPage/sidebar/realvedic_mini_logo.svg";
import logo_text from "../../../assets/img/adminPage/sidebar/realvedic_text.svg";
import dashboard_icon from "../../../assets/img/adminPage/sidebar/dashboard_icon.svg";
import order_icon from "../../../assets/img/adminPage/sidebar/order_icon.svg";
import product_icon from "../../../assets/img/adminPage/sidebar/product_icon.svg";
import account_icon from "../../../assets/img/adminPage/sidebar/account_icon.svg";
import content_icon from "../../../assets/img/adminPage/sidebar/content_icon.svg";
import analytics_icon from "../../../assets/img/adminPage/sidebar/analytics_icon.svg";

// State Mangemnet (Recoil JS)
import { useRecoilState } from "recoil";
import adminSidebarStatusAtom from "../../../recoil/adminPage/adminSidebar/adminSidebarStatusAtom";
import { NavLink, useLocation } from "react-router-dom";

const AdminSidebar = () => {
  // Global variables
  const [adminSidebarIsOpen, setAdminSidebarIsOpen] = useRecoilState(
    adminSidebarStatusAtom
  );

  // loacl variables
  const [activeLink, setActiveLink] = useState();

  // detecting current path
  const location = useLocation();
  const path = location.pathname;

  // Storing active path name in variables
  useEffect(() => {
    setActiveLink(path);
  }, [path]);

  // Sidebar link Names
  const sidebarLinkNames = [
    {
      linkName: "Dashboard",
      iconName: dashboard_icon,
      link_path: "/admin",
    },
    {
      linkName: "Orders",
      iconName: order_icon,
      link_path: "/admin/orders",
    },
    {
      linkName: "Products",
      iconName: product_icon,
      link_path: "/admin/products",
      sub_link: "/admin/products/productDetails",
    },
    {
      linkName: "Accounts",
      iconName: account_icon,
      link_path: "/admin/accounts",
    },
    {
      linkName: "Contents",
      iconName: content_icon,
      link_path: "/admin/contents",
    },
    {
      linkName: "Analytics",
      iconName: analytics_icon,
      link_path: "/admin/analytics",
    },
  ];

  return (
    <div
      className={`bg-[#fcedd1] h-screen  overflow-x-hidden fixed top-0 bottom-0 left-0 z-50 ${
        adminSidebarIsOpen
          ? " transition-all duration-500 max-w-[250px] w-[50%] "
          : " min-w-[70px] max-w-[70px] transition-all duration-500 w-[50%] md:transition-all  md:max-w-[250px] md:w-[50%] "
      } `}
    >
      <div className="py-5">
        {/* Logo */}
        <div
          className="cursor-pointer min-h-[80px] w-[80%] mx-auto"
          onClick={() => setAdminSidebarIsOpen(!adminSidebarIsOpen)}
        >
          <img src={mini_logo} alt="Realvedic" className="mx-auto" />
          <img src={logo_text} alt="Realvedic" className="mx-auto " />
        </div>

        {/* Sidebar Links */}
        <ul className="mt-14 ">
          {sidebarLinkNames?.map((data, index) => {
            return (
              <li key={index} className="relative group mb-5">
                <NavLink to={data?.link_path}>
                  <div
                    className={`h-[35px] w-[5px] rounded-lg bg-[#c57963] absolute right-0 top-0 bottom-0 ${
                      activeLink === data?.link_path ||
                      activeLink?.includes(data?.sub_link)
                        ? "group-hover:visible"
                        : "invisible"
                    }   transition`}
                  ></div>

                  <div
                    className={`flex  py-1 items-center w-[80%] mx-auto  gap-5 justify-between min-w-[150px] cursor-pointer`}
                  >
                    <img
                      src={data?.iconName}
                      alt="dashboard"
                      className={`max-w-[25px] transition-all duration-500 ${
                        adminSidebarIsOpen ? "ml-0 " : "ml-5 md:ml-0"
                      } `}
                    />
                    <div
                      className={` transition-all duration-500 text-[#545454] group-hover:text-black`}
                    >
                      {data?.linkName}
                    </div>
                  </div>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default AdminSidebar;
