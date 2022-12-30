import React, { useState } from "react";
import NavBar from "./NavBar";
import data from "../data/data.json";
const { technology } = data;

function Technology() {
  const [selectedTechnology, setSelectedTechnology] = useState({
    name: technology[0].name,
    images: {
      portrait: technology[0].images.portrait,
      landscape: technology[0].images.landscape,
    },
    description: technology[0].description,
  });

  const handleClick = (e) => {
    const technologyFound = technology.find((d) => d.name === e.target.id);
    setSelectedTechnology(technologyFound);
  };

  return (
    <div className="body-technology">
      <NavBar />
      <main className="grid-container grid-container--technology">
        <h1 className="numbered-title uppercase fs-500 ff-sans-cond letter-spacing-1">
          <span aria-hidden="true">03</span>Space launch 101
        </h1>
        <picture>
          <source
            media="(max-width:55rem)"
            srcSet={selectedTechnology.images.landscape}
            type="image/jpg"
          />
          <source
            media="(min-width:55rem)"
            srcSet={selectedTechnology.images.portrait}
            type="image/jpg"
          />
          <img
            src={selectedTechnology.images.png}
            alt={selectedTechnology.name}
          />
        </picture>
        <div className="slider-big flex">
          {technology.map((d, i) => (
            <button
              className={selectedTechnology.name === d.name ? "active" : null}
              onClick={handleClick}
              id={d.name}
              key={d.name}
            >
              {++i}
            </button>
          ))}
        </div>
        <div className="technology-detail flow">
          <div className="flow--space-small">
            <h2 className="text-accent uppercase fs-300 ff-sans-cond letter-spacing-3">
              The terminology...
            </h2>
            <h3 className="uppercase fs-700 ff-serif">
              {selectedTechnology.name}
            </h3>
          </div>
          <p className="text-accent">{selectedTechnology.description}</p>
        </div>
      </main>
    </div>
  );
}

export default Technology;
