import React, { Component } from "react";
import Checkout from "../components/Checkout";

class ShoppingCart extends Component {
  state = {
    shoppingCart: JSON.parse(localStorage.getItem("shoppingCart"))
  };

  removeItem = item => {
    let shoppingCart = JSON.parse(localStorage.getItem("shoppingCart"));

    // console.log(item.details, "hıııı");
    const filteredBasket = shoppingCart.filter((buyItem, i) => {
      //     console.log("COMPAREEE", buyItem, shoppingCart[i]);
      console.log(buyItem._id, item.details._id);
      return buyItem._id !== item.details._id;
    });
    localStorage.removeItem("shoppingCart", JSON.stringify(shoppingCart));
    localStorage.setItem("shoppingCart", JSON.stringify(filteredBasket));

    this.setState({
      shoppingCart: JSON.parse(localStorage.getItem("shoppingCart"))
    });
  };

  componentWillMount() {
    //localStorage.setItem("shoppingCart", JSON.stringify([{}]));
  }
  //   () => {
  //     localStorage.setItem("shoppingCart", JSON.stringify(filteredBasket));

  reduceQty = item => {
    console.log("item", item);
    let counter = item.counter;

    //setState of the counter
    //Decrement the counter
    //setState of the updatedCounter
  };

  increaseQty = item => {};

  //set SHOPPING CART IN LOCAL STORAGE

  render() {
    // Put below ınto CART COMPONENT
    let shoppingCart = JSON.parse(localStorage.getItem("shoppingCart"));
    console.log(shoppingCart);

    //loop over shoppıngCart
    // console.log("SHOOOOPIINNNGGGG", shoppingCart, shoppingCart.length);
    console.log(this.state.shoppingCart);
    const productCounter = this.state.shoppingCart.reduce(
      (acc, val, i, arr) => {
        const cart = arr.filter(el => el._id === val._id);
        const alreadyInside = acc.find(product => {
          return product.details._id == val._id;
        });

        if (!alreadyInside) {
          return [...acc, { counter: cart.length, details: val }];
        } else return acc;
      },
      []
    );
    console.log(productCounter);

    const total = productCounter.reduce((acc, val) => {
      console.log(val);
      return acc + val.details.price * val.counter;
    }, 0);
    console.log({ total });
    return (
      <div>
        <h1>Shopping Cart</h1>
        <table>
          <tr>
            <th></th>
            <th>Name </th>
            <th>Quantity </th>
            <th>Price </th>
            <th>Total </th>
          </tr>
          <tbody>
            {shoppingCart.length > 0
              ? productCounter.map((product, i) => (
                  <tr>
                    <td>
                      <img
                        className="image-cart"
                        src={product.details.images[0]}
                      />
                    </td>
                    <td>
                      {product.details.title}
                      <br />
                      <button
                        className="remove-button"
                        onClick={() => this.removeItem(product)}
                      >
                        remove
                      </button>{" "}
                    </td>
                    <td>
                      {/* <button
                        className="plusminus"
                        onClick={() => this.reduceQty(product)}
                      >
                        -
                      </button> */}
                      {productCounter[i].counter}
                      {/* <button className="plusminus" onClick={this.increaseQty}>
                        +
                      </button> */}
                    </td>
                    <td>€{product.details.price}</td>
                    <td>
                      €{product.details.price * productCounter[i].counter}
                    </td>
                  </tr>
                ))
              : "Your cart is empty"}
          </tbody>
        </table>

        <div>
          <h1>Total</h1>
          <h1>€{total}</h1>
          <p>Free Delivery</p>
          <Checkout history={this.props.history} price={total * 100} />
        </div>
      </div>
    );
  }
}

export default ShoppingCart;
