import React, { useState } from "react";
import { Progresss, Done } from "./style";
const ChildProgress = ({ done }) => {
  const [style, setStyle] = useState({});

  setTimeout(() => {
    const newStyle = {
      opacity: 1,
      width: `${done}%`,
    };

    setStyle(newStyle);
  }, 200);

  return (
    <Progresss>
      <Done style={style}></Done>
    </Progresss>
  );
};
export default ChildProgress;
