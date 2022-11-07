import { atom } from "recoil";

const adminProductListAtom = atom({
  key: "adminProductListAtom", // unique ID (with respect to other atoms/selectors)
  default: null, // default value (aka initial value)
});

export default adminProductListAtom;
