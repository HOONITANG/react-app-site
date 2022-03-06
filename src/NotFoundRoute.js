import React from "react";
import { Navigate, Route } from "react-router-dom";

function NotFoundRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={
        (props) => {
          return (
            <Navigate
              to={{
                pathname: "/react-app-site/policy_en",
                state: { from: props.location },
              }}
            />
          );
        }
        // localStorage.getItem("users") ? (
        //   <Component {...props} />
        // ) : (
        //   <Redirect
        //     to={{
        //       pathname: "/users/sign_in",
        //       state: { from: props.location },
        //     }}
        //   />
        // )
      }
    />
  );
}

export default NotFoundRoute;
