import { atom } from "recoil";

const adminSidebarStatusAtom = atom({
  key: "adminSidebarStatusAtom", // unique ID (with respect to other atoms/selectors)
  default: false, // default value (aka initial value)
});

export default adminSidebarStatusAtom;
