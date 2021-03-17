import React from "react";
import PropTypes from "prop-types";
import ThumbnailImg from "../assets/images/no-image-placeholder.jpg";

const Thumbnail = ({ id, extraClass, onClickFunc }) => {
  return (
    <>
      <img
        id={id}
        className={`thumbnail-item ${extraClass}`}
        src={ThumbnailImg}
        alt="Product Thumbnails"
        onClick={onClickFunc}
      />
    </>
  );
};

Thumbnail.propTypes = {
  id: PropTypes.string,
  extraClass: PropTypes.string,
  onClickFunc: PropTypes.func,
};

Thumbnail.defaultProps = {
  id: "",
  extraClass: "",
  onClickFunc: () => {},
};

export default Thumbnail;
