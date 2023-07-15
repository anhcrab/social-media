import NavCommunity from "../NavCommunity/NavCommunity";
import NavBounty from "../NavBounty/NavBounty";
import NavDiscussions from "../NavDiscussions/NavDiscussions";
import NavCourse from "../NavCourse/NavCourse";
import NavEvent from "../NavEvent/NavEvent";
import NavProposal from "../NavProposal/NavProposal";
import { useContext } from "react";
import { Context } from "../Discovery/Discovery";

const Item = (props) => {
  const { communities, disable } = props;
  const { show } = useContext(Context);

  const useSelect = () => {
    if (show === "body2btn1") {
      return <NavCommunity communities={communities} />;
    }
    if (show === "body2btn2") {
      return <NavBounty/>;
    }
    if (show === "body2btn3") {
      return <NavDiscussions/>;
    }
    if (show === "body2btn4") {
      return <NavCourse/>;
    }
    if (show === "body2btn5") {
      return <NavEvent/>;
    }
    if (show === "body2btn6") {
      return <NavProposal/>;
    }
  };

  return <>{useSelect()}</>;
};

export default Item;
