import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Card from "./card";

class Call extends Component {
  state = {
    malls: [
      {
        id: "1",
        gambar: "https://www.pertamina.com/Media/Image/front/our_product.jpg"
      },
      {
        id: "2",
        gambar:
          "https://www.pertamina.com/Media/Upload/Image/renew_energy_PGE.jpg"
      },
      {
        id: "3",
        gambar:
          "https://www.pertamina.com/Media/Image/front/investor_relation.jpg"
      }
    ]
  };

  render() {
    return (
      <div style={{ margin: 80 }}>
        <Grid
          container
          spacing={24}
          style={{
            alignItems: "center"
          }}
        >
          {this.state.malls.map(mall => (
            <Grid item xs={12} sm={4}>
              <Card gambar={mall.gambar} />
            </Grid>
          ))}
        </Grid>
      </div>
    );
  }
}
export default Call;
