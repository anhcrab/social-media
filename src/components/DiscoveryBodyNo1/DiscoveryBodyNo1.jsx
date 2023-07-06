import "./DiscoveryBodyNo1.scss";
import imgBanner from "../../assets/DiscoveryBodyNo1/banner.jpg";
import { useState } from "react";

const DiscoveryBodyNo1 = () => {
  const [show, setShow] = useState("btn1");

  const settings = {
    infinite: true,
    slidesToShow: 5,
    swipeToSlide: true,
  };
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
                document.querySelector(`.${show}`).classList.remove("active");
                document.querySelector(".btn1").classList.add("active");
                setShow("btn1");
              }}
            >
              🙌🏻 All
            </button>

            <button
              className="discoverybodyno1-wrap-nav-menu-btn btn2"
              onClick={() => {
                document.querySelector(`.${show}`).classList.remove("active");
                document.querySelector(".btn2").classList.add("active");
                setShow("btn2");
              }}
            >
              ️💜 Your
            </button>

            <button
              className="discoverybodyno1-wrap-nav-menu-btn btn3"
              onClick={() => {
                document.querySelector(`.${show}`).classList.remove("active");
                document.querySelector(".btn3").classList.add("active");
                setShow("btn3");
              }}
            >
              🌍 DAOs
            </button>

            <button
              className="discoverybodyno1-wrap-nav-menu-btn btn4"
              onClick={() => {
                document.querySelector(`.${show}`).classList.remove("active");
                document.querySelector(".btn4").classList.add("active");
                setShow("btn4");
              }}
            >
              🌁 NFT Community
            </button>

            <button
              className="discoverybodyno1-wrap-nav-menu-btn btn5"
              onClick={() => {
                document.querySelector(`.${show}`).classList.remove("active");
                document.querySelector(".btn5").classList.add("active");
                setShow("btn5");
              }}
            >
              ✨ Content Creator
            </button>

            <button
              className="discoverybodyno1-wrap-nav-menu-btn btn6"
              onClick={() => {
                document.querySelector(`.${show}`).classList.remove("active");
                document.querySelector(".btn6").classList.add("active");
                setShow("btn6");
              }}
            >
              🎮 Gaming Community
            </button>

            <button
              className="discoverybodyno1-wrap-nav-menu-btn btn7"
              onClick={() => {
                document.querySelector(`.${show}`).classList.remove("active");
                document.querySelector(".btn7").classList.add("active");
                setShow("btn7");
              }}
            >
              👥 Social
            </button>

            <button
              className="discoverybodyno1-wrap-nav-menu-btn btn8"
              onClick={() => {
                document.querySelector(`.${show}`).classList.remove("active");
                document.querySelector(".btn8").classList.add("active");
                setShow("btn8");
              }}
            >
              🔧 Protocol
            </button>

            <button
              className="discoverybodyno1-wrap-nav-menu-btn btn9"
              onClick={() => {
                document.querySelector(`.${show}`).classList.remove("active");
                document.querySelector(".btn9").classList.add("active");
                setShow("btn9");
              }}
            >
              🔍 Others
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DiscoveryBodyNo1;
