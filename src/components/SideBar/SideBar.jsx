import logo from "../../asset/img/logo.svg";
import Plus from "../../asset/img/add.png";
import "./SideBar.scss";
import { useState } from "react";

export default function SideBar() {
  const [showBox, setShowBox] = useState(false);
  const [showBox1, setShowBox1] = useState(false);

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
  return (
    <>
      <div
        style={{
          height: "100vh",
          backgroundColor: "#FFFFFF",
          position: "fixed",
          boxShadow: "rgba(180, 195, 205, 0.1) 0px 4px 24px",
          zIndex: "300",
        }}
      >
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
      </div>
    </>
  );
}
