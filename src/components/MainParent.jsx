import React, { useEffect, useState } from "react";

import APIData from "./childcomponents/APIData";
import DisplayMain from "./childcomponents/DisplayMain";

function MainParent() {
  const [imgData, setimgData] = useState([]);

  const [clickedPokes, setclickedPokes] = useState([]);

  const [highscore, sethighscore] = useState([0]);

  function handleClick(pokemon) {
    gameScoring(pokemon);
    shuffleimgs();
  }

  function gameScoring(pokemon) {
    if (clickedPokes.includes(pokemon)) {
      setclickedPokes([]);
    } else {
      if (clickedPokes.length > highscore) {
        sethighscore(clickedPokes.length);
      }
      setclickedPokes([...clickedPokes, pokemon]);
    }
  }

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
      <p>
        Highscore:{highscore} Current Score:{clickedPokes.length}
      </p>
      <DisplayMain
        imgData={imgData}
        setclickedPokes={setclickedPokes}
        handleClick={handleClick}
      />
    </div>
  );
}

export default MainParent;
