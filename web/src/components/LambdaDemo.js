import React, { useState } from "react";

export const LambdaDemo = () => {
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");

  const handleClick = (api) => (e) => {
    e.preventDefault();
    setLoading(true);

    fetch("/.netlify/functions/" + api)
      .then((response) => response.json())
      .then((json) => {
        setLoading(false);
        setMsg(json.msg);
      });
  };

  return (
    <p>
      <button onClick={handleClick("hello")}>
        {loading ? "Loading..." : "Call Lambda"}
      </button>
      <br />
      <span>{msg}</span>
    </p>
  );
};
