import React, { useState, useEffect } from "react";

const Preset = () => {
  const [dataFiles, setDataFiles] = useState([]);

  useEffect(() => {
    fetch("/members").then((res) =>
      res.json().then((data) => {
        setDataFiles(data.members);
      })
    );
  }, []);
  console.log(dataFiles)
  return (
    <div>
      Preset
    </div>
  );
};

export default Preset;
