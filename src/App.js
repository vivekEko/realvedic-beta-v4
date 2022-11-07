// Components and Pages
import Header, {
  BackButton,
  Hamburger,
  Header2,
} from "./components/global/Header";
import Sidebar, { SidebarOverlay } from "./components/global/Sidebar";
import HomePage from "./pages/HomePage";
import AboutUsPage from "./pages/AboutUsPage";
import CategoryPage from "./pages/CategoryPage";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";

// Routing
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

// State Mangement
import { useRecoilState } from "recoil";
import homePageStatusAtom from "./recoil/misc/homePageStatusAtom";
import Admin from "./pages/Admin";
import AdminProducts from "./components/adminPage/productsPage/AdminProducts";
import AdminSidebar from "./components/adminPage/adminSidebar/AdminSidebar";
import AdminProductDetails from "./pages/AdminProductDetails";
import CancellationPolicy from "./pages/CancellationPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";

function App() {
  //   Global variable
  const [homeIsActive, setHomeIsActive] = useRecoilState(homePageStatusAtom);

  // Local Variable
  const [adminIsActive, setAdminIsActive] = useState(false);

  // detecting current location
  const location = useLocation();
  const path = location.pathname;

  // checking if current page is homepage
  useEffect(() => {
    setHomeIsActive(path == "/" ? true : false);
    setAdminIsActive(path?.includes("admin") ? true : false);
    window.scrollTo(0, 0);
  }, [path]);

  return (
    <div className="cursor-default font-helveticaRegular relative ">
      {!adminIsActive && (
        <div>
          {/* Misc */}
          <SidebarOverlay />
          <Hamburger />
          <BackButton />

          {/* Main Components */}
          {homeIsActive ? <Header /> : <Header2 />}
          <Sidebar />
        </div>
      )}

      <div className={` ${adminIsActive ? " flex  " : "block "}   `}>
        {adminIsActive && <AdminSidebar />}
        {/* Routes */}
        <Routes>
          <Route path="*" element={<HomePage />} />
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/about_us" element={<AboutUsPage />} />
          <Route
            exact
            path="/category/:category_id"
            element={<CategoryPage />}
          />
          <Route exact path="/product/:product_id" element={<ProductPage />} />
          <Route exact path="/cart/" element={<CartPage />} />
          <Route exact path="/admin/" element={<Admin />} /> //admin dashboard
          component here
          <Route exact path="/admin/products" element={<AdminProducts />} />
          <Route
            exact
            path="/admin/products/productDetails/:product_id"
            element={<AdminProductDetails />}
          />
          <Route exact path="/returnPolicy" element={<CancellationPolicy />} />
          <Route
            exact
            path="/terms&Conditions"
            element={<TermsAndConditions />}
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
