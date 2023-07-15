import React, { useContext, useState } from "react";

import "./L_body2.scss";
import { Context } from "../L_body23/L_body23";

export default function L_body2() {

  const { display, setDisplay, setSelect, select } = useContext(Context);

  return (
    <>
      {/* slider part */}
      <div className="row">
        <div className="col-1"></div>
        <div className="col-10">
          <div className="row tn-slide-container">
            {/* Part 1 */}
            <div className="col-2">
              <span
                className="tn-slide-item active"
                onClick={() => {
                  document
                    .querySelector(`.${display}`)
                    .classList.remove("tn-active");
                  document.querySelector(".tn-slide-item").classList.add("tn-active");
                  document.querySelector(".tn-slide-item").classList.add("tn-color");
                  setDisplay("tn-slide-item");
                  setSelect(1);
                }}
              >
                <div className="tn-item-border">
                  <svg
                    className="tn-item-pic"
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
                <p className="tn-item-text">Project</p>
              </span>
            </div>
            {/* Part 2 */}
            <div className="col-2">
              <span
                className="tn-slide-item1 "
                onClick={() => {
                  document
                    .querySelector(`.${display}`)
                    .classList.remove("tn-active");
                  document
                    .querySelector(".tn-slide-item1")
                    .classList.add("tn-active");
                  setDisplay("tn-slide-item1");
                  document.querySelector(".tn-slide-item").classList.add("tn-color1");
                  setSelect(2);
                }}
              >
                <div className="tn-item-border1">
                  <svg
                    className="tn-item-pic1"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
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
                <p className="tn-item-text">Bounties</p>
              </span>
            </div>
            {/* Part 3 */}
            <div className="col-2">
              <span
                className="tn-slide-item2 "
                onClick={() => {
                  document
                    .querySelector(`.${display}`)
                    .classList.remove("tn-active");
                  document
                    .querySelector(".tn-slide-item2")
                    .classList.add("tn-active");
                  document.querySelector(".tn-slide-item").classList.add("tn-color2");
                  setDisplay("tn-slide-item2");
                  setSelect(3);
                }}
              >
                <div className="tn-item-border2">
                  <svg
                    className="tn-item-pic2"
                    width="59"
                    height="49"
                    viewBox="0 0 59 49"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M29.5 6.78019V46M29.5 6.78019C26.0609 4.43906 21.391 3 16.25 3C11.109 3 6.43911 4.43906 3 6.78019V46C6.43911 43.6589 11.109 42.2198 16.25 42.2198C21.391 42.2198 26.0609 43.6589 29.5 46M29.5 6.78019C32.9391 4.43906 37.609 3 42.75 3C47.8939 3 52.5609 4.43906 56 6.78019V46C52.5609 43.6589 47.8939 42.2198 42.75 42.2198C37.609 42.2198 32.9391 43.6589 29.5 46"
                      stroke="#5BC6F0"
                      stroke-width="6"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <p className="tn-item-text">Courses</p>
              </span>
            </div>
            {/* Part 4 */}
            <div className="col-2">
              <span
                className="tn-slide-item3 "
                onClick={() => {
                  document
                    .querySelector(`.${display}`)
                    .classList.remove("tn-active");
                  document
                    .querySelector(".tn-slide-item3")
                    .classList.add("tn-active");
                  document.querySelector(".tn-slide-item").classList.add("tn-color3");
                  setDisplay("tn-slide-item3");
                  setSelect(4);
                }}
              >
                <div className="tn-item-border3">
                  <svg
                    className="tn-item-pic3"
                    width="26"
                    height="26"
                    viewBox="0 0 26 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13 16C14.6569 16 16 14.6569 16 13C16 11.3431 14.6569 10 13 10C11.3431 10 10 11.3431 10 13C10 14.6569 11.3431 16 13 16Z"
                      stroke="#8B44FF"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M20.4 16C20.2669 16.3016 20.2272 16.6362 20.286 16.9606C20.3448 17.285 20.4995 17.5843 20.73 17.82L20.79 17.88C20.976 18.0657 21.1235 18.2863 21.2241 18.5291C21.3248 18.7719 21.3766 19.0322 21.3766 19.295C21.3766 19.5578 21.3248 19.8181 21.2241 20.0609C21.1235 20.3037 20.976 20.5243 20.79 20.71C20.6043 20.896 20.3837 21.0435 20.1409 21.1441C19.8981 21.2448 19.6378 21.2966 19.375 21.2966C19.1122 21.2966 18.8519 21.2448 18.6091 21.1441C18.3663 21.0435 18.1457 20.896 17.96 20.71L17.9 20.65C17.6643 20.4195 17.365 20.2648 17.0406 20.206C16.7162 20.1472 16.3816 20.1869 16.08 20.32C15.7842 20.4468 15.532 20.6572 15.3543 20.9255C15.1766 21.1938 15.0813 21.5082 15.08 21.83V22C15.08 22.5304 14.8693 23.0391 14.4942 23.4142C14.1191 23.7893 13.6104 24 13.08 24C12.5496 24 12.0409 23.7893 11.6658 23.4142C11.2907 23.0391 11.08 22.5304 11.08 22V21.91C11.0723 21.579 10.9651 21.258 10.7725 20.9887C10.5799 20.7194 10.3107 20.5143 10 20.4C9.69838 20.2669 9.36381 20.2272 9.03941 20.286C8.71502 20.3448 8.41568 20.4995 8.18 20.73L8.12 20.79C7.93425 20.976 7.71368 21.1235 7.47088 21.2241C7.22808 21.3248 6.96783 21.3766 6.705 21.3766C6.44217 21.3766 6.18192 21.3248 5.93912 21.2241C5.69632 21.1235 5.47575 20.976 5.29 20.79C5.10405 20.6043 4.95653 20.3837 4.85588 20.1409C4.75523 19.8981 4.70343 19.6378 4.70343 19.375C4.70343 19.1122 4.75523 18.8519 4.85588 18.6091C4.95653 18.3663 5.10405 18.1457 5.29 17.96L5.35 17.9C5.58054 17.6643 5.73519 17.365 5.794 17.0406C5.85282 16.7162 5.81312 16.3816 5.68 16.08C5.55324 15.7842 5.34276 15.532 5.07447 15.3543C4.80618 15.1766 4.49179 15.0813 4.17 15.08H4C3.46957 15.08 2.96086 14.8693 2.58579 14.4942C2.21071 14.1191 2 13.6104 2 13.08C2 12.5496 2.21071 12.0409 2.58579 11.6658C2.96086 11.2907 3.46957 11.08 4 11.08H4.09C4.42099 11.0723 4.742 10.9651 5.0113 10.7725C5.28059 10.5799 5.48572 10.3107 5.6 10C5.73312 9.69838 5.77282 9.36381 5.714 9.03941C5.65519 8.71502 5.50054 8.41568 5.27 8.18L5.21 8.12C5.02405 7.93425 4.87653 7.71368 4.77588 7.47088C4.67523 7.22808 4.62343 6.96783 4.62343 6.705C4.62343 6.44217 4.67523 6.18192 4.77588 5.93912C4.87653 5.69632 5.02405 5.47575 5.21 5.29C5.39575 5.10405 5.61632 4.95653 5.85912 4.85588C6.10192 4.75523 6.36217 4.70343 6.625 4.70343C6.88783 4.70343 7.14808 4.75523 7.39088 4.85588C7.63368 4.95653 7.85425 5.10405 8.04 5.29L8.1 5.35C8.33568 5.58054 8.63502 5.73519 8.95941 5.794C9.28381 5.85282 9.61838 5.81312 9.92 5.68H10C10.2958 5.55324 10.548 5.34276 10.7257 5.07447C10.9034 4.80618 10.9987 4.49179 11 4.17V4C11 3.46957 11.2107 2.96086 11.5858 2.58579C11.9609 2.21071 12.4696 2 13 2C13.5304 2 14.0391 2.21071 14.4142 2.58579C14.7893 2.96086 15 3.46957 15 4V4.09C15.0013 4.41179 15.0966 4.72618 15.2743 4.99447C15.452 5.26276 15.7042 5.47324 16 5.6C16.3016 5.73312 16.6362 5.77282 16.9606 5.714C17.285 5.65519 17.5843 5.50054 17.82 5.27L17.88 5.21C18.0657 5.02405 18.2863 4.87653 18.5291 4.77588C18.7719 4.67523 19.0322 4.62343 19.295 4.62343C19.5578 4.62343 19.8181 4.67523 20.0609 4.77588C20.3037 4.87653 20.5243 5.02405 20.71 5.21C20.896 5.39575 21.0435 5.61632 21.1441 5.85912C21.2448 6.10192 21.2966 6.36217 21.2966 6.625C21.2966 6.88783 21.2448 7.14808 21.1441 7.39088C21.0435 7.63368 20.896 7.85425 20.71 8.04L20.65 8.1C20.4195 8.33568 20.2648 8.63502 20.206 8.95941C20.1472 9.28381 20.1869 9.61838 20.32 9.92V10C20.4468 10.2958 20.6572 10.548 20.9255 10.7257C21.1938 10.9034 21.5082 10.9987 21.83 11H22C22.5304 11 23.0391 11.2107 23.4142 11.5858C23.7893 11.9609 24 12.4696 24 13C24 13.5304 23.7893 14.0391 23.4142 14.4142C23.0391 14.7893 22.5304 15 22 15H21.91C21.5882 15.0013 21.2738 15.0966 21.0055 15.2743C20.7372 15.452 20.5268 15.7042 20.4 16V16Z"
                      stroke="#8B44FF"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <p className="tn-item-text">Configuration</p>
              </span>
            </div>
            {/* Part 5 */}
            <div className="col-2">
              <span
                className="tn-slide-item4"
                onClick={() => {
                  document
                    .querySelector(`.${display}`)
                    .classList.remove("tn-active");
                  document
                    .querySelector(".tn-slide-item4")
                    .classList.add("tn-active");
                  document.querySelector(".tn-slide-item").classList.add("tn-color4");
                  setDisplay("tn-slide-item4");
                  setSelect(5);
                }}
              >
                <div className="tn-item-border4">
                  <svg
                    className="tn-item-pic4"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 5V1M14 5V1M5 9H15M3 19H17C17.5304 19 18.0391 18.7893 18.4142 18.4142C18.7893 18.0391 19 17.5304 19 17V5C19 4.46957 18.7893 3.96086 18.4142 3.58579C18.0391 3.21071 17.5304 3 17 3H3C2.46957 3 1.96086 3.21071 1.58579 3.58579C1.21071 3.96086 1 4.46957 1 5V17C1 17.5304 1.21071 18.0391 1.58579 18.4142C1.96086 18.7893 2.46957 19 3 19Z"
                      stroke="#F48D53"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <p className="tn-item-text">Calendar</p>
              </span>
            </div>
            {/* Part 6 */}
            <div className="col-2">
              <span
                className="tn-slide-item5"
                onClick={() => {
                  document
                    .querySelector(`.${display}`)
                    .classList.remove("tn-active");
                  document
                    .querySelector(".tn-slide-item5")
                    .classList.add("tn-active");
                  document.querySelector(".tn-slide-item").classList.add("tn-color5");
                  setDisplay("tn-slide-item5");
                  setSelect(6);
                }}
              >
                <div className="tn-item-border5">
                  <svg
                    className="tn-item-pic5"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 5H7C6.46957 5 5.96086 5.21071 5.58579 5.58579C5.21071 5.96086 5 6.46957 5 7V19C5 19.5304 5.21071 20.0391 5.58579 20.4142C5.96086 20.7893 6.46957 21 7 21H17C17.5304 21 18.0391 20.7893 18.4142 20.4142C18.7893 20.0391 19 19.5304 19 19V7C19 6.46957 18.7893 5.96086 18.4142 5.58579C18.0391 5.21071 17.5304 5 17 5H15M9 5C9 5.53043 9.21071 6.03914 9.58579 6.41421C9.96086 6.78929 10.4696 7 11 7H13C13.5304 7 14.0391 6.78929 14.4142 6.41421C14.7893 6.03914 15 5.53043 15 5M9 5C9 4.46957 9.21071 3.96086 9.58579 3.58579C9.96086 3.21071 10.4696 3 11 3H13C13.5304 3 14.0391 3.21071 14.4142 3.58579C14.7893 3.96086 15 4.46957 15 5M9 14L11 16L15 12"
                      stroke="#0EA5E9"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <p className="tn-item-text-1">Sub- Guilds</p>
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
