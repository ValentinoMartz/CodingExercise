import React, { useState } from "react";
import { useRef } from "react";
import upload from "../assets/uploadIndicator.png";
const UploadImage = () => {
  const [image, setImage] = useState(null);

  const addImageToState = (e) => {
    e.preventDefault();
    const reader = new FileReader();
    if (e.target.files[0]) {
      console.log(e.target.files[0]);
      reader.readAsDataURL(e.target.files[0]);
    }
    reader.onload = (readerEvent) => {
      setImage(readerEvent.target.result);
    };
  };
  //how to fit an image in a div tailwin?
  return (
    <div className=" flex items-center justify-between w-[50vh] h-[50vh] border-t border-l border-r  shadow-[#aeacac] shadow-md mt-[25vh] ml-[35vh]  space-x-6 rounded-[2%]">
      {image ? (
        <div
          className="flex items-center mx-auto justify-center max-w-[50vh]"
          onChange={addImageToState}
        >
          <img
            src={image}
            alt="yourimage"
            className="cursor-pointer h-[50vh]"
            onClick={() => document.getElementById("file").click()}
          />
          <input type="file" className="hidden" id="file" />
        </div>
      ) : (
        <div className="flex flex-wrap items-center mx-auto justify-center">
          <div
            className="flex items-center ml-[25%] mr-[25%]"
            onChange={addImageToState}
          >
            <img
              src={upload}
              alt="upload"
              className="w-16 cursor-pointer "
              onClick={() => document.getElementById("file").click()}
            />
            <input type="file" className="hidden" id="file" />
          </div>
          <p className="items-center mt-4 text-[#656363] text-xl">
            PNG, JPEG files only
          </p>
        </div>
      )}
    </div>
  );
};
/* hover:shadow-[#aeacac] hover:shadow-md hover:rounded-full */
/* vh del div de la imagen, revisar luego  */

export default UploadImage;
