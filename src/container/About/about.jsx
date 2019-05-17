import React, { Component } from "react";
import Nav from "../../components/Nav";
import Cards from "../../components/cards";

class About extends Component {
  render() {
    return (
      <div>
        <Nav judul="Restorant" />
        <Cards />
      </div>
    );
  }
}
export default About;
