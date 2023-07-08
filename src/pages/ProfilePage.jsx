import SideBar from "../components/SideBar/SideBar";
import backgroundCover from "../asset/img/background-User.png";
import { useState } from "react";

export default function ProfilePage() {
  // eslint-disable-next-line no-unused-vars
  const [userName, setUserName] = useState(
    window.sessionStorage.getItem("username")
  );

  return (
    <>
      <SideBar></SideBar>
      <div className="row">
        <div className="col-lg-2"></div>
        <div className="col-lg-8">
          <div className="row">
            <img
              src={backgroundCover}
              alt="cover"
              style={{ height: "180px", width: "100%", objectFit: "cover" }}
            />
            <div className="row">
              <div
                className="col-lg-4"
                onClick={e => {
                  e.clipboardData.setData("text/plain", "123");
                }}
              >
                {userName}
              </div>
              <div className="col-lg-4"></div>
              <div className="col-lg-4">456</div>
            </div>
          </div>
        </div>
        <div className="col-lg-2"></div>
      </div>
    </>
  );
}
