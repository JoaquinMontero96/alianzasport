import React from 'react';
import './Loader.css';
import { RotatingSquare } from 'react-loader-spinner';

function Loader() {
  return (
    <div className="loaderContainer">
      <RotatingSquare
        height="100"
        width="100"
        color="#001034"
        ariaLabel="rotating-square-loading"
        strokeWidth="4"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  )
}

export default Loader
