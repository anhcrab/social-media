import "./HaveLogout.scss";
import UserLogo from "../../../assets/img/UserLogo.png";
import { useEffect, useState } from "react";
import SearchBar from "../../Search/Search";
import Notification from "../../Notification/Notification";
import logo from "../../../assets/img/logo.svg";

export default function HaveLogout() {
  const [showBox, setShowBox] = useState(false);
  const [showBox2, setShowBox2] = useState(false);
  const [showBox3, setShowBox3] = useState(false);
  const [showBox4, setShowBox4] = useState(false);

  const [checkingAccount, setCheckingAccount] = useState(true);

  const [search, setSearch] = useState(false);
  const [noti, setNoti] = useState(false);

  const handleMouseEnter = () => {
    setShowBox(true);
  };

  const handleMouseLeave = () => {
    setShowBox(false);
  };

  const handleMouseEnter2 = () => {
    setShowBox2(true);
  };

  const handleMouseLeave2 = () => {
    setShowBox2(false);
  };
  const handleMouseEnter3 = () => {
    setShowBox3(true);
  };

  const handleMouseLeave3 = () => {
    setShowBox3(false);
  };

  const handleMouseEnter4 = () => {
    setShowBox4(true);
  };

  const handleMouseLeave4 = () => {
    setShowBox4(false);
  };

  useEffect(() => {}, [checkingAccount]);

  function logoutAccount() {
    window.sessionStorage.clear();
    setCheckingAccount(false);
    window.location.reload();
  }
  return (
    <>
      <div className="not-for-phone not-for-Ipad">
        <div>
          <div
            className="row"
            style={{
              display: "flex",
              justifyContent: "center",
              width: "62px",
            }}
          >
            <div
              className="row"
              style={{ margin: "10px 0", position: "relative" }}
            >
              <button
                style={{ border: "none", background: "none" }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <i
                  className="bi bi-search logout-btn"
                  onClick={() => {
                    setSearch(!search);
                  }}
                ></i>
              </button>
              {showBox && (
                <div style={{ position: "relative" }}>
                  <div className="sub-search">
                    <span>Search</span>
                  </div>
                </div>
              )}
            </div>

            <div
              className="row"
              style={{ margin: "10px 0", position: "relative" }}
            >
              <button
                style={{ border: "none", background: "none" }}
                onMouseEnter={handleMouseEnter2}
                onMouseLeave={handleMouseLeave2}
                onClick={() => {
                  setNoti(!noti);
                }}
              >
                <i className="bi bi-bell-fill logout-btn"></i>
              </button>
              <div
                style={{
                  position: "absolute",
                  width: "10px",
                  height: "10px",
                  top: "-15px",
                  right: "-2px",
                }}
              >
                <span
                  style={{
                    borderRadius: "50%",
                    backgroundColor: "blue",
                    padding: "0 5px",
                    paddingBottom: "3px",
                    color: "#fff",
                    fontSize: "0.8rem",
                  }}
                >
                  o
                </span>
              </div>

              {showBox2 && (
                <>
                  <div style={{ position: "relative" }}>
                    <div className="sub-noti1">
                      <span>Notifications</span>
                    </div>
                  </div>
                </>
              )}
            </div>

            <div
              className=""
              style={{ margin: "10px 0", position: "relative" }}
            >
              <button
                style={{ border: "none", background: "none" }}
                onMouseEnter={handleMouseEnter3}
                onMouseOver={handleMouseLeave3}
                onClick={handleMouseEnter3}
              >
                <img src={UserLogo} alt="" className="logout-image" />
                <div className="sub-user-block"></div>
              </button>
              {showBox3 && (
                <div style={{ position: "relative" }}>
                  <div className="sub-user">
                    <div
                      onClick={e => {
                        e.preventDefault();
                        window.location.href = "/app/profile";
                      }}
                      className="user-btn"
                    >
                      <i
                        className="bi bi-person-fill"
                        style={{ marginRight: "3px", color: "#333" }}
                      ></i>
                      <span style={{ color: "#333" }}>My Profile</span>
                    </div>
                    <div
                      className="logout-btns"
                      onClick={() => {
                        logoutAccount();
                      }}
                    >
                      <i
                        className="bi bi-box-arrow-left"
                        style={{ marginRight: "3px", color: "red" }}
                      ></i>
                      <span style={{ color: "#333" }}>Logout</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="for-small">
        <div>
          <div
            className="row asdf"
            
          >
            <div
              style={{
                display: "flex",
                flexWrap: "nowrap",
                justifyContent: "center",
                margin: "18px 0",
              }}
            >
              <button
                style={{
                  borderRadius: "12px",
                  justifyContent: "center",
                  alignItems: "center",
                  display: "flex",
                  minHeight: "40px",
                  padding: "7px 10px",
                  backgroundColor: "#fff",
                }}
                className="btn-logo"
              >
                <img
                  src={logo}
                  style={{ width: "18px", cursor: "pointer" }}
                  onMouseEnter={handleMouseEnter4}
                  onMouseLeave={handleMouseLeave4}
                  onClick={() => {
                    window.location.href = "/app/";
                  }}
                ></img>
              </button>
              {showBox4 && (
                <div style={{ position: "relative" }}>
                  <div className="sub-logo">
                    <span>Discover</span>
                  </div>
                </div>
              )}
            </div>
            <div
              className="row"
              style={{ margin: "10px 0", position: "relative" }}
            >
              <button
                style={{
                  border: "none",
                  background: "none",
                }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <i
                  className="bi bi-search logout-btn"
                  onClick={() => {
                    setSearch(!search);
                  }}
                ></i>
              </button>
              {showBox && (
                <div style={{ position: "relative" }}>
                  <div className="sub-search">
                    <span>Search</span>
                  </div>
                </div>
              )}
            </div>

            <div
              className="row"
              style={{ margin: "10px 0", position: "relative" }}
            >
              <button
                style={{ border: "none", background: "none" }}
                onMouseEnter={handleMouseEnter2}
                onMouseLeave={handleMouseLeave2}
                onClick={() => {
                  setNoti(!noti);
                }}
              >
                <i className="bi bi-bell-fill logout-btn"></i>
              </button>
              <div
                style={{
                  position: "absolute",
                  width: "10px",
                  height: "10px",
                  top: "-2px",
                  right: "28px",
                }}
              >
                <span
                  style={{
                    borderRadius: "50%",
                    backgroundColor: "blue",
                    padding: "0 5px",
                    paddingBottom: "3px",
                    color: "#fff",
                    fontSize: "0.8rem",
                  }}
                >
                  o
                </span>
              </div>

              {showBox2 && (
                <>
                  <div style={{ position: "relative" }}>
                    <div className="sub-noti1">
                      <span>Notifications</span>
                    </div>
                  </div>
                </>
              )}
            </div>

            <div
              className=""
              style={{ margin: "10px 0", position: "relative" }}
            >
              <button
                style={{ border: "none", background: "none" }}
                onMouseEnter={handleMouseEnter3}
                onMouseOver={handleMouseLeave3}
                onClick={handleMouseEnter3}
              >
                <img src={UserLogo} alt="" className="logout-image" />
                <div className="sub-user-block"></div>
              </button>
              {showBox3 && (
                <div style={{ position: "relative" }}>
                  <div className="sub-user">
                    <div
                      onClick={e => {
                        e.preventDefault();
                        window.location.href = "/app/profile";
                      }}
                      className="user-btn"
                    >
                      <i
                        className="bi bi-person-fill"
                        style={{ marginRight: "3px", color: "#333" }}
                      ></i>
                      <span style={{ color: "#333" }}>My Profile</span>
                    </div>
                    <div
                      className="logout-btns"
                      onClick={() => {
                        logoutAccount();
                      }}
                    >
                      <i
                        className="bi bi-box-arrow-left"
                        style={{ marginRight: "3px", color: "red" }}
                      ></i>
                      <span style={{ color: "#333" }}>Logout</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div style={{ position: "relative" }}>
        {search && <SearchBar value={search} setValue={setSearch}></SearchBar>}
      </div>

      <div style={{ position: "relative" }}>
        {noti && <Notification value={noti} setValue={setNoti}></Notification>}
      </div>
    </>
  );
}
