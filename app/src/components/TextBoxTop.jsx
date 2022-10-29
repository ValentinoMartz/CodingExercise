import React from "react";
import { useEffect } from "react";
import { useState } from "react";

//hacer que el texto se acomode
//sacar la scrollbar
//fijar la linea azul de abajo
//hacer que se adapte a todas las pantallas
//max-[1000px]:ml-[2vh] max-[1200px]:ml-[350vh]

const TextBoxTop = () => {
  const [inputTop, setInputTop] = useState(localStorage.getItem("inputTop"));

  useEffect(() => {
    JSON.stringify(localStorage.setItem("inputTop", inputTop));
  }, [inputTop]);

  let text =
    "This is a text area. Populate it with 3 paragraphs ~ 25 words \neach. Ex: \nParagraph one (20 words)\n(line break) \nParagraph two(25 words)\n(line break)\nParagraph three (10 words)";

  return (
    <div className="flex mt-[10%] lg:mt-[15%] border-b border-l border-r shadow-[#aeacac] text-left shadow-md rounded-[0.5rem]">
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
          <div className=" border-t border-[#EBEFF2] [25px]"></div>
        </div>
      </div>
    </div>
  );
};
/*
20
Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi porro enim ullam animi dolore odio numquam! Provident dicta doloremque asperiores

25 
Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi porro enim ullam animi dolore odio numquam! Provident dicta doloremque asperiores tempora laboriosam distinctio facere id 

10
Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi enim

*/

export default TextBoxTop;
