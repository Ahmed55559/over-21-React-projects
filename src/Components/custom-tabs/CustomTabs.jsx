import { useState } from "react";
import "./CustomTabs.css";
function CustomTabs({ tabs }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  function handleIndexChange(index) {
    setCurrentIndex(index);
  }
  return (
    <>
      <div className="tabs">
        {tabs && tabs.length
          ? tabs.map((tab, index) => {
              return (
                <div
                  key={index}
                  className={
                    currentIndex === index
                      ? "active tab-heading"
                      : "tab-heading"
                  }
                  onClick={() => handleIndexChange(index)}
                >
                  <h3>{tab.label}</h3>
                </div>
              );
            })
          : null}
      </div>
      <div className="tabs-content">
        {tabs && tabs.length
          ? tabs.map((tab, index) => {
              return (
                <div
                  className={
                    currentIndex === index
                      ? "active tab-content"
                      : "tab-content"
                  }
                  key={index}
                >
                  {currentIndex === index ? tab.content : null}
                </div>
              );
            })
          : null}
      </div>
    </>
  );
}

export default CustomTabs;
