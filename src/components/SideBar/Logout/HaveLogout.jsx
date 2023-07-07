import "./HaveLogout.scss";
import UserLogo from "../../../asset/img/UserLogo.png";
import { useEffect, useState } from "react";
export default function HaveLogout() {
  const [showBox, setShowBox] = useState(false);
  const [showBox2, setShowBox2] = useState(false);
  const [showBox3, setShowBox3] = useState(false);

  const [checkingAccount, setCheckingAccount] = useState(true)
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

  useEffect(() =>{

  },[checkingAccount])

  function logoutAccount() {
    window.sessionStorage.clear();
    setCheckingAccount(false);
    window.location.reload( )
  }
  return (
    <>
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
              <i className="bi bi-search logout-btn"></i>
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
            >
              <i className="bi bi-bell-fill logout-btn"></i>
            </button>
            {showBox2 && (
              <div style={{ position: "relative" }}>
                <div className="sub-noti">
                  <span>Notifications</span>
                </div>
              </div>
            )}
          </div>

          <div className="" style={{ margin: "10px 0", position: "relative" }}>
            <button
              style={{ border: "none", background: "none" }}
              onClick={handleMouseEnter3}
              onMouseOver={handleMouseLeave3}
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
                  <div className="logout-btns" onClick={() => {logoutAccount()}}>
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
    </>
  );
}
