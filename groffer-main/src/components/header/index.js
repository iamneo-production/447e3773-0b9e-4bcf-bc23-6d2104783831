import React, { Component } from "react";
import Login from "../../auth/login";
import { withRouter } from "react-router-dom";

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      searchtxt: "",
      width: window.innerWidth,
      categoryList: [],
    };
  }
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  async getCategoryList() {}
  async componentDidMount() {
    this.getCategoryList();
  }
  handleLogout = async (event) => {
    event.preventDefault();
  };
  convertToSlug(text) {
    return text
      .toString()
      .toLowerCase()
      .replace(/\s+/g, "-") // Replace spaces with -
      .replace(/[^\w\-]+/g, "") // Remove all non-word chars
      .replace(/\-\-+/g, "-") // Replace multiple - with single -
      .replace(/^-+/, "") // Trim - from start of text
      .replace(/-+$/, ""); // Trim - from end of text
  }
  handleClickSearch = (event) => {
    event.preventDefault();
    let text = this.convertToSlug(this.state.searchtxt);
    this.props.history.push("/product/catalogsearch/result/" + text);
  };
  handleRedirectButton = (slug) => {
    this.props.history.push(`/shop/${slug}`);
    window.location.reload();
  };
  //mobile view
  componentWillMount() {
    window.addEventListener("resize", this.handleWindowSizeChange);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleWindowSizeChange);
  }
  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };

  //end mobile view
  render() {
    let { userName, categoryList, width } = this.state;
    const isMobile = width <= 700;
    return (
      <div className="osahan-home-page">
        <div className="border-bottom p-3">
          <div className="title d-flex align-items-center">
            <a
              href="/"
              className="text-decoration-none text-dark d-flex align-items-center"
            >
              <img className="osahan-logo mr-2" src="img/logo.svg" />
              <h4 className="font-weight-bold text-success m-0">Grocery</h4>
            </a>
            <p className="ml-auto m-0">
              <a
                href="/"
                className="text-decoration-none bg-white p-1 rounded shadow-sm d-flex align-items-center"
              >
                <i className="text-dark icofont-notification" />
                <span className="badge badge-danger p-1 ml-1 small">2</span>
              </a>
            </p>
            <a className="toggle ml-3" href="#">
              <i className="icofont-navigation-menu" />
            </a>
          </div>
          <a href="/" className="text-decoration-none">
            <div className="input-group mt-3 rounded shadow-sm overflow-hidden bg-white">
              <div className="input-group-prepend">
                <button className="border-0 btn btn-outline-secondary text-success bg-white">
                  <i className="icofont-search" />
                </button>
              </div>
              <input
                type="text"
                className="shadow-none border-0 form-control pl-0"
                placeholder="Search for Products.."
                aria-label
                aria-describedby="basic-addon1"
              />
            </div>
          </a>
        </div>
      </div>
    );
  }
}
export default withRouter(Navigation);
