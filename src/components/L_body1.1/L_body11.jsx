import React, { useEffect, useState } from "react";

import "./L_body11.scss";

import daos from "../../assets/pic/daos.png";

export default function L_body11() {
  const [docHeight, setDocHeight] = useState(0);
  useEffect(() => {
    const container = document.getElementById("container");
    setDocHeight(document.documentElement.offsetHeight);
    console.log("docheight=" + docHeight);
    const handleScroll = () => {
      const scrolled = window.scrollY / (docHeight - window.innerHeight / 1.8);
      console.log("scroll= " + scrolled);

      if (scrolled <= -0.8404545793629656 && scrolled >= -2) {
        const box = document.getElementById("box");
        const transformValue = "scale(" + scrolled + ")";
        box.style.WebkitTransform = transformValue;
        box.style.MozTransform = transformValue;
        box.style.OTransform = transformValue;
        box.style.transform = transformValue;
        container.classList.remove("position");
        console.log("1");
      } else if (scrolled <= -2 && scrolled > -3.4) {
        const scrolled = window.scrollY / (docHeight - window.innerHeight / 6.6);
        const box = document.getElementById("box");
        const transformValue = "scale(" + scrolled + ")";
        box.style.WebkitTransform = transformValue;
        box.style.MozTransform = transformValue;
        box.style.OTransform = transformValue;
        box.style.transform = transformValue;
        container.classList.add("thinhcode");
      } else if (scrolled <= -3.4) {
        container.classList.add("position");
      } else {
        console.log("lần 1 :" + scrolled);
        container.classList.add("position");
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
