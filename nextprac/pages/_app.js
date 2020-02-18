import React from "react";
import Link from "next/link";
const Test = ({ Component }) => {
  return (
    <>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/[pagename]" as="/blog">
            <a>블로그</a>
          </Link>
        </li>
        <li>
          <Link href="/[pagename]" as="/cafe">
            <a>카페</a>
          </Link>
        </li>
      </ul>
      <Component />
    </>
  );
};

export default Test;
