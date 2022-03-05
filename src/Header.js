import React from "react";

function Header({ name }) {
  return (
    <header>
      <div className="common_contents_inner">
        <h1>
          <a href="./index.html">
            <span className="logo"></span>
            {name}
          </a>
        </h1>
        <a className="policy" href="./privacyPolicy.html">
          <img
            src={require("./images/privacy-policy.png")}
            width={25}
            height={25}
            alt=""
          />
        </a>
      </div>
    </header>
  );
}

export default Header;
