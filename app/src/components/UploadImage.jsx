import React, { useState } from "react";
import { useEffect } from "react";
import upload from "../assets/uploadIndicator.png";
const UploadImage = () => {
  const [image, setImage] = useState(null);

  //takes the file and store it in state and local
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

  //when component mount checks for img in localstorage
  useEffect(() => {
    let imgFromLocal = localStorage.getItem("image");
    if (imgFromLocal) {
      setImage(imgFromLocal);
    }
  }, []);

  return (
    <div className="flex items-center justify-between w-[50vh] h-[50vh] lg:ml-[10%] border-t border-l border-r  shadow-[#aeacac] shadow-md mt-[25vh] rounded-[2%]">
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
              className="w-16 cursor-pointer"
              /* little trick to use the img as input file */
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

export default UploadImage;
