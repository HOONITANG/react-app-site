import React from "react";
import Header from "../Header";
import { useTranslation } from "react-i18next";

function Home() {
  const { t } = useTranslation();

  return (
    <div className="Home">
      <div>
        <Header />
        <div id="main_contents_wrap">
          <div className="common_contents_inner">
            <h2>{t("App Introduce")}</h2>

            <section className="intro_app">
              <div className="device">
                <img src={require("../images/device_main.png")} alt="" />
              </div>
              <div className="explain_text">
                <h3>{t("App h3")}</h3>
                <ul>
                  <li>
                    <b>{t("Introduce title1")}</b>
                    <p>{t("Introduce title1 detail")}</p>
                  </li>
                  <li>
                    <b>{t("Introduce title2")}</b>
                    <p>{t("Introduce title2 detail")}</p>
                  </li>
                  <li>
                    <b>{t("Introduce title3")}</b>
                    <p>{t("Introduce title3 detail")}</p>
                  </li>
                </ul>
              </div>
            </section>
          </div>
        </div>
        <footer>
          <div className="common_contents_inner">
            Copyright © Kemiez 2022 <br />
            e-Mail:{" "}
            <a href="mailto:vinieo0000@gmail.com" target="_blank">
              vinieo0000@gmail.com
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Home;
