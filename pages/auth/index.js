import React from "react";

import User from "../../components/User";

const authIndexPage = (props) => {
  return (
    <div>
      <p>{props.appName}</p>
      <User name="Premnath" age={29} />
    </div>
  );
};

authIndexPage.getInitialProps = (context) => {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ appName: "SuperAuth App" });
    }, 1000);
  });
  return promise;
};

export default authIndexPage;
