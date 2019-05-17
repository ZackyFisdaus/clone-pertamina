import React, { Component } from "react";
import { Card, Button, CardTitle, Row, Col, CardImg } from "reactstrap";

import { Link } from "react-router-dom";

export default class Dar extends Component {
  render() {
    return (
      <div
        style={{
          padding: "10px"
        }}
      >
        <Card
          body
          inverse
          style={{
            backgroundColor: "#333",
            borderColor: "#333"
          }}
        >
          <Row>
            <Col xs="6">
              <CardImg
                top
                style={{ height: "300px", width: "100%" }}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSy_r4kpuLRcqj6StSSP-M0_Lk83XFXxFIzgwJzvq6Qf5B20Lw"
                alt="Card"
              />
            </Col>
            <Col xs="6" style={{ textAlign: "center" }}>
              <h2>
                <center>pizza</center>
              </h2>
              <hr />
              <h3>0</h3>
              <CardTitle>
                <Button>+</Button>

                <Button>-</Button>
              </CardTitle>
              <Button tag={Link} to="/contact">
                pesan
              </Button>
            </Col>
          </Row>
        </Card>
      </div>
    );
  }
}
