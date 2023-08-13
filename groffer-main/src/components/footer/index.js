import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <div className="osahan-menu-fotter fixed-bottom bg-white text-center border-top">
        <div className="row m-0">
          <a
            href="/"
            className="text-dark small col font-weight-bold text-decoration-none p-2 selected"
          >
            <p className="h5 m-0">
              <i className="text-success icofont-grocery" />
            </p>
            Shop
          </a>
          <a
            href="/cart"
            className="text-muted col small text-decoration-none p-2"
          >
            <p className="h5 m-0">
              <i className="icofont-cart" />
            </p>
            Cart
          </a>
          <a
            href="/order-status"
            className="text-muted col small text-decoration-none p-2"
          >
            <p className="h5 m-0">
              <i className="icofont-bag" />
            </p>
            My Order
          </a>
          <a href="/" className="text-muted small col text-decoration-none p-2">
            <p className="h5 m-0">
              <i className="icofont-user" />
            </p>
            Account
          </a>
        </div>
      </div>
    );
  }
}
