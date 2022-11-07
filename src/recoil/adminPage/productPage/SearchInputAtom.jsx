import { atom } from "recoil";

const SearchInputAtom = atom({
  key: "SearchInputAtom", // unique ID (with respect to other atoms/selectors)
  default: "", // default value (aka initial value)
});

export default SearchInputAtom;
