import { atom } from "recoil";

const homePageStatusAtom = atom({
  key: "homePageStatusAtom", // unique ID (with respect to other atoms/selectors)
  default: false, // default value (aka initial value)
});

export default homePageStatusAtom;
