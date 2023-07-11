import React, { useEffect, useState } from "react";

import "./L_body11.scss";

import daos from "../../assets/pic/daos.png";

export default function L_body11() {
  const [docHeight, setDocHeight] = useState(0);

  useEffect(() => {
    const box = document.getElementById("box");
    setDocHeight(document.documentElement.offsetHeight);
    console.log("docheight=" + docHeight);
    let temp = 0;
    const handleScroll = () => {
      const scrolled = window.scrollY / (docHeight - window.innerHeight);
      console.log("scroll= " + scrolled);
      temp = scrolled;
      if (scrolled < -6) {
        const transformValue = "scale(" + scrolled + ")";
        box.style.WebkitTransform = transformValue;
        box.style.MozTransform = transformValue;
        box.style.OTransform = transformValue;
        box.style.transform = transformValue;
        temp--;
      } else if (temp < 0) {
        const transformedValue = temp;
        const transformValue = "scale(" + transformedValue + ")";
        box.style.WebkitTransform = transformValue;
        box.style.MozTransform = transformValue;
        box.style.OTransform = transformValue;
        box.style.transform = transformValue;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [docHeight]);

  useEffect(() => {
    setDocHeight(0);
  }, []);

  return (
    <div className="row circle-part">
      <div id="container">
        <div id="box"></div>
        <div className="daos-items">
          <img className="daos" src={daos} alt="" />
        </div>
      </div>
    </div>
  );
}
