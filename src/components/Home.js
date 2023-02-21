import React from "react";
// import user from "../data/user";

function Home(user) {
  const { name, city, color } = user;
  return (
    <div id="home">
      <h1 style={{ color: color }}>
        {name} is a Web Developer from {city}
      </h1>
    </div>
  );
}

export default Home;
