import React, { useEffect, useState } from "react";

import APIData from "./childcomponents/APIData";
import DisplayMain from "./childcomponents/DisplayMain";

function MainParent() {
  const [imgData, setimgData] = useState([]);

  useEffect(() => {
    APIData(setimgData);
  }, []);

  return (
    <div className="main">
      <DisplayMain imgData={imgData} />
    </div>
  );
}

export default MainParent;
