import React, { PureComponent } from "react";

export default class Category extends PureComponent {
  render() {
    return (
      <div className="osahan-body">
        <div className="p-3 osahan-categories">
          <h6 className="mb-2">What do you looking for?</h6>
          <div className="row m-0">
            <div className="col pl-0 pr-1 py-1">
              <div className="bg-white shadow-sm rounded text-center px-2 py-3 c-it">
                <a href="/listing">
                  <img src="img/categorie/1.svg" className="img-fluid px-2" />
                  <p className="m-0 pt-2 text-muted text-center">Vegetables</p>
                </a>
              </div>
            </div>
            <div className="col p-1">
              <div className="bg-white shadow-sm rounded text-center px-2 py-3 c-it">
                <a href="/listing">
                  <img src="img/categorie/2.svg" className="img-fluid px-2" />
                  <p className="m-0 pt-2 text-muted text-center">Fruits</p>
                </a>
              </div>
            </div>
            <div className="col p-1">
              <div className="bg-white shadow-sm rounded text-center px-2 py-3 c-it">
                <a href="/listing">
                  <img src="img/categorie/3.svg" className="img-fluid px-2" />
                  <p className="m-0 pt-2 text-muted text-center">Meat</p>
                </a>
              </div>
            </div>
            <div className="col pr-0 pl-1 py-1">
              <div className="bg-white shadow-sm rounded text-center px-2 py-3 c-it">
                <a href="/listing">
                  <img src="img/categorie/4.svg" className="img-fluid px-2" />
                  <p className="m-0 pt-2 text-muted text-center">Seafood</p>
                </a>
              </div>
            </div>
          </div>
          <div className="row m-0">
            <div className="col pl-0 pr-1 py-1">
              <div className="bg-white shadow-sm rounded text-center px-2 py-3 c-it">
                <a href="/listing">
                  <img src="img/categorie/5.svg" className="img-fluid px-2" />
                  <p className="m-0 pt-2 text-muted text-center">
                    Milk &amp; Egg
                  </p>
                </a>
              </div>
            </div>
            <div className="col p-1">
              <div className="bg-white shadow-sm rounded text-center px-2 py-3 c-it">
                <a href="/listing">
                  <img src="img/categorie/6.svg" className="img-fluid px-2" />
                  <p className="m-0 pt-2 text-muted text-center">Bread</p>
                </a>
              </div>
            </div>
            <div className="col p-1">
              <div className="bg-white shadow-sm rounded text-center px-2 py-3 c-it">
                <a href="/listing">
                  <img src="img/categorie/7.svg" className="img-fluid px-2" />
                  <p className="m-0 pt-2 text-muted text-center">Frozen</p>
                </a>
              </div>
            </div>
            <div className="col pr-0 pl-1 py-1">
              <div className="bg-white shadow-sm rounded text-center px-2 py-3 c-it">
                <a href="/listing">
                  <img src="img/categorie/8.svg" className="img-fluid px-2" />
                  <p className="m-0 pt-2 text-muted text-center">Organic</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
