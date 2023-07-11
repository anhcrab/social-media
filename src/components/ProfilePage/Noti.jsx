import Notiimg from "../../asset/img/Profile/Notisvg.svg"

export default function Noti() {
  return (
    <>
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
          src={Notiimg}
          alt=""
          style={{ width: "200px", objectFit: "cover" }}
        />
        <div style={{ margin: "6px 0", fontSize: "1.15rem" }}>
            No posts available yet
        </div>
        <div style={{ color: "rgb(100, 116, 139)", fontSize: "0.8rem" }}>
          Be sure to check in a while
        </div>
      </div>
    </>
  );
}
