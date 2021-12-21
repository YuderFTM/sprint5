import React from "react";
import Footer from "./Footer.jsx";
// import Navig from "./Navig.jsx";
import Nav from "../components/Navig.jsx";
import banner from "../images/bannerajedrez1.jpg";
import img1 from "../images/ajed-1.jpg";
import img2 from "../images/ajed-2.jpg";
import img3 from "../images/ajed-3.jpg";
import mision from "../images/mision1.png";
import vision from "../images/vision.jpg";
import valores from "../images/Valores.png";

import "../style/principal.css";
// import '../js/scripts1.js';

const Principal = () => {
  return (
    <div>
      <div className="principal">
        <Nav />

        <body className="body">
          <nav>
            <div className="banner row featurette ">
              <div className="col-md-12">
                
                    <img className="imgbanner" src={banner} alt="" />
                 
                
              </div>
            </div>

            <div
              id="myCarousel"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#myCarousel"
                  data-bs-slide-to="0"
                  className="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#myCarousel"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#myCarousel"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <svg
                    className="bd-placeholder-img"
                    width="100%"
                    height="100%"
                    // xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    preserveAspectRatio="xMidYMid slice"
                    focusable="false"
                  >
                    <rect width="100%" height="100%" fill="#C9C9C9" />
                  </svg>

                  <div className="container">
                    <div className="carousel-caption text-start">
                        <img className="imgcar" src={img3} alt="" />
                      {/* <p><a className="btn btn-lg btn-primary" href="#">Sign up today</a></p> */}
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <svg
                    className="bd-placeholder-img"
                    width="100%"
                    height="100%"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    preserveAspectRatio="xMidYMid slice"
                    focusable="false"
                  >
                    <rect width="100%" height="100%" fill="#C9C9C9" />
                  </svg>

                  <div className="container">
                    <div className="carousel-caption tamaño">
                    <img className="imgcar" src={img1} alt="" />                     
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <svg
                    className="bd-placeholder-img"
                    width="100%"
                    height="100%"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    // preserveAspectRatio="xMidYMid slice"
                    focusable="false"
                  >
                    <rect width="100%" height="100%" fill="#C9C9C9" />
                  </svg>

                  <div className="container ">
                    <div className="carousel-caption tamaño">
                    <img className="imgcar" src={img2} alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#myCarousel"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#myCarousel"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>

            {/* Marketing messaging and featurettes
      ================================================== */}
            {/* Wrap the rest of the page in another container to center all the content. */}

            <div className="container marketing">
              {/* Three columns of text below the carousel */}
              <div className="row">
                <div className="col-lg-4">
               
                  <img className="bd-placeholder-img rounded-circle"
                    width="140"
                    height="140"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    aria-label="Placeholder: 140x140"
                    preserveAspectRatio="xMidYMid slice"
                    focusable="false" src={vision} alt="" />

                  <h2>VISION</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Tempore, recusandae! Architecto ea nostrum omnis nihil
                    impedit quisquam vel distinctio, nam eius minus, dolor quod
                    vero a corrupti repellat tenetur et!
                  </p>
                </div>
                {/* /.col-lg-4 */}
                <div className="col-lg-4">
                  
                  <img className="bd-placeholder-img rounded-circle"
                    width="140"
                    height="140"xmlns="http://www.w3.org/2000/svg"
                    role="img" aria-label="Placeholder: 140x140"
                    preserveAspectRatio="xMidYMid slice"
                    focusable="false" src={mision} alt="" />
                 
                  <h2>MISION</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Nam harum veritatis dolor impedit quam voluptatem
                    perferendis aspernatur. Magnam eveniet consequatur, tenetur
                    neque, incidunt doloribus suscipit, itaque obcaecati
                    voluptate voluptas esse!
                  </p>
                </div>
                {/* /.col-lg-4 */}
                <div className="col-lg-4">
                <img className="bd-placeholder-img rounded-circle"
                    width="180"
                    height="180"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    aria-label="Placeholder: 140x140"
                    preserveAspectRatio="xMidYMid slice"
                    focusable="false" src={valores} alt="" />

                  <h2>Valores</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Incidunt, explicabo recusandae sunt repellat odio natus
                    illum corporis quasi. Distinctio non recusandae voluptate ex
                    ducimus veniam ullam suscipit modi consequatur! Error?
                  </p>
                </div>
                {/* /.col-lg-4 */}
              </div>
              {/* /.row */}

              {/* START THE FEATURETTES */}

              <hr className="featurette-divider"></hr>

             

              {/* /END THE FEATURETTES */}
            </div>

            <script
              src="/docs/5.1/dist/js/bootstrap.bundle.min.js"
              integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
              crossorigin="anonymous"
            ></script>
          </nav>
        </body>
      </div>
      <Footer />
    </div>
  );
};

export default Principal;
