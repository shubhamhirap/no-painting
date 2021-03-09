import React from "react";
import PropTypes from "prop-types";
import ThumbnailImg from "../assets/images/no-image-placeholder.jpg";

const Thumbnail = ({ id, extraClass }) => {
  return (
    <>
      <img
        id={id}
        className={`thumbnail-item ${extraClass}`}
        src={ThumbnailImg}
        alt="Product Thumbnails"
      />
    </>
  );
};

Thumbnail.propTypes = {
  id: PropTypes.string,
  extraClass: PropTypes.string,
};

Thumbnail.defaultProps = {
  id: "",
  extraClass: "",
};

export default Thumbnail;
