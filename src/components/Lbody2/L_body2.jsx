import React, { useContext } from "react";

import "./L_body2.scss";
import { Context } from "../L_body23/L_body23";

export default function L_body2() {
  const { display, setDisplay } = useContext(Context);

  return (
    <>
      {/* slider part */}
      <div className="row">
        <div className="col-1"></div>
        <div className="col-10">
          <div className="row slide-container">
            {/* Part 1 */}
            <div className="col-2">
              <span
                className="slide-item active"
                onClick={() => {
                  document
                    .querySelector(`.${display}`)
                    .classList.remove("active");
                  document.querySelector(".slide-item").classList.add("active");
                  setDisplay("slide-item");
                }}
              >
                <div className="item-border">
                  <img className="item-pic" src={file} alt="" />
                </div>
                <p className="item-text">Project</p>
              </span>
            </div>
            {/* Part 2 */}
            <div className="col-2">
              <span
                className="slide-item1 "
                onClick={() => {
                  document
                    .querySelector(`.${display}`)
                    .classList.remove("active");
                  document
                    .querySelector(".slide-item1")
                    .classList.add("active");
                  setDisplay("slide-item1");
                }}
              >
                <div className="item-border1">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="item-pic1"
                  >
                    <path
                      d="M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.709 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4881 2.02168 11.3363C2.16356 9.18455 2.99721 7.13631 4.39828 5.49706C5.79935 3.85781 7.69279 2.71537 9.79619 2.24013C11.8996 1.7649 14.1003 1.98232 16.07 2.85999"
                      stroke="#45D72E"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M22 4L12 14.01L9 11.01"
                      stroke="#45D72E"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <p className="item-text">Bounties</p>
              </span>
            </div>
            {/* Part 3 */}
            <div className="col-2">
              <span
                className="slide-item2 "
                onClick={() => {
                  document
                    .querySelector(`.${display}`)
                    .classList.remove("active");
                  document
                    .querySelector(".slide-item2")
                    .classList.add("active");
                  setDisplay("slide-item2");
                }}
              >
                <div className="item-border2">
                  <svg
                    width="40"
                    height="50"
                    viewBox="0 0 40 50"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.7143 25H27.2857M12.7143 34.7778H27.2857M32.1429 47H7.85714C6.56895 47 5.33351 46.4849 4.42262 45.5681C3.51173 44.6512 3 43.4077 3 42.1111V7.88889C3 6.59227 3.51173 5.34877 4.42262 4.43192C5.33351 3.51508 6.56895 3 7.85714 3H21.4231C22.0672 3.00014 22.6848 3.25777 23.1401 3.71622L36.2884 16.9504C36.7439 17.4088 36.9999 18.0304 37 18.6787V42.1111C37 43.4077 36.4883 44.6512 35.5774 45.5681C34.6665 46.4849 33.4311 47 32.1429 47Z"
                      stroke="#F6CD46"
                      stroke-width="5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <p className="item-text">Courses</p>
              </span>
            </div>
            {/* Part 4 */}
            <div className="col-2">
              <span
                className="slide-item3 "
                onClick={() => {
                  document
                    .querySelector(`.${display}`)
                    .classList.remove("active");
                  document
                    .querySelector(".slide-item3")
                    .classList.add("active");
                  setDisplay("slide-item3");
                }}
              >
                <div className="item-border3">
                  <img className="item-pic2" src={setting} alt="" />
                </div>
                <p className="item-text">Configuration</p>
              </span>
            </div>
            {/* Part 5 */}
            <div className="col-2">
              <span
                className="slide-item4"
                onClick={() => {
                  document
                    .querySelector(`.${display}`)
                    .classList.remove("active");
                  document
                    .querySelector(".slide-item4")
                    .classList.add("active");
                  setDisplay("slide-item4");
                }}
              >
                <div className="item-border4">
                  <img className="item-pic" src={calendar} alt="" />
                </div>
                <p className="item-text">Calendar</p>
              </span>
            </div>
            {/* Part 6 */}
            <div className="col-2">
              <span
                className="slide-item5"
                onClick={() => {
                  document
                    .querySelector(`.${display}`)
                    .classList.remove("active");
                  document
                    .querySelector(".slide-item5")
                    .classList.add("active");
                  setDisplay("slide-item5");
                }}
              >
                <div className="item-border5">
                  <img className="item-pic3" src={list} alt="" />
                </div>
                <p className="item-text-1">Sub- Guilds</p>
              </span>
            </div>
          </div>
        </div>
        <div className="col-1"></div>
      </div>
      {/* slider part */}
    </>
  );
}
