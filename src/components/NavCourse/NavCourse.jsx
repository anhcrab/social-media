import "./NavCourse.scss";
import img1 from "../../assets/Communities/course1.jpg";
import img2 from "../../assets/Communities/course2.jpg";
import img3 from "../../assets/Communities/course3.jpg";
import img4 from "../../assets/Communities/course4.jpg";
import img5 from "../../assets/Communities/course5.jpg";
import img6 from "../../assets/Communities/course6.jpg";

const NavCourse = () => {
  return (
    <>
      <div className="navbounty-wrap-items">
        <div className="navbounty-wrap-item">
          <div className="navcourse-wrap-item-card">
            <div className="navcourse-wrap-item-card-body">
              <div className="navcourse-wrap-item-card-bodys">
                <div
                  className="navcourse-wrap-item-card-bodys-img"
                  style={{ width: "100px" }}
                >
                  <img src={img1} alt="navcourse-img" />
                </div>
                <div className="navcourse-wrap-item-card-bodys-info">
                  <div className="navcourse-wrap-item-card-bodys-info-heading">
                    Finematics
                  </div>
                  <div className="navcourse-wrap-item-card-bodys-info-text">
                    The Finematics channel covers cryptocurrency and blockchain
                    technology. They have a seri...
                  </div>
                  <div className="navcourse-wrap-item-card-bodys-info-books">
                    <div className="navcourse-wrap-item-card-bodys-info-books-icon">
                      📕
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="navcourse-wrap-item-card">
            <div className="navcourse-wrap-item-card-body">
              <div className="navcourse-wrap-item-card-bodys">
                <div
                  className="navcourse-wrap-item-card-bodys-img"
                  style={{ width: "100px" }}
                >
                  <img src={img2} alt="navcourse-img" />
                </div>
                <div className="navcourse-wrap-item-card-bodys-info">
                  <div className="navcourse-wrap-item-card-bodys-info-heading">
                    Web3 30 Day Challenge
                  </div>
                  <div className="navcourse-wrap-item-card-bodys-info-text">
                    Ed3 DAO 30 Day to Web3 Challenge
                  </div>
                  <div className="navcourse-wrap-item-card-bodys-info-books">
                    <div className="navcourse-wrap-item-card-bodys-info-books-icon">
                      📕
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="navcourse-wrap-item-card">
            <div className="navcourse-wrap-item-card-body">
              <div className="navcourse-wrap-item-card-bodys">
                <div
                  className="navcourse-wrap-item-card-bodys-img"
                  style={{ width: "100px" }}
                >
                  <img src={img3} alt="navcourse-img" />
                </div>
                <div className="navcourse-wrap-item-card-bodys-info">
                  <div className="navcourse-wrap-item-card-bodys-info-heading">
                    Profile Development
                  </div>
                  <div className="navcourse-wrap-item-card-bodys-info-text">
                    Tell us more about yourself. This profile will help us
                    develop a robust community network
                  </div>
                  <div className="navcourse-wrap-item-card-bodys-info-books">
                    <div className="navcourse-wrap-item-card-bodys-info-books-icon">
                      📕
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="navcourse-wrap-item-card">
            <div className="navcourse-wrap-item-card-body">
              <div className="navcourse-wrap-item-card-bodys">
                <div
                  className="navcourse-wrap-item-card-bodys-img"
                  style={{ width: "100px" }}
                >
                  <img src={img4} alt="navcourse-img" />
                </div>
                <div className="navcourse-wrap-item-card-bodys-info">
                  <div className="navcourse-wrap-item-card-bodys-info-heading">
                    Killing mouses
                  </div>
                  <div className="navcourse-wrap-item-card-bodys-info-text">
                    How to Kill mouse
                  </div>
                  <div className="navcourse-wrap-item-card-bodys-info-books">
                    <div className="navcourse-wrap-item-card-bodys-info-books-icon">
                      📕
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="navcourse-wrap-item-card">
            <div className="navcourse-wrap-item-card-body">
              <div className="navcourse-wrap-item-card-bodys">
                <div
                  className="navcourse-wrap-item-card-bodys-img"
                  style={{ width: "100px" }}
                >
                  <img src={img5} alt="navcourse-img" />
                </div>
                <div className="navcourse-wrap-item-card-bodys-info">
                  <div className="navcourse-wrap-item-card-bodys-info-heading">
                    DAO notifications
                  </div>
                  <div className="navcourse-wrap-item-card-bodys-info-text">
                    How to receive notifications about new proposals, voters and
                    followers immediatly on smartphone.
                  </div>
                  <div className="navcourse-wrap-item-card-bodys-info-books">
                    <div className="navcourse-wrap-item-card-bodys-info-books-icon">
                      📕
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="navcourse-wrap-item-card">
            <div className="navcourse-wrap-item-card-body">
              <div className="navcourse-wrap-item-card-bodys">
                <div
                  className="navcourse-wrap-item-card-bodys-img"
                  style={{ width: "100px" }}
                >
                  <img src={img6} alt="navcourse-img" />
                </div>
                <div className="navcourse-wrap-item-card-bodys-info">
                  <div className="navcourse-wrap-item-card-bodys-info-heading">
                    The Great Houses
                  </div>
                  <div className="navcourse-wrap-item-card-bodys-info-text">
                    The Great Houses are curated learning resources here to give
                    you a meta overview of different fields of interest..
                  </div>
                  <div className="navcourse-wrap-item-card-bodys-info-books">
                    <div className="navcourse-wrap-item-card-bodys-info-books-icon">
                      📕
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavCourse;
