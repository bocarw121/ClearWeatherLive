import React from "react";
import { useDispatch } from "react-redux";
import { fetchBackgroundImages } from "../../backgroundImage/backgroundImageSlice";
import { clearBgImageErrorMessage } from "../errorSlice";

const BgImageError = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <p>Oops! The content didn't load click refresh to try again.</p>
      <button
        onClick={() => {
          dispatch(fetchBackgroundImages());
          dispatch(clearBgImageErrorMessage());
        }}
        className='refresh-button'
      >
        Refresh
      </button>
    </div>
  );
};

export default BgImageError;
