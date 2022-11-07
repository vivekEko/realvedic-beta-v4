import { atom } from "recoil";

const landingPageAtom = atom({
  key: "landingPageAtom", // unique ID (with respect to other atoms/selectors)
  default: null, // default value (aka initial value)
});

export default landingPageAtom;
