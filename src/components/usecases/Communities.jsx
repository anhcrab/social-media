import "./Communities.scss";
import textRed from "../../assets/img/usecase/text_Red.svg";
import dao from "../../assets/img/usecase/dao.svg";
import protocol from "../../assets/img/usecase/protocol.svg";
import creators from "../../assets/img/usecase/creators.svg";
import educator from "../../assets/img/usecase/educator.svg";
import game from "../../assets/img/usecase/game.svg";
import community from "../../assets/img/usecase/community.svg";

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
                <div className="small-circle orange"></div>
                <div className="main-circle black"></div>
              </div>
              <div className="card-border"></div>
            </a>
            <a href="#" className="white-card w-inline-block">
              <div className="tab-icon-holder">
                <img src={protocol} alt="" className="tab-icon" />
              </div>
              <div className="card-title-holder">
                <div className="card-title">Protocols</div>
              </div>
              <div className="card-description-holder">
                <p className="card-description">
                  Want to track all the smaller communities working under your
                  umbrella? Got that partner you need to promote? Need
                  personalized bounty boards or leader boards? DAO Manager has
                  it all.
                </p>
              </div>
              <div className="orange-circle-holder">
                <div className="small-circle green"></div>
                <div className="main-circle black"></div>
              </div>
              <div className="card-border"></div>
            </a>
            <a href="#" className="white-card w-inline-block">
              <div className="tab-icon-holder">
                <img src={creators} alt="" className="tab-icon" />
              </div>
              <div className="card-title-holder">
                <div className="card-title">Creators</div>
              </div>
              <div className="card-description-holder">
                <p className="card-description">
                  Want to create space for your fans to hang out? Got a course
                  to promote or want to make certain merchandise available only
                  for certain specific super fans? Want to reward
                  members?&nbsp;We got you!
                </p>
              </div>
              <div className="orange-circle-holder">
                <div className="small-circle blue"></div>
                <div className="main-circle black"></div>
              </div>
              <div className="card-border"></div>
            </a>
            <a href="#" className="white-card w-inline-block">
              <div className="tab-icon-holder">
                <img src={game} alt="" className="tab-icon" />
              </div>
              <div className="card-title-holder">
                <div className="card-title">Gaming Guilds</div>
              </div>
              <div className="card-description-holder">
                <p className="card-description">
                Support inter-guild competitions, reward top gamers with exclusive access to rewards, unify all guild leads under one umbrella and much more. Take it one notch above by allowing cross game reputation. 
                </p>
              </div>
              <div className="orange-circle-holder">
                <div className="small-circle blue"></div>
                <div className="main-circle black"></div>
              </div>
              <div className="card-border"></div>
            </a>
            <a href="#" className="white-card w-inline-block">
              <div className="tab-icon-holder">
                <img src={educator} alt="" className="tab-icon" />
              </div>
              <div className="card-title-holder">
                <div className="card-title">Educators</div>
              </div>
              <div className="card-description-holder">
                <p className="card-description">
                  Be it a student group or educators DAO Manager helps you
                  curate content for beginners, evaluate performance with
                  quizzes, involve auto-disbursement of rewards and NFTs for
                  reputation.
                </p>
              </div>
              <div className="orange-circle-holder">
                <div className="small-circle violet"></div>
                <div className="main-circle black"></div>
              </div>
              <div className="card-border"></div>
            </a>
            <a href="#" className="white-card w-inline-block">
              <div className="tab-icon-holder">
                <img src={community} alt="" className="tab-icon" />
              </div>
              <div className="card-title-holder">
                <div className="card-title">Communities</div>
              </div>
              <div className="card-description-holder">
                <p className="card-description">
                  DAO Manager is built to help you convert your members into
                  superfans. Be it closed group discussions, gamification,
                  rewards, referrals or possibility to tracking contributions,
                  we've got it all.
                </p>
              </div>
              <div className="orange-circle-holder">
                <div className="small-circle red"></div>
                <div className="main-circle black"></div>
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
