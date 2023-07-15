import logo from "../../assets/img/logo.svg";
import Plus from "../../assets/img/add.png";
import "./SideBar.scss";
import { useState } from "react";
import { useEffect } from "react";
import HaveLogin from "./Login/HaveLogin";
import HaveLogout from "./Logout/HaveLogout";

export default function SideBar() {
  const [showBox, setShowBox] = useState(false);
  const [showBox1, setShowBox1] = useState(false);

  const [checkAccount, setCheckAccount] = useState("");

  const handleMouseEnter = () => {
    setShowBox(true);
  };

  const handleMouseLeave = () => {
    setShowBox(false);
  };

  const handleMouseEnter1 = () => {
    setShowBox1(true);
  };

  const handleMouseLeave1 = () => {
    setShowBox1(false);
  };

  useEffect(() => {
    const data = window.sessionStorage.getItem("username");
    setCheckAccount(data);
    //window.localStorage.clear();
  }, []);

  function abs() {
    if (checkAccount != null) {
      console.log(checkAccount);
      return (
        <>
          <div style={{ position: "absolute", bottom: "5%" }}>
            <HaveLogout></HaveLogout>
          </div>
        </>
      );
    } else {
      return <HaveLogin></HaveLogin>;
    }
  }

  return (
    <>
      <div className="not-for-phone not-for-Ipad">
        <div className="cover-navbar">
          <div
            style={{
              display: "flex",
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
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={() => {
                  window.location.href = "/app/";
                }}
              ></img>
            </button>
            {showBox && (
              <div style={{ position: "relative" }}>
                <div className="sub-logo">
                  <span>Discover</span>
                </div>
              </div>
            )}
          </div>

          <div style={{ display: "flex", justifyContent: "center" }}>
            <button
              style={{ background: "transparent", border: "none" }}
              className="btn-add"
              onClick={() => {
                window.location.href = "/app/onboarding";
              }}
            >
              <img
                src={Plus}
                style={{ width: "3rem" }}
                onMouseEnter={handleMouseEnter1}
                onMouseLeave={handleMouseLeave1}
              />
            </button>

            {showBox1 && (
              <div style={{ position: "relative" }}>
                <div className="sub-add">
                  <span>Add Community</span>
                </div>
              </div>
            )}
          </div>

          {abs()}
        </div>
      </div>

      <div className="for-small">
        <div className="cover-navbar">
          {/* 1 */}

          {abs()}
        </div>
      </div>
    </>
  );
}
