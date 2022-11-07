import { atom } from "recoil";

const metaDataAtom = atom({
  key: "metaDataAtom", // unique ID (with respect to other atoms/selectors)
  default: null, // default value (aka initial value)
});

export default metaDataAtom;
