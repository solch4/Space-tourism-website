import React from "react";

const TabList = ({ tabs, selectedTab, handler }) => {
  return (
    <div className="text-accent tab-list flex">
      {tabs.map((tab) => (
        <button
          className={selectedTab.name === tab.name ? "active" : null}
          onClick={handler}
          id={tab.name}
          key={tab.name}
        >
          {tab.name}
        </button>
      ))}
    </div>
  );
};

export default TabList;
