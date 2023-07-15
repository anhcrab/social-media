import Contrinew from "../../asset/img/Profile/Contri.svg";

export default function Contribute() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        borderRadius: "12px",
        padding: "2.5rem",
        flexDirection: "column",
      }}
    >
      <img
        src={Contrinew}
        alt=""
        style={{ width: "200px", objectFit: "cover" }}
      />
      <div style={{ margin: "6px 0", fontSize: "1.15rem" }}>
        No bounties available yet
      </div>
      <div style={{ color: "rgb(100, 116, 139)", fontSize: "0.8rem" }}>
        Be sure to check in a while
      </div>
    </div>
  );
}
