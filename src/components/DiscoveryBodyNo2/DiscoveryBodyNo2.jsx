import "./DiscoveryBodyNo2.scss";
import { useState, useContext } from "react";
import communities from "../../data/communities.js";
import Item from "../Items/Item";
import Lesson from "../Items/Lesson";
import lessons from "../../data/lessons.js";
import { Context } from "../Discovery/Discovery";

const DiscoveryBodyNo2 = () => {
  const [limit, setLimit] = useState(8);
  const { navi, setNavi, show, setShow } = useContext(Context);

  const useNavi = () => {
    if (navi === "btn1") {
      return (
        <>
          <Item communities={communities} />
        </>
      );
    }
    if (navi === "btn2") {
      return (
        <>
          <Item communities={communities} />
        </>
      );
    }
    if (navi === "btn3") {
      const arr = [];
      communities.forEach((community) => {
        if (community.communityType.includes("🌍 DAOs")) {
          arr.push(community);
        }
      });
      return (
        <>
          <Item communities={arr} />
        </>
      );
    }
    if (navi === "btn4") {
      const arr = [];
      communities.forEach((community) => {
        if (community.communityType.includes("🌁 NFT Community")) {
          arr.push(community);
        }
      });
      return (
        <>
          <Item communities={arr} />
        </>
      );
    }
    if (navi === "btn5") {
      const arr = [];
      communities.forEach((community) => {
        if (community.communityType.includes("✨ Content Creator")) {
          arr.push(community);
        }
      });
      return (
        <>
          <Item communities={arr} />
        </>
      );
    }
    if (navi === "btn6") {
      const arr = [];
      communities.forEach((community) => {
        if (community.communityType.includes("🎮 Gaming Community")) {
          arr.push(community);
        }
      });
      return (
        <>
          <Item communities={arr} />
        </>
      );
    }
    if (navi === "btn7") {
      const arr = [];
      communities.forEach((community) => {
        if (community.communityType.includes("👥 Social")) {
          arr.push(community);
        }
      });
      return (
        <>
          <Item communities={arr} />
        </>
      );
    }
    if (navi === "btn8") {
      const arr = [];
      communities.forEach((community) => {
        if (community.communityType.includes("🔧 Protocol")) {
          arr.push(community);
        }
      });
      return (
        <>
          <Item communities={arr} />
        </>
      );
    }
    if (navi === "btn9") {
      const arr = [];
      communities.forEach((community) => {
        if (community.communityType.includes("🔍 Others")) {
          arr.push(community);
        }
      });
      return (
        <>
          <Item communities={arr} />
        </>
      );
    }
  };

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
          
          {useNavi()}
          
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
