import React from "react";
import Header from "./Header";
import "./css/reset.css";
import "./css/main.css";

function App() {
  return (
    <div className="App">
      <body>
        <Header name="오늘 뭐했지" />

        <div id="main_contents_wrap">
          <div class="common_contents_inner">
            <h2>iOS MyInventory App 소개</h2>

            <section class="intro_app">
              <div class="device">
                <img src={require("./images/device_category.png")} alt="" />
              </div>

              <div class="explain_text">
                <h3>가지고 있는 물건을 등록하고 정리해 보세요.</h3>
                <ul>
                  <li>
                    <b>[카테고리]</b>
                    <p>상품들을 분류해서 관리할 수 있어요.</p>
                  </li>
                  <li>
                    <b>[상품 등록]</b>
                    <p>이미지, 메모, 유통기한을 입력할 수 있어요.</p>
                  </li>
                  <li>
                    <b>[유통기한 알림]</b>
                    <p>오늘 유통기한이 만료되는 상품을 알림으로 띄워줘요.</p>
                  </li>
                  <li>
                    <b>[상품 리스트]</b>
                    <p>월에 해당하는 상품들만 선택해서 볼 수 있어요.</p>
                  </li>
                </ul>
              </div>
            </section>
          </div>
        </div>
        <footer>
          <div class="common_contents_inner">
            Copyright © SuJin Jin 2020 <br />
            e-Mail:{" "}
            <a href="mailto:sylpid003@gmail.com" target="_blank">
              sylpid003@gmail.com
            </a>
          </div>
        </footer>
      </body>
    </div>
  );
}

export default App;
