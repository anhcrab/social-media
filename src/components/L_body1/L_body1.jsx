import React from "react";
import "./L_body1.scss";
import AOS from "aos";
import icon1 from "../../assets/pic/dework.png";
import icon2 from "../../assets/pic/discord.png";
import icon3 from "../../assets/pic/discourse.png";
import icon4 from "../../assets/pic/github.png";
import icon5 from "../../assets/pic/gnosis.png";
import icon6 from "../../assets/pic/daos.png";

export default function L_body() {
  // AOS.init();
  // document.addEventListener("aos:in", ({ detail }) => {});
  // document.addEventListener("aos:out", ({ detail }) => {});

  window.addEventListener("scroll", function () {
    if ((window.scrollY = 200)) {
      document.querySelector("header").classList.add("fixed-header");
      console.log(window.screenY +1);
    } else {
      document.querySelector("header").classList.add("fixed-header");
    }
    if ((this.window.scrollY = 220)) {
      document.querySelector("header").classList.add("fixed-header1");
      console.log(window.screenY +1);
    } else {
      document.querySelector("header").classList.add("fixed-header1");
    }
    if ((this.window.scrollY = 240)) {
      document.querySelector("header").classList.add("fixed-header2");
      console.log(window.screenY +1);
    } else {
      document.querySelector("header").classList.add("fixed-header2");
    }
  });

  return (
    <body>
      <div className="contain">
        <header>
          <div className="row">
            <div class="col-xl-3">
              <a href="#" class="logo">
                <img src={icon4} />
              </a>
            </div>
            <div class="col-xl-3">
              <a href="#" class="logo1">
                <img src={icon3} />
              </a>
            </div>
            <div class="col-xl-3">
              <a href="#" class="logo2">
                <img src={icon2} />
              </a>
            </div>
            <div class="col-xl-3">
              <a href="#" class="logo3">
                <img src={icon1} />
              </a>
            </div>
          </div>
        </header>
        <div class="box-height"></div>
      </div>
    </body>
  );
}
