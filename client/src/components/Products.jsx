import React, { Component } from "react";
import axios from "axios";
import ProductsList from "./ProductsList";

// seachBar function component
const SearchBar = props => {
  return (
    <div>
      <div className="search-for-products">
        <h3>Search for products</h3>
        <input
          className="input"
          className="search-bar"
          placeholder="Search for products..."
          value={props.search}
          onChange={event => {
            props.updateSearchText(event.target.value);
          }}
        />
      </div>
    </div>
  );
};

export default class Products extends Component {
  state = {
    products: [],
    searchedProducts: [],
    searchText: ""
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

  //sort products by price

  // sortByPrice = () => {
  //   const sorted = [...this.state.products].sort((a, b) => {
  //     return b.price - a.price;
  //   });
  //   console.log("sorted", sorted);
  //   this.setState({
  //     products: sorted
  //   });
  // };

  sortByExpensive = () => {
    const sorted = [...this.state.products].sort((a, b) => {
      return b.price - a.price;
    });
    this.setState({
      products: sorted
    });
  };
  sortByCheaper = () => {
    const sorted = [...this.state.products].sort((a, b) => {
      return a.price - b.price;
    });
    this.setState({
      products: sorted
    });
  };

  updateSearchText = text => {
    this.setState({
      searchText: text
    });
  };

  render() {
    return (
      <>
        <div class="search-bar-container">
          <SearchBar
            updateSearchText={this.updateSearchText}
            search={this.state.searchText}
          />

          <button onClick={this.sortByExpensive}>Sort by price ↑</button>
          <button onClick={this.sortByCheaper}>Sort by price ↓</button>
          {/* <button onClick={this.sortByPrice}>Sort by price</button> */}
        </div>
        <div className="products">
          <ProductsList
            products={this.state.products}
            addToCart={this.props.addToCart}
            search={this.state.searchText}
          />
        </div>
      </>
    );
  }
}
