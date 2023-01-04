import React from "react";

const SliderBig = ({ tabs, selectedTab, handler }) => {
  return (
    <div className="slider-big flex">
      {tabs.map((tab, i) => (
        <button
          className={selectedTab.name === tab.name ? "active" : null}
          onClick={handler}
          id={tab.name}
          key={tab.name}
        >
          {++i}
        </button>
      ))}
    </div>
  );
};

export default SliderBig;
