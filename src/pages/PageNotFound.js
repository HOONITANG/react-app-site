import React from "react";
import { Navigate } from "react-router-dom";

function PageNotFound(props) {
  var l = window.location;

  console.log(l);
  console.log(props);

  if (l.pathname == "/react-app-site/asd") {
    return (
      <Navigate
        to={{
          pathname: "/react-app-site/policy_en",
        }}
        replace
      />
    );
  }

  if (l.pathname == "/react-app-site/policy_en") {
    return (
      <Navigate
        to={{
          pathname: "/react-app-site/policy_en",
        }}
        replace
      />
    );
  }

  if (l.pathname == "/react-app-site/policy_ko") {
    return (
      <Navigate
        to={{
          pathname: "/react-app-site/policy_ko",
        }}
        replace
      />
    );
  }

  return (
    <div className="PageNotFound">
      <p>asdasdasdasd</p>
    </div>
  );
}

export default PageNotFound;
