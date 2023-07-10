import "./DiscoveryBodyNo1.scss";
import imgBanner from "../../assets/DiscoveryBodyNo1/banner.jpg";
import { useContext, useState,useEffect } from "react";
import { Context } from "../Discovery/Discovery";

const DiscoveryBodyNo1 = () => {
  const { navi, setNavi } = useContext(Context);

  useEffect(() => {
    const scrollTrigger = 200;
    window.onscroll = function () {
      const header = document.querySelector(".discoverybodyno1-wrap-heading-bonus");
      if (window.scrollY >= scrollTrigger) {
        header.classList.add("invertedd");
      } else {
        header.classList.remove("invertedd");
      }
    };
  });
  return (
    <>
      <div className="discoverybodyno1-wrap-big">
        <div className="discoverybodyno1-wrap">
          <div className="discoverybodyno1-wrap-header-img">
            <img src={imgBanner} alt="discoverybodyno1-wrap-header-img" />
            <div className="discoverybodyno1-wrap-header-text">
              Find the community, where you belong
            </div>
            <div className="discoverybodyno1-wrap-input">
              <input
                type="text"
                placeholder="Search community and happenings"
              />
              <div className="discoverybodyno1-wrap-input-searchbtn-img">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-search"
                  viewBox="0 0 16 16"
                  style={{
                    fontSize: "20px",
                  }}
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="discoverybodyno1-wrap-nav-menu">
            <button
              className="discoverybodyno1-wrap-nav-menu-btn btn1 active"
              onClick={() => {
                document.querySelector(`.${navi}`).classList.remove("active");
                document.querySelector(".btn1").classList.add("active");
                setNavi("btn1");
              }}
            >
              🙌🏻 All
            </button>

            <button
              className="discoverybodyno1-wrap-nav-menu-btn btn2"
              onClick={() => {
                document.querySelector(`.${navi}`).classList.remove("active");
                document.querySelector(".btn2").classList.add("active");
                setNavi("btn2");
              }}
            >
              ️💜 Your
            </button>

            <button
              className="discoverybodyno1-wrap-nav-menu-btn btn3"
              onClick={() => {
                document.querySelector(`.${navi}`).classList.remove("active");
                document.querySelector(".btn3").classList.add("active");
                setNavi("btn3");
              }}
            >
              🌍 DAOs
            </button>

            <button
              className="discoverybodyno1-wrap-nav-menu-btn btn4"
              onClick={() => {
                document.querySelector(`.${navi}`).classList.remove("active");
                document.querySelector(".btn4").classList.add("active");
                setNavi("btn4");
              }}
            >
              🌁 NFT Community
            </button>

            <button
              className="discoverybodyno1-wrap-nav-menu-btn btn5"
              onClick={() => {
                document.querySelector(`.${navi}`).classList.remove("active");
                document.querySelector(".btn5").classList.add("active");
                setNavi("btn5");
              }}
            >
              ✨ Content Creator
            </button>

            <button
              className="discoverybodyno1-wrap-nav-menu-btn btn6"
              onClick={() => {
                document.querySelector(`.${navi}`).classList.remove("active");
                document.querySelector(".btn6").classList.add("active");
                setNavi("btn6");
              }}
            >
              🎮 Gaming Community
            </button>

            <button
              className="discoverybodyno1-wrap-nav-menu-btn btn7"
              onClick={() => {
                document.querySelector(`.${navi}`).classList.remove("active");
                document.querySelector(".btn7").classList.add("active");
                setNavi("btn7");
              }}
            >
              👥 Social
            </button>

            <button
              className="discoverybodyno1-wrap-nav-menu-btn btn8"
              onClick={() => {
                document.querySelector(`.${navi}`).classList.remove("active");
                document.querySelector(".btn8").classList.add("active");
                setNavi("btn8");
              }}
            >
              🔧 Protocol
            </button>

            <button
              className="discoverybodyno1-wrap-nav-menu-btn btn9"
              onClick={() => {
                document.querySelector(`.${navi}`).classList.remove("active");
                document.querySelector(".btn9").classList.add("active");
                setNavi("btn9");
              }}
            >
              🔍 Others
            </button>
          </div>
        </div>
      </div>

      <div className="discoverybodyno1-wrap-heading-bonus">
        <div className="discoverybodyno1-wrap-heading-bonus-body1">
          <button className="discoverybodyno1-wrap-heading-bonus-body1-btn1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              aria-hidden="true"
              width="20"
              color="#333333"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              ></path>
            </svg>
          </button>
          <span className="discoverybodyno1-wrap-heading-bonus-body1-search">
            <input type="text" placeholder="Search community and happenings" />
            <div className="discoverybodyno1-wrap-heading-bonus-body1-searchs discoverybodyno1-wrap-input-searchbtn-img ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-search"
                viewBox="0 0 16 16"
                style={{
                  fontSize: "20px",
                }}
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg>
            </div>

          </span>
        </div>
        <div className="discoverybodyno1-wrap-nav-menu">
            <button
              className="discoverybodyno1-wrap-nav-menu-btn btn1 active"
              onClick={() => {
                document.querySelector(`.${navi}`).classList.remove("active");
                document.querySelector(".btn1").classList.add("active");
                setNavi("btn1");
              }}
            >
              🙌🏻 All
            </button>

            <button
              className="discoverybodyno1-wrap-nav-menu-btn btn2"
              onClick={() => {
                document.querySelector(`.${navi}`).classList.remove("active");
                document.querySelector(".btn2").classList.add("active");
                setNavi("btn2");
              }}
            >
              ️💜 Your
            </button>

            <button
              className="discoverybodyno1-wrap-nav-menu-btn btn3"
              onClick={() => {
                document.querySelector(`.${navi}`).classList.remove("active");
                document.querySelector(".btn3").classList.add("active");
                setNavi("btn3");
              }}
            >
              🌍 DAOs
            </button>

            <button
              className="discoverybodyno1-wrap-nav-menu-btn btn4"
              onClick={() => {
                document.querySelector(`.${navi}`).classList.remove("active");
                document.querySelector(".btn4").classList.add("active");
                setNavi("btn4");
              }}
            >
              🌁 NFT Community
            </button>

            <button
              className="discoverybodyno1-wrap-nav-menu-btn btn5"
              onClick={() => {
                document.querySelector(`.${navi}`).classList.remove("active");
                document.querySelector(".btn5").classList.add("active");
                setNavi("btn5");
              }}
            >
              ✨ Content Creator
            </button>

            <button
              className="discoverybodyno1-wrap-nav-menu-btn btn6"
              onClick={() => {
                document.querySelector(`.${navi}`).classList.remove("active");
                document.querySelector(".btn6").classList.add("active");
                setNavi("btn6");
              }}
            >
              🎮 Gaming Community
            </button>

            <button
              className="discoverybodyno1-wrap-nav-menu-btn btn7"
              onClick={() => {
                document.querySelector(`.${navi}`).classList.remove("active");
                document.querySelector(".btn7").classList.add("active");
                setNavi("btn7");
              }}
            >
              👥 Social
            </button>

            <button
              className="discoverybodyno1-wrap-nav-menu-btn btn8"
              onClick={() => {
                document.querySelector(`.${navi}`).classList.remove("active");
                document.querySelector(".btn8").classList.add("active");
                setNavi("btn8");
              }}
            >
              🔧 Protocol
            </button>

            <button
              className="discoverybodyno1-wrap-nav-menu-btn btn9"
              onClick={() => {
                document.querySelector(`.${navi}`).classList.remove("active");
                document.querySelector(".btn9").classList.add("active");
                setNavi("btn9");
              }}
            >
              🔍 Others
            </button>
          </div>
      </div>
    </>
  );
};

export default DiscoveryBodyNo1;
