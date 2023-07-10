import React from "react";
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
import group from "../../assets/pic1/Group Icon.png";
import gate from "../../assets/pic1/Gate.png";
import iphone from "../../assets/pic1/iphone13.png";
import hour from "../../assets/pic1/Hour.png";
import bounties from "../../assets/pic1/bounties.png";
import glass from "../../assets/pic1/glass.png";
import under from "../../assets/pic1/under.png";
import AOS from "aos";
import "./L_body.scss";
import L_header from "../L_header/L_header";

export default function L_body() {
  AOS.init();

  return (
    <body>
      <L_header className="z-index" />
      {/* Big img part */}
      <div className="row" data-aos="fade-up" data-aos-duration="3000" href="#">
        <div className="col-1"></div>
        <div className="col-10 img-container">
          <img
            src={mac}
            alt=""
            style={{
              marginLeft: "-1.9rem",
              width: "86.6vw",
              marginBottom: "-0.5rem",
            }}
          />
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
        <div className="col-10">
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
        <div className="col-1"></div>
        <div className="col-10">
          <div className="color-container-header">
            <img className="vector" src={vector} alt="" />
            <img className="underline" src={yellow} alt="" />
            <p className="diff-text">What makes DAO Manager Different</p>
          </div>
        </div>
        <div className="col-1"></div>
        <div className="col-6">
          <img className="gif" src={gif} alt="" />
        </div>
        <div className="col-6">
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
        <div className="col-6">
          <div className="">
            <img src={group} alt="" />
          </div>
          <div>
            <p>GATING based on everything!</p>
            <p>
              Be it roles, be it reputation, be it wallet holdings or be it
              traits of their NFTs. We can help you automate groups based on
              rules that come pre-built when you setup a workspace.
            </p>
          </div>
          <button className="read-more">Read More</button>
        </div>
        <div className="col-6">
          <img src={gate} alt="" />
        </div>
        <div className="col-6">
          <img className="gif" src={bounties} alt="" />
        </div>
        <div className="col-6">
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
        <div className="row">
          <div className="col-6">
            <img src={hour} alt="" />
            <p>Review, Pay & Reward</p>
            <p>
              Review submissions, pay from within the tool in just one click and
              reward contributors with NFTs resulting into leaderboard and
              progressive access to more unique offerings.
            </p>
            <button className="read-more">Read More</button>
          </div>
          <div className="col-6">
            <img src={iphone} alt="" />
          </div>
        </div>
      </div>
      {/* Tree part */}

      {/* glass part */}
      <div className="glass-part">
        <div>
          <img className="glass-icon" src={glass} alt="" />
        </div>
        <p className="way-text">Manage your contributors, your way</p>
        <div>
          <img className="way-under" src={under} alt="" />
        </div>
      </div>
      {/* glass part */}
    </body>
  );
}
