import React from "react";
import Link from "next/link";
const Test = ({ Component, pageProps }) => {
  return (
    <>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/[pagename]" as="/superman">
            <a>슈퍼맨</a>
          </Link>
        </li>
        <li>
          <Link href="/[pagename]" as="/batman">
            <a>배트맨</a>
          </Link>
        </li>
      </ul>
      <Component {...pageProps} />
    </>
  );
};

Test.getInitialProps = async context => {
  const {  ctx, Component } = context;
  let pageProps = {};
  if (Component.getInitialProps ) {
    pageProps = await Component.getInitialProps(ctx);
  }

  return { pageProps };
}

export default Test;
