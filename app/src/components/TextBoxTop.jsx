import React from "react";

//hacer que el texto se acomode
//sacar la scrollbar
//fijar la linea azul de abajo
//hacer que se adapte a todas las pantallas
//max-[1000px]:ml-[2vh] max-[1200px]:ml-[350vh]

const TextBoxTop = () => {
  let text =
    "This is a textarea. Populate it with 3 paragraphs ~ 25 words \neach. Ex: \nParagraph one (20 words)\n(line break) \nParagraph two(25 words)\n(line break)\nParagraph three (10 words)";

  return (
    <div className="flex w-[50%] h-[35vh] mt-[12.5vh]  border-b border-l border-r  shadow-[#aeacac] text-left shadow-md">
      <div className="w-full">
        <div className="shadow-md shadow-[#f3fd83] border-b border-[#EBEFF2]">
          <p className=" pl-4 shadow-md ">Text Box</p>
        </div>
        <div className="">
          <textarea
            type="textarea"
            name=""
            id=""
            wrap="hard"
            cols="50"
            placeholder={text}
            className="w-full h-full outline-0 mt-2 pl-4 resize-none overflow-hidden pb-32 placeholder:text-black "
          ></textarea>

          <div className=" border-t mb-[-20px] border-[#EBEFF2]"></div>
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
