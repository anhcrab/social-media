import "./NavCommunity.scss";
import NavCommunity1 from "./NavCommunity1.jsx";

const NavCommunity = (props) => {
  const { communities } = props;
  return (
    <>
      <div className="discoverybodyno2-wrap-items">
        <div className={`discoverybodyno2-wrap-items-community`} >
          <button className="discoverybodyno2-wrap-community" onClick={()=> {
            window.location.href='/app/onboarding'
          }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              aria-hidden="true"
              width="20"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              ></path>
            </svg>
            <span className="discoverybodyno2-wrap-add-community-text">
              Add your community
            </span>
          </button>

          {communities.map((community) => {
            return <NavCommunity1 community={community} />;
          })}
        </div>

        {/* <button
          onClick={() => {
            if (limit + 6 == 20) {
              document
                .querySelector(".discoverybodyno2-wrap-item-loadmore")
                .classList.add("hide");
            }
            setLimit(limit + 6);
          }}
          className="discoverybodyno2-wrap-item-loadmore"
        >
          Load more
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            aria-hidden="true"
            width="10"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            ></path>
          </svg>
        </button> */}
      </div>
    </>
  );
};

export default NavCommunity;
