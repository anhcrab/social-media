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
        const elevator = document.querySelector(".elevator");
        const elevatorL = document.querySelector(".elevatorL");
        const elevatorR = document.querySelector(".elevatorR");

        if (entry.isIntersecting) {
          elevator.classList.add("elevator-transition");
          elevatorL.classList.add("elevatorL-transition");
          elevatorR.classList.add("elevatorR-transition");
        } else {
          elevator.classList.remove("elevator-transition");
          elevatorL.classList.remove("elevatorL-transition");
          elevatorR.classList.remove("elevatorR-transition");
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection);

    const elevator = document.querySelector(".elevator");
    const elevatorL = document.querySelector(".elevatorL");
    const elevatorR = document.querySelector(".elevatorR");

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
    <div className="body">
      <div className="col-5 AI-text">
        <p className="AI-text-title">AI-Powered Community Management</p>
        <img className="under" src={yellow} alt="" />
        <p className="AI-text-body">
          Combine everything from discussion management, bounties and task
          management, voting, payouts, education and rewards.
        </p>
        <div className="AI-text-footer">
          <button className="AI-text-btn">Upgrade to DAO Manager</button>
          <div className="AI-text-video">Watch Explainer Video</div>
          <i className="bi bi-arrow-right right-arrow"></i>
        </div>
      </div>
      <div className="pad"></div>
      <div className="row elevator">
        <div className="col-5 elevatorL">
          <div className="snap-icon">
            <img className="snapshot" src={snapshot} alt="" />
          </div>
          <div>
            <img className="gnosis" src={gnosis} alt="" />
          </div>
          <div>
            <img className="dicourse" src={discourse} alt="" />
          </div>
        </div>

        <div className="col-2 elevatorR">
          <div>
            <img className="github" src={github} alt="" />
          </div>
          <div>
            <img className="dework" src={dework} alt="" />
          </div>
          <div>
            <img className="discord" src={discord} alt="" />
          </div>
        </div>
      </div>
      <L_body11 />
    </div>
  );
}

export default L_body1;
