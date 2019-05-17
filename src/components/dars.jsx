import React, { Component } from "react";
import "../asset/all.css";
import Menu from "./menu";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";

import { Row, Col, Jumbotron, Button, Table } from "reactstrap";

class Dars extends Component {
  state = {
    menus: [
      {
        id: "1",
        paket: "Kepala krispi",
        gambar:
          "https://img-global.cpcdn.com/003_recipes/46df9d8b85301466/751x532cq70/kepala-ayam-crispy-ala-kfc-foto-resep-utama.jpg",
        harga: 5000
      },
      {
        id: "2",
        paket: "Dada krispi",
        gambar:
          "https://agpetojo.files.wordpress.com/2015/12/ayam-crispy-dada-mentok1.png",

        harga: 6000
      },
      {
        id: "3",
        paket: "Sayap krispi",
        gambar: "https://i.ytimg.com/vi/pzBAWFAm5lE/maxresdefault.jpg",

        harga: 4500
      },
      {
        id: "4",
        paket: "Ceker krispi",
        gambar:
          "https://img-global.cpcdn.com/003_recipes/8612950be8c31557/751x532cq70/ceker-crispy-%F0%9F%90%93-foto-resep-utama.jpg",

        harga: 3000
      },
      {
        id: "5",
        paket: "Kulit krispi",
        gambar:
          "https://i2.wp.com/www.resepayam.net/wp-content/uploads/2016/10/kulit-ayam-crispy.jpg",

        harga: 2000
      },
      {
        id: "6",
        paket: "Bandeng Presto",
        gambar:
          "https://www.pegipegi.com/travel/wp-content/uploads/2017/07/peluang-bisnis-bandeng-presto-dan-analisa-usahanya-pengusahasukses.jpg",
        harga: 5000
      },
      {
        id: "7",
        paket: "Paha krispi",
        gambar:
          "https://www.thespruceeats.com/thmb/RuiS8PlPaUkJFbrH8skujr90Q8A=/1500x1000/filters:fill(auto,1)/terris-crispy-fried-chicken-legs-3056879-10_preview-5b05ec40a474be00362260d7.jpeg",

        harga: 6000
      },
      {
        id: "8",
        paket: "Ikan presto",
        gambar:
          "https://selerasa.com/wp-content/uploads/2015/07/images_ikan_pepes-ikan-tulang-lunak.jpg",

        harga: 4500
      }
    ],
    total: 0,
    resto: [],
    qty: 0,
    orderan: []
  };
  kurangTotalHarga = harga => {
    this.setState({
      total: this.state.total - harga
    });
  };

  tambahTotalHarga = harga => {
    this.setState({
      total: this.state.total + harga
    });

    //fungsi untuk ambil data storage
    this.getData();

    //fungsi untuk ambil component
  };
  getData = () => {
    var getRestoFromStorage = sessionStorage.getItem("resto");
    var convert = JSON.parse(getRestoFromStorage);
    this.setState({
      resto: convert
    });
  };

  choice = id => {
    const { menus } = this.state;
    const filter = menus.find(key => key.id === id);
    console.log(filter);
  };

  render() {
    const { menus, pesan, resto, total, orderan } = this.state;
    return (
      <div>
        <Grid
          container
          spacing={8}
          style={{
            paddingTop: 15,
            paddingBottom: "15%"
          }}
        >
          {menus.map(menu => (
            <Grid item xs={4}>
              <Menu
                paket={menu.paket}
                gambar={menu.gambar}
                harga={menu.harga}
                tambahTotalHarga={this.tambahTotalHarga}
                kurangTotalHarga={this.kurangTotalHarga}
              />
            </Grid>
          ))}
        </Grid>
        <Jumbotron className="bk">
          <h1 style={{ textAlign: "center" }}>Ordering!</h1>
          <hr />
          <p className="lead">
            daftar isi pesanan anda telah tercantum di bawah ini.
          </p>

          <Table>
            <thead>
              <tr>
                <th>Nama Restoran</th>
                <th>lokasi</th>
                <th>Menu pesanan</th>
                <th>jumlah pesanan</th>
                <th>jumlah harga</th>
              </tr>
            </thead>
            <tbody>
              {resto.length === 0 ? (
                <h1 style={{ textAlign: "center" }}>pilih makanan dahulu!!</h1>
              ) : (
                <tr>
                  <th>
                    {resto.map(item => {
                      return <h1>{item.toko}</h1>;
                    })}
                  </th>

                  <th>
                    {resto.map(item => {
                      return <h5>{item.jalan}</h5>;
                    })}
                  </th>
                  <th>
                    {orderan.map(item => {
                      return <h5>{item.paket}</h5>;
                    })}
                  </th>
                  <th>{this.tambahTotalHarga}</th>
                  <th>{total}</th>
                </tr>
              )}
            </tbody>
          </Table>
          <p className="lead">
            <Button color="primary" tag={Link} to="/finis">
              Pesan sekarang
            </Button>
          </p>
        </Jumbotron>
      </div>
    );
  }
}

export default Dars;
