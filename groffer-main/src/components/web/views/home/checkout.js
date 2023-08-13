import React, { Component } from "react";

export default class Checkout extends Component {
  render() {
    return (
      <div>
        <div className="osahan-checkout">
          <div className="p-3 border-bottom">
            <div className="d-flex align-items-center">
              <a
                className="font-weight-bold text-success text-decoration-none"
                href="/payment"
              >
                <i className="icofont-rounded-left back-page" />
              </a>
              <h6 className="font-weight-bold m-0 ml-3">Checkout</h6>
              <a className="toggle ml-auto" href="#">
                <i className="icofont-navigation-menu" />
              </a>
            </div>
          </div>
        </div>
        <div className="address p-3 bg-white">
          <h6 className="m-0 text-dark d-flex align-items-center">
            Address
            <span className="small ml-auto">
              <a
                href="/order-address"
                className="font-weight-bold text-decoration-none text-success"
              >
                <i className="icofont-location-arrow" /> Change
              </a>
            </span>
          </h6>
        </div>
        <div className="p-3">
          <div className="d-flex align-items-center">
            <p className="mb-2 font-weight-bold">Home</p>
            <p className="mb-2 badge badge-success ml-auto">Default</p>
          </div>
          <p className="small text-muted m-0">1001 Veterans Blvd</p>
          <p className="small text-muted m-0">Redwood City, CA 94063</p>
        </div>
        <div className="address p-3 bg-white">
          <h6 className="m-0 text-dark">Payment Method</h6>
        </div>
        <div className="p-3">
          <a
            href="/order-status"
            className="text-success text-decoration-none w-100"
          >
            <div className="d-flex align-items-center">
              <i className="icofont-credit-card" />
              <span className="ml-3">Add Payment Method</span>
              <i className="icofont-rounded-right ml-auto" />
            </div>
          </a>
        </div>
        <div className="address p-3 bg-white">
          <h6 className="text-dark m-0">Promo Code</h6>
        </div>
        <div>
          <div className="accordion" id="accordionExample">
            <div className="d-flex align-items-center" id="headingThree">
              <a
                className="p-3 d-flex align-items-center text-decoration-none text-success w-100"
                type="button"
                data-toggle="collapse"
                data-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                <i className="icofont-badge mr-3" /> Add Promo Code
                <i className="icofont-rounded-down ml-auto" />
              </a>
            </div>
            <div
              id="collapseThree"
              className="collapse p-3 border-top"
              aria-labelledby="headingThree"
              data-parent="#accordionExample"
            >
              <form className="row">
                <div className="col-8 m-0 pr-1">
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputPromo1"
                    placeholder="Enter Promo Code"
                    required
                  />
                </div>
                <div className="col-4 pl-1">
                  <button type="submit" className="btn btn-success btn-block">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="address p-3 bg-white">
          <h6 className="text-dark m-0">Total</h6>
        </div>
        <div className="p-3">
          <div className="clearfix">
            <p className="mb-1 text-muted">
              Item Total <span className="float-right text-dark">$3140</span>
            </p>
            <p className="mb-1 text-muted">
              Restaurant Charges{" "}
              <span className="float-right text-dark">$62.8</span>
            </p>
            <p className="mb-1 text-muted">
              Delivery Fee
              <span className="text-info ml-1">
                <i className="icofont-info-circle" />
              </span>
              <span className="float-right text-dark">$10</span>
            </p>
            <p className="mb-1 text-success">
              Total Discount
              <span className="float-right text-success">$1884</span>
            </p>
            <hr />
            <h6 className="font-weight-bold mb-0">
              TO PAY <span className="float-right">$1329</span>
            </h6>
          </div>
        </div>
        <div className="fixed-bottom">
          <a href="/successfully" className="btn btn-success btn-block">
            Place Order
          </a>
        </div>
      </div>
    );
  }
}
