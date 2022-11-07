import { atom } from "recoil";

const adminproductListFilterAtom = atom({
  key: "adminproductListFilterAtom", // unique ID (with respect to other atoms/selectors)
  default: {
    stock: "",
    status: "",
    category: "",
  }, // default value (aka initial value)
});

export default adminproductListFilterAtom;
