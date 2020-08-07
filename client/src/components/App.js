import React, { useState, useEffect } from "react";
import Test from "../templates/FetchItems";

function App() {
  const [bacon, setBacon] = useState(null);

  useEffect(() => {
    fetch("/bacon")
      .then((res) => res.json())
      .then((data) => setBacon(data));
  }, []);

  return (
    <div>
      <div>Hello world Kenn</div>
      {bacon ? bacon : `...where's my stuff?...`}
      <Test/>
    </div>
  );
}

export default App;
