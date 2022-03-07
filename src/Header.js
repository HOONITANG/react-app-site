import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18next from "./config/lang/i18n";

function Header() {
  const { t } = useTranslation();
  const handleClick = () => {
    var language = i18next.language == "ko" ? "en" : "ko";
    i18next.changeLanguage(language);
  };

  return (
    <header>
      <div className="common_contents_inner">
        <h1>
          <Link to="/react-app-site">
            <span className="logo" /> {t("title")}
          </Link>
        </h1>
        <button onClick={handleClick} style={{ fontSize: 24 }}>
          {i18next.language + "▾"}
        </button>
        <Link
          to={i18next.language == "ko" ? "policy_ko" : "policy_en"}
          className="policy"
        >
          <img
            src={require("./images/privacy-policy.png")}
            width={25}
            height={25}
            alt=""
          />
        </Link>
      </div>
    </header>
  );
}

export default Header;
