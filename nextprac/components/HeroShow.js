import React from "react";
import Link from 'next/link';

const HeroShow = ({ pagename, shows }) => {
  return (
    <div>
      <h1>{pagename} TV Shows</h1>
      <ul>
        {shows.map(show => (
          <li key={show.id}>
            <Link href="/d">
              <a>{show.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HeroShow;
