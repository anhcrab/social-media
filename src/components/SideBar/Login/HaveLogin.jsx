import { useState } from "react";

export default function HaveLogin() {

    
  const [showBox2, setShowBox2] = useState(false);
    
  const handleMouseEnter2 = () => {
    setShowBox2(true);
  };

  const handleMouseLeave2 = () => {
    setShowBox2(false);
  };

    return(
        <form
          action="/auth/login"
          style={{
            display: "flex",
            justifyContent: "center",
            position: "absolute",
            bottom: "1%",
            width: "100%",
          }}
        >
          <button style={{ background: "transparent", border: "none" }}>
            <div
              onMouseEnter={handleMouseEnter2}
              onMouseLeave={handleMouseLeave2}
              className="btn-logo"
              style={{ borderRadius: "7px" }}
            >
              <i
                className="bi bi-box-arrow-in-left"
                style={{ fontSize: "1.4rem", padding: "2px 7px" }}
              ></i>
            </div>
          </button>

          {showBox2 && (
            <div style={{ position: "relative" }}>
              <div className="sub-login">
                <span>Login</span>
              </div>
            </div>
          )}
        </form>
    )
}