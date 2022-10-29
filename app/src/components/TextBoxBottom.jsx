import React, { useEffect, useState } from "react";

const TextBoxBottom = () => {
  const [inputBottom, setInputBottom] = useState(
    localStorage.getItem("inputBottom")
  );

  useEffect(() => {
    JSON.stringify(localStorage.setItem("inputBottom", inputBottom));
  }, [inputBottom]);
  let text =
    "This is a text area. Populate it with 3 paragraphs ~ 25 words \neach. Ex: \nParagraph one (20 words)\n(line break) \nParagraph two(25 words)\n(line break)\nParagraph three (10 words)";

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
