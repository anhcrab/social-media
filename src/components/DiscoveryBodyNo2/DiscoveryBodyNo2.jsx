import "./DiscoveryBodyNo2.scss";
import { useState } from "react";
import communities from "../../data/communities.js";
import Item from "../Items/Item";
import Lesson from "../Items/Lesson";
import lessons from "../../data/lessons.js";

const DiscoveryBodyNo2 = () => {
  const [show, setShow] = useState("body2btn1");
  const [limit, setLimit] = useState(8);

  return (
    <>
      <div className="discoverybodyno2-wrap-big">
        <div className="discoverybodyno2-wrap">
          <div className="discoverybodyno2-wrap-nav-header">
            <button
              className="discoverybodyno2-wrap-nav-menu-btn body2btn1 active1"
              onClick={() => {
                document.querySelector(`.${show}`).classList.remove("active1");
                document.querySelector(".body2btn1").classList.add("active1");
                setShow("body2btn1");
              }}
            >
              🏡 Community
            </button>

            <button
              className="discoverybodyno2-wrap-nav-menu-btn body2btn2"
              onClick={() => {
                document.querySelector(`.${show}`).classList.remove("active1");
                document.querySelector(".body2btn2").classList.add("active1");
                setShow("body2btn2");
              }}
            >
              👨‍💻 Bounty
            </button>

            <button
              className="discoverybodyno2-wrap-nav-menu-btn body2btn3"
              onClick={() => {
                document.querySelector(`.${show}`).classList.remove("active1");
                document.querySelector(".body2btn3").classList.add("active1");
                setShow("body2btn3");
              }}
            >
              💬 Discussions
            </button>

            <button
              className="discoverybodyno2-wrap-nav-menu-btn body2btn4"
              onClick={() => {
                document.querySelector(`.${show}`).classList.remove("active1");
                document.querySelector(".body2btn4").classList.add("active1");
                setShow("body2btn4");
              }}
            >
              📚 Course
            </button>

            <button
              className="discoverybodyno2-wrap-nav-menu-btn body2btn5"
              onClick={() => {
                document.querySelector(`.${show}`).classList.remove("active1");
                document.querySelector(".body2btn5").classList.add("active1");
                setShow("body2btn5");
              }}
            >
              🎭 Event
            </button>

            <button
              className="discoverybodyno2-wrap-nav-menu-btn body2btn6"
              onClick={() => {
                document.querySelector(`.${show}`).classList.remove("active1");
                document.querySelector(".body2btn6").classList.add("active1");
                setShow("body2btn6");
              }}
            >
              ⚡ P️roposal
            </button>
          </div>

          <div className="discoverybodyno2-wrap-items">
            <div className="discoverybodyno2-wrap-items-community">
              <button className="discoverybodyno2-wrap-add-community">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  aria-hidden="true"
                  width="20"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  ></path>
                </svg>
                <span className="discoverybodyno2-wrap-add-community-text">
                  Add your community
                </span>
              </button>

              {communities.map((community) => {
                return (
                  <Item
                    community={community}
                    disable={community.communityId <= limit ? false : true}
                  />
                );
              })}
            </div>
            <button
              onClick={() => {
                if (limit + 6 == 20) {
                  document
                    .querySelector(".discoverybodyno2-wrap-item-loadmore")
                    .classList.add("hide");
                }
                setLimit(limit + 6);
              }}
              className="discoverybodyno2-wrap-item-loadmore"
            >
              Load more
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                aria-hidden="true"
                width="10"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="discoverybodyno2-wrap-big">
        <div className="discoverybodyno2-wrap-bottom">
          <h2 className="discoverybodyno2-wrap-nav-header-bottom">
            Learn how to go around swiftly! 💨
          </h2>
          <div
            className="discoverybodyno2-wrap-bottom-items"
            style={{ position: "relative" }}
          >
            <div className="discoverybodyno2-wrap-bottom-item">
              {lessons.map((lesson) => {
                return <Lesson lesson={lesson} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DiscoveryBodyNo2;
