import React from "react";

const SliderSmall = ({ tabs, selectedTab, handler }) => {
  return (
    <div className="slider-small flex">
      {tabs.map((tab) => (
        <button
          className={selectedTab.name === tab.name ? "active" : null}
          onClick={handler}
          id={tab.name}
          key={tab.name}
        >
          <span className="sr-only">{tab.role}</span>
        </button>
      ))}
    </div>
  );
};

export default SliderSmall;
