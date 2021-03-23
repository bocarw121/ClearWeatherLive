import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  backgroundImageSelector,
  fetchBackgroundImages,
} from "./backgroundImageSlice";

import "./BackgroundImage.css";

const BackgroundImage = ({ children }) => {
  const { imageUrls, currentImagePosition, isLoading } = useSelector(
    backgroundImageSelector
  );

  const dispatch = useDispatch();

  useEffect(() => dispatch(fetchBackgroundImages()), [dispatch]);

  return (
    <div className='background-image-wrapper'>
      <img
        alt=''
        className='background-image'
        src={imageUrls[currentImagePosition]}
      />
      {children}
    </div>
  );
};

export default BackgroundImage;
