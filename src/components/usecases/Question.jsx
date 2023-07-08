import "./Question.scss";
import { useState } from "react";

const Question = () => {
  const option1 = document.querySelector(".expand1");
  const optiont1 = document.querySelector(".answer-holder1");
  const [show1, setShow1] = useState("false");
  function inputShow1() {
    setShow1(!show1);
    if (show1) {
      option1.classList.add("expanded");
      optiont1.classList.add("answerq");
    } else {
      option1.classList.remove("expanded");
      optiont1.classList.remove("answerq");
    }
  }
  const option2 = document.querySelector(".expand2");
  const optiont2 = document.querySelector(".answer-holder2");
  const [show2, setShow2] = useState("false");
  function inputShow2() {
    setShow2(!show2);
    if (show2) {
      option2.classList.add("expanded");
      optiont2.classList.add("answerq");
    } else {
      option2.classList.remove("expanded");
      optiont2.classList.remove("answerq");
    }
  }
  const option3 = document.querySelector(".expand3");
  const optiont3 = document.querySelector(".answer-holder3");
  const [show3, setShow3] = useState("false");
  function inputShow3() {
    setShow3(!show3);
    if (show3) {
      option3.classList.add("expanded");
      optiont3.classList.add("answerq");
    } else {
      option3.classList.remove("expanded");
      optiont3.classList.remove("answerq");
    }
  }
  const option4 = document.querySelector(".expand4");
  const optiont4 = document.querySelector(".answer-holder4");
  const [show4, setShow4] = useState("false");
  function inputShow4() {
    setShow4(!show4);
    if (show4) {
      option4.classList.add("expanded");
      optiont4.classList.add("answerq");
    } else {
      option4.classList.remove("expanded");
      optiont4.classList.remove("answerq");
    }
  }
  const option5 = document.querySelector(".expand5");
  const optiont5 = document.querySelector(".answer-holder5");
  const [show5, setShow5] = useState("false");
  function inputShow5() {
    setShow5(!show5);
    if (show5) {
      option5.classList.add("expanded");
      optiont5.classList.add("answerq");
    } else {
      option5.classList.remove("expanded");
      optiont5.classList.remove("answerq");
    }
  }
  const option6 = document.querySelector(".expand6");
  const optiont6 = document.querySelector(".answer-holder6");
  const [show6, setShow6] = useState("false");
  function inputShow6() {
    setShow6(!show6);
    if (show6) {
      option6.classList.add("expanded");
      optiont6.classList.add("answerq");
    } else {
      option6.classList.remove("expanded");
      optiont6.classList.remove("answerq");
    }
  }
  const option7 = document.querySelector(".expand7");
  const optiont7 = document.querySelector(".answer-holder7");
  const [show7, setShow7] = useState("false");
  function inputShow7() {
    setShow7(!show7);
    if (show7) {
      option7.classList.add("expanded");
      optiont7.classList.add("answerq");
    } else {
      option7.classList.remove("expanded");
      optiont7.classList.remove("answerq");
    }
  }
  const option8 = document.querySelector(".expand8");
  const optiont8 = document.querySelector(".answer-holder8");
  const [show8, setShow8] = useState("false");
  function inputShow8() {
    setShow8(!show8);
    if (show8) {
      option8.classList.add("expanded");
      optiont8.classList.add("answerq");
    } else {
      option8.classList.remove("expanded");
      optiont8.classList.remove("answerq");
    }
  }
  return (
    <>
      <div className="section-organe">
        <div className="container-organe">
          <div className="title-container">
            <div className="center-text-organe">
              <div className="w-layout-grid">
                <h1 className="title">Frequently Asked Questions</h1>
              </div>
            </div>
            <div className="questions-holder">
              <div className="questions-container">
                <div className="card-title">Basic Users Questions</div>
                <div className="questions-wrapper">
                  <div className="question-half">
                    <div className="question">
                      <div className="question-header">
                        <div
                          onClick={() => {
                            inputShow1();
                          }}
                          className="question-text"
                        >
                          How to migrate your data from our existing forums?
                        </div>
                        <div className="expand1"></div>
                      </div>
                      <div className="answer-holder1">
                        <div className="answer">
                          It takes us less than 2 minutes to migrate everything
                          for you. The functionality is available directly in
                          the UI. Simply connect your Discourse and you're set.
                          If you need to migrate some other forum, manual help
                          is also available.
                        </div>
                      </div>
                    </div>

                    <div className="question">
                      <div className="question-header">
                        <div
                          onClick={() => {
                            inputShow2();
                          }}
                          className="question-text"
                        >
                          My Community is small. Do I really need the platform?
                        </div>
                        <div className="expand2"></div>
                      </div>
                      <div className="answer-holder2">
                        <div className="answer">
                          Switching from an inefficient workflow to an efficient
                          one is best done sooner or else the cost becomes very
                          high. You're the best judge but If you're concerned,
                          talk to us :)
                        </div>
                      </div>
                    </div>
                    <div className="question">
                      <div
                        onClick={() => {
                          inputShow3();
                        }}
                        className="question-header"
                      >
                        <div className="question-text">
                          How do we take care of custom requirements?
                        </div>
                        <div className="expand3"></div>
                      </div>
                      <div className="answer-holder3">
                        <div className="answer">
                          If you're an a community manager, we understand that
                          you want to extend a red carpet in term of user
                          experience. We want the same. So if you need help in
                          making custom changes to your UI, then reach out to
                          us. We will do it in a jiffy!
                        </div>
                      </div>
                    </div>
                    <div className="question">
                      <div
                        onClick={() => {
                          inputShow4();
                        }}
                        className="question-header"
                      >
                        <div className="question-text">
                          DaoLens helps with minting of NFTs. Are there hidden
                          charges?
                        </div>
                        <div className="expand4"></div>
                      </div>
                      <div className="answer-holder4">
                        <div className="answer">
                          Our NFTs for now come with no cost for the first 2000
                          issues. thereafter a very small processing fee is
                          used. If the platform on which the NFT is being minted
                          has no fee, you'll never have to worry about paying us
                          a dime extra.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="question-half">
                    <div className="question">
                      <div className="question-header">
                        <div
                          onClick={() => {
                            inputShow5();
                          }}
                          className="question-text"
                        >
                          Need help in setting up the community?
                        </div>
                        <div className="expand5"></div>
                      </div>
                      <div className="answer-holder5">
                        <div className="answer">
                          Asking questions is never a bad idea. We understand
                          that sometimes setting up can be taxing. Reach out to
                          us through the chatbot on the bottom right of the
                          screen and we will make sure we jump on a call and be
                          with you wherever you need.
                        </div>
                      </div>
                    </div>

                    <div className="question">
                      <div className="question-header">
                        <div
                          onClick={() => {
                            inputShow6();
                          }}
                          className="question-text"
                        >
                          How much do I have to pay?
                        </div>
                        <div className="expand6"></div>
                      </div>
                      <div className="answer-holder6">
                        <div className="answer">
                          It feels unreal but the DAO Manager is available free
                          of cost until March 2023 and those who deploy the tool
                          will get free access for the next 6 months at the very
                          least and likely will be so for more duration.
                        </div>
                      </div>
                    </div>
                    <div className="question">
                      <div
                        onClick={() => {
                          inputShow7();
                        }}
                        className="question-header"
                      >
                        <div className="question-text">
                          Will there be handholding and support?
                        </div>
                        <div className="expand7"></div>
                      </div>
                      <div className="answer-holder7">
                        <div className="answer">
                          Asking questions is never a bad idea. We understand
                          that sometimes setting up can be taxing. Reach out to
                          us through the chatbot on the bottom right of the
                          screen and we will make sure we jump on a call and be
                          with you wherever you need.
                        </div>
                      </div>
                    </div>
                    <div className="question">
                      <div
                        onClick={() => {
                          inputShow8();
                        }}
                        className="question-header"
                      >
                        <div className="question-text">
                          How do we send feature requests?
                        </div>
                        <div className="expand8"></div>
                      </div>
                      <div className="answer-holder8">
                        <div className="answer">
                          You can submit any feature through our support chat
                          box or simply drop an email to vikram@daolens.com.
                          We're very pro-active in taking these suggestions up
                          into our pipeline. In-fact, we recognize folks who
                          help us shape our roadmap and we rewards them with
                          perks. Shoot your shot.
                        </div>
                      </div>
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
export default Question;
