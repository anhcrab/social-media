import React, { useContext } from "react";
import project from "../../assets//pic1/project1.png";
import bounty from "../../assets/pic1/bounty.png";
import course from "../../assets/pic1/course.png";
import config from "../../assets/pic1/configure.png";
import calendar from "../../assets/pic1/calendar_b.png";
import guild from "../../assets/pic1/guild.png";
import mac from "../../assets/pic1/mac.png";
import { Context } from "../L_body23/L_body23";
import "./L_body3.scss";
export default function L_body3() {
  const { select } = useContext(Context);
  console.log(select);
  function loadingPage() {
    if (select == 1) {
      return (
        <div className="row tn-part-1">
          <div className="col-4 tn-part-1-text">
            <p className="tn-text-title-1">
              Bird's eye view into everything that's cooking across your
              community
            </p>
            <p className="tn-text-body-1">
              Import products from Github as well and track completion, add
              sub-tasks and identify the projects slowing down.
            </p>
          </div>
          <div className="col-8">
            <img className="tn-mac" src={mac} alt="" />
            <img className="tn-img-1" src={project} alt="" />
          </div>
        </div>
      );
    }
    if (select == 2) {
      return (
        <div className="row tn-part-2">
          <div className="col-4 tn-part-2-text">
            <p className="tn-text-title-2">Auto-Verifiable Quests and tasks</p>
            <p className="tn-text-body-2">
              Help your contributors build their reputation and earn by
              completing bounties. Create one or a sequence of tasks and
              auto-verify submissions leading to payouts.
            </p>
          </div>
          <div className="col-8">
            <img className="tn-mac" src={mac} alt="" />
            <img className="tn-img-2" src={bounty} alt="" />
          </div>
        </div>
      );
    }
    if (select == 3) {
      return (
        <div className="row tn-part-3">
          <div className="col-4 tn-part-3-text">
            <p className="tn-text-title-3">
              Courses to Empower and Educate your members
            </p>
            <p className="tn-text-body-3">
              DAO Manager brings to you the ability to create courses. Courses
              follow evaluation which can result in awarding of NFTs or roles
              that unlock access.
            </p>
          </div>
          <div className="col-8">
            <img className="tn-mac" src={mac} alt="" />
            <img className="tn-img-3" src={course} alt="" />
          </div>
        </div>
      );
    }
    if (select == 4) {
      return (
        <div className="row tn-part-4">
          <div className="col-4 tn-part-4-text">
            <p className="tn-text-title-4">
              Customize Your Community Experience Using No-Code
            </p>
            <p className="tn-text-body-4">
              Communities should make you feel like you belong. You can always
              switch sections on and off to design the environment that your
              members spend time in.
            </p>
          </div>
          <div className="col-8">
            <img className="tn-mac" src={mac} alt="" />
            <img className="tn-img-4" src={config} alt="" />
          </div>
        </div>
      );
    }
    if (select == 5) {
      return (
        <div className="row tn-part-5">
          <div className="col-4 tn-part-5-text">
            <p className="tn-text-title-5">Centralized Community Calendar</p>
            <p className="tn-text-body-5">
              It can get tough keeping a tab on all that happens as your
              community grows. We bring all your events and meetings into one
              central view which your members can track without missing out on
              any of them.
            </p>
          </div>
          <div className="col-8">
            <img className="tn-mac" src={mac} alt="" />
            <img className="tn-img-5" src={calendar} alt="" />
          </div>
        </div>
      );
    }
    if (select == 6) {
      return (
        <div className="row tn-part-6">
          <div className="col-4 tn-part-6-text">
            <p className="tn-text-title-6">
              Make Communities Within Communities
            </p>
            <p className="tn-text-body-6">
              Teams are at the core of every organization; whether companies,
              communities-or DAOs. That’s why we’ve integrated Sub-Guilds, so
              you can have the efficiency of your own working groups within the
              context of a community.
            </p>
          </div>
          <div className="col-8">
            <img className="tn-mac" src={mac} alt="" />
            <img className="tn-img-6" src={guild} alt="" />
          </div>
        </div>
      );
    }
  }
  return (
    <div className="row">
      <div className="col-1"></div>
      <div className="col-10">{loadingPage()}</div>
      <div className="col-1"></div>
    </div>
  );
}
