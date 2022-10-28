import React from "react";
import upload from "../assets/uploadIndicator.png";
const UploadImage = () => {
  const handleUpload = () => {
    console.log("Anda");
  };

  return (
    <div className=" flex items-center justify-between w-[50vh] h-[50vh] border border-black mt-[25vh] ml-[35vh] space-x-6">
      <div className="flex flex-wrap items-center mx-auto justify-center">
        <div className="flex items-center ml-[25%] mr-[25%]">
          <img src={upload} alt="" className="w-16" onClick={handleUpload} />
        </div>
        <p className="items-center mt-4 text-[#656363] text-xl">
          PNG, JPEG files only
        </p>
      </div>
    </div>
  );
};

/* vh del div de la imagen, revisar luego  */

export default UploadImage;
