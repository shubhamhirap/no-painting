import React from "react";
import ThumbnailImg from "../assets/images/no-image-placeholder.jpg";

const Thumbnail = () => {
  return (
    <>
      <img
        className="thumbnail-item"
        src={ThumbnailImg}
        alt="Product Thumbnails"
        width={`125px`}
        height={`100px`}
      />
    </>
  );
};

export default Thumbnail;
