import React from "react";
import Link from "next/link";

const errorPage = () => {
  return (
    <div>
      <h1>Something went wrong in js project</h1>
      <p>
        Go to{"  "}
        <Link href="/">
          <a>going home</a>
        </Link>
        {"  "}
        page
      </p>
    </div>
  );
};

export default errorPage;
