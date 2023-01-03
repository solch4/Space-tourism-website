import React from "react";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";

function Home() {
  return (
    <div className="body-home">
      <NavBar />
      <div className="text-accent grid-container grid-container--home">
        <div>
          <h1 className="uppercase">
            <span className="fs-500 ff-sans-cond letter-spacing-1">So, you want to travel to</span>
            <br />
            <span className="text-white fs-900 ff-serif">space</span>
          </h1>
          <p>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div>
          <Link
            to="/destination"
            className="home-btn uppercase fs-600 ff-serif bg-white text-dark"
          >
            Explore
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
