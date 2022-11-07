// react
import React, { useEffect } from "react";

// Api call
import axios from "axios";

// State Management (Recoil JS)
import { useRecoilState } from "recoil";
import adminSidebarStatusAtom from "../../../recoil/adminPage/adminSidebar/adminSidebarStatusAtom";
import adminProductListAtom from "../../../recoil/adminPage/productPage/adminProductListAtom";
import adminproductListFilterAtom from "../../../recoil/adminPage/productPage/adminproductListFilterAtom";

// components
import AdminProductHeader from "../productsPage/AdminProductHeader";
import ProductList from "./ProductList";
import ProductSearchAndFilter from "./ProductSearchAndFilter";

const AdminProducts = () => {
  // Global variables
  const [adminSidebarIsOpen, setAdminSidebarIsOpen] = useRecoilState(
    adminSidebarStatusAtom
  );
  const [adminProductListApiData, setAdminProductListApiData] =
    useRecoilState(adminProductListAtom);
  const [adminProductlistFilterValues, setAdminProductListFilterValues] =
    useRecoilState(adminproductListFilterAtom);

  // API call for admin product list
  useEffect(() => {
    async function apiCall() {
      const adminProductList = await axios({
        method: "post",
        url: process.env.REACT_APP_BASE_LINK + "/adminProductList",
        data: {
          data: adminProductlistFilterValues,
        },
      });

      setAdminProductListApiData(adminProductList?.data);
    }

    apiCall();
  }, [adminProductlistFilterValues]);

  return (
    <div
      className={` p-5 w-full transition-all duration-500  h-screen overflow-hidden ${
        !adminSidebarIsOpen
          ? "pl-[90px] md:pl-[270px]"
          : "pl-[90px] md:pl-[270px]"
      } `}
    >
      <AdminProductHeader apiData={adminProductListApiData} />
      <div>
        <ProductSearchAndFilter />
        <ProductList apiData={adminProductListApiData} />
      </div>
    </div>
  );
};

export default AdminProducts;
