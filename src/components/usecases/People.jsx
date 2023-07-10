import "./People.scss";
import Man from "../../assets/img/usecase/Man Chating Icon.svg";
import man1 from "../../assets/img/usecase/1MAN.png";
import footer from "../../assets/img/usecase/footerpeople.svg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import man2 from "../../assets/img/usecase/2MAN.png";
import man3 from "../../assets/img/usecase/3MAN.png";

const People = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className="section">
        <div className="container">
          <div style={{paddingTop:"400px"}}className="title-container">
            <div className="center-text">
              <div className="half-title-container-m">
                <div className="title-with-emoji">
                  <div className="fade-in-move-on-scroll-m">
                    <h1 className="title-2" style={{ width: "900px" }}>
                      What people are
                      <span> saying</span>
                    </h1>
                  </div>
                  <div className="emoji-holder people">
                    <img src={Man} alt="" className="man-chating-icon" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="slider-holder">
            <Slider {...settings}>
              <div>
                <div className="slider-holder1">
                  <div
                    style={{ display: "flex" }}
                    className="slider-holder-main"
                  >
                    <img src={man1} alt="" />
                    <div className="slider-holder-description">
                      <span>
                        I love the product. It's detailed, customisable and
                        super efficient for practically any discord community. I
                        particularly like the feature where communities can
                        directly create tasks from discussion threads and get
                        working on them.
                      </span>
                    </div>
                  </div>
                  <div className="slider-holder-footer">
                    <div className="slider-holder-footer-description">
                      <div className="slider-holder-footer-name">
                        <p>Tanisha Katara</p>
                      </div>
                      <div className="slider-holder-footer-country">
                        <span>Governance, Polygon</span>
                      </div>
                    </div>
                    <div className="slider-holder-footer-comma">
                      <img src={footer} alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="slider-holder2">
                  <div
                    style={{ display: "flex" }}
                    className="slider-holder-main"
                  >
                    <img src={man2} alt="" />
                    <div className="slider-holder-description">
                      <span>
                        First, worth mentioning how the discussion was narrowed
                        down in a live poll conducted via the #DAOmanager tool.
                      </span>
                    </div>
                  </div>
                  <div className="slider-holder-footer">
                    <div className="slider-holder-footer-description">
                      <div className="slider-holder-footer-name">
                        <p>gaoa.eth</p>
                      </div>
                      <div className="slider-holder-footer-country">
                        <span>GAOA Network</span>
                      </div>
                    </div>
                    <div className="slider-holder-footer-comma">
                      <img src={footer} alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="slider-holder1">
                  <div
                    style={{ display: "flex" }}
                    className="slider-holder-main"
                  >
                    <img src={man3} alt="" />
                    <div className="slider-holder-description">
                      <span>
                        You have managed to address all the key pain points
                        faced by communities and we can't wait to see the impact
                        it will have. 🔥
                      </span>
                    </div>
                  </div>
                  <div className="slider-holder-footer">
                    <div className="slider-holder-footer-description">
                      <div className="slider-holder-footer-name">
                        <p>Paolo Di Gigilo</p>
                      </div>
                      <div className="slider-holder-footer-country">
                        <span>Founder, Colibry</span>
                      </div>
                    </div>
                    <div className="slider-holder-footer-comma">
                      <img src={footer} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};
export default People;
