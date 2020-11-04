import React from "react";
import Favourites from "./Favourites";
import { Link } from "react-router-dom";

class Welcome extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <>
        <div className="welcome-section">
          <div className="starter-dog">
            <img src="../images/starter.png" alt={"logo"} />
          </div>
          <div className="slogan-section">
            <h1>We take good care of your best friend.</h1>
            <h3>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae
              earum qui necessitatibus omnis, harum impedit nam minima, dicta
              quas beatae, alias sit quo molestiae perferendis cumque eum magni
              aliquid cupiditate.
            </h3>
            <Link to="/products">
              <button>Check out the products</button>
            </Link>
          </div>
        </div>
        <section className="bestsellers">
          <Favourites />
        </section>
      </>
    );
  }
}

export default Welcome;
