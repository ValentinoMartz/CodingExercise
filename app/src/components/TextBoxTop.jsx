import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { text } from "../assets/text";

const TextBoxTop = () => {
  //bring the string from localstorage, the first time will be ""
  const [inputTop, setInputTop] = useState(localStorage.getItem("inputTop"));

  //listen the changes from the input and store them
  useEffect(() => {
    JSON.stringify(localStorage.setItem("inputTop", inputTop));
  }, [inputTop]);

  return (
    <div className="flex mt-[10%] lg:mt-[12%] xl:mt-[5%] border-b border-l border-r shadow-[#aeacac] text-left shadow-md rounded-[0.5rem]">
      <div className="w-full ">
        <div className="shadow-md shadow-[#f3fd83] border-b border-[#EBEFF2]">
          <p className=" pl-4 shadow-md text-lg py-2">Text Box</p>
        </div>
        <div className="">
          <textarea
            type="textarea"
            value={inputTop}
            id=""
            wrap="hard"
            cols="50"
            placeholder={text}
            onChange={(e) => setInputTop(e.target.value)}
            className="w-full h-full outline-0 mt-2 pl-4 resize-none overflow-hidden pb-[8rem] placeholder:text-black"
          ></textarea>
          <div className=" border-t border-[#EBEFF2] pt-[25px]"></div>
        </div>
      </div>
    </div>
  );
};

export default TextBoxTop;
