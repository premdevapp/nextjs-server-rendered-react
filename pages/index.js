import React, { Component } from "react";
import Link from "next/link";
import Router from "next/router";

class IndexPage extends Component {
  /* constructor(props) {
    super(props);
    const that = this;
  } */
  /* timeout(data) {
    return new Promise((resolve) => setTimeout(resolve(data), 1000));
  } */
  //static async getInitialProps(context) {
  static getInitialProps(context) {
    //console.log(context);
    let promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ appName: "Super App" });
      }, 1000);
    });
    return promise;
  }
  render() {
    return (
      <div>
        <h1>The next js project {this.props.appName}</h1>
        <p>
          Go to{"  "}
          <Link href="/auth">
            <a>Auth</a>
          </Link>
          {"  "}
          page
        </p>
        <button onClick={() => Router.push("/auth")}>Go To Auth</button>
      </div>
    );
  }
}

export default IndexPage;
