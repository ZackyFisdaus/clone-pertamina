import React from "react";
import Nav from "../../components/Nav";
import Awws from "../../components/awws";
import Card from "../../components/cards";
function Home() {
  return (
    <div className="ee">
      <Nav judul="Gojek" />
      <Awws />
      <Card />
      <h1 style={{ textAlign: "center" }}> Created By M Ismail </h1>
    </div>
  );
}

export default Home;
