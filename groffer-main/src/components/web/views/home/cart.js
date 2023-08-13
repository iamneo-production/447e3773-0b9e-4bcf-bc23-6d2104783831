import React, { Component } from "react";

export default class Cart extends Component {
  render() {
    return (
      <div>
        <div className="osahan-cart">
          <div className="p-3 border-bottom">
            <div className="d-flex align-items-center">
              <h5 className="font-weight-bold m-0">Cart</h5>
              <a className="toggle ml-auto" href="#">
                <i className="icofont-navigation-menu" />
              </a>
            </div>
          </div>
        </div>
        <div className="osahan-body">
          <div className="cart-items bg-white position-relative border-bottom">
            <a href="/product-detail" className="position-absolute">
              <span className="badge badge-danger m-3">10%</span>
            </a>
            <div className="d-flex align-items-center p-3">
              <a href="/product-detail">
                <img src="img/cart/g1.png" className="img-fluid" />
              </a>
              <a
                href="/product-detail"
                className="ml-3 text-dark text-decoration-none w-100"
              >
                <h5 className="mb-1">Bread</h5>
                <p className="text-muted mb-2">
                  <del className="text-success mr-1">$1.20kg</del> $0.98/kg
                </p>
                <div className="d-flex align-items-center">
                  <p className="total_price font-weight-bold m-0">$2.82</p>
                  <div className="input-group input-spinner ml-auto cart-items-number">
                    <div className="input-group-prepend">
                      <button
                        className="btn btn-success btn-sm"
                        type="button"
                        id="button-plus"
                      >
                        +
                      </button>
                    </div>
                    <input
                      type="text"
                      className="form-control"
                      defaultValue={1}
                    />
                    <div className="input-group-append">
                      <button
                        className="btn btn-success btn-sm"
                        type="button"
                        id="button-minus"
                      >
                        −
                      </button>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className="cart-items bg-white position-relative border-bottom">
            <div className="d-flex align-items-center p-3">
              <a href="/product-detail">
                <img src="img/cart/g2.png" className="img-fluid" />
              </a>
              <a
                href="/product-detail"
                className="ml-3 text-dark text-decoration-none w-100"
              >
                <h5 className="mb-1">Spinach</h5>
                <p className="text-muted mb-2">
                  <del className="text-success mr-1">$1.20kg</del> $0.98/kg
                </p>
                <div className="d-flex align-items-center">
                  <p className="total_price font-weight-bold m-0">$3.82</p>
                  <div className="input-group input-spinner ml-auto cart-items-number">
                    <div className="input-group-prepend">
                      <button
                        className="btn btn-success btn-sm"
                        type="button"
                        id="button-plus"
                      >
                        +
                      </button>
                    </div>
                    <input
                      type="text"
                      className="form-control"
                      defaultValue={3}
                    />
                    <div className="input-group-append">
                      <button
                        className="btn btn-success btn-sm"
                        type="button"
                        id="button-minus"
                      >
                        −
                      </button>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className="cart-items bg-white position-relative border-bottom">
            <div className="d-flex align-items-center p-3">
              <a href="/product-detail">
                <img src="img/cart/g3.png" className="img-fluid" />
              </a>
              <a
                href="/product-detail"
                className="ml-3 text-dark text-decoration-none w-100"
              >
                <h5 className="mb-1">Chilli</h5>
                <p className="text-muted mb-2">
                  <del className="text-success mr-1">$1.20kg</del> $0.98/kg
                </p>
                <div className="d-flex align-items-center">
                  <p className="total_price font-weight-bold m-0">$2.82</p>
                  <div className="input-group input-spinner ml-auto cart-items-number">
                    <div className="input-group-prepend">
                      <button
                        className="btn btn-success btn-sm"
                        type="button"
                        id="button-plus"
                      >
                        +
                      </button>
                    </div>
                    <input
                      type="text"
                      className="form-control"
                      defaultValue={2}
                    />
                    <div className="input-group-append">
                      <button
                        className="btn btn-success btn-sm"
                        type="button"
                        id="button-minus"
                      >
                        −
                      </button>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className="p-3 mt-5">
            <a href="/order-address" className="text-decoration-none">
              <div className="rounded shadow bg-success d-flex align-items-center p-3 text-white">
                <div className="more">
                  <h6 className="m-0">Subtotal $8.52</h6>
                  <p className="small m-0">Proceed to checkout</p>
                </div>
                <div className="ml-auto">
                  <i className="icofont-simple-right" />
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    );
  }
}
