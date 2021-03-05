import React, { useEffect, useState } from "react";
import { FaCropAlt, FaPinterestP, FaRegObjectGroup } from "react-icons/fa";
import { BiText } from "react-icons/bi";
import { GrTemplate } from "react-icons/gr";

const IconContainer = ({ toggle }) => {
  const [productOpen, setProductOpen] = useState(false);
  const [templateOpen, setTemplateOpen] = useState(false);
  const [formatOpen, setFormatOpen] = useState(false);
  const [textOpen, setTextOpen] = useState(false);
  const [objectOpen, setObjectOpen] = useState(false);

  // const handleProductNav = () => {
  //   setTemplateOpen(false);
  //   setFormatOpen(false);
  //   setTextOpen(false);
  //   setObjectOpen(false);
  //   setProductOpen(true);
  // };

  const handleTemplateNav = () => {
    setProductOpen(false);
    setFormatOpen(false);
    setTextOpen(false);
    setObjectOpen(false);
    setTemplateOpen(true);
  };

  const handleFormatNav = () => {
    setProductOpen(false);
    setTemplateOpen(false);
    setTextOpen(false);
    setObjectOpen(false);
    setFormatOpen(true);
  };

  const handleTextNav = () => {
    setProductOpen(false);
    setTemplateOpen(false);
    setFormatOpen(false);
    setObjectOpen(false);
    setTextOpen(true);
  };

  const handleObjectNav = () => {
    setProductOpen(false);
    setTemplateOpen(false);
    setFormatOpen(false);
    setTextOpen(false);
    setObjectOpen(true);
  };

  useEffect(() => {
    console.log(productOpen);
    console.log(templateOpen);
    console.log(formatOpen);
    console.log(textOpen);
    console.log(objectOpen);
  }, [productOpen, templateOpen, formatOpen, textOpen, objectOpen]);

  return (
    <nav>
      <div className="customIconContainer" onClick={toggle}>
        <div className="text-center iconStyle">
          <FaPinterestP />
        </div>
        <div className="textContainer text-center">Products</div>
      </div>
      <div className=" customIconContainer" onClick={handleTemplateNav}>
        <div className="text-center iconStyle">
          <GrTemplate />
        </div>
        <div className="textContainer text-center">Template</div>
      </div>
      <div className=" customIconContainer" onClick={handleFormatNav}>
        <div className="text-center iconStyle">
          <FaCropAlt />
        </div>
        <div className="textContainer text-center">Format</div>
      </div>
      <div className=" customIconContainer" onClick={handleTextNav}>
        <div className="text-center iconStyle">
          <BiText />
        </div>
        <div className="textContainer text-center">Text</div>
      </div>
      <div className=" customIconContainer" onClick={handleObjectNav}>
        <div className="text-center iconStyle">
          <FaRegObjectGroup />
        </div>
        <div className="textContainer text-center">Object</div>
      </div>
    </nav>

    // <>
    //   <div className="customIconContainer">
    //     <Button icon={Button.icon.PRODUCT} text="Products" />
    //   </div>
    //   <div className="customIconContainer">
    //     <Button icon={Button.icon.TEMPLATE} text="Template" />
    //   </div>
    //   <div className="customIconContainer">
    //     <Button icon={Button.icon.FORMAT} text="Format" />
    //   </div>
    //   <div className="customIconContainer">
    //     <Button icon={Button.icon.TEXT} text="Text" />
    //   </div>
    //   <div className="customIconContainer">
    //     <Button icon={Button.icon.OBJECT} text="Object" />
    //   </div>
    // </>
  );
};

export default IconContainer;
