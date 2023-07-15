import LoginPic from "../../asset/img/LoginPic.png";
import "./login.scss";
import GoogleForm from "./GoogleForm/GoogleForm";

export default function Login() {


  return (
    <>
      <div className="blur-background"></div>
      <div
        className="row"
        style={{
          height: "610px",
          width: "900px",
          marginLeft: "20%",
          marginTop: "4%",
        }}
      >
        <div
          className="col-lg-6"
          style={{
            backgroundColor: "#FEF2F2",
            position: "relative",
            borderTopLeftRadius: "20px",
            borderBottomLeftRadius: "20px",
          }}
        >
          <div className="row" style={{ padding: "24px 34px" }}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <div
                style={{
                  height: "10px",
                  width: "10px",
                  borderRadius: "50%",
                  backgroundColor: "rgb(251, 113, 133)",
                  marginRight: "8px",
                }}
              ></div>
              <h4
                style={{
                  color: "rgb(251, 113, 133)",
                  marginBottom: "0px",
                  fontSize: "1rem",
                }}
              >
                We are live on mobile
              </h4>
            </div>

            <div className="row" style={{ display: "flex", alignItems: "end" }}>
              <div className="col-lg-11">
                <h2
                  style={{
                    color: "#9A4164",
                    fontWeight: "700",
                    fontSize: "2.3rem",
                  }}
                >
                  Now use DAO Manager on the go
                </h2>
              </div>
              <div className="col-lg-1">
                <span style={{ fontSize: "2rem" }}>🚀</span>
              </div>
            </div>
          </div>

          <div
            className="row"
            style={{
              objectFit: "contain",
              width: "450px",
              position: "absolute",
              bottom: "0",
            }}
          >
            <img src={LoginPic} alt="" />
          </div>
        </div>

        <div
          className="col-lg-6"
          style={{
            padding: "24px 44px",
            position: "relative",
            backgroundColor: "#FFFFFF",
            borderTopRightRadius: "20px",
            borderBottomRightRadius: "20px",
          }}
        >
          <form
            action="/app/"
            style={{ position: "absolute", top: "0", right: "0" }}
          >
            <button
              style={{
                border: "none",
                backgroundColor: "rgba(0,0,0,0)",
                fontSize: "2rem",
              }}
            >
              <i className="bi bi-x"></i>
            </button>
          </form>

          <div className="row">
            <h4 style={{ fontWeight: "700" }}>
              Login to unleash your superpowers
            </h4>
          </div>

          <div
            className="row"
            style={{ display: "flex", justifyContent: "center", width: "100%" }}
          >
            <GoogleForm></GoogleForm>
          </div>

          <div className="row">
            <div
              style={{
                width: "100%",
                borderTop: "1px solid rgb(229, 231, 235)",
                position: "relative",
                margin: "24px 0px",
                borderRadius: "12px",
              }}
            >
              <h5
                style={{
                  position: "absolute",
                  left: "50%",
                  top: "0rem",
                  color: "rgb(100, 116, 139)",
                  zIndex: "120",
                  fontWeight: "400",
                  background: "white",
                  fontSize: "14px",
                  transform: "translate(-50%, -50%)",
                }}
              >
                Or
              </h5>
            </div>
          </div>
        </div>
      </div>


    </>
  );
}
