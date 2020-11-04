import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import styles from "react-responsive-carousel/lib/styles/carousel.min.css";

export default class ProductDetail extends Component {
  state = {
    product: null
  };

  componentDidMount() {
    const productId = this.props.match.params.productId;
    console.log(productId);
    axios.get(`/api/products/${productId}`).then(response => {
      console.log("resolved", response.data);
      this.setState({
        product: response.data
      });
    });
  }

  render() {
    const product = this.state.product;

    if (!product) {
      return <div>Loading</div>;
    }
    return (
      <div>
        <div className="product-details-page">
          <div className="product-gallery">
            <Carousel styles showStatus={false} className="car-styles">
              <div>
                <img src={product.product.images[0]} />
              </div>
              <div>
                <img src={product.product.images[1]} />
              </div>
              <div>
                <img src={product.product.images[2]} />
              </div>
            </Carousel>
          </div>
          <div className="product-description">
            <h2>{product.product.title}</h2>
            <h2>{product.product.price} Euro</h2>
            <p>{product.product.descriptionFull}</p>
            <button
              className="detail-buuton"
              onClick={() => this.props.addToCart(product.product)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    );
  }
}
