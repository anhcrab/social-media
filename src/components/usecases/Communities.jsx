import "./Communities.scss";
import textRed from "../../assets/img/usecase/text_Red.svg";
import dao from "../../assets/img/usecase/dao.svg";

const Communities = () => {
  return (
    <>
      <div className="container">
        <div className="tittle-container">
          <div className="center-text">
            <div className="half-title-container">
              <div className="title-with-emoji">
                <div className="fade-in-move-on-scroll">
                  <h1 className="title">
                    Communities that
                    <span
                      style={{
                        backgroundImage: `url(${textRed})`,
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "50% 100%",
                      }}
                      className="text-with-underline red"
                    >
                      love us
                    </span>
                  </h1>
                </div>
                <div className="emoji-holder _03">
                  <div>🖤</div>
                </div>
              </div>
            </div>
          </div>
          <div className="grey-cards-holder">
            <a href="#" className="white-card w-inline-block">
              <div className="tab-icon-holder">
                <img src={dao} alt="" className="tab-icon" />
              </div>
              <div className="card-title-holder">
                <div className="card-title">DAOs</div>
              </div>
              <div className="card-description-holder">
                <p className="card-description">
                  DAO Manager helps you manage the typical flow in a DAO with
                  deep integration with all leading tools across different
                  chains. Further, DAO Manager is optimized to support
                  contributors working across DAOs.
                </p>
              </div>
              <div className="orange-circle-holder">
                <div className="main-circle"></div>
                <div className="small-circle"></div>
              </div>
              <div className="card-border"></div>
            </a>
          </div>
          <div className="div-block"></div>
        </div>
      </div>
    </>
  );
};
export default Communities;
