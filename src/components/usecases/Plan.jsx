import "./Plan.scss";
import plan1 from "../../assets/img/usecase/plan1.svg";
import checkicon from "../../assets/img/usecase/Check Icon.svg";
import checkorange from "../../assets/img/usecase/Circle Orange Check Icon.svg";
import checkX from "../../assets/img/usecase/Circle X Icon.svg";
import { useState } from "react";

const Plan = () => {
  const option1 = document.querySelector(".pricing-grid1");
  const option1t = document.querySelector(".arrow-image-righr-21");
  const [show1, setShow1] = useState("false");
  function inputShow() {
    setShow1(!show1);
    if (show1) {
      option1.classList.add("show");
      option1t.classList.add("right");
    } else {
      option1.classList.remove("show");
      option1t.classList.remove("right");
    }
  }
  const option2 = document.querySelector(".pricing-grid2");
  const option2t = document.querySelector(".arrow-image-righr-22");
  const [show2, setShow2] = useState("false");
  function inputShow2() {
    setShow2(!show2);
    if (show2) {
      option2.classList.add("show");
      option2t.classList.add("right");
    } else {
      option2.classList.remove("show");
      option2t.classList.remove("right");
    }
  }
  const option3 = document.querySelector(".pricing-grid3");
  const option3t = document.querySelector(".arrow-image-righr-23");
  const [show3, setShow3] = useState("false");
  function inputShow3() {
    setShow3(!show3);
    if (show3) {
      option3.classList.add("show");
      option3t.classList.add("right");
    } else {
      option3.classList.remove("show");
      option3t.classList.remove("right");
    }
  }
  return (
    <>
      <div style={{ paddingTop: "400px" }} className="title-container">
        <div className="center-text">
          <div className="half-title-container">
            <div className="title-with-emoji">
              <div className="fade-in-move-on-scroll-plan">
                <h1 className="title-plan">Choose your best plan</h1>
                <span>
                  Choose a plan that best suits your community and deliver
                  stellar experience
                </span>
              </div>
              <div className="emoji-holder_05">
                <div>🤍</div>
              </div>
            </div>
          </div>
        </div>
        <div className="pricing-grid-header">
          <div className="contact-us-holder main">
            <div className="card-title">DAO Lens</div>
            <div className="contact-us-icon-holder">
              <img src={plan1} alt="" />
            </div>
          </div>

          <div className="pricing-header-container">
            <div className="pricing-text-content">
              <div className="pricing-intro">
                <strong>Starter</strong>
              </div>
              <div className="price-holder">
                <div className="card-title">$0</div>
                <p className="paragraph-extra-small">/Month</p>
              </div>
              <p className="paragraph-extra-small2">($ 49 / Month)</p>
            </div>
          </div>
          <div className="pricing-header-container">
            <div className="pricing-text-content">
              <div className="pricing-intro">
                <strong>Premium*</strong>
              </div>
              <div className="price-holder">
                <div className="card-title">$199</div>
                <p className="paragraph-extra-small">/Month</p>
              </div>
              <p className="paragraph-extra-small2">($ 299 / Month)</p>
            </div>
          </div>
          <div className="pricing-header-container">
            <div className="pricing-text-content">
              <div className="pricing-intro">
                <strong>Ecosystem</strong>
              </div>
              <div className="price-holder">
                <div className="card-title">$4999</div>
                <p className="paragraph-extra-small">/Month</p>
              </div>
              <p className="paragraph-extra-small2">($ 9999 / Month)</p>
            </div>
          </div>
        </div>
        <div className="pricing-tabs-holder-2">
          <div className="pricing-grid-wra-er-2 top">
            <div className="pricing-grid wrap">
              <div className="pricing-detail-holder main-page nopad">
                <div
                  onClick={() => {
                    inputShow();
                  }}
                  className="pricing-dropdown-heading black"
                >
                  DAO Manager Modules
                </div>
                <div className="arrow-image-righr-21 w-embed">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-caret-right"
                    viewBox="0 0 16 16"
                  >
                    <path d="M6 12.796V3.204L11.481 8 6 12.796zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753z" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="pricing-grid1 main">
              <div className="pricing-grid wraped">
                <div className="pricing-detail-holder reduce-padding">
                  <div className="black _1">Discussion Forum</div>
                </div>
                <div className="tabel-checkmark-holder">
                  <div className="checkmark-holder">
                    <img src={checkicon} alt="" />
                  </div>
                  <div className="pricing-card-borders"></div>
                </div>
                <div className="tabel-checkmark-holder">
                  <div className="checkmark-holder">
                    <img src={checkicon} alt="" />
                  </div>
                  <div className="pricing-card-borders remove-right-border"></div>
                </div>
                <div className="tabel-checkmark-holder">
                  <div className="checkmark-holder">
                    <img src={checkorange} alt="" />
                  </div>
                  <div className="pricing-card-borders"></div>
                </div>
              </div>
              <div className="pricing-grid wraped">
                <div className="pricing-detail-holder reduce-padding">
                  <div className="black _1">Courses</div>
                </div>
                <div className="tabel-checkmark-holder">
                  <div className="checkmark-holder">
                    <img src={checkicon} alt="" />
                  </div>
                  <div className="pricing-card-borders"></div>
                </div>
                <div className="tabel-checkmark-holder">
                  <div className="checkmark-holder">
                    <img src={checkicon} alt="" />
                  </div>
                  <div className="pricing-card-borders remove-right-border"></div>
                </div>
                <div className="tabel-checkmark-holder">
                  <div className="checkmark-holder">
                    <img src={checkorange} alt="" />
                  </div>
                  <div className="pricing-card-borders"></div>
                </div>
              </div>
              <div className="pricing-grid wraped">
                <div className="pricing-detail-holder reduce-padding">
                  <div className="black _1">Document Library</div>
                </div>
                <div className="tabel-checkmark-holder">
                  <div className="checkmark-holder">
                    <img src={checkicon} alt="" />
                  </div>
                  <div className="pricing-card-borders"></div>
                </div>
                <div className="tabel-checkmark-holder">
                  <div className="checkmark-holder">
                    <img src={checkicon} alt="" />
                  </div>
                  <div className="pricing-card-borders remove-right-border"></div>
                </div>
                <div className="tabel-checkmark-holder">
                  <div className="checkmark-holder">
                    <img src={checkorange} alt="" />
                  </div>
                  <div className="pricing-card-borders"></div>
                </div>
              </div>
              <div className="pricing-grid wraped">
                <div className="pricing-detail-holder reduce-padding">
                  <div className="black _1">Community Level Gating</div>
                </div>
                <div className="tabel-checkmark-holder">
                  <div className="checkmark-holder">
                    <img src={checkicon} alt="" />
                  </div>
                  <div className="pricing-card-borders"></div>
                </div>
                <div className="tabel-checkmark-holder">
                  <div className="checkmark-holder">
                    <img src={checkicon} alt="" />
                  </div>
                  <div className="pricing-card-borders remove-right-border"></div>
                </div>
                <div className="tabel-checkmark-holder">
                  <div className="checkmark-holder">
                    <img src={checkorange} alt="" />
                  </div>
                  <div className="pricing-card-borders"></div>
                </div>
              </div>
              <div className="pricing-grid wraped">
                <div className="pricing-detail-holder reduce-padding">
                  <div className="black _1">Proposal Management</div>
                </div>
                <div className="tabel-checkmark-holder">
                  <div className="checkmark-holder">
                    <img src={checkX} alt="" />
                  </div>
                  <div className="pricing-card-borders"></div>
                </div>
                <div className="tabel-checkmark-holder">
                  <div className="checkmark-holder">
                    <img src={checkicon} alt="" />
                  </div>
                  <div className="pricing-card-borders remove-right-border"></div>
                </div>
                <div className="tabel-checkmark-holder">
                  <div className="checkmark-holder">
                    <img src={checkorange} alt="" />
                  </div>
                  <div className="pricing-card-borders"></div>
                </div>
              </div>
              <div className="pricing-grid wraped">
                <div className="pricing-detail-holder reduce-padding">
                  <div className="black _1">Project Management</div>
                </div>
                <div className="tabel-checkmark-holder">
                  <div className="checkmark-holder">
                    <img src={checkX} alt="" />
                  </div>
                  <div className="pricing-card-borders"></div>
                </div>
                <div className="tabel-checkmark-holder">
                  <div className="checkmark-holder">
                    <img src={checkicon} alt="" />
                  </div>
                  <div className="pricing-card-borders remove-right-border"></div>
                </div>
                <div className="tabel-checkmark-holder">
                  <div className="checkmark-holder">
                    <img src={checkorange} alt="" />
                  </div>
                  <div className="pricing-card-borders"></div>
                </div>
              </div>
              <div className="pricing-grid wraped">
                <div className="pricing-detail-holder reduce-padding">
                  <div className="black _1">Community & Channel Gating*</div>
                </div>
                <div className="tabel-checkmark-holder">
                  <div className="checkmark-holder">
                    <img src={checkX} alt="" />
                  </div>
                  <div className="pricing-card-borders"></div>
                </div>
                <div className="tabel-checkmark-holder">
                  <div className="checkmark-holder">
                    <img src={checkicon} alt="" />
                  </div>
                  <div className="pricing-card-borders remove-right-border"></div>
                </div>
                <div className="tabel-checkmark-holder">
                  <div className="checkmark-holder">
                    <img src={checkorange} alt="" />
                  </div>
                  <div className="pricing-card-borders"></div>
                </div>
              </div>
              <div className="pricing-grid wraped">
                <div className="pricing-detail-holder reduce-padding">
                  <div className="black _1">Basic Integrations*</div>
                </div>
                <div className="tabel-checkmark-holder">
                  <div className="checkmark-holder">
                    <img src={checkX} alt="" />
                  </div>
                  <div className="pricing-card-borders"></div>
                </div>
                <div className="tabel-checkmark-holder">
                  <div className="checkmark-holder">
                    <img src={checkicon} alt="" />
                  </div>
                  <div className="pricing-card-borders remove-right-border"></div>
                </div>
                <div className="tabel-checkmark-holder">
                  <div className="checkmark-holder">
                    <img src={checkorange} alt="" />
                  </div>
                  <div className="pricing-card-borders"></div>
                </div>
              </div>
              <div className="pricing-grid wraped">
                <div className="pricing-detail-holder reduce-padding">
                  <div className="black _1">Bounty Management</div>
                </div>
                <div className="tabel-checkmark-holder">
                  <div className="checkmark-holder">
                    <img src={checkX} alt="" />
                  </div>
                  <div className="pricing-card-borders"></div>
                </div>
                <div className="tabel-checkmark-holder">
                  <div className="checkmark-holder">
                    <img src={checkicon} alt="" />
                  </div>
                  <div className="pricing-card-borders remove-right-border"></div>
                </div>
                <div className="tabel-checkmark-holder">
                  <div className="checkmark-holder">
                    <img src={checkorange} alt="" />
                  </div>
                  <div className="pricing-card-borders"></div>
                </div>
              </div>
              <div className="pricing-grid wraped">
                <div className="pricing-detail-holder reduce-padding">
                  <div className="black _1">Unified Events</div>
                </div>
                <div className="tabel-checkmark-holder">
                  <div className="checkmark-holder">
                    <img src={checkX} alt="" />
                  </div>
                  <div className="pricing-card-borders"></div>
                </div>
                <div className="tabel-checkmark-holder">
                  <div className="checkmark-holder">
                    <img src={checkicon} alt="" />
                  </div>
                  <div className="pricing-card-borders remove-right-border"></div>
                </div>
                <div className="tabel-checkmark-holder">
                  <div className="checkmark-holder">
                    <img src={checkorange} alt="" />
                  </div>
                  <div className="pricing-card-borders"></div>
                </div>
              </div>
              <div className="pricing-grid wraped">
                <div className="pricing-detail-holder reduce-padding">
                  <div className="black _1">Reputation Based Gating</div>
                </div>
                <div className="tabel-checkmark-holder">
                  <div className="checkmark-holder">
                    <img src={checkX} alt="" />
                  </div>
                  <div className="pricing-card-borders"></div>
                </div>
                <div className="tabel-checkmark-holder">
                  <div className="checkmark-holder">
                    <img src={checkicon} alt="" />
                  </div>
                </div>
                <div className="tabel-checkmark-holder">
                  <div className="checkmark-holder">
                    <img src={checkorange} alt="" />
                  </div>
                  <div className="pricing-card-borders"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="pricing-grid-wrap">
            <div className="pricing-grid-wrap-name">Storage</div>
            <div className="pricing-grid-wrap-price">
              <div className="pricing-grid-wrap-price-1">5 GB</div>
              <div className="pricing-grid-wrap-price-2">50 GB</div>
              <div className="pricing-grid-wrap-price-3">100 GB</div>
            </div>
          </div>
          <div className="pricing-grid-wrap">
            <div className="pricing-grid-wrap-name">Robin AI</div>
            <div className="pricing-grid-wrap-price">
              <div className="pricing-grid-wrap-price-1">5 Credit/Week</div>
              <div className="pricing-grid-wrap-price-2">50 Credits/Week</div>
              <div className="pricing-grid-wrap-price-3">500 Credits/Week</div>
            </div>
          </div>
          <div className="pricing-grid-wra-er-2 ">
            <div className="pricing-grid wrap">
              <div className="pricing-detail-holder main-page nopad">
                <div
                  onClick={() => {
                    inputShow2();
                  }}
                  className="pricing-dropdown-heading black"
                >
                  Custom Modules
                </div>
                <div
                  style={{ marginLeft: "-13rem" }}
                  className="arrow-image-righr-22 w-embed"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-caret-right"
                    viewBox="0 0 16 16"
                  >
                    <path d="M6 12.796V3.204L11.481 8 6 12.796zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753z" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="pricing-grid2 main">
              <div className="pricing-grid wraped">
                <div className="pricing-detail-holder reduce-padding">
                  <div className="black _1">Discussion Forum</div>
                </div>
                <div className="tabel-checkmark-holder">
                  <div className="checkmark-holder">
                    <img src={checkX} alt="" />
                  </div>
                  <div className="pricing-card-borders"></div>
                </div>
                <div className="tabel-checkmark-holder">
                  <div className="checkmark-holder">
                    <img src={checkX} alt="" />
                  </div>
                  <div className="pricing-card-borders remove-right-border"></div>
                </div>
                <div className="tabel-checkmark-holder">
                  <div className="checkmark-holder">
                    <img src={checkorange} alt="" />
                  </div>
                  <div className="pricing-card-borders"></div>
                </div>
              </div>
              <div className="pricing-grid wraped">
                <div className="pricing-detail-holder reduce-padding">
                  <div className="black _1">Courses</div>
                </div>
                <div className="tabel-checkmark-holder">
                  <div className="checkmark-holder">
                    <img src={checkX} alt="" />
                  </div>
                  <div className="pricing-card-borders"></div>
                </div>
                <div className="tabel-checkmark-holder">
                  <div className="checkmark-holder">
                    <img src={checkX} alt="" />
                  </div>
                  <div className="pricing-card-borders remove-right-border"></div>
                </div>
                <div className="tabel-checkmark-holder">
                  <div className="checkmark-holder">
                    <img src={checkorange} alt="" />
                  </div>
                  <div className="pricing-card-borders"></div>
                </div>
              </div>
              <div className="pricing-grid wraped">
                <div className="pricing-detail-holder reduce-padding">
                  <div className="black _1">Document Library</div>
                </div>
                <div className="tabel-checkmark-holder">
                  <div className="checkmark-holder">
                    <img src={checkX} alt="" />
                  </div>
                  <div className="pricing-card-borders"></div>
                </div>
                <div className="tabel-checkmark-holder">
                  <div className="checkmark-holder">
                    <img src={checkX} alt="" />
                  </div>
                  <div className="pricing-card-borders remove-right-border"></div>
                </div>
                <div className="tabel-checkmark-holder">
                  <div className="checkmark-holder">
                    <img src={checkorange} alt="" />
                  </div>
                  <div className="pricing-card-borders"></div>
                </div>
              </div>
              <div className="pricing-grid wraped">
                <div className="pricing-detail-holder reduce-padding">
                  <div className="black _1">Community Level Gating</div>
                </div>
                <div className="tabel-checkmark-holder">
                  <div className="checkmark-holder">
                    <img src={checkX} alt="" />
                  </div>
                  <div className="pricing-card-borders"></div>
                </div>
                <div className="tabel-checkmark-holder">
                  <div className="checkmark-holder">
                    <img src={checkX} alt="" />
                  </div>
                  <div className="pricing-card-borders remove-right-border"></div>
                </div>
                <div className="tabel-checkmark-holder">
                  <div className="checkmark-holder">
                    <img src={checkorange} alt="" />
                  </div>
                  <div className="pricing-card-borders"></div>
                </div>
              </div>
              <div className="pricing-grid wraped">
                <div className="pricing-detail-holder reduce-padding">
                  <div className="black _1">Proposal Management</div>
                </div>
                <div className="tabel-checkmark-holder">
                  <div className="checkmark-holder">
                    <img src={checkX} alt="" />
                  </div>
                  <div className="pricing-card-borders"></div>
                </div>
                <div className="tabel-checkmark-holder">
                  <div className="checkmark-holder">
                    <img src={checkX} alt="" />
                  </div>
                  <div className="pricing-card-borders remove-right-border"></div>
                </div>
                <div className="tabel-checkmark-holder">
                  <div className="checkmark-holder">
                    <img src={checkorange} alt="" />
                  </div>
                  <div className="pricing-card-borders"></div>
                </div>
              </div>
              <div className="pricing-grid wraped">
                <div className="pricing-detail-holder reduce-padding">
                  <div className="black _1">Project Management</div>
                </div>
                <div className="tabel-checkmark-holder">
                  <div className="checkmark-holder">
                    <img src={checkX} alt="" />
                  </div>
                  <div className="pricing-card-borders"></div>
                </div>
                <div className="tabel-checkmark-holder">
                  <div className="checkmark-holder">
                    <img src={checkX} alt="" />
                  </div>
                  <div className="pricing-card-borders remove-right-border"></div>
                </div>
                <div className="tabel-checkmark-holder">
                  <div className="checkmark-holder">
                    <img src={checkorange} alt="" />
                  </div>
                  <div className="pricing-card-borders"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="pricing-grid-wrap">
            <div className="pricing-grid-wrap-name">Community Support*</div>
            <div className="pricing-grid-wrap-price">
              <div className="pricing-grid-wrap-price-1">
                <img src={checkX} alt="" />
              </div>
              <div className="pricing-grid-wrap-price-2">
                <img src={checkX} alt="" />
              </div>
              <div className="pricing-grid-wrap-price-3">
                <img src={checkorange} alt="" />
              </div>
            </div>
          </div>
          <div className="pricing-grid-wrap">
            <div className="pricing-grid-wrap-name">Ecosystem Research*</div>
            <div className="pricing-grid-wrap-price">
              <div className="pricing-grid-wrap-price-1">
                <img src={checkX} alt="" />
              </div>
              <div className="pricing-grid-wrap-price-2">
                <img src={checkX} alt="" />
              </div>
              <div className="pricing-grid-wrap-price-3">
                <img src={checkorange} alt="" />
              </div>
            </div>
          </div>
          <div className="pricing-grid-wra-er-2 ">
            <div className="pricing-grid wrap">
              <div className="pricing-detail-holder main-page nopad">
                <div
                  onClick={() => {
                    inputShow3();
                  }}
                  className="pricing-dropdown-heading black"
                >
                  Add-ons
                </div>
                <div
                  style={{ marginLeft: "-19rem" }}
                  className="arrow-image-righr-23 w-embed"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-caret-right"
                    viewBox="0 0 16 16"
                  >
                    <path d="M6 12.796V3.204L11.481 8 6 12.796zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753z" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="pricing-grid3 main">
              <div className="pricing-grid wraped">
                <div className="pricing-detail-holder reduce-padding">
                  <div className="black _1">Verification Mark </div>
                </div>
                <div className="tabel-checkmark-holder">
                  <div className="checkmark-holder1">19 USD/month</div>
                  <div className="pricing-card-borders"></div>
                </div>
                <div className="tabel-checkmark-holder">
                  <div className="checkmark-holde1r">19 USD/month</div>
                  <div className="pricing-card-borders remove-right-border"></div>
                </div>
                <div className="tabel-checkmark-holder">
                  <div className="checkmark-holder1">19 USD/month</div>
                  <div className="pricing-card-borders"></div>
                </div>
              </div>
              <div className="pricing-grid wraped">
                <div className="pricing-detail-holder reduce-padding">
                  <div className="black _1">Custom Integrations</div>
                </div>
                <div className="tabel-checkmark-holder">
                  <div className="checkmark-holder1">1199 USD/month</div>
                  <div className="pricing-card-borders"></div>
                </div>
                <div className="tabel-checkmark-holder">
                  <div className="checkmark-holder1">1199 USD/month</div>
                  <div className="pricing-card-borders remove-right-border"></div>
                </div>
                <div className="tabel-checkmark-holder">
                  <div className="checkmark-holder1">1199 USD/month</div>
                  <div className="pricing-card-borders"></div>
                </div>
              </div>
              <div className="pricing-grid wraped">
                <div className="pricing-detail-holder reduce-padding">
                  <div className="black _1">Custom Blockchain Support</div>
                </div>
                <div className="tabel-checkmark-holder">
                  <div className="checkmark-holder1">Contact Sales</div>
                  <div className="pricing-card-borders"></div>
                </div>
                <div className="tabel-checkmark-holder">
                  <div className="checkmark-holder1">Contact Sales</div>
                  <div className="pricing-card-borders remove-right-border"></div>
                </div>
                <div className="tabel-checkmark-holder">
                  <div className="checkmark-holder1">Contact Sales</div>
                  <div className="pricing-card-borders"></div>
                </div>
              </div>
              <div className="pricing-grid wraped">
                <div className="pricing-detail-holder reduce-padding">
                  <div className="black _1">Custom Widgets</div>
                </div>
                <div className="tabel-checkmark-holder">
                  <div className="checkmark-holder1">Contact Sales</div>
                  <div className="pricing-card-borders"></div>
                </div>
                <div className="tabel-checkmark-holder">
                  <div className="checkmark-holder1">Contact Sales</div>
                  <div className="pricing-card-borders remove-right-border"></div>
                </div>
                <div className="tabel-checkmark-holder">
                  <div className="checkmark-holder1">Contact Sales</div>
                  <div className="pricing-card-borders"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <a href="" className="pricing-button-more w-button">
          View Detailed Pricing
        </a>
      </div>
    </>
  );
};
export default Plan;
