import React from "react";

const Loader = () => {
  return (
    <div className="c-loader preloader">
      <div className="c-loader-icon-wrapper preloader-wrapper">
        <dotlottie-player
          src="https://lottie.host/f696ba71-0749-4526-923b-156c2c51fb6f/2GYhHHE44V.lottie"
          background="transparent"
          speed="2.5"
          style={{ width: "600px", height: "600px" }}
          loop
          autoplay
        ></dotlottie-player>
      </div>
    </div>
  );
};

export default Loader;
