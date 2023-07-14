import React, { useEffect, useState } from "react";

import "./L_body11.scss";

import daos from "../../assets/pic/daos.png";

export default function L_body11() {
  const [docHeight, setDocHeight] = useState(0);
  useEffect(() => {
    const container = document.getElementById("tn-container");
    setDocHeight(document.documentElement.offsetHeight);
    console.log("docheight=" + docHeight);
    const handleScroll = () => {
      const scrolled = window.scrollY / (docHeight - window.innerHeight / 1.8);
      console.log("scrollllll= " + scrolled);

      if (scrolled <= -0.76 && scrolled >= -2) {
        const box = document.getElementById("tn-box");
        const transformValue = "scale(" + scrolled + ")";
        box.style.WebkitTransform = transformValue;
        box.style.MozTransform = transformValue;
        box.style.OTransform = transformValue;
        box.style.transform = transformValue;
        container.classList.remove("tn-position");
        console.log("1");
      } else if (scrolled <= -2 && scrolled > -7) {
        const scrolled =
          window.scrollY / (docHeight - window.innerHeight / 6.6);
        const box = document.getElementById("tn-box");
        const transformValue = "scale(" + scrolled + ")";
        box.style.WebkitTransform = transformValue;
        box.style.MozTransform = transformValue;
        box.style.OTransform = transformValue;
        box.style.transform = transformValue;
        container.classList.add("tn-thinhcode");
      } else if (scrolled <= -7) {
        container.classList.add("tn-position");
      } else {
        console.log("lần 1 :" + scrolled);
        container.classList.add("tn-position");
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
    <div className="row tn-circle-part">
      <div id="tn-container">
        <div id="tn-box"></div>
        <div className="tn-daos-items">
          <img className="tn-daos" src={daos} alt="" />
        </div>
      </div>
    </div>
  );
}
