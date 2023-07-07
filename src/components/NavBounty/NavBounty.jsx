import "./NavBounty.scss";

const NavBounty = (props) => {
  const { bounty, disable } = props;
  return (
    <>
      <div className="navbounty-wrap-items">
        <div className="navbounty-wrap-item">
          <div className="navbounty-wrap-item-card">
            <div className="navbounty-wrap-item-card-body">
              <div className="navbounty-wrap-item-card-body-heading">
                <div className="navbounty-wrap-item-card-body-heading-wrap">
                  <div className="navbounty-wrap-item-card-body-heading-wrap-info">
                    {bounty.bountyType}
                   
                  </div>
                  <div className="navbounty-wrap-item-card-body-heading-wrap-info-posted">
                    • Posted by
                    <div className="navbounty-wrap-item-card-body-heading-wrap-info-posted-by">
                        {bounty.postedBy}
                    </div>
                    •
                    <div className="navbounty-wrap-item-card-body-heading-wrap-info-datetime">
                        {bounty.datetime}
                    </div>
                  </div>
                </div>
              </div>

              <div className="navbounty-wrap-item-card-body-title">
                <div className="navbounty-wrap-item-card-body-title-text">
                  20 Matic tokens for community #10
                </div>
              </div>

              <div className="navbounty-wrap-item-card-body-bottom">
                <div className="navbounty-wrap-item-card-body-bottom-options">
                  <div className="navbounty-wrap-item-card-body-bottom-option">
                    <span className="navbounty-wrap-item-card-body-bottom-option-button">
                      ⭐️100XP
                    </span>
                  </div>
                  <div className="navbounty-wrap-item-card-body-bottom-option">
                    <span className="navbounty-wrap-item-card-body-bottom-option-button">
                    📜 19 Submissions
                    </span>
                  </div>
                  <div className="navbounty-wrap-item-card-body-bottom-option">
                    <span className="navbounty-wrap-item-card-body-bottom-option-button">
                      ⭐️ 20
                    </span>
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

export default NavBounty;
