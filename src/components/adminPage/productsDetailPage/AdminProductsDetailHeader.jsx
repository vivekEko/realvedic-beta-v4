import axios from "axios";
import React, { useEffect, useState } from "react";

// State management (recoil Js)
import { useRecoilState } from "recoil";
import metaDataAtom from "../../../recoil/adminPage/productDetailsPage/metaDataAtom";
import nutritionalDataAtom from "../../../recoil/adminPage/productDetailsPage/nutritionalDataAtom";
import productDetailsApiAtom from "../../../recoil/adminPage/productDetailsPage/productDetailsApiAtom";
import variantsDataAtom from "../../../recoil/adminPage/productDetailsPage/variantsDataAtom";

const AdminProductsDetailHeader = () => {
  // Global variables
  const [metaData, setMetaData] = useRecoilState(metaDataAtom);
  const [nutritionalData, setNutritionalData] =
    useRecoilState(nutritionalDataAtom);
  const [variantsData, setVariantsData] = useRecoilState(variantsDataAtom);
  const [apiData, setApiData] = useRecoilState(productDetailsApiAtom);

  // local variables
  const [apiDataToSend, setApiDataToSend] = useState();
  const [saveData, setSaveData] = useState(false);

  return (
    <div className="flex justify-between items-center">
      <div>
        <h1 className="text-xl">
          Product <span className="text-[#c57963] ">#05231</span>
        </h1>
        <div className="mt-1 text-xs font-extralight text-gray-400">
          <h4>Last edited:</h4>
          <h4>Jul 17,2022 at 10:25am</h4>
        </div>
      </div>

      <div>
        <button
          onClick={() => {
            axios({
              method: "post",
              url: process.env.REACT_APP_BASE_LINK + "/adminProductUpdate",
              data: {
                data: {
                  ...apiData,
                  nutritional_info: nutritionalData,
                  variants: variantsData,
                  meta_field: metaData,
                },
              },
            }).then((resp) => {
              console.log(resp?.data);
            });
          }}
          className="px-5 py-3 bg-[#C57963] text-[#fcedd1]  rounded-lg active:scale-95 transition"
        >
          SAVE CHANGES
        </button>
      </div>
    </div>
  );
};

export default AdminProductsDetailHeader;
