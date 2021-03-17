import React, { useRef } from "react";
import {
  GiBiohazard,
  GiCrossedBones,
  GiExitDoor,
  GiNuclearWaste,
} from "react-icons/gi";
import {
  BsArrowReturnLeft,
  BsArrowReturnRight,
  BsFullscreenExit,
  BsLightningFill,
  BsTriangle,
} from "react-icons/bs";
import {
  AiOutlineArrowDown,
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
  AiOutlineArrowUp,
  AiTwotoneFire,
} from "react-icons/ai";
import { GrEmergency } from "react-icons/gr";
import { IoMdNuclear } from "react-icons/io";
import { GoRadioTower } from "react-icons/go";
import { FaGasPump, FaHospital, FaSchool, FaSkull } from "react-icons/fa";
import { BiHotel } from "react-icons/bi";
import { MdAssignmentReturn } from "react-icons/md";
import { Link } from "react-router-dom";
import Input from "../components/Input";

const ObjectsContainer = () => {
  const inputFile = useRef();

  const onButtonClick = (e) => {
    // inputFile.current.click();
    console.log(`clicked for file`);
  };

  return (
    <div id="object-container">
      <div id="close-icon-object">
        <GiCrossedBones />
      </div>
      <div id="object-search-close">
        <Input extraClass="drawer-text-input" placeholder="Search Object" />
        <GiCrossedBones  id="close-icon-m-object"/>
      </div>
      <div id="object-mobile-inline">
        <div className="object-inline">
          <div className={`object-heading-container`}>
            <h6 className={`object-heading`}>Admittance & Exit</h6>
            <Link to="#" className="object-link">
              See All
            </Link>
          </div>
          <GiExitDoor className={`object-svg`} size={28} />
          <BsFullscreenExit className={`object-svg`} size={28} />
          <AiOutlineArrowUp className={`object-svg`} size={28} />
          <AiOutlineArrowDown className={`object-svg`} size={28} />
          <AiOutlineArrowLeft className={`object-svg`} size={28} />
          <AiOutlineArrowRight className={`object-svg`} size={28} />
          <GrEmergency className={`object-svg`} size={28} />
        </div>
        <div className="object-inline">
          <div className={`object-heading-container`}>
            <h6 className={`object-heading`}>Material</h6>
            <Link to="#" className="object-link">
              See All
            </Link>
          </div>
          <AiTwotoneFire className={`object-svg`} size={28} />
          <IoMdNuclear className={`object-svg`} size={28} />
          <GiBiohazard className={`object-svg`} size={28} />
          <GiNuclearWaste className={`object-svg`} size={28} />
          <FaSkull className={`object-svg`} size={28} />
          <GoRadioTower className={`object-svg`} size={28} />
        </div>
        <div className="object-inline">
          <div className={`object-heading-container`}>
            <h6 className={`object-heading`}>Directional</h6>
            <Link to="#" className="object-link">
              See All
            </Link>
          </div>
          <AiOutlineArrowDown className={`object-svg`} size={28} />
          <AiOutlineArrowUp className={`object-svg`} size={28} />
          <AiOutlineArrowLeft className={`object-svg`} size={28} />
          <AiOutlineArrowRight className={`object-svg`} size={28} />
          <BsArrowReturnLeft className={`object-svg`} size={28} />
          <BsArrowReturnRight className={`object-svg`} size={28} />
          <MdAssignmentReturn className={`object-svg`} size={28} />
        </div>
        <div className="object-inline">
          <div className={`object-heading-container`}>
            <h6 className={`object-heading`}>Electrical Hazards</h6>
            <Link to="#" className="object-link">
              See All
            </Link>
          </div>
          <BsTriangle className={`object-svg`} size={28} />
          <BsLightningFill className={`object-svg`} size={28} />
        </div>
        <div className="object-inline">
          <div className={`object-heading-container`}>
            <h6 className={`object-heading`}>Informational</h6>
            <Link to="#" className="object-link">
              See All
            </Link>
          </div>
          <FaSchool className={`object-svg`} size={28} />
          <FaHospital className={`object-svg`} size={28} />
          <BiHotel className={`object-svg`} size={28} />
          <FaGasPump className={`object-svg`} size={28} />
        </div>
      </div>
      <div id="object-image-upload">
        <Input type="file" id="hidden-upload-input" ref={inputFile} />
        <Link id="link-upload-input" onClick={(e) => onButtonClick()}>
          + Upload your own image
        </Link>
      </div>
    </div>
  );
};

export default ObjectsContainer;
