import React, { useState } from "react";

export const WitAI = () => {
  const [msg, setMsg] = useState("");

  const onSubmit = () => {
    fetch("/.netlify/functions/temperature")
      .then((response) => response.json())
      .then((json) => setMsg(json.msg));
  };

  return (
    <div>
      <button onClick={onSubmit}>Submit</button>
    </div>
  );
};
