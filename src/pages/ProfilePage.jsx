import SideBar from "../components/SideBar/SideBar";
import backgroundCover from "../asset/img/background-User.png";
import Waller from "../asset/img/Profile/wallet.png";
import Tree from "../asset/img/Profile/Tree.svg";
import Near from "../asset/img/Profile/nearWallet.png";
import Petra from "../asset/img/Profile/petra.png";
import Google from "../asset/img/Profile/google.svg";
import Solana from "../asset/img/Profile/solana-sol-logo.png";
import Acti from "../asset/img/Profile/eded.svg";
import Contribute from "../components/ProfilePage/Contribute";
import Noti from "../components/ProfilePage/Noti";
import "./ProfilePage.scss";
import { useEffect, useState } from "react";

export default function ProfilePage() {
  // eslint-disable-next-line no-unused-vars
  const [profileUserName, setProfileUserName] = useState(
    window.sessionStorage.getItem("username")
  );

  const [username, setUserName] = useState("sqs");
  const [news, setNews] = useState("contri");
  const [key, setKey] = useState(true);
  function checkKey() {
    return key
      ? "d491d...e85e"
      : "d491dc57a18165d902edd04658ea48ff426a8c602136470b9dd3abc4c1f8e85e";
  }

  function checkEye() {
    if (key) {
      return (
        <i
          className="bi bi-eye-fill"
          onClick={() => {
            setKey(!key);
          }}
        ></i>
      );
    } else {
      return (
        <i
          className="bi bi-eye-slash-fill"
          onClick={() => {
            setKey(!key);
          }}
        ></i>
      );
    }
  }

  function handDeleteAccount() {
    const hg = document.querySelector(".ant-dropdown");
    if (hg.classList.contains("hide")) {
      hg.classList.remove("hide");
    } else {
      hg.classList.add("hide");
    }
  }

  function checkNewsType() {
    if (news == "contri") {
      return <Contribute></Contribute>;
    } else {
      return <Noti></Noti>;
    }
  }

  useEffect(() => {
    const contri = document.querySelector(".contri");
    const post = document.querySelector(".post");
    if (news == "contri") {
      contri.classList.add("active");
      post.classList.remove("active");
    } else {
      post.classList.add("active");
      contri.classList.remove("active");
    }
  }, [news]);
  return (
    <>
      <SideBar></SideBar>
      <header
        className="row"
        style={{
          backgroundColor: "#F6F5FF",
          height: "100%",
          position: "relative",
        }}
      >
        <div className="col-lg-2"></div>
        <div className="col-lg-8">
          <div className="row" style={{ marginBottom: "12px" }}>
            <div
              style={{ backgroundColor: "#fff", borderRadius: "0 0 15px 15px" }}
            >
              <div className="row">
                <img
                  src={backgroundCover}
                  alt="cover"
                  style={{
                    height: "180px",
                    position: "relative",
                    width: "100%",
                    objectFit: "cover",
                    padding: "0",
                  }}
                />

                <div style={{ position: "relative" }}>
                  <div className="profile-delete-account">
                    <i
                      className="bi bi-three-dots"
                      style={{
                        padding: "0 4.5px",
                        color: "white",
                        fontSize: "1.2rem",
                      }}
                      onClick={() => {
                        handDeleteAccount();
                      }}
                    ></i>
                  </div>
                  <button className="profile-edit-account">
                    <i className="bi bi-pen-fill"></i>
                    <span>Edit Profile</span>
                  </button>
                </div>

                <div
                  className="row"
                  style={{ margin: "16px", position: "relative" }}
                >
                  <div className="col-lg-4">
                    <div style={{ marginLeft: "152px" }}>
                      <span className="User-name">{profileUserName}</span>
                      <div>
                        <div
                          style={{
                            position: "absolute",
                            height: "180px",
                            top: "-200px",
                            left: "4px",
                          }}
                        >
                          <img
                            src="https://storage.googleapis.com/contribution_user_profile_picture/003.png"
                            alt="profile"
                            style={{
                              width: "120px",
                              height: "120px",
                              filter:
                                "drop-shadow(rgba(0, 0, 0, 0.1) 0px 10px 15px) drop-shadow(rgba(0, 0, 0, 0.05) 0px 4px 6px)",
                              position: "absolute",
                              background: "white",
                              left: "32px",
                              top: "142px",
                              borderRadius: "50%",
                              border: "2px solid white",
                              objectFit: "cover",
                            }}
                          ></img>
                        </div>
                        <span style={{ color: "#79A3F0" }}>sqs</span>
                        <button className="profile-button">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            aria-hidden="true"
                            width="16"
                          >
                            <path d="M7.5 3.375c0-1.036.84-1.875 1.875-1.875h.375a3.75 3.75 0 013.75 3.75v1.875C13.5 8.161 14.34 9 15.375 9h1.875A3.75 3.75 0 0121 12.75v3.375C21 17.16 20.16 18 19.125 18h-9.75A1.875 1.875 0 017.5 16.125V3.375z"></path>
                            <path d="M15 5.25a5.23 5.23 0 00-1.279-3.434 9.768 9.768 0 016.963 6.963A5.23 5.23 0 0017.25 7.5h-1.875A.375.375 0 0115 7.125V5.25zM4.875 6H6v10.125A3.375 3.375 0 009.375 19.5H16.5v1.125c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 013 20.625V7.875C3 6.839 3.84 6 4.875 6z"></path>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3"></div>
                  <div className="col-lg-5">
                    <div
                      style={{
                        height: "72px",
                        background: "rgb(246, 245, 255)",
                        borderRadius: "16px",
                        display: "flex",
                        alignItems: "center",
                        marginRight: "64px",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          padding: "0 16px",
                          borderRight: "1px solid rgb(237, 235, 254)",
                        }}
                      >
                        <i
                          className="bi bi-card-checklist"
                          style={{ color: "#136D9E" }}
                        ></i>
                        <div
                          style={{ display: "inline-block", marginLeft: "8px" }}
                        >
                          0
                          <div
                            style={{
                              color: "rgb(100, 116, 139)",
                              fontSize: "12px",
                            }}
                          >
                            Bounties
                          </div>
                        </div>
                      </div>

                      <div
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          padding: "0 16px",
                          borderRight: "1px solid rgb(237, 235, 254)",
                        }}
                      >
                        <i
                          className="bi bi-star-fill"
                          style={{ color: "yellow" }}
                        ></i>
                        <div
                          style={{ display: "inline-block", marginLeft: "8px" }}
                        >
                          15
                          <div
                            style={{
                              color: "rgb(100, 116, 139)",
                              fontSize: "12px",
                            }}
                          >
                            Task Points
                          </div>
                        </div>
                      </div>

                      <div
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          padding: "0 16px",
                        }}
                      >
                        <i
                          className="bi bi-coin"
                          style={{ color: "#FF9D53" }}
                        ></i>
                        <div
                          style={{ display: "inline-block", marginLeft: "8px" }}
                        >
                          0
                          <div
                            style={{
                              color: "rgb(100, 116, 139)",
                              fontSize: "12px",
                            }}
                          >
                            Earned
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-4">
              <div
                className="row"
                style={{
                  borderRadius: "12px",
                  backgroundColor: "white",
                  padding: "20px",
                  width: "100%",
                  marginBottom: "10px",
                }}
              >
                <div
                  style={{
                    height: "24px",
                    fontFamily: "Inter",
                    fontStyle: "normal",
                    fontWeight: "500",
                    fontSize: "18px",
                    lineHeight: "24px",
                    marginBottom: "4px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  About
                </div>
              </div>

              <div
                className="row"
                style={{
                  borderRadius: "12px",
                  backgroundColor: "white",
                  padding: "20px",
                  width: "100%",
                  marginBottom: "10px",
                }}
              >
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <i
                      className="bi bi-key-fill"
                      style={{
                        color: "#FBD271",
                        fontSize: "25px",
                        transform: "rotate(130deg)",
                      }}
                    ></i>
                    <span style={{ marginLeft: "5px" }}>Your Public Key</span>
                  </div>

                  <div style={{ display: "flex", alignItems: "flex-start" }}>
                    <button className="profile-button-down">
                      <svg
                        style={{ marginBottom: "3px" }}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                        width="16"
                      >
                        <path d="M7.5 3.375c0-1.036.84-1.875 1.875-1.875h.375a3.75 3.75 0 013.75 3.75v1.875C13.5 8.161 14.34 9 15.375 9h1.875A3.75 3.75 0 0121 12.75v3.375C21 17.16 20.16 18 19.125 18h-9.75A1.875 1.875 0 017.5 16.125V3.375z"></path>
                        <path d="M15 5.25a5.23 5.23 0 00-1.279-3.434 9.768 9.768 0 016.963 6.963A5.23 5.23 0 0017.25 7.5h-1.875A.375.375 0 0115 7.125V5.25zM4.875 6H6v10.125A3.375 3.375 0 009.375 19.5H16.5v1.125c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 013 20.625V7.875C3 6.839 3.84 6 4.875 6z"></path>
                      </svg>
                    </button>
                    <button className="profile-button-down">
                      {checkEye()}
                    </button>
                  </div>
                </div>

                <h4
                  style={{
                    marginBottom: "0",
                    overflowWrap: "anywhere",
                    fontSize: "15px",
                    marginTop: "3px",
                    fontWeight: "400",
                  }}
                >
                  {checkKey()}
                </h4>
              </div>

              {/* Account Linked */}
              <div
                className="row"
                style={{
                  borderRadius: "12px",
                  backgroundColor: "white",
                  padding: "20px",
                  width: "100%",
                }}
              >
                <div
                  style={{
                    height: "24px",
                    lineHeight: "24px",
                    marginBottom: "12px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  Connect account (1)
                </div>

                {/* Button */}
                <div
                  className="flex flex-wrap"
                  style={{ display: "flex", gap: " 0.35rem" }}
                >
                  <button className="profile-account-linked">
                    <span>
                      <img
                        src={Waller}
                        alt="Wallet"
                        style={{ width: "20px" }}
                      />
                    </span>
                    <div
                      style={{
                        position: "absolute",
                        top: "-7px",
                        right: "-4px",
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                        className="text-gray-400"
                        width="15px"
                      >
                        <path
                          fillRule="evenodd"
                          d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                  </button>

                  <button className="profile-account-linked">
                    <span>
                      <img src={Tree} alt="Wallet" style={{ width: "20px" }} />
                    </span>
                    <div
                      style={{
                        position: "absolute",
                        top: "-7px",
                        right: "-4px",
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                        className="text-gray-400"
                        width="15px"
                      >
                        <path
                          fillRule="evenodd"
                          d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                  </button>

                  <button className="profile-account-linked">
                    <span>
                      <img src={Near} alt="Wallet" style={{ width: "20px" }} />
                    </span>
                    <div
                      style={{
                        position: "absolute",
                        top: "-7px",
                        right: "-4px",
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                        className="text-gray-400"
                        width="15px"
                      >
                        <path
                          fillRule="evenodd"
                          d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                  </button>

                  <button className="profile-account-linked">
                    <span>
                      <img src={Petra} alt="Wallet" style={{ width: "20px" }} />
                    </span>
                    <div
                      style={{
                        position: "absolute",
                        top: "-7px",
                        right: "-4px",
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                        className="text-gray-400"
                        width="15px"
                      >
                        <path
                          fillRule="evenodd"
                          d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                  </button>

                  <button className="profile-account-linked">
                    <i
                      className="bi bi-twitter"
                      style={{ color: "#639AF8", fontSize: "1rem" }}
                    ></i>
                    <div
                      style={{
                        position: "absolute",
                        top: "-7px",
                        right: "-4px",
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                        className="text-gray-400"
                        width="15px"
                      >
                        <path
                          fillRule="evenodd"
                          d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                  </button>

                  <button className="profile-account-linked">
                    <i
                      className="bi bi-discord"
                      style={{ color: "#639AF8", fontSize: "1rem" }}
                    ></i>
                    <div
                      style={{
                        position: "absolute",
                        top: "-7px",
                        right: "-4px",
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                        className="text-gray-400"
                        width="15px"
                      >
                        <path
                          fillRule="evenodd"
                          d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                  </button>

                  <button className="profile-account-linked">
                    <img src={Google} alt="Wallet" style={{ width: "20px" }} />

                    <div
                      style={{
                        position: "absolute",
                        top: "-8px",
                        right: "-4px",
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                        className="text-green-400"
                        width="18px"
                      >
                        <path
                          fillRule="evenodd"
                          d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                  </button>

                  <button className="profile-account-linked">
                    <i
                      className="bi bi-github"
                      style={{ fontSize: "1.1rem" }}
                    ></i>
                    <div
                      style={{
                        position: "absolute",
                        top: "-7px",
                        right: "-4px",
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                        className="text-gray-400"
                        width="15px"
                      >
                        <path
                          fillRule="evenodd"
                          d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                  </button>

                  <button className="profile-account-linked">
                    <span>
                      <img
                        src={Solana}
                        alt="Wallet"
                        style={{ width: "20px" }}
                      />
                    </span>
                    <div
                      style={{
                        position: "absolute",
                        top: "-7px",
                        right: "-4px",
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                        className="text-gray-400"
                        width="15px"
                      >
                        <path
                          fillRule="evenodd"
                          d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div
                className="row"
                style={{
                  borderRadius: "12px",
                  background: "white",
                  padding: "20px",
                  width: "100%",
                }}
              >
                <div style={{ display: "flex" }}>
                  <img src={Acti} alt="" />
                  <div style={{ marginLeft: "7px", fontWeight: "500" }}>
                    All Activities
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "nowrap",
                    borderBottom: "1px solid rgb(241, 245, 249)",
                  }}
                >
                  <div
                    className="profile-acti-part contri "
                    onClick={() => {
                      setNews("contri");
                    }}
                  >
                    <div className="sub-active">
                      <div className="profile-acti-part-amount ">0</div>
                      <span className="profile-acti-part-text">
                        Contributions
                      </span>
                    </div>
                  </div>

                  <div
                    className="profile-acti-part post"
                    onClick={() => {
                      setNews("post");
                    }}
                  >
                    <div className="sub-active">
                      <div className="profile-acti-part-amount ">0</div>
                      <span className="profile-acti-part-text">Posts</span>
                    </div>
                  </div>
                </div>

                <div className="row">{checkNewsType()}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-1"></div>
      </header>

      <div
        style={{
          position: "absolute",
          top: "0px",
          left: "0px",
          width: "100%",
          height: "100%",
          zIndex: "20000",
        }}
        onClick={() => {
          handDeleteAccount();
        }}
        className="ant-dropdown hide"
      >
        <div>
          <div
            className="ant-dropdown-placement-bottomLeft "
            style={{
              minWidth: "24px",
              left: "1050px",
              top: "43px",
              position: "absolute",
            }}
          >
            <div className="profile-account-deleted">
              <div style={{ padding: "5px 12px" }}>
                <i
                  className="bi bi-box-arrow-right"
                  style={{ color: "red" }}
                ></i>
                <span style={{ color: "red", marginLeft: "4px" }}>
                  Delete Account
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
