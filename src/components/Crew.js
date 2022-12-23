import React, { useState } from "react";
import NavBar from "./NavBar";
import data from "../data/data.json";
const { crew } = data;

function Crew() {
  const [selectedCrew, setSelectedCrew] = useState({
    name: crew[0].name,
    images: {
      png: crew[0].images.png,
      webp: crew[0].images.webp,
    },
    role: crew[0].role,
    bio: crew[0].bio,
  });

  const handleClick = (e) => {
    const memberFound = crew.find((d) => d.name === e.target.id);
    setSelectedCrew(memberFound);
  };

  return (
    <div className="body-crew">
      <NavBar />
      <main className="grid-container grid-container--crew">
        <h1 className="numbered-title uppercase fs-500 ff-sans-cond letter-spacing-1">
          <span aria-hidden="true">02</span>Meet your crew
        </h1>
        <img src={selectedCrew.images.png} alt={selectedCrew.name} />
        <div className="slider-small flex">
          {crew.map((d) => (
            <button
              className={selectedCrew.name === d.name ? "active" : null}
              onClick={handleClick}
              id={d.name}
              key={d.name}
            >
              <span className="sr-only">{d.role}</span>
            </button>
          ))}
        </div>
        <div className="crew-detail flow">
          <div className="flow--space-small">
            <h2 className="uppercase fs-600 ff-serif">{selectedCrew.role}</h2>
            <h3 className="uppercase fs-700 ff-serif">{selectedCrew.name}</h3>
          </div>
          <p className="text-accent">{selectedCrew.bio}</p>
        </div>
      </main>
    </div>
  );
}

export default Crew;
