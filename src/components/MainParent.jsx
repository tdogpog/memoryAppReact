import React, { useEffect, useState } from "react";

import APIData from "./childcomponents/APIData";
import DisplayMain from "./childcomponents/DisplayMain";

function MainParent() {
  const [imgData, setimgData] = useState([]);

  function shuffleimgs() {
    //shuffling algorithm
    const shuffledData = [...imgData];
    for (let i = shuffledData.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledData[i], shuffledData[j]] = [shuffledData[j], shuffledData[i]];
    }
    //set imgData to new shuffled array
    setimgData(shuffledData);
  }

  useEffect(() => {
    APIData(setimgData);
  }, []);

  return (
    <div className="main">
      <DisplayMain imgData={imgData} shuffleimgs={shuffleimgs} />
    </div>
  );
}

export default MainParent;
