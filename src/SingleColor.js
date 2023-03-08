import React, { useState, useEffect } from "react";
import rgbToHex from "./utils";

const SingleColor = ({ rgb, weight, index }) => {
  const [alert, setAlert] = useState(false);
  const bgc = rgb.join(",");
  const hex = rgbToHex(...rgb);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false);
      return clearTimeout(timeout);
    }, 3000);
  }, [alert]);
  return (
    <article
      onClick={() => {
        setAlert(true);
        navigator.clipboard.writeText(hex);
      }}
      className={`color ${index > 10 && "color-light"}`}
      style={{ backgroundColor: `rgb(${bgc})` }}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">{hex}</p>
      {alert && <p className="alert">Copied to Clipboar</p>}
    </article>
  );
};

export default SingleColor;
