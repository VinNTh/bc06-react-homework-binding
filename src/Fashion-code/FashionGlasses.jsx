import React, { Component } from "react";

class FashionGlasses extends Component {
  state = {
    glassesImg: "./img/glassesImage/v1.png",
    glassesCost: "$30",
    glassesName: "GUCCI G8850U",
    btnChoiceColorList: [
      {
        name: "v2",
        imgSrc: "./img/glassesImage/v2.png",
      },
      {
        name: "v3",
        imgSrc: "./img/glassesImage/v3.png",
      },
      {
        name: "v4",
        imgSrc: "./img/glassesImage/v4.png",
      },
      {
        name: "v5",
        imgSrc: "./img/glassesImage/v5.png",
      },
      {
        name: "v6",
        imgSrc: "./img/glassesImage/v6.png",
      },
      {
        name: "v7",
        imgSrc: "./img/glassesImage/v7.png",
      },
      {
        name: "v8",
        imgSrc: "./img/glassesImage/v8.png",
      },
      {
        name: "v9",
        imgSrc: "./img/glassesImage/v9.png",
      },
    ],
  };
  handleClick = (color) => {
    console.log(color);
    let urlImage = "";
    let cost = "";
    let nameProduct = "";
    switch (color) {
      case "v1":
        urlImage = "./img/glassesImage/v1.png";
        cost = "$30";
        nameProduct = "GUCCI G8850U";
        break;
      case "v2":
        urlImage = "./img/glassesImage/v2.png";
        cost = "$30";
        nameProduct = "DIOR D6700HQ";
        break;
      case "v3":
        urlImage = "./img/glassesImage/v3.png";
        cost = "$35";
        nameProduct = "DIOR D65005u";
        break;
      case "v4":
        urlImage = "./img/glassesImage/v4.png";
        cost = "$40";
        nameProduct = "PRADA P9700";
        break;
      case "v5":
        urlImage = "./img/glassesImage/v5.png";
        cost = "$66";
        nameProduct = "DIOR F8750";
        break;
      case "v6":
        urlImage = "./img/glassesImage/v6.png";
        cost = "$77";
        nameProduct = "FENDI F8500";
        break;
      case "v7":
        urlImage = "./img/glassesImage/v7.png";
        cost = "$87";
        nameProduct = "FENDI F4300";
        break;
      case "v8":
        urlImage = "./img/glassesImage/v8.png";
        cost = "$40";
        nameProduct = "PRADA P9700";
        break;
      case "v9":
        urlImage = "./img/glassesImage/v9.png";
        cost = "$50";
        nameProduct = "GUCCI G8759H";
        break;
    }
    this.setState({
      glassesImg: urlImage,
      glassesCost: cost,
      glassesName: nameProduct,
    });
  };
  render() {
    return (
      <div>
        <section className="glasses-app bg-dark" style={{ height: "100vh" }}>
          <h2 className="text-center h2 text-white py-1">Glasses App</h2>
          <div className="d-flex justify-content-center align-items-center">
            <div className="container row">
              <section className="model d-flex justify-content-center col-5">
                <div
                  className="card text-left"
                  style={{ width: 300, position: "relative" }}
                >
                  <img
                    className="card-img-top"
                    src="./img/glassesImage/model.jpg"
                    alt="hinh model"
                  />
                  <img
                    src={this.state.glassesImg}
                    alt="kinh"
                    style={{
                      width: 170,
                      position: "absolute",
                      left: "50%",
                      transform: "translateX(-50%)",
                      top: "16%",
                    }}
                  />
                  <div className="card-body">
                    <span className="card-title badge-danger h3 px-2 rounded">
                      {this.state.glassesCost}
                    </span>
                    <p className="card-text mt-2">{this.state.glassesName}</p>
                  </div>
                </div>
              </section>
              <section className="glasses__list mt-4 d-flex justify-content-around flex-wrap col-7">
                <div className="col-3">
                  <button
                    className="btn btn-outline-secondary"
                    onClick={() => this.handleClick("v1")}
                  >
                    <img
                      src="./img/glassesImage/v1.png"
                      alt="hinh"
                      style={{ width: 100, borderRadius: 20 }}
                    />
                  </button>
                </div>
                <div className="col-3">
                  <button
                    className="btn btn-outline-secondary"
                    onClick={() => this.handleClick("v2")}
                  >
                    <img
                      src="./img/glassesImage/v2.png"
                      alt="hinh"
                      style={{ width: 100, borderRadius: 20 }}
                    />
                  </button>
                </div>
                <div className="col-3">
                  <button
                    className="btn btn-outline-secondary"
                    onClick={() => this.handleClick("v3")}
                  >
                    <img
                      src="./img/glassesImage/v3.png"
                      alt="hinh"
                      style={{ width: 100, borderRadius: 20 }}
                    />
                  </button>
                </div>
                <div className="col-3">
                  <button
                    className="btn btn-outline-secondary"
                    onClick={() => this.handleClick("v4")}
                  >
                    <img
                      src="./img/glassesImage/v4.png"
                      alt="hinh"
                      style={{ width: 100, borderRadius: 20 }}
                    />
                  </button>
                </div>
                <div className="col-3">
                  <button
                    className="btn btn-outline-secondary"
                    onClick={() => this.handleClick("v5")}
                  >
                    <img
                      src="./img/glassesImage/v5.png"
                      alt="hinh"
                      style={{ width: 100, borderRadius: 20 }}
                    />
                  </button>
                </div>
                <div className="col-3">
                  <button
                    className="btn btn-outline-secondary"
                    onClick={() => this.handleClick("v6")}
                  >
                    <img
                      src="./img/glassesImage/v6.png"
                      alt="hinh"
                      style={{ width: 100, borderRadius: 20 }}
                    />
                  </button>
                </div>
                <div className="col-3">
                  <button
                    className="btn btn-outline-secondary"
                    onClick={() => this.handleClick("v7")}
                  >
                    <img
                      src="./img/glassesImage/v7.png"
                      alt="hinh"
                      style={{ width: 100, borderRadius: 20 }}
                    />
                  </button>
                </div>
                <div className="col-3">
                  <button
                    className="btn btn-outline-secondary"
                    onClick={() => this.handleClick("v8")}
                  >
                    <img
                      src="./img/glassesImage/v8.png"
                      alt="hinh"
                      style={{ width: 100, borderRadius: 20 }}
                    />
                  </button>
                </div>
                <div className="col-3">
                  <button
                    className="btn btn-outline-secondary"
                    onClick={() => this.handleClick("v9")}
                  >
                    <img
                      src="./img/glassesImage/v9.png"
                      alt="hinh"
                      style={{ width: 100, borderRadius: 20 }}
                    />
                  </button>
                </div>
              </section>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default FashionGlasses;
