import React from "react";
//rounded-[4%]
//border-b-4 border-l-2 border-r-2 border-[#f3fd83]
const TextBoxTop = () => {
  let placeholder = "";

  /*  `This is a text area. Populate it with 3 paragraphs ~ 25 words <br/>
    each. Ex: <br/>
    Paragraph one (20 words)<br/>
    (line break)<br/>
    Paragraph two (25 words)<br/>
    (line break)<br/>
    Paragraph three (10 words)`; */

  return (
    <div className="flex justify-between w-[85vh] h-[35vh] mt-[12.5vh] ml-[20vh] border-b border-l border-r  shadow-[#aeacac] text-left shadow-md ">
      <div className="w-full">
        <p className="pl-2 shadow-md shadow-[#f3fd83] border-b border-blue">
          Text Box
        </p>

        <input
          type="textarea"
          name=""
          id=""
          placeholder={placeholder}
          className="truncate w-full outline-0 mt-2" //
        />
      </div>
    </div>
  );
};

export default TextBoxTop;
