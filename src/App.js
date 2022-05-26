import React, { useEffect, useState } from "react";

function App() {
  const [data1, setData] = useState([{}]);

  useEffect(() => {
    fetch("/api")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  console.log("data", data1);
  return (
    <div>
      {typeof data1 === "undefined" ? (
        <p>Loading</p>
      ) : (
        data1.users &&
        data1.users.map((user, i) => {
          return <p key={i}>{user}</p>;
        })
      )}
    </div>
  );
}

export default App;
