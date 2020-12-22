import React, { Component } from "react";
import "./App.css";
import Shop from "./components/Shop";

class App extends Component {
  render() {
    const items = [
      {
        heading: "Cap - $5",
        name: "Cap",
        price: 5,
        quantity: 1,
        totalPrice: 5,
        imglink: "https://img.icons8.com/ios-glyphs/2x/26e07f/cap.png"
      },
      {
        heading: "Hand Bag - $30",
        name: "HandBag",
        price: 30,
        quantity: 1,
        totalPrice: 30,
        imglink: "https://img.icons8.com/windows/2x/26e07f/bag-back-view.png"
      },
      {
        heading: "Shirt - $35",
        name: "Shirt",
        price: 35,
        quantity: 1,
        totalPrice: 35,
        imglink: "https://img.icons8.com/android/2x/26e07f/t-shirt.png"
      },
      {
        heading: "Shoes - $50",
        name: "Shoe",
        price: 50,
        quantity: 1,
        totalPrice: 50,
        imglink: "https://img.icons8.com/emoji/2x/26e07f/running-shoe.png"
      },
      {
        heading: "Pant - $35",
        name: "Pant",
        price: 35,
        quantity: 1,
        totalPrice: 35,
        imglink: "https://img.icons8.com/ios-glyphs/2x/26e07f/pajama-pants.png"
      },
      {
        heading: "Slipper - $25",
        name: "Slipper",
        price: 25,
        quantity: 1,
        totalPrice: 25,
        imglink: "https://img.icons8.com/material-sharp/2x/26e07f/slippers.png"
      }
    ];

    return (
      <div className="App">
        <div style={{ paddingTop: "5px" }}>
          <img
            style={{ float: "left" }}
            alt="Your Cart"
            width="75"
            height="75"
            src="https://img.icons8.com/fluent-systems-filled/2x/26e07f/user-menu-male.png"
            className="d-inline-block align-top"
          />
          <h1 style={{ paddingRight: "1163px", width: "264px" }}>
            Monster Shop
          </h1>
        </div>
        <Shop items={items} />
      </div>
    );
  }
}

export default App;
