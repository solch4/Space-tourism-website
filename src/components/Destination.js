import React, { useState } from "react";
import NavBar from "./NavBar";
import data from "../data/data.json";
const { destinations } = data;

function Destination() {
  const [selectedPlanet, setSelectedPlanet] = useState({
    name: destinations[0].name,
    images: {
      png: destinations[0].images.png,
      webp: destinations[0].images.webp,
    },
    description: destinations[0].description,
    distance: destinations[0].distance,
    travel: destinations[0].travel,
  });

  const handleClick = (e) => {
    const planet = destinations.find((d) => d.name === e.target.id);
    setSelectedPlanet(planet);
  };

  return (
    <div className="body-destination">
      <NavBar />
      <main className="grid-container grid-container--destination">
        <h1 className="numbered-title uppercase fs-500 ff-sans-cond letter-spacing-1">
          <span aria-hidden="true">01</span>Pick your destination
        </h1>
        <picture>
          <source
            srcSet={selectedPlanet.images.webp}
            type="image/webp"
            alt={selectedPlanet.name}
          />
          <img src={selectedPlanet.images.png} alt={selectedPlanet.name} />
        </picture>
        <div className="text-accent tab-list flex">
          {destinations.map((d) => (
            <button
              className={selectedPlanet.name === d.name ? "active" : null}
              onClick={handleClick}
              id={d.name}
              key={d.name}
            >
              {d.name}
            </button>
          ))}
        </div>
        <div className="destination-info flow--space-small">
          <h2 className="uppercase fs-800 ff-serif">{selectedPlanet.name}</h2>
          <p className="text-accent">{selectedPlanet.description}</p>
          <div className="destination-extra-info flex uppercase">
            <div>
              <h3 className="fs-200 text-accent letter-spacing-3">
                Avg. distance
              </h3>
              <p className="ff-serif">{selectedPlanet.distance}</p>
            </div>
            <div>
              <h3 className="fs-200 text-accent letter-spacing-3">
                Est. travel time
              </h3>
              <p className="ff-serif">{selectedPlanet.travel}</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Destination;
