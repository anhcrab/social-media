import React, { useEffect, useState } from "react";
import big from "../../assets/pic1/big.png";
import mobile from "../../assets/pic1/mobile.png";
import mac from "../../assets/pic1/mac.png";
import commu1 from "../../assets/pic1/commu1.png";
import commu2 from "../../assets/pic1/commu2.png";
import commu3 from "../../assets/pic1/commu3.png";
import commu4 from "../../assets/pic1/commu4.png";
import ethereum from "../../assets/pic1/ethereum.png";
import polygon from "../../assets/pic1/Polygon.png";
import solana from "../../assets/pic1/solana.png";
import aptos from "../../assets/pic1/Aptos.png";
import gnosis from "../../assets/pic1/gnosis.png";
import yellow from "../../assets/pic1/yellow.png";
import vector from "../../assets/pic1/Vector.png";
import gif from "../../assets/pic1/gif.gif";
import please from "../../assets/pic1/please.png";
import gate from "../../assets/pic1/Gate.png";
import iphone from "../../assets/pic1/iphone13.png";
import hour from "../../assets/pic1/Hour.png";
import bounties from "../../assets/pic1/bounties.png";
import glass from "../../assets/pic1/glass.png";
import under from "../../assets/pic1/under.png";
import AOS from "aos";
import "./L_body.scss";
import L_header from "../L_header/L_header";
import L_body1 from "../L_body1/L_body1";
import L_body12 from "../L_body1.2/L_body12";
import L_body23 from "../L_body23/L_body23";
import UseCase from "../../pages/UseCase";
export default function L_body() {
  AOS.init();
  const [docHeight, setDocHeight] = useState(0);
  let [x, setX] = useState(0.25);
  useEffect(() => {
    let scrolled2 = 125;
    setDocHeight(document.documentElement.offsetHeight);
    console.log("docheight=" + docHeight);
    const handleScroll = () => {
      const scrolled3 =
        window.scrollY / ((docHeight + window.innerHeight) / 12) + 3;
      console.log("scroll3= " + scrolled3);

      if (scrolled3 >= 92 && scrolled3 <= 120) {
        const box1 = document.getElementById("box1");
        const transformValue = "scale(" + scrolled3 + ")";
        box1.style.WebkitTransform = transformValue;
        box1.style.MozTransform = transformValue;
        box1.style.OTransform = transformValue;
        box1.style.transform = transformValue;
      } else if (scrolled3 > 120 && scrolled3 <= 133) {
        scrolled2 -= x;
        console.log("scroll2= " + scrolled2);
        const box1 = document.getElementById("box1");
        const transformValue = "scale(" + scrolled2 + ")";
        box1.style.WebkitTransform = transformValue;
        box1.style.MozTransform = transformValue;
        box1.style.OTransform = transformValue;
        box1.style.transform = transformValue;
      } else {
        const box1 = document.getElementById("box1");
        const transformValue = "scale(" + 3 + ")";
        box1.style.WebkitTransform = transformValue;
        box1.style.MozTransform = transformValue;
        box1.style.OTransform = transformValue;
        box1.style.transform = transformValue;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [docHeight]);

  useEffect(() => {
    setDocHeight(0);
  });
  return (
    <body>
      <L_header className="z-index" />
      <L_body1 />
      {/* Big img part */}
      <div className="row" data-aos="fade-up" data-aos-duration="3000" href="#">
        <div className="col-1"></div>
        <div className="col-10 img-container">
          <img className="mac" src={mac} alt="" />
          <img className="big-img" src={big} alt="" />
          <img className="mobile-img" src={mobile} alt="" />
          <p className="trust-text">Trusted by leading communities</p>
          <div className="commu">
            <img className="commu1" src={commu1} alt="" />

            <img className="commu2" src={commu2} alt="" />

            <img className="commu3" src={commu3} alt="" />

            <img className="commu4" src={commu4} alt="" />
          </div>
          <div className="please">
            <img className="please-icon" src={please} alt="" />
          </div>
          <p className="work-text">How it works in 3 steps</p>
        </div>
        <div className="col-1"></div>
      </div>
      {/* Big img part */}

      {/* Hover part */}
      <div className="row" data-aos="fade-up" data-aos-duration="3000">
        <div className="col-1"></div>
        <div className="col-10 img-container">
          <div className="row hover-part">
            <div className="col-4 hover-part-contain1">
              <span className="hover-part-num">01</span>
              <p className="hover-part-title">Join or Claim your Workspace</p>
              <p className="hover-part-body">
                If you've an existing workspace, you can simply join. If you're
                new, you can create and claim verification all of which takes
                less than 2 minutes.
              </p>

              <div class="overlay"></div>
              <div class="overlay1"></div>
            </div>
            <div className="col-4">
              <span>02</span>
              <p>Import or Invite Members</p>
              <p>
                Inviting your core team and broader community. We can help you
                import members along with their roles or use a link allowing
                them to join
              </p>
            </div>
            <div className="col-4">
              <span>03</span>
              <p>Integrate Existing Toolings</p>
              <p>
                If you already use tools for voting, payouts, tasks etc, we have
                got you covered. All you need to do is integrate once and that's
                it.
              </p>
            </div>
          </div>
          <div className="support">
            <div className="please">
              <img className="please-icon" src={please} alt="" />
            </div>
            <p
              className="support-text"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              Supported On
            </p>
          </div>
          <div
            className="coin-icon"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <img className="coin-icon-s" src={ethereum} alt="" />
            <img className="coin-icon-d-1" src={polygon} alt="" />
            <img className="coin-icon-s" src={solana} alt="" />
            <img className="coin-icon-d" src={aptos} alt="" />
            <img className="coin-icon-s" src={gnosis} alt="" />
          </div>
        </div>
        <div className=""></div>
        <div className="col-1"></div>
      </div>
      {/* Hover part */}

      {/* Tree part */}

      <div className="row color-container">
        <div id="box1"></div>

        <div className="col-1"></div>
        <div className="col-10" data-aos="fade-up" data-aos-duration="3000">
          <div className="color-container-header">
            <img className="vector" src={vector} alt="" />
            <img className="underline" src={yellow} alt="" />
            <p className="diff-text">What makes DAO Manager Different</p>
          </div>
        </div>
        <div className="col-1"></div>
        <div
          className="col-6 text-mess"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <img className="gif" src={gif} alt="" />
        </div>
        <div
          className="col-6 text-mess"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <svg
            width="47"
            height="40"
            viewBox="0 0 47 40"
            fill="white"
            xmlns="http://www.w3.org/2000/svg"
            className="pc"
          >
            <path
              d="M3.61497 23.8462V3.84615C3.61497 3.63782 3.69109 3.45753 3.84333 3.30529C3.99557 3.15304 4.17587 3.07692 4.3842 3.07692H42.8457C43.0541 3.07692 43.2344 3.15304 43.3866 3.30529C43.5388 3.45753 43.615 3.63782 43.615 3.84615V23.8462C43.615 24.0545 43.5388 24.2348 43.3866 24.387C43.2344 24.5393 43.0541 24.6154 42.8457 24.6154H4.3842C4.17587 24.6154 3.99557 24.5393 3.84333 24.387C3.69109 24.2348 3.61497 24.0545 3.61497 23.8462ZM0.538044 3.84615V30C0.538044 31.0577 0.914646 31.9631 1.66785 32.7163C2.42106 33.4696 3.32651 33.8462 4.3842 33.8462H17.4611C17.4611 34.4391 17.3329 35.0601 17.0765 35.7091C16.8201 36.3582 16.5637 36.9271 16.3073 37.4159C16.0509 37.9046 15.9227 38.2532 15.9227 38.4615C15.9227 38.8782 16.0749 39.2388 16.3794 39.5433C16.6839 39.8478 17.0445 40 17.4611 40H29.7688C30.1855 40 30.5461 39.8478 30.8505 39.5433C31.155 39.2388 31.3073 38.8782 31.3073 38.4615C31.3073 38.2372 31.1791 37.8846 30.9227 37.4038C30.6663 36.9231 30.4098 36.3622 30.1534 35.7212C29.897 35.0801 29.7688 34.4551 29.7688 33.8462H42.8457C43.9034 33.8462 44.8089 33.4696 45.5621 32.7163C46.3153 31.9631 46.6919 31.0577 46.6919 30V3.84615C46.6919 2.78846 46.3153 1.88301 45.5621 1.12981C44.8089 0.376603 43.9034 0 42.8457 0H4.3842C3.32651 0 2.42106 0.376603 1.66785 1.12981C0.914646 1.88301 0.538044 2.78846 0.538044 3.84615Z"
              fill="white"
            />
          </svg>

          <p className="pc-title">AI Assisted Community Management</p>

          <p className="pc-text">
            Have you own personal AI assistant for any content creation,
            consumption, analysis and management across proposals, tasks,
            discussions and memebrs.
          </p>
          <button className="read-more">Read More</button>
        </div>
        <div
          className="col-6 text-mess"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="group-i"
          >
            <path
              d="M12.3542 19.9999C10.1042 20.0694 8.26389 20.9583 6.83333 22.6666H4.04167C2.90278 22.6666 1.94444 22.3853 1.16667 21.8228C0.388889 21.2603 0 20.4374 0 19.3541C0 14.4513 0.861111 11.9999 2.58333 11.9999C2.66667 11.9999 2.96875 12.1458 3.48958 12.4374C4.01042 12.7291 4.6875 13.0242 5.52083 13.3228C6.35417 13.6214 7.18056 13.7708 8 13.7708C8.93056 13.7708 9.85417 13.611 10.7708 13.2916C10.7014 13.8055 10.6667 14.2638 10.6667 14.6666C10.6667 16.5971 11.2292 18.3749 12.3542 19.9999ZM34.6667 33.2708C34.6667 34.9374 34.1597 36.2534 33.1458 37.2187C32.1319 38.1839 30.7847 38.6666 29.1042 38.6666H10.8958C9.21528 38.6666 7.86806 38.1839 6.85417 37.2187C5.84028 36.2534 5.33333 34.9374 5.33333 33.2708C5.33333 32.5346 5.35764 31.8159 5.40625 31.1145C5.45486 30.4131 5.55208 29.6562 5.69792 28.8437C5.84375 28.0312 6.02778 27.2777 6.25 26.5833C6.47222 25.8888 6.77083 25.2117 7.14583 24.552C7.52083 23.8923 7.95139 23.3298 8.4375 22.8645C8.92361 22.3992 9.51736 22.0277 10.2188 21.7499C10.9201 21.4721 11.6944 21.3333 12.5417 21.3333C12.6806 21.3333 12.9792 21.4826 13.4375 21.7812C13.8958 22.0798 14.4028 22.4131 14.9583 22.7812C15.5139 23.1492 16.2569 23.4826 17.1875 23.7812C18.1181 24.0798 19.0556 24.2291 20 24.2291C20.9444 24.2291 21.8819 24.0798 22.8125 23.7812C23.7431 23.4826 24.4861 23.1492 25.0417 22.7812C25.5972 22.4131 26.1042 22.0798 26.5625 21.7812C27.0208 21.4826 27.3194 21.3333 27.4583 21.3333C28.3056 21.3333 29.0799 21.4721 29.7812 21.7499C30.4826 22.0277 31.0764 22.3992 31.5625 22.8645C32.0486 23.3298 32.4792 23.8923 32.8542 24.552C33.2292 25.2117 33.5278 25.8888 33.75 26.5833C33.9722 27.2777 34.1562 28.0312 34.3021 28.8437C34.4479 29.6562 34.5451 30.4131 34.5938 31.1145C34.6424 31.8159 34.6667 32.5346 34.6667 33.2708ZM13.3333 6.66658C13.3333 8.13881 12.8125 9.39575 11.7708 10.4374C10.7292 11.4791 9.47222 11.9999 8 11.9999C6.52778 11.9999 5.27083 11.4791 4.22917 10.4374C3.1875 9.39575 2.66667 8.13881 2.66667 6.66658C2.66667 5.19436 3.1875 3.93742 4.22917 2.89575C5.27083 1.85409 6.52778 1.33325 8 1.33325C9.47222 1.33325 10.7292 1.85409 11.7708 2.89575C12.8125 3.93742 13.3333 5.19436 13.3333 6.66658ZM28 14.6666C28 16.8749 27.2188 18.7603 25.6563 20.3228C24.0938 21.8853 22.2083 22.6666 20 22.6666C17.7917 22.6666 15.9062 21.8853 14.3438 20.3228C12.7812 18.7603 12 16.8749 12 14.6666C12 12.4583 12.7812 10.5728 14.3438 9.01033C15.9062 7.44783 17.7917 6.66658 20 6.66658C22.2083 6.66658 24.0938 7.44783 25.6563 9.01033C27.2188 10.5728 28 12.4583 28 14.6666ZM40 19.3541C40 20.4374 39.6111 21.2603 38.8333 21.8228C38.0556 22.3853 37.0972 22.6666 35.9583 22.6666H33.1667C31.7361 20.9583 29.8958 20.0694 27.6458 19.9999C28.7708 18.3749 29.3333 16.5971 29.3333 14.6666C29.3333 14.2638 29.2986 13.8055 29.2292 13.2916C30.1458 13.611 31.0694 13.7708 32 13.7708C32.8194 13.7708 33.6458 13.6214 34.4792 13.3228C35.3125 13.0242 35.9896 12.7291 36.5104 12.4374C37.0313 12.1458 37.3333 11.9999 37.4167 11.9999C39.1389 11.9999 40 14.4513 40 19.3541ZM37.3333 6.66658C37.3333 8.13881 36.8125 9.39575 35.7708 10.4374C34.7292 11.4791 33.4722 11.9999 32 11.9999C30.5278 11.9999 29.2708 11.4791 28.2292 10.4374C27.1875 9.39575 26.6667 8.13881 26.6667 6.66658C26.6667 5.19436 27.1875 3.93742 28.2292 2.89575C29.2708 1.85409 30.5278 1.33325 32 1.33325C33.4722 1.33325 34.7292 1.85409 35.7708 2.89575C36.8125 3.93742 37.3333 5.19436 37.3333 6.66658Z"
              fill="black"
            />
          </svg>

          <p className="group-title">GATING based on everything!</p>
          <p className="group-text">
            Be it roles, be it reputation, be it wallet holdings or be it traits
            of their NFTs. We can help you automate groups based on rules that
            come pre-built when you setup a workspace.
          </p>

          <button className="read-more">Read More</button>
        </div>
        <div
          className="col-6 text-mess"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <img className="group-img" src={gate} alt="" />
        </div>
        <div
          className="col-6 text-mess"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <img className="bounties" src={bounties} alt="" />
        </div>
        <div
          className="col-6 text-mess"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <svg
            width="47"
            height="40"
            viewBox="0 0 47 40"
            fill="white"
            xmlns="http://www.w3.org/2000/svg"
            className="pc-link"
          >
            <path
              d="M3.61497 23.8462V3.84615C3.61497 3.63782 3.69109 3.45753 3.84333 3.30529C3.99557 3.15304 4.17587 3.07692 4.3842 3.07692H42.8457C43.0541 3.07692 43.2344 3.15304 43.3866 3.30529C43.5388 3.45753 43.615 3.63782 43.615 3.84615V23.8462C43.615 24.0545 43.5388 24.2348 43.3866 24.387C43.2344 24.5393 43.0541 24.6154 42.8457 24.6154H4.3842C4.17587 24.6154 3.99557 24.5393 3.84333 24.387C3.69109 24.2348 3.61497 24.0545 3.61497 23.8462ZM0.538044 3.84615V30C0.538044 31.0577 0.914646 31.9631 1.66785 32.7163C2.42106 33.4696 3.32651 33.8462 4.3842 33.8462H17.4611C17.4611 34.4391 17.3329 35.0601 17.0765 35.7091C16.8201 36.3582 16.5637 36.9271 16.3073 37.4159C16.0509 37.9046 15.9227 38.2532 15.9227 38.4615C15.9227 38.8782 16.0749 39.2388 16.3794 39.5433C16.6839 39.8478 17.0445 40 17.4611 40H29.7688C30.1855 40 30.5461 39.8478 30.8505 39.5433C31.155 39.2388 31.3073 38.8782 31.3073 38.4615C31.3073 38.2372 31.1791 37.8846 30.9227 37.4038C30.6663 36.9231 30.4098 36.3622 30.1534 35.7212C29.897 35.0801 29.7688 34.4551 29.7688 33.8462H42.8457C43.9034 33.8462 44.8089 33.4696 45.5621 32.7163C46.3153 31.9631 46.6919 31.0577 46.6919 30V3.84615C46.6919 2.78846 46.3153 1.88301 45.5621 1.12981C44.8089 0.376603 43.9034 0 42.8457 0H4.3842C3.32651 0 2.42106 0.376603 1.66785 1.12981C0.914646 1.88301 0.538044 2.78846 0.538044 3.84615Z"
              fill="white"
            />
          </svg>
          <p className="link-title">LINKED bounties, proposals and voting</p>
          <p className="pc-text">
            Why have silos when you can have every tasks or bounty or vote
            linked to the original community discussions?
          </p>
          <button className="read-more">Read More</button>
        </div>
        <div className="row" data-aos="fade-up" data-aos-duration="3000">
          <div className="col-6">
            <img className="hour" src={hour} alt="" />
            <p className="hour-title">Review, Pay & Reward</p>
            <p className="hour-text">
              Review submissions, pay from within the tool in just one click and
              reward contributors with NFTs resulting into leaderboard and
              progressive access to more unique offerings.
            </p>
            <button className="read-more">Read More</button>
          </div>
          <div className="col-6">
            <img className="iphone-p" src={iphone} alt="" />
          </div>
        </div>
      </div>
      {/* Tree part */}

      {/* glass part */}
      <div className="glass-part" data-aos="fade-up" data-aos-duration="3000">
        <div>
          <img className="glass-icon" src={glass} alt="" />
        </div>
        <p className="way-text">Manage your contributors, your way</p>
        <div>
          <img className="way-under" src={under} alt="" />
        </div>
        <L_body23 />
      </div>
      {/* glass part */}
      <div className="row">
        <UseCase />
      </div>
    </body>
  );
}
