import React, { useContext } from "react";
import project from "../../assets//pic1/project1.png";
import bounty from "../../assets/pic1/bounty.png";
import course from "../../assets/pic1/course.png";
import config from "../../assets/pic1/configure.png";
import calendar from "../../assets/pic1/calendar_b.png";
import guild from "../../assets/pic1/guild.png";
import { Context } from "../L_body23/L_body23";
import "./L_body3.scss";
export default function L_body3() {
  const { select } = useContext(Context);
  console.log(select);
  function loadingPage() {

    if (select == 1) {
      return (
 
        <div className="row part-1">
          <div className="col-4 part-1-text">
            <p className="text-title-1">
              Bird's eye view into everything that's cooking across your
              community
            </p>
            <p className="text-body-1">
              Import products from Github as well and track completion, add
              sub-tasks and identify the projects slowing down.
            </p>
          </div>
          <div className="col-8">
            <img className="img-1" src={project} alt="" />
          </div>
        </div>
      );
    }
    if (select == 2) {
      return (
        <div className="row part-2">
          <div className="col-4 part-2-text">
            <p className="text-title-2">
              Bird's eye view into everything that's cooking across your
              community
            </p>
            <p className="text-body-2">
              Import products from Github as well and track completion, add
              sub-tasks and identify the projects slowing down.
            </p>
          </div>
          <div className="col-8">
            <img className="img-2" src={bounty} alt="" />
          </div>
        </div>
      );
    }
    if (select == 3) {
      return (
        <div className="row part-3">
          <div className="col-4 part-3-text">
            <p className="text-title-3">
              Bird's eye view into everything that's cooking across your
              community
            </p>
            <p className="text-body-3">
              Import products from Github as well and track completion, add
              sub-tasks and identify the projects slowing down.
            </p>
          </div>
          <div className="col-8">
            <img className="img-3" src={course} alt="" />
          </div>
        </div>
      );
    }
    if (select == 4) {
      return (
        <div className="row part-4">
          <div className="col-4 part-4-text">
            <p className="text-title-4">
              Bird's eye view into everything that's cooking across your
              community
            </p>
            <p className="text-body-4">
              Import products from Github as well and track completion, add
              sub-tasks and identify the projects slowing down.
            </p>
          </div>
          <div className="col-8">
            <img className="img-4" src={config} alt="" />
          </div>
        </div>
      );
    }
    if (select == 5) {
      return (
        <div className="row part-5">
          <div className="col-4 part-5-text">
            <p className="text-title-5">
              Bird's eye view into everything that's cooking across your
              community
            </p>
            <p className="text-body-5">
              Import products from Github as well and track completion, add
              sub-tasks and identify the projects slowing down.
            </p>
          </div>
          <div className="col-8">
            <img className="img-5" src={calendar} alt="" />
          </div>
        </div>
      );
    }
    if (select == 6) {
      return (
        <div className="row part-6">
          <div className="col-4 part-6-text">
            <p className="text-title-6">
              Bird's eye view into everything that's cooking across your
              community
            </p>
            <p className="text-body-6">
              Import products from Github as well and track completion, add
              sub-tasks and identify the projects slowing down.
            </p>
          </div>
          <div className="col-8">
            <img className="img-6" src={guild} alt="" />
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
