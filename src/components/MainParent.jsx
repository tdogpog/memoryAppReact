import React, { useEffect, useState } from "react";

import APIData from "./childcomponents/APIData";

function MainParent() {
  [imgData, setimgData] = useState([]);

  useEffect(() => {
    APIData(setimgData);
  }, []);

  return <div className="main"></div>;
}
