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
  window.addEventListener(
    "scroll",
    () => {
      document.body.style.setProperty(
        "--scroll",
        window.pageYOffset / (document.body.offsetHeight - window.innerHeight)
      );
    },
    false
  );

  const elevator = document.querySelector(".elevator");
  const elevatorL = document.querySelector(".elevatorL");
  const elevatorR = document.querySelector(".elevatorR");

  return (
    <body>
      <div class="elevator">
        <div class="elevatorL">GET ON THE</div>{" "}
        <div class="elevatorR"> ELEVATOR</div>
      </div>
    </body>
  );
}
