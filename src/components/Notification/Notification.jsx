import "./Notification.scss";
// eslint-disable-next-line no-unused-vars
import logoNoti from "../../asset/img/logoNoti.svg";

// eslint-disable-next-line no-unused-vars
export default function Notification(props) {
  return (
    <>
      <div
        style={{
          height: "100vh",
          width: "99vw",
          position: "absolute",
          top: "-95vh",
          right: "-1500px",
          zIndex: "-1",
        }}
      >
        <div className="row" style={{ height: "100%", width: "100%" }}>
          <div
            className="col-lg-4"
            style={{ backgroundColor: "#F4F2F2", padding: "0" }}
          >
            <div className="Header-Noti">
              <span style={{ fontWeight: "600" }}>Notifications</span>
              <span style={{ cursor: "pointer" }}>Mark all as read</span>
            </div>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              <img
                src={logoNoti}
                alt=""
                style={{ width: "300px", marginTop: "100px" }}
              />
              <span
                style={{
                  marginTop: "20px",
                  fontSize: "20px",
                  fontWeight: "500",
                  textAlign: "center",
                }}
              >
                You are all set! No new notification 🥳
              </span>
            </div>
          </div>
          <div className="col-lg-8" style={{ padding: "0", display:"flex", alignItems:"center" }}>
            <div
              className="blur-backgrounds"
              onClick={() => {
                // eslint-disable-next-line react/prop-types
                props.setValue(!props.value);
              }}
            >
                
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
