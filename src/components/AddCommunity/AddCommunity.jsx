import "./AddCommunity.scss";
import addimg from "../../assets/Communities/addcommunity.svg";
import samavt from "../../assets/Communities/sam_holding.jpg";
import addCommunityImg from "../../assets/Communities/addcommunity-create1-2.jpg";
import overviewIcon from "../../assets/Communities/overview-icon.svg";
import { useState } from "react";

const AddCommunity = () => {
    const [name,setName] = useState('')
    console.log(name);

    const saveName = () => {
        const savedName = document.querySelector('.text-area').value
    }
  return (
    <>
      <div className="addcommunity-first backgroundfilter">
        <div className="addcommunity-first-wrap">
          <div className="addcommunity-first-wrap-body">
            <button
              className="addcommunity-first-wrap-body-btn close"
              onClick={() => {
                window.location.href = "/app/discovery";
              }}
            >
              <span className="addcommunity-first-wrap-body-btn-close">
                <svg
                  viewBox="64 64 896 896"
                  focusable="false"
                  data-icon="close"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 00203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"></path>
                </svg>
              </span>
            </button>
            <div className="addcommunity-first-wrap-body-1">
              <div className="addcommunity-first-wrap-body-1-heading">
                Add Community
              </div>
              <img src={addimg} alt="" />
              <button className="addcommunity-first-wrap-body-1-btn discord">
                <svg
                  className="addcommunity-first-wrap-body-1-btn-discord"
                  viewBox="0 0 21 21"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.0917 4.67141C15.797 4.08454 14.4128 3.65802 12.9655 3.41516C12.7878 3.7265 12.5801 4.14526 12.437 4.47838C10.8985 4.25422 9.37423 4.25422 7.86408 4.47838C7.72094 4.14526 7.50858 3.7265 7.32925 3.41516C5.88045 3.65802 4.49458 4.0861 3.19994 4.67452C0.588649 8.49768 -0.119229 12.2259 0.234711 15.9012C1.96666 17.1543 3.64512 17.9155 5.29526 18.4136C5.70269 17.8703 6.06606 17.2928 6.37909 16.6842C5.78291 16.4647 5.21189 16.1938 4.67234 15.8794C4.81548 15.7766 4.95549 15.6692 5.09076 15.5587C8.38161 17.05 11.9572 17.05 15.2087 15.5587C15.3456 15.6692 15.4856 15.7766 15.6272 15.8794C15.086 16.1954 14.5134 16.4662 13.9172 16.6857C14.2303 17.2928 14.5921 17.8719 15.0011 18.4152C16.6528 17.917 18.3328 17.1558 20.0648 15.9012C20.4801 11.6406 19.3553 7.94662 17.0917 4.67141ZM6.82743 13.6409C5.83955 13.6409 5.02941 12.7474 5.02941 11.6593C5.02941 10.5712 5.82225 9.67607 6.82743 9.67607C7.83263 9.67607 8.64275 10.5696 8.62545 11.6593C8.62701 12.7474 7.83263 13.6409 6.82743 13.6409ZM13.4721 13.6409C12.4842 13.6409 11.674 12.7474 11.674 11.6593C11.674 10.5712 12.4669 9.67607 13.4721 9.67607C14.4772 9.67607 15.2874 10.5696 15.2701 11.6593C15.2701 12.7474 14.4772 13.6409 13.4721 13.6409Z"
                    fill="currentColor"
                  ></path>
                </svg>
                Import from Discord
              </button>
              <button
                className="addcommunity-first-wrap-body-1-btn create"
                onClick={() => {
                  document
                    .querySelector(".addcommunity-first-wrap")
                    .classList.add("hidden-addcommunity-first-wrap");
                  document
                    .querySelector(".addcommunity-first")
                    .classList.remove("backgroundfilter");
                }}
              >
                Create from scratch
                <svg
                  className="addcommunity-first-wrap-body-1-btn-create"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="addcommunity-create row">
          <div className="addcommunity-create1 col-lg-6">
            <svg
              style={{ position: "absolute", top: "40px", left: "40px" }}
              width="186"
              height="36"
              viewBox="0 0 186 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_936_3045)">
                <path
                  d="M1.79603 35.9284C2.78795 35.9284 3.59207 35.1167 3.59207 34.1155C3.59207 33.1144 2.78795 32.3027 1.79603 32.3027C0.804107 32.3027 0 33.1144 0 34.1155C0 35.1167 0.804107 35.9284 1.79603 35.9284Z"
                  fill="white"
                ></path>
                <path
                  d="M25.5273 23.0607C25.6325 23.0129 25.7325 22.9556 25.8276 22.8913C26.4005 22.5025 26.7771 21.8433 26.7771 21.0953C26.7771 20.4164 26.4662 19.8104 25.9795 19.4131L3.5976 0.56444L3.59525 0.562924L3.45644 0.445902L3.45258 0.442731L3.5976 0.56444L3.59525 0.562924C3.55078 0.522124 3.50476 0.482842 3.45644 0.445902C3.09467 0.166507 2.6408 0 2.14965 0C0.962142 0 0 0.969404 0 2.16485V27.9971C0 29.1927 0.962142 30.1611 2.14965 30.1611C2.66433 30.1611 3.13671 29.9791 3.50709 29.6753L3.53982 29.648L11.3357 23.0358C11.5845 22.8411 11.7433 22.5373 11.7433 22.1958C11.7433 21.6085 11.2708 21.1322 10.6868 21.1322L7.18149 21.1325C6.59822 21.1325 6.12462 20.6565 6.12462 20.0687V12.9117C6.12462 12.3238 6.59795 11.8482 7.18109 11.8482C7.42904 11.8482 7.65742 11.9344 7.83762 12.0782L12.1455 15.6835L17.5513 20.2322L17.7657 20.4127L17.7666 20.4136L17.5513 20.2322C17.6309 20.2824 17.7033 20.3438 17.7666 20.4136C17.9396 20.6027 18.0449 20.8555 18.0449 21.1325C18.0449 21.4473 17.9093 21.73 17.6933 21.9245C17.6754 21.9411 17.6574 21.956 17.6387 21.9709L17.6933 21.9245L6.52085 31.3973C6.2792 31.5918 6.12445 31.8918 6.12445 32.2278C6.12445 32.8147 6.59782 33.2913 7.18096 33.2913C7.35565 33.2913 7.52091 33.2482 7.66675 33.172C7.69015 33.1602 7.71355 33.1467 7.73616 33.1327L7.65002 33.1809L25.8271 22.8918"
                  fill="white"
                ></path>
                <path
                  d="M42.5745 31.0817C42.26 31.0817 42.0127 30.9841 41.8329 30.7892C41.6529 30.5939 41.5632 30.3257 41.5632 29.9841V5.43196C41.5632 5.09045 41.6529 4.82212 41.8329 4.62696C42.0127 4.43181 42.26 4.33423 42.5745 4.33423H51.7425C55.4052 4.33423 58.4051 5.45636 60.7421 7.70056C62.0003 8.89585 62.9552 10.3473 63.607 12.0548C64.2587 13.738 64.5843 15.6163 64.5843 17.6897C64.5843 19.7145 64.2474 21.6048 63.5732 23.3612C62.8992 25.0932 61.9554 26.5568 60.7421 27.7521C59.6183 28.8254 58.2814 29.6548 56.7309 30.2403C55.203 30.8014 53.5401 31.0817 51.7425 31.0817H42.5745ZM51.7425 26.0688C56.7085 26.0688 59.1914 23.2881 59.1914 17.7263C59.1914 12.1646 56.7085 9.38372 51.7425 9.38372H46.8887V26.0688H51.7425Z"
                  fill="white"
                ></path>
                <path
                  d="M81.8547 31.0811C81.54 31.0811 81.2927 30.9835 81.1131 30.7886C80.9334 30.5933 80.8434 30.3251 80.8434 29.9835V29.0686C80.394 29.7273 79.6413 30.3006 78.5851 30.7886C77.5289 31.2764 76.4053 31.5204 75.2145 31.5204C73.3269 31.5204 71.6753 31.069 70.2598 30.1666C68.844 29.2393 67.7654 27.9588 67.0238 26.3244C66.2823 24.7388 65.9116 22.9702 65.9116 21.0188C65.9116 19.043 66.2823 17.2622 67.0238 15.6766C67.7878 14.091 68.8663 12.8348 70.2598 11.9078C71.6529 10.9808 73.3045 10.5173 75.2145 10.5173C76.4503 10.5173 77.5625 10.7491 78.5514 11.2126C79.54 11.6761 80.304 12.2859 80.8434 13.0421V12.0542C80.8434 11.7126 80.9334 11.4443 81.1131 11.2492C81.2927 11.054 81.54 10.9564 81.8547 10.9564H84.8209C85.1354 10.9564 85.3823 11.054 85.5623 11.2492C85.7422 11.4443 85.8318 11.7126 85.8318 12.0542V29.9835C85.8318 30.3251 85.7422 30.5933 85.5623 30.7886C85.3823 30.9835 85.1354 31.0811 84.8209 31.0811H81.8547ZM81.0456 21.0188C81.0456 19.3113 80.5736 17.933 79.63 16.8841C78.7087 15.8352 77.4842 15.3107 75.9562 15.3107C74.4054 15.3107 73.1696 15.8352 72.2483 16.8841C71.3271 17.933 70.8665 19.3113 70.8665 21.0188C70.8665 22.6775 71.3383 24.0437 72.282 25.117C73.2258 26.1659 74.4503 26.6902 75.9562 26.6902C77.5289 26.6902 78.7647 26.1904 79.6636 25.19C80.5849 24.1655 81.0456 22.7751 81.0456 21.0188Z"
                  fill="white"
                ></path>
                <path
                  d="M97.9626 31.5578C96.1426 31.5578 94.4569 31.0944 92.9066 30.1676C91.3786 29.2162 90.1653 27.9354 89.2664 26.3254C88.3675 24.7398 87.9182 22.9834 87.9182 21.0564C87.9182 19.1782 88.3675 17.434 89.2664 15.824C90.1653 14.214 91.3898 12.9334 92.9402 11.982C94.4682 11.055 96.1426 10.5916 97.9626 10.5916C99.7828 10.5916 101.468 11.0672 103.018 12.0186C104.569 12.9456 105.805 14.214 106.726 15.824C107.625 17.4096 108.074 19.1538 108.074 21.0564C108.074 22.9347 107.614 24.6789 106.692 26.2887C105.794 27.8987 104.569 29.1794 103.018 30.1309C101.468 31.0822 99.7828 31.5578 97.9626 31.5578ZM97.9626 15.3849C97.0413 15.3849 96.1873 15.641 95.4009 16.1533C94.6142 16.6412 93.9964 17.312 93.5469 18.1658C93.0975 19.0684 92.8729 20.0318 92.8729 21.0564C92.8729 22.1542 93.0864 23.1422 93.5133 24.0202C93.9628 24.874 94.5806 25.5449 95.3671 26.0329C96.1537 26.5449 97.0186 26.8011 97.9626 26.8011C98.9062 26.8011 99.7602 26.5573 100.524 26.0693C101.311 25.5571 101.929 24.8618 102.378 23.9836C102.827 23.0811 103.052 22.1053 103.052 21.0564C103.052 20.0074 102.827 19.0562 102.378 18.2024C101.951 17.3242 101.344 16.629 100.558 16.1167C99.7715 15.6289 98.9062 15.3849 97.9626 15.3849Z"
                  fill="white"
                ></path>
                <path
                  d="M127.704 26.0688C128.018 26.0688 128.266 26.1665 128.445 26.3617C128.625 26.5568 128.715 26.8252 128.715 27.1666V29.9841C128.715 30.3257 128.625 30.5939 128.445 30.7892C128.266 30.9841 128.018 31.0817 127.704 31.0817H111.458C111.143 31.0817 110.896 30.9841 110.716 30.7892C110.536 30.5939 110.446 30.3257 110.446 29.9841V5.43196C110.446 5.09045 110.536 4.82212 110.716 4.62696C110.896 4.43181 111.143 4.33423 111.458 4.33423H114.794C115.109 4.33423 115.356 4.43181 115.536 4.62696C115.716 4.82212 115.806 5.09045 115.806 5.43196V26.0688H127.704Z"
                  fill="white"
                ></path>
                <path
                  d="M138.849 31.5946C137.276 31.5946 135.736 31.2407 134.231 30.5333C132.725 29.826 131.456 28.7284 130.422 27.2402C129.321 25.6789 128.771 23.63 128.771 21.0931C128.771 19.0196 129.209 17.19 130.085 15.6045C130.984 14.0189 132.197 12.7992 133.725 11.9454C135.253 11.0672 136.961 10.6282 138.849 10.6282C140.511 10.6282 142.062 11.0307 143.5 11.8357C144.961 12.6162 146.152 13.7505 147.073 15.2386C147.68 16.2143 148.073 17.1656 148.253 18.0926C148.433 19.0196 148.523 20.1051 148.523 21.3491C148.523 21.8615 148.399 22.2884 148.152 22.6298C147.904 22.9713 147.556 23.142 147.107 23.142H133.793C134.04 24.4106 134.658 25.3375 135.647 25.9229C136.635 26.5086 137.703 26.8011 138.849 26.8011C139.77 26.8011 140.557 26.6547 141.208 26.3622C141.86 26.0693 142.444 25.6546 142.961 25.118C143.253 24.8496 143.523 24.7155 143.77 24.7155C143.972 24.7155 144.174 24.7887 144.377 24.9351L146.567 26.3255C146.927 26.5449 147.107 26.8133 147.107 27.1306C147.107 27.3255 147.017 27.5573 146.837 27.8256C144.77 30.338 142.107 31.5946 138.849 31.5946ZM138.815 15.4215C137.444 15.4215 136.309 15.7874 135.411 16.5192C134.534 17.251 134.04 18.1658 133.927 19.2635H143.197C143.129 18.6049 142.905 17.9828 142.523 17.3974C142.141 16.812 141.635 16.3363 141.006 15.9704C140.377 15.6045 139.646 15.4215 138.815 15.4215Z"
                  fill="white"
                ></path>
                <path
                  d="M160.511 10.5916C163.027 10.5916 164.87 11.3234 166.038 12.787C167.23 14.2262 167.825 16.3607 167.825 19.1904V29.9845C167.825 30.3262 167.735 30.5944 167.555 30.7896C167.376 30.9845 167.128 31.0822 166.814 31.0822H163.679C163.364 31.0822 163.117 30.9845 162.937 30.7896C162.758 30.5944 162.668 30.3262 162.668 29.9845V19.1904C162.668 16.4826 161.477 15.1288 159.095 15.1288C158.061 15.1288 157.196 15.5557 156.5 16.4095C155.826 17.2632 155.511 18.6049 155.556 20.4344V29.9845C155.556 30.3262 155.466 30.5944 155.286 30.7896C155.106 30.9845 154.859 31.0822 154.545 31.0822H151.545C151.23 31.0822 150.983 30.9845 150.803 30.7896C150.624 30.5944 150.534 30.3262 150.534 29.9845V12.0552C150.534 11.7137 150.624 11.4454 150.803 11.2502C150.983 11.055 151.23 10.9575 151.545 10.9575H154.545C154.859 10.9575 155.106 11.055 155.286 11.2502C155.466 11.4454 155.556 11.7137 155.556 12.0552V12.7504C156.162 12.0918 156.915 11.5673 157.814 11.177C158.735 10.7867 159.634 10.5916 160.511 10.5916Z"
                  fill="white"
                ></path>
                <path
                  d="M178.382 31.5578C175.394 31.5578 172.765 30.7285 170.495 29.0696C170.203 28.8502 170.057 28.582 170.057 28.2649C170.057 28.0209 170.136 27.7769 170.293 27.5331L171.742 25.4473C171.967 25.1302 172.225 24.9716 172.517 24.9716C172.742 24.9716 172.944 25.0325 173.124 25.1545C173.933 25.6425 174.787 26.0329 175.686 26.3254C176.607 26.6182 177.483 26.7644 178.315 26.7644C179.079 26.7644 179.708 26.5938 180.202 26.2524C180.719 25.9107 180.978 25.4838 180.978 24.9716C180.978 24.5082 180.742 24.1665 180.27 23.9471C179.798 23.7274 179.191 23.5567 178.45 23.4349L177.405 23.2884C175.854 23.0202 174.63 22.7031 173.731 22.3371C172.832 21.9713 172.012 21.3858 171.27 20.5807C170.461 19.7025 170.057 18.4951 170.057 16.9583C170.057 14.6653 170.81 13.0309 172.315 12.0552C173.843 11.0794 175.641 10.5916 177.708 10.5916C179.011 10.5916 180.214 10.7745 181.315 11.1404C182.438 11.5063 183.527 12.0674 184.584 12.8236C184.898 13.0187 185.056 13.2871 185.056 13.6286C185.056 13.8481 184.965 14.092 184.787 14.3604L183.371 16.4095C183.145 16.7266 182.887 16.8851 182.596 16.8851C182.371 16.8851 182.158 16.8241 181.954 16.7022C180.404 15.7996 178.933 15.3483 177.54 15.3483C176.933 15.3483 176.371 15.4947 175.854 15.7874C175.36 16.0557 175.113 16.4095 175.113 16.8485C175.113 17.3852 175.416 17.7755 176.023 18.0194C176.652 18.2634 177.517 18.4707 178.618 18.6414C180.416 18.9829 181.742 19.3245 182.596 19.666C183.473 19.9831 184.247 20.532 184.922 21.3125C185.64 22.2151 186 23.4471 186 25.0082C186 27.106 185.336 28.7284 184.011 29.8747C182.685 30.9967 180.809 31.5578 178.382 31.5578Z"
                  fill="white"
                ></path>
              </g>
              <defs>
                <clipPath id="clip0_936_3045">
                  <rect width="186" height="36" fill="white"></rect>
                </clipPath>
              </defs>
            </svg>

            <div className="addcommunity-create1-info">
              <img src={samavt} alt="" style={{ width: "100px" }} />
              DAOs use a whole load of tools (both web2 and web3). Today I
              learned about DaoLens, which feels like a super effective way to
              onboard new members to your DAOs. I highly recommend checking it
              out if you are a DAO admin or considering launching a DAO.
              <div className="addcommunity-create1-info-author">
                Sam Holding
                <div className="addcommunity-create1-info-author1">
                  Founding Member, Quarius
                </div>
              </div>
            </div>
          </div>
          <div className="addcommunity-create2 col-lg-6">
            <div className="addcommunity-create2-wrap">
              <div className="addcommunity-create2-wrap-column">
                <div className="addcommunity-create2-wrap-column-number">1</div>
                <div className="addcommunity-create2-wrap-column-line"></div>
              </div>
              <div className="addcommunity-create2-wrap-content">
                <div className="addcommunity-create2-wrap-content-heading">
                  STEP 1/3
                  <div className="addcommunity-create2-wrap-content-heading1">
                    Basic Details
                  </div>
                  Help your members know more about your community
                </div>

                <div className="addcommunity-create2-wrap-content-body1">
                  <div
                    className="addcommunity-create2-wrap-content-body1-img"
                    style={{ width: "80px" }}
                  >
                    <div className="addcommunity-create2-wrap-content-body1-img1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="2px"
                        stroke="currentColor"
                        aria-hidden="true"
                        width="28"
                        color="#64748B"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                        ></path>
                      </svg>
                    </div>
                  </div>

                  <div className="addcommunity-create2-wrap-content-body1-input">
                    Name your community *
                    <input
                      type="text"
                      placeholder="Eg. Cool community"
                      maxLength={30}
                    />
                  </div>
                </div>

                <div className="addcommunity-create2-wrap-content-body2">
                  <div className="addcommunity-create2-wrap-content-body2-heading">
                    What’s the goal of your community? *
                  </div>
                  <div className="addcommunity-create2-wrap-content-body2-content-wrap">
                    <div className="addcommunity-create2-wrap-content-body2-content-wrap-navbar">
                      <div className="addcommunity-create2-wrap-content-body2-content-wrap-navbar-btn">
                        Normal
                        <svg
                          viewBox="0 0 18 18"
                          className="addcommunity-create2-wrap-content-body2-content-wrap-navbar-btn1"
                        >
                          {" "}
                          <polygon
                            class="ql-stroke"
                            points="7 11 9 13 11 11 7 11"
                          ></polygon>{" "}
                          <polygon
                            class="ql-stroke"
                            points="7 7 9 5 11 7 7 7"
                          ></polygon>{" "}
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          fill="currentColor"
                          className="bi bi-type-bold addcommunity-create2-wrap-content-body2-content-wrap-navbar-btn2"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8.21 13c2.106 0 3.412-1.087 3.412-2.823 0-1.306-.984-2.283-2.324-2.386v-.055a2.176 2.176 0 0 0 1.852-2.14c0-1.51-1.162-2.46-3.014-2.46H3.843V13H8.21zM5.908 4.674h1.696c.963 0 1.517.451 1.517 1.244 0 .834-.629 1.32-1.73 1.32H5.908V4.673zm0 6.788V8.598h1.73c1.217 0 1.88.492 1.88 1.415 0 .943-.643 1.449-1.832 1.449H5.907z" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          fill="currentColor"
                          className="bi bi-type-italic addcommunity-create2-wrap-content-body2-content-wrap-navbar-btn3"
                          viewBox="0 0 16 16"
                        >
                          <path d="M7.991 11.674 9.53 4.455c.123-.595.246-.71 1.347-.807l.11-.52H7.211l-.11.52c1.06.096 1.128.212 1.005.807L6.57 11.674c-.123.595-.246.71-1.346.806l-.11.52h3.774l.11-.52c-1.06-.095-1.129-.211-1.006-.806z" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          fill="currentColor"
                          class="bi bi-type-underline addcommunity-create2-wrap-content-body2-content-wrap-navbar-btn4"
                          viewBox="0 0 16 16"
                        >
                          <path d="M5.313 3.136h-1.23V9.54c0 2.105 1.47 3.623 3.917 3.623s3.917-1.518 3.917-3.623V3.136h-1.23v6.323c0 1.49-.978 2.57-2.687 2.57-1.709 0-2.687-1.08-2.687-2.57V3.136zM12.5 15h-9v-1h9v1z" />
                        </svg>
                        <svg
                          viewBox="0 0 18 18"
                          className="addcommunity-create2-wrap-content-body2-content-wrap-navbar-btn5"
                        >
                          {" "}
                          <line
                            class="ql-stroke ql-thin"
                            x1="15.5"
                            x2="2.5"
                            y1="8.5"
                            y2="9.5"
                          ></line>{" "}
                          <path
                            class="ql-fill"
                            d="M9.007,8C6.542,7.791,6,7.519,6,6.5,6,5.792,7.283,5,9,5c1.571,0,2.765.679,2.969,1.309a1,1,0,0,0,1.9-.617C13.356,4.106,11.354,3,9,3,6.2,3,4,4.538,4,6.5a3.2,3.2,0,0,0,.5,1.843Z"
                          ></path>{" "}
                          <path
                            class="ql-fill"
                            d="M8.984,10C11.457,10.208,12,10.479,12,11.5c0,0.708-1.283,1.5-3,1.5-1.571,0-2.765-.679-2.969-1.309a1,1,0,1,0-1.9.617C4.644,13.894,6.646,15,9,15c2.8,0,5-1.538,5-3.5a3.2,3.2,0,0,0-.5-1.843Z"
                          ></path>{" "}
                        </svg>
                        <svg
                          viewBox="0 0 18 18"
                          className="addcommunity-create2-wrap-content-body2-content-wrap-navbar-btn6"
                        >
                          {" "}
                          <line
                            class="ql-stroke"
                            x1="7"
                            x2="15"
                            y1="4"
                            y2="4"
                          ></line>{" "}
                          <line
                            class="ql-stroke"
                            x1="7"
                            x2="15"
                            y1="9"
                            y2="9"
                          ></line>{" "}
                          <line
                            class="ql-stroke"
                            x1="7"
                            x2="15"
                            y1="14"
                            y2="14"
                          ></line>{" "}
                          <line
                            class="ql-stroke ql-thin"
                            x1="2.5"
                            x2="4.5"
                            y1="5.5"
                            y2="5.5"
                          ></line>{" "}
                          <path
                            class="ql-fill"
                            d="M3.5,6A0.5,0.5,0,0,1,3,5.5V3.085l-0.276.138A0.5,0.5,0,0,1,2.053,3c-0.124-.247-0.023-0.324.224-0.447l1-.5A0.5,0.5,0,0,1,4,2.5v3A0.5,0.5,0,0,1,3.5,6Z"
                          ></path>{" "}
                          <path
                            class="ql-stroke ql-thin"
                            d="M4.5,10.5h-2c0-.234,1.85-1.076,1.85-2.234A0.959,0.959,0,0,0,2.5,8.156"
                          ></path>{" "}
                          <path
                            class="ql-stroke ql-thin"
                            d="M2.5,14.846a0.959,0.959,0,0,0,1.85-.109A0.7,0.7,0,0,0,3.75,14a0.688,0.688,0,0,0,.6-0.736,0.959,0.959,0,0,0-1.85-.109"
                          ></path>{" "}
                        </svg>
                        <svg
                          viewBox="0 0 18 18"
                          className="addcommunity-create2-wrap-content-body2-content-wrap-navbar-btn7"
                        >
                          {" "}
                          <line
                            class="ql-stroke"
                            x1="6"
                            x2="15"
                            y1="4"
                            y2="4"
                          ></line>{" "}
                          <line
                            class="ql-stroke"
                            x1="6"
                            x2="15"
                            y1="9"
                            y2="9"
                          ></line>{" "}
                          <line
                            class="ql-stroke"
                            x1="6"
                            x2="15"
                            y1="14"
                            y2="14"
                          ></line>{" "}
                          <line
                            class="ql-stroke"
                            x1="3"
                            x2="3"
                            y1="4"
                            y2="4"
                          ></line>{" "}
                          <line
                            class="ql-stroke"
                            x1="3"
                            x2="3"
                            y1="9"
                            y2="9"
                          ></line>{" "}
                          <line
                            class="ql-stroke"
                            x1="3"
                            x2="3"
                            y1="14"
                            y2="14"
                          ></line>{" "}
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          fill="currentColor"
                          className="bi bi-link-45deg addcommunity-create2-wrap-content-body2-content-wrap-navbar-btn8"
                          viewBox="0 0 16 16"
                        >
                          <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z" />
                          <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          fill="currentColor"
                          className="bi bi-image addcommunity-create2-wrap-content-body2-content-wrap-navbar-btn9"
                          viewBox="0 0 16 16"
                        >
                          <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                          <path d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1h12z" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          fill="currentColor"
                          className="bi bi-film addcommunity-create2-wrap-content-body2-content-wrap-navbar-btn10"
                          viewBox="0 0 16 16"
                        >
                          <path d="M0 1a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1zm4 0v6h8V1H4zm8 8H4v6h8V9zM1 1v2h2V1H1zm2 3H1v2h2V4zM1 7v2h2V7H1zm2 3H1v2h2v-2zm-2 3v2h2v-2H1zM15 1h-2v2h2V1zm-2 3v2h2V4h-2zm2 3h-2v2h2V7zm-2 3v2h2v-2h-2zm2 3h-2v2h2v-2z" />
                        </svg>
                        <svg
                          viewBox="0 0 18 18"
                          className="addcommunity-create2-wrap-content-body2-content-wrap-navbar-btn11"
                        >
                          {" "}
                          <polyline
                            class="ql-even ql-stroke"
                            points="5 7 3 9 5 11"
                          ></polyline>{" "}
                          <polyline
                            class="ql-even ql-stroke"
                            points="13 7 15 9 13 11"
                          ></polyline>{" "}
                          <line
                            class="ql-stroke"
                            x1="10"
                            x2="8"
                            y1="5"
                            y2="13"
                          ></line>{" "}
                        </svg>
                      </div>
                    </div>

                    <div className="addcommunity-create2-wrap-content-body2-content-wrap-input">
                      <textarea className="text-area"
                      onChange={(e)=>{setName(e.target.value)}}
                        rows="4"
                        type="text"
                        placeholder="Add description to let the members know more about your community"
                      />
                    </div>
                  </div>
                </div>

                <div className="addcommunity-create2-wrap-content-body3">
                  <div className="addcommunity-create2-wrap-content-body3-heading">
                    Choose type of community*
                  </div>
                  <div className="addcommunity-create2-wrap-content-body3-content">
                    <button className="addcommunity-create2-wrap-content-body3-content-btn">
                      🌍 DAOs
                    </button>
                    <button className="addcommunity-create2-wrap-content-body3-content-btn">
                      🌁 NFT Community
                    </button>
                    <button className="addcommunity-create2-wrap-content-body3-content-btn">
                      ✨ Content Creator
                    </button>
                    <button className="addcommunity-create2-wrap-content-body3-content-btn">
                      🎮 Gaming Community
                    </button>
                    <button className="addcommunity-create2-wrap-content-body3-content-btn">
                      👥 Social
                    </button>
                    <button className="addcommunity-create2-wrap-content-body3-content-btn">
                      🔧 Protocol
                    </button>
                    <button className="addcommunity-create2-wrap-content-body3-content-btn">
                      🔍 Others
                    </button>
                  </div>
                </div>

                <div className="addcommunity-create2-wrap-content-body4">
                  Add Links
                  <div className="addcommunity-create2-wrap-content-body4-content">
                    <div className="addcommunity-create2-wrap-content-body4-content-btn">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="2px"
                        stroke="currentColor"
                        aria-hidden="true"
                        width="24"
                        color="#64748B"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                        ></path>
                      </svg>
                    </div>

                    <div
                      className="addcommunity-create2-wrap-content-body4-content-btn"
                      style={{ color: "rgb(100, 116, 139)" }}
                    >
                      <svg
                        viewBox="64 64 896 896"
                        focusable="false"
                        data-icon="twitter"
                        width="24px"
                        height="24px"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M928 254.3c-30.6 13.2-63.9 22.7-98.2 26.4a170.1 170.1 0 0075-94 336.64 336.64 0 01-108.2 41.2A170.1 170.1 0 00672 174c-94.5 0-170.5 76.6-170.5 170.6 0 13.2 1.6 26.4 4.2 39.1-141.5-7.4-267.7-75-351.6-178.5a169.32 169.32 0 00-23.2 86.1c0 59.2 30.1 111.4 76 142.1a172 172 0 01-77.1-21.7v2.1c0 82.9 58.6 151.6 136.7 167.4a180.6 180.6 0 01-44.9 5.8c-11.1 0-21.6-1.1-32.2-2.6C211 652 273.9 701.1 348.8 702.7c-58.6 45.9-132 72.9-211.7 72.9-14.3 0-27.5-.5-41.2-2.1C171.5 822 261.2 850 357.8 850 671.4 850 843 590.2 843 364.7c0-7.4 0-14.8-.5-22.2 33.2-24.3 62.3-54.4 85.5-88.2z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="addcommunity-create2-bottom">
              <button
                className="addcommunity-create2-bottom-btn"
                onClick={() => {
                    saveName();
                  window.scrollTo({
                    top: 1000,
                    behavior: "smooth",
                  });
                  
                }}
              >
                <span>Next</span>
                <div
                  className="addcommunity-create2-bottom-btn1"
                  style={{ width: "15px" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                    width="16px"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="addcommunity-create row">
        <div className="addcommunity-create1 col-lg-6">
          <svg
            style={{ position: "absolute", top: "40px", left: "40px" }}
            width="186"
            height="36"
            viewBox="0 0 186 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_936_3045)">
              <path
                d="M1.79603 35.9284C2.78795 35.9284 3.59207 35.1167 3.59207 34.1155C3.59207 33.1144 2.78795 32.3027 1.79603 32.3027C0.804107 32.3027 0 33.1144 0 34.1155C0 35.1167 0.804107 35.9284 1.79603 35.9284Z"
                fill="white"
              ></path>
              <path
                d="M25.5273 23.0607C25.6325 23.0129 25.7325 22.9556 25.8276 22.8913C26.4005 22.5025 26.7771 21.8433 26.7771 21.0953C26.7771 20.4164 26.4662 19.8104 25.9795 19.4131L3.5976 0.56444L3.59525 0.562924L3.45644 0.445902L3.45258 0.442731L3.5976 0.56444L3.59525 0.562924C3.55078 0.522124 3.50476 0.482842 3.45644 0.445902C3.09467 0.166507 2.6408 0 2.14965 0C0.962142 0 0 0.969404 0 2.16485V27.9971C0 29.1927 0.962142 30.1611 2.14965 30.1611C2.66433 30.1611 3.13671 29.9791 3.50709 29.6753L3.53982 29.648L11.3357 23.0358C11.5845 22.8411 11.7433 22.5373 11.7433 22.1958C11.7433 21.6085 11.2708 21.1322 10.6868 21.1322L7.18149 21.1325C6.59822 21.1325 6.12462 20.6565 6.12462 20.0687V12.9117C6.12462 12.3238 6.59795 11.8482 7.18109 11.8482C7.42904 11.8482 7.65742 11.9344 7.83762 12.0782L12.1455 15.6835L17.5513 20.2322L17.7657 20.4127L17.7666 20.4136L17.5513 20.2322C17.6309 20.2824 17.7033 20.3438 17.7666 20.4136C17.9396 20.6027 18.0449 20.8555 18.0449 21.1325C18.0449 21.4473 17.9093 21.73 17.6933 21.9245C17.6754 21.9411 17.6574 21.956 17.6387 21.9709L17.6933 21.9245L6.52085 31.3973C6.2792 31.5918 6.12445 31.8918 6.12445 32.2278C6.12445 32.8147 6.59782 33.2913 7.18096 33.2913C7.35565 33.2913 7.52091 33.2482 7.66675 33.172C7.69015 33.1602 7.71355 33.1467 7.73616 33.1327L7.65002 33.1809L25.8271 22.8918"
                fill="white"
              ></path>
              <path
                d="M42.5745 31.0817C42.26 31.0817 42.0127 30.9841 41.8329 30.7892C41.6529 30.5939 41.5632 30.3257 41.5632 29.9841V5.43196C41.5632 5.09045 41.6529 4.82212 41.8329 4.62696C42.0127 4.43181 42.26 4.33423 42.5745 4.33423H51.7425C55.4052 4.33423 58.4051 5.45636 60.7421 7.70056C62.0003 8.89585 62.9552 10.3473 63.607 12.0548C64.2587 13.738 64.5843 15.6163 64.5843 17.6897C64.5843 19.7145 64.2474 21.6048 63.5732 23.3612C62.8992 25.0932 61.9554 26.5568 60.7421 27.7521C59.6183 28.8254 58.2814 29.6548 56.7309 30.2403C55.203 30.8014 53.5401 31.0817 51.7425 31.0817H42.5745ZM51.7425 26.0688C56.7085 26.0688 59.1914 23.2881 59.1914 17.7263C59.1914 12.1646 56.7085 9.38372 51.7425 9.38372H46.8887V26.0688H51.7425Z"
                fill="white"
              ></path>
              <path
                d="M81.8547 31.0811C81.54 31.0811 81.2927 30.9835 81.1131 30.7886C80.9334 30.5933 80.8434 30.3251 80.8434 29.9835V29.0686C80.394 29.7273 79.6413 30.3006 78.5851 30.7886C77.5289 31.2764 76.4053 31.5204 75.2145 31.5204C73.3269 31.5204 71.6753 31.069 70.2598 30.1666C68.844 29.2393 67.7654 27.9588 67.0238 26.3244C66.2823 24.7388 65.9116 22.9702 65.9116 21.0188C65.9116 19.043 66.2823 17.2622 67.0238 15.6766C67.7878 14.091 68.8663 12.8348 70.2598 11.9078C71.6529 10.9808 73.3045 10.5173 75.2145 10.5173C76.4503 10.5173 77.5625 10.7491 78.5514 11.2126C79.54 11.6761 80.304 12.2859 80.8434 13.0421V12.0542C80.8434 11.7126 80.9334 11.4443 81.1131 11.2492C81.2927 11.054 81.54 10.9564 81.8547 10.9564H84.8209C85.1354 10.9564 85.3823 11.054 85.5623 11.2492C85.7422 11.4443 85.8318 11.7126 85.8318 12.0542V29.9835C85.8318 30.3251 85.7422 30.5933 85.5623 30.7886C85.3823 30.9835 85.1354 31.0811 84.8209 31.0811H81.8547ZM81.0456 21.0188C81.0456 19.3113 80.5736 17.933 79.63 16.8841C78.7087 15.8352 77.4842 15.3107 75.9562 15.3107C74.4054 15.3107 73.1696 15.8352 72.2483 16.8841C71.3271 17.933 70.8665 19.3113 70.8665 21.0188C70.8665 22.6775 71.3383 24.0437 72.282 25.117C73.2258 26.1659 74.4503 26.6902 75.9562 26.6902C77.5289 26.6902 78.7647 26.1904 79.6636 25.19C80.5849 24.1655 81.0456 22.7751 81.0456 21.0188Z"
                fill="white"
              ></path>
              <path
                d="M97.9626 31.5578C96.1426 31.5578 94.4569 31.0944 92.9066 30.1676C91.3786 29.2162 90.1653 27.9354 89.2664 26.3254C88.3675 24.7398 87.9182 22.9834 87.9182 21.0564C87.9182 19.1782 88.3675 17.434 89.2664 15.824C90.1653 14.214 91.3898 12.9334 92.9402 11.982C94.4682 11.055 96.1426 10.5916 97.9626 10.5916C99.7828 10.5916 101.468 11.0672 103.018 12.0186C104.569 12.9456 105.805 14.214 106.726 15.824C107.625 17.4096 108.074 19.1538 108.074 21.0564C108.074 22.9347 107.614 24.6789 106.692 26.2887C105.794 27.8987 104.569 29.1794 103.018 30.1309C101.468 31.0822 99.7828 31.5578 97.9626 31.5578ZM97.9626 15.3849C97.0413 15.3849 96.1873 15.641 95.4009 16.1533C94.6142 16.6412 93.9964 17.312 93.5469 18.1658C93.0975 19.0684 92.8729 20.0318 92.8729 21.0564C92.8729 22.1542 93.0864 23.1422 93.5133 24.0202C93.9628 24.874 94.5806 25.5449 95.3671 26.0329C96.1537 26.5449 97.0186 26.8011 97.9626 26.8011C98.9062 26.8011 99.7602 26.5573 100.524 26.0693C101.311 25.5571 101.929 24.8618 102.378 23.9836C102.827 23.0811 103.052 22.1053 103.052 21.0564C103.052 20.0074 102.827 19.0562 102.378 18.2024C101.951 17.3242 101.344 16.629 100.558 16.1167C99.7715 15.6289 98.9062 15.3849 97.9626 15.3849Z"
                fill="white"
              ></path>
              <path
                d="M127.704 26.0688C128.018 26.0688 128.266 26.1665 128.445 26.3617C128.625 26.5568 128.715 26.8252 128.715 27.1666V29.9841C128.715 30.3257 128.625 30.5939 128.445 30.7892C128.266 30.9841 128.018 31.0817 127.704 31.0817H111.458C111.143 31.0817 110.896 30.9841 110.716 30.7892C110.536 30.5939 110.446 30.3257 110.446 29.9841V5.43196C110.446 5.09045 110.536 4.82212 110.716 4.62696C110.896 4.43181 111.143 4.33423 111.458 4.33423H114.794C115.109 4.33423 115.356 4.43181 115.536 4.62696C115.716 4.82212 115.806 5.09045 115.806 5.43196V26.0688H127.704Z"
                fill="white"
              ></path>
              <path
                d="M138.849 31.5946C137.276 31.5946 135.736 31.2407 134.231 30.5333C132.725 29.826 131.456 28.7284 130.422 27.2402C129.321 25.6789 128.771 23.63 128.771 21.0931C128.771 19.0196 129.209 17.19 130.085 15.6045C130.984 14.0189 132.197 12.7992 133.725 11.9454C135.253 11.0672 136.961 10.6282 138.849 10.6282C140.511 10.6282 142.062 11.0307 143.5 11.8357C144.961 12.6162 146.152 13.7505 147.073 15.2386C147.68 16.2143 148.073 17.1656 148.253 18.0926C148.433 19.0196 148.523 20.1051 148.523 21.3491C148.523 21.8615 148.399 22.2884 148.152 22.6298C147.904 22.9713 147.556 23.142 147.107 23.142H133.793C134.04 24.4106 134.658 25.3375 135.647 25.9229C136.635 26.5086 137.703 26.8011 138.849 26.8011C139.77 26.8011 140.557 26.6547 141.208 26.3622C141.86 26.0693 142.444 25.6546 142.961 25.118C143.253 24.8496 143.523 24.7155 143.77 24.7155C143.972 24.7155 144.174 24.7887 144.377 24.9351L146.567 26.3255C146.927 26.5449 147.107 26.8133 147.107 27.1306C147.107 27.3255 147.017 27.5573 146.837 27.8256C144.77 30.338 142.107 31.5946 138.849 31.5946ZM138.815 15.4215C137.444 15.4215 136.309 15.7874 135.411 16.5192C134.534 17.251 134.04 18.1658 133.927 19.2635H143.197C143.129 18.6049 142.905 17.9828 142.523 17.3974C142.141 16.812 141.635 16.3363 141.006 15.9704C140.377 15.6045 139.646 15.4215 138.815 15.4215Z"
                fill="white"
              ></path>
              <path
                d="M160.511 10.5916C163.027 10.5916 164.87 11.3234 166.038 12.787C167.23 14.2262 167.825 16.3607 167.825 19.1904V29.9845C167.825 30.3262 167.735 30.5944 167.555 30.7896C167.376 30.9845 167.128 31.0822 166.814 31.0822H163.679C163.364 31.0822 163.117 30.9845 162.937 30.7896C162.758 30.5944 162.668 30.3262 162.668 29.9845V19.1904C162.668 16.4826 161.477 15.1288 159.095 15.1288C158.061 15.1288 157.196 15.5557 156.5 16.4095C155.826 17.2632 155.511 18.6049 155.556 20.4344V29.9845C155.556 30.3262 155.466 30.5944 155.286 30.7896C155.106 30.9845 154.859 31.0822 154.545 31.0822H151.545C151.23 31.0822 150.983 30.9845 150.803 30.7896C150.624 30.5944 150.534 30.3262 150.534 29.9845V12.0552C150.534 11.7137 150.624 11.4454 150.803 11.2502C150.983 11.055 151.23 10.9575 151.545 10.9575H154.545C154.859 10.9575 155.106 11.055 155.286 11.2502C155.466 11.4454 155.556 11.7137 155.556 12.0552V12.7504C156.162 12.0918 156.915 11.5673 157.814 11.177C158.735 10.7867 159.634 10.5916 160.511 10.5916Z"
                fill="white"
              ></path>
              <path
                d="M178.382 31.5578C175.394 31.5578 172.765 30.7285 170.495 29.0696C170.203 28.8502 170.057 28.582 170.057 28.2649C170.057 28.0209 170.136 27.7769 170.293 27.5331L171.742 25.4473C171.967 25.1302 172.225 24.9716 172.517 24.9716C172.742 24.9716 172.944 25.0325 173.124 25.1545C173.933 25.6425 174.787 26.0329 175.686 26.3254C176.607 26.6182 177.483 26.7644 178.315 26.7644C179.079 26.7644 179.708 26.5938 180.202 26.2524C180.719 25.9107 180.978 25.4838 180.978 24.9716C180.978 24.5082 180.742 24.1665 180.27 23.9471C179.798 23.7274 179.191 23.5567 178.45 23.4349L177.405 23.2884C175.854 23.0202 174.63 22.7031 173.731 22.3371C172.832 21.9713 172.012 21.3858 171.27 20.5807C170.461 19.7025 170.057 18.4951 170.057 16.9583C170.057 14.6653 170.81 13.0309 172.315 12.0552C173.843 11.0794 175.641 10.5916 177.708 10.5916C179.011 10.5916 180.214 10.7745 181.315 11.1404C182.438 11.5063 183.527 12.0674 184.584 12.8236C184.898 13.0187 185.056 13.2871 185.056 13.6286C185.056 13.8481 184.965 14.092 184.787 14.3604L183.371 16.4095C183.145 16.7266 182.887 16.8851 182.596 16.8851C182.371 16.8851 182.158 16.8241 181.954 16.7022C180.404 15.7996 178.933 15.3483 177.54 15.3483C176.933 15.3483 176.371 15.4947 175.854 15.7874C175.36 16.0557 175.113 16.4095 175.113 16.8485C175.113 17.3852 175.416 17.7755 176.023 18.0194C176.652 18.2634 177.517 18.4707 178.618 18.6414C180.416 18.9829 181.742 19.3245 182.596 19.666C183.473 19.9831 184.247 20.532 184.922 21.3125C185.64 22.2151 186 23.4471 186 25.0082C186 27.106 185.336 28.7284 184.011 29.8747C182.685 30.9967 180.809 31.5578 178.382 31.5578Z"
                fill="white"
              ></path>
            </g>
            <defs>
              <clipPath id="clip0_936_3045">
                <rect width="186" height="36" fill="white"></rect>
              </clipPath>
            </defs>
          </svg>
          <div className="addcommunity-create1-community-type">
            <div className="addcommunity-create1-community-type-wrap">
              <img src={addCommunityImg} alt="" />
              <div className="addcommunity-create1-community-type-wrap-info">
                <div className="addcommunity-create1-community-type-wrap-info-avt">
                  <h5 className="addcommunity-create1-community-type-wrap-info-avt-name">
                    {name.charAt(0)}
                  </h5>
                </div>
              </div>
              <div className="addcommunity-create1-community-type-wrap-info-name">
                {name}
              </div>
              <div className="addcommunity-create1-community-type-wrap-info-types">
                <img src={overviewIcon} alt="" />
                Overview
              </div>
              <div className="addcommunity-create1-community-type-wrap-info-types">
                <img src={overviewIcon} alt="" />
                Proposals
              </div>
              <div className="addcommunity-create1-community-type-wrap-info-types">
                <img src={overviewIcon} alt="" />
                Discussions
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddCommunity;
