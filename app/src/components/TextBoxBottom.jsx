import React, { useEffect, useState } from "react";
import { text } from "../assets/text";

const TextBoxBottom = () => {
  //bring the string from localstorage, the first time will be ""
  const [inputBottom, setInputBottom] = useState(
    localStorage.getItem("inputBottom")
  );

  //listen the changes from the input and store them
  useEffect(() => {
    JSON.stringify(localStorage.setItem("inputBottom", inputBottom));
  }, [inputBottom]);

  return (
    <div className="flex border-b border-l border-r shadow-[#aeacac] text-left shadow-md mt-[5%] lg:mt-[5%]  rounded-[0.5rem]">
      <div className="w-full ">
        <div className="shadow-md shadow-[#f3fd83] border-b border-[#EBEFF2]">
          <p className=" pl-4 shadow-md text-lg py-2">Text Box</p>
        </div>
        <div className="">
          <textarea
            type="textarea"
            value={inputBottom}
            id=""
            wrap="hard"
            cols="50"
            placeholder={text}
            onChange={(e) => setInputBottom(e.target.value)}
            className="w-full h-full outline-0 mt-2 pl-4 resize-none overflow-hidden pb-32 placeholder:text-black"
          ></textarea>

          <div className=" border-t border-[#EBEFF2] pt-[25px]"></div>
        </div>
      </div>
    </div>
  );
};

export default TextBoxBottom;
