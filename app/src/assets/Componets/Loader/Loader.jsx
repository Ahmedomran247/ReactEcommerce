import React from "react";
import { BallTriangle } from "react-loader-spinner";
import style from "../Loader/loader.module.css";

export default function Loader() {
  return (
    <div className="flex justify-center items-center h-screen">
      <BallTriangle
        height={100}
        width={100}
        radius={5}
        color="#4fa94d"
        ariaLabel="ball-triangle-loading"
        wrapperStyle={{}}
        visible={true}
      />
    </div>
  );
}
