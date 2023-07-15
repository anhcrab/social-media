import React, { useEffect, useState } from "react";

import "./L_body11.scss";

export default function L_body11() {
  const [docHeight, setDocHeight] = useState(0);
  useEffect(() => {
    const container = document.getElementById("tn-container");
    setDocHeight(document.documentElement.offsetHeight);
    console.log("docheight=" + docHeight);
    const handleScroll = () => {
      const scrolled = window.scrollY / (docHeight - window.innerHeight / 1.8);
      console.log("scrollllll= " + scrolled);

      if (scrolled <= -1.76 && scrolled >= -2.5) {
        const box = document.getElementById("tn-box");
        const text = document.getElementById("tn-text-daos");
        const transformValue = "scale(" + scrolled + ")";
        box.style.WebkitTransform = transformValue;
        box.style.MozTransform = transformValue;
        box.style.OTransform = transformValue;
        box.style.transform = transformValue;
        container.classList.remove("tn-position");
        text.classList.add("none");
        console.log("1");
      } else if (scrolled <= -2 && scrolled > -5.5) {
        const scrolled =
          window.scrollY / (docHeight - window.innerHeight / 6.6);
        const box = document.getElementById("tn-box");
        const transformValue = "scale(" + scrolled + ")";
        box.style.WebkitTransform = transformValue;
        box.style.MozTransform = transformValue;
        box.style.OTransform = transformValue;
        box.style.transform = transformValue;
        container.classList.add("tn-thinhcode");
        const text = document.getElementById("tn-text-daos");
        text.classList.remove("none");
      } else if (scrolled <= -5.5) {
        container.classList.add("tn-position");
      } else {
        console.log("lần 1 :" + scrolled);
        container.classList.add("tn-position");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [docHeight]);

  useEffect(() => {
    setDocHeight(0);
  }, []);

  return (
    <div className="row tn-circle-part">
      <div id="tn-container">
        <div id="tn-box"></div>
        <div className="tn-daos-items">
          <svg
            width="49"
            height="48"
            viewBox="0 0 49 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="tn-daos"
          >
            <rect
              width="48.4824"
              height="47.6243"
              rx="5.57762"
              fill="#6320EB"
            />
            <path
              d="M13.3773 41.8812C14.3678 41.8812 15.1707 41.0707 15.1707 40.0709C15.1707 39.0714 14.3678 38.2609 13.3773 38.2609C12.3869 38.2609 11.584 39.0714 11.584 40.0709C11.584 41.0707 12.3869 41.8812 13.3773 41.8812Z"
              fill="#FFFAF3"
            />
            <path
              d="M37.0731 29.0331C37.1782 28.9853 37.278 28.9281 37.3729 28.8638C37.9451 28.4758 38.3211 27.8175 38.3211 27.0706C38.3211 26.3927 38.0106 25.7876 37.5246 25.391L15.1762 6.57043L15.1739 6.56892L15.0352 6.45207L15.0314 6.4489L15.1762 6.57043L15.1739 6.56892C15.1295 6.52818 15.0835 6.48896 15.0352 6.45207C14.674 6.17309 14.2208 6.00684 13.7304 6.00684C12.5447 6.00684 11.584 6.97479 11.584 8.16846V33.9621C11.584 35.1559 12.5447 36.1229 13.7304 36.1229C14.2443 36.1229 14.716 35.9411 15.0858 35.6377L15.1185 35.6105L22.9027 29.0082C23.1511 28.8138 23.3097 28.5104 23.3097 28.1695C23.3097 27.5832 22.8379 27.1075 22.2548 27.1075L18.7547 27.1078C18.1723 27.1078 17.6994 26.6325 17.6994 26.0455V18.8992C17.6994 18.3122 18.1721 17.8373 18.7543 17.8373C19.0019 17.8373 19.23 17.9234 19.4099 18.067L23.7114 21.6668L29.1091 26.2088L29.3232 26.3891L29.324 26.3899L29.1091 26.2088C29.1885 26.2589 29.2608 26.3203 29.324 26.3899C29.4968 26.5787 29.6019 26.8311 29.6019 27.1078C29.6019 27.4221 29.4665 27.7043 29.2508 27.8986C29.2329 27.9151 29.215 27.93 29.1963 27.9448L29.2508 27.8986L18.0951 37.3571C17.8538 37.5513 17.6993 37.8509 17.6993 38.1864C17.6993 38.7726 18.1719 39.2483 18.7542 39.2483C18.9286 39.2483 19.0937 39.2053 19.2393 39.1292C19.2626 39.1175 19.286 39.104 19.3086 39.09L19.2226 39.1381L37.3724 28.8645"
              fill="#FFFAF3"
            />
          </svg>
          <p id="tn-text-daos">DAO Manager</p>
        </div>
      </div>
    </div>
  );
}
