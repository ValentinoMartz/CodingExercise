import React, { useState } from "react";
import { useEffect } from "react";
import upload from "../assets/uploadIndicator.png";
const UploadImage = () => {
  const [image, setImage] = useState(null);

  const addImageToState = (e) => {
    e.preventDefault();
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }
    reader.onload = (readerEvent) => {
      setImage(readerEvent.target.result);
      localStorage.setItem("image", readerEvent.target.result);
    };
  };

  useEffect(() => {
    let imfromLocal = localStorage.getItem("image");
    if (imfromLocal) {
      setImage(imfromLocal);
    }
  }, []);

  //ml-[10%] max-[1000px]:ml-[5vh] max-[1200px]:ml-[10vh]
  return (
    <div className=" flex items-center justify-between w-[50vh] h-[50vh] border-t border-l border-r  shadow-[#aeacac] shadow-md mt-[25vh] rounded-[2%]">
      {image ? (
        <div
          className="flex items-center mx-auto justify-center max-w-[50vh] rounded-[1rem]"
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
