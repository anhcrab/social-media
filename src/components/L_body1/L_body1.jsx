import React, { useEffect } from "react";
import "./L_body1.scss";
import dework from "../../assets/pic/dework.png";
import discord from "../../assets/pic/discord.png";
import discourse from "../../assets/pic/discourse.png";
import github from "../../assets/pic/github.png";
import gnosis from "../../assets/pic/gnosis.png";
import snapshot from "../../assets/pic/snapshot.png";
import yellow from "../../assets/pic1/yellow1.png";
import L_body11 from "../L_body1.1/L_body11";
function L_body1() {
  useEffect(() => {
    const handleScroll = () => {
      document.body.style.setProperty(
        "--scroll",
        window.scrollY / (document.body.offsetHeight - window.innerHeight)
      );
    };

    window.addEventListener("scroll", handleScroll, false);

    return () => {
      window.removeEventListener("scroll", handleScroll, false);
    };
  }, []);

  useEffect(() => {
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        const elevator = document.querySelector(".tn-elevator");
        const elevatorL = document.querySelector(".tn-elevatorL");
        const elevatorR = document.querySelector(".tn-elevatorR");

        if (entry.isIntersecting) {
          elevator.classList.add("tn-elevator-transition");
          elevatorL.classList.add("tn-elevatorL-transition");
          elevatorR.classList.add("tn-elevatorR-transition");
        } else {
          elevator.classList.remove("tn-elevator-transition");
          elevatorL.classList.remove("tn-elevatorL-transition");
          elevatorR.classList.remove("tn-elevatorR-transition");
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection);

    const elevator = document.querySelector(".tn-elevator");
    const elevatorL = document.querySelector(".tn-elevatorL");
    const elevatorR = document.querySelector(".tn-elevatorR");

    if (elevator && elevatorL && elevatorR) {
      observer.observe(elevator);
      observer.observe(elevatorL);
      observer.observe(elevatorR);
    }

    return () => {
      if (elevator && elevatorL && elevatorR) {
        observer.unobserve(elevator);
        observer.unobserve(elevatorL);
        observer.unobserve(elevatorR);
      }
    };
  }, []);

  return (
    <div className="tn-body">
      <div className="col-5 tn-AI-text">
        <p className="tn-AI-text-title">AI-Powered Community Management</p>
        <img className="tn-under" src={yellow} />
        <p className="tn-AI-text-body">
          Combine everything from discussion management, bounties and task
          management, voting, payouts, education and rewards.
        </p>
        <div className="tn-AI-text-footer">
          <button className="tn-AI-text-btn">Upgrade to DAO Manager</button>
          <div className="tn-AI-text-video">Watch Explainer Video</div>
          <i className="bi bi-arrow-right tn-right-arrow"></i>
        </div>
      </div>
      <div className="tn-pad"></div>
      <div className="row tn-elevator">
        <div className="col-5 tn-elevatorL">
          <div className="tn-snap-icon">
            <img className="tn-snapshot" src={snapshot} alt="" />
          </div>
          <div>
            <img className="tn-gnosis" src={gnosis} alt="" />
          </div>
          <div>
            <img className="tn-dicourse" src={discourse} alt="" />
          </div>
        </div>

        <div className="col-2 tn-elevatorR">
          <div>
            <img className="tn-github" src={github} alt="" />
          </div>
          <div>
            <img className="tn-dework" src={dework} alt="" />
          </div>
          <div>
            <img className="tn-discord" src={discord} alt="" />
          </div>
        </div>
        <L_body11 />
      </div>
    </div>
  );
}

export default L_body1;
