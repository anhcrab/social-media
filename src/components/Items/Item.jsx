import NavCommunity from "../NavCommunity/NavCommunity";
import NavBounty from "../NavBounty/NavBounty";
import { useContext } from "react";
import { Context } from "../Discovery/Discovery";

const Item = (props) => {
  const { communities, disable } = props;
  const { show } = useContext(Context);

  const useSelect = () => {
    if (show === "body2btn1") {
      return communities.map((community) => {
        return <NavCommunity community={community} />;
      });
    }
    if (show === "body2btn2") {
      return communities.map((community) => {
        return (
          community.bounty.map((bounti)=>{
            <NavBounty bounty={bounti} />
          })
        )
      });
    }
    if (show === "body2btn3") {
      return communities.map((community) => {
        return <NavDiscussions community={community} />;
      });
    }
    if (show === "body2btn4") {
      return communities.map((community) => {
        return <NavCourse community={community} />;
      });
    }
    if (show === "body2btn5") {
      return communities.map((community) => {
        return <NavEvent community={community} />;
      });
    }
    if (show === "body2btn6") {
      return communities.map((community) => {
        return <NavProposal community={community} />;
      });
    }
  };

  return <>{useSelect()}</>;
};

export default Item;
