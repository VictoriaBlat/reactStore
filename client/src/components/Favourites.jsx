import React, { Component } from "react";
import axios from "axios";
import ProductsList from "./ProductsList";

export default class Favourites extends Component {
  state = {
    products: []
  };

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    axios.get("/api/products").then(response => {
      console.log("test", response.data.message);
      this.setState({
        products: response.data.products
      });
    });
  };

  render() {
    return (
      <>
        <ProductsList
          products={this.state.products}
          addToCart={this.props.addToCart}
          search={this.state.searchText}
        />
      </>
    );
  }
}
