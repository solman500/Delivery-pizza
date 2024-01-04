import Helmet from "../components/Helmet/Helmet.jsx";
import { Container, Row, Col, ListGroupItem, ListGroup } from "reactstrap";
import React from "react";
import { Link } from "react-router-dom";

import guyImg from "../assets/images/delivery-guy.png";
import "../styles/hero-section.css";
import "../styles/home.css";
import Category from "../components/UI/category/Category.jsx";
import featureImg01 from "../assets/images/service-01.png";
import featureImg02 from "../assets/images/service-02.png";
import featureImg03 from "../assets/images/service-03.png";
// import featureImg04 from "../assets/images/service-04.png";

import foodCategoryImg01 from "../assets/images/hamburger.png";
import foodCategoryImg02 from "../assets/images/pizza.png";
import foodCategoryImg03 from "../assets/images/bread.png";
import products from "../assets/fake-data/products.js";
import ProductCard from "../components/UI/product-card/ProductCard.jsx";
import { useEffect, useState } from "react";
import whyImg from "../assets/images/location.png";

import networkImg from "../assets/images/network.png";
import TestimonialSlider from "../components/UI/slider/TestimonialSlider.jsx";

const featureData = [
  {
    title: "Quike Delivery",
    imgUrl: featureImg01,
    desc: "the Fast delivery in egypt",
  },
  {
    title: "super Dine in",
    imgUrl: featureImg02,
    desc: "fast or die",
  },
  {
    title: "Easy pick Up",
    imgUrl: featureImg03,
    desc: "take it easy ",
  },
  // {
  //   title: "Quike Delivery",
  //   imgUrl: featureImg04,
  //   desc: "",
  // },
];

const Home = () => {
  const [categorys, setCategory] = useState("All");
  const [allProducts, setAllProducts] = useState(products);
  const [hotPizza, setHotPizza] = useState([]);
  // const [featu reData, setFeatureData] = useState([]);
  // const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    const filteredPizza = products.filter((item) => item.category === "Pizza");
    const slicePizza = filteredPizza.slice(0, 4);
    setHotPizza(slicePizza);
  }, []);

  useEffect(() => {
    if (categorys === "All") {
      setAllProducts(products);
    }

    if (categorys === "BURGER") {
      const filteredProducts = products.filter(
        (item) => item.category == "Burger"
      );

      setAllProducts(filteredProducts);
    }

    if (categorys === "PIZZA") {
      const filteredProducts = products.filter(
        (item) => item.category === "Pizza"
      );

      setAllProducts(filteredProducts);
    }

    if (categorys === "BREAD") {
      const filteredProducts = products.filter(
        (item) => item.category === "Bread"
      );

      setAllProducts(filteredProducts);
    }
  }, [categorys]);

  return (
    <Helmet title="Home">
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero__content">
                <h5 className="mb-3">Easy order & fast delivery</h5>
                <h1 className="mb-4 hero__title">
                  <span>Enjoy</span> your favorite Pizza
                </h1>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Eaque, aperiam.
                </p>

                <div className="hero__btns d-flex align-items-center gap-5 mt-4">
                  <button className="order__btn d-flex align-items-center justify-content-between ">
                    <Link to="/foods">
                      Order Now <i className="ri-arrow-right-s-line"></i>
                    </Link>
                  </button>

                  <button className="all__foods-btn d-flex align-items-center justify-content-between ">
                    <Link to="/foods">
                      See All Foods <i className="ri-arrow-right-s-line"></i>
                    </Link>
                  </button>
                </div>

                <div className="hero__service d-flex align-items-center gap-2">
                  <p className="d-flex align-items-center gap-2">
                    <span className="shipping__icon">
                      <i class="ri-car-line"></i>
                    </span>{" "}
                    No shipping charge{" "}
                  </p>

                  <p className="d-flex align-items-center gap-2 ms-2">
                    <span className="shipping__icon">
                      <i class="ri-shield-check-line"></i>
                    </span>{" "}
                    100% secure checkout{" "}
                  </p>
                </div>
              </div>
            </Col>

            <Col lg="6" md="6">
              <div className="hero__img">
                <img src={guyImg} alt="delivery-guy" className="w-100" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="pt-0">
        <Category />
      </section>

      <section className="pt">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h5 className="feature__subtitle mb-4">what we serve</h5>
              <h2 className="feature__title">Just Sit Back at Home</h2>
              <h2 className="feature__title">
                We Will <span>take Care </span>
              </h2>
              <p className="mb-1 mt-4 feature__text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
                natus itaque, id recusandae onsequuntur maiores! Assumenda ab
                possimus .
              </p>
              <p className="feature__text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
                natus itaque, id recusandae modi reiciendis consequuntur
                maiores! Assumenda ab possimus voluptates
              </p>
            </Col>

            {featureData.map((item, index) => (
              <Col lg="4" md="6" sm="6" key={index} className="mt-5">
                <div className="feature__item text-center px-5 py-3 ">
                  <img
                    src={item.imgUrl}
                    alt="featureImage"
                    className="w-25 mb-3"
                  />
                  <h5 className="fw-bold mb-3">{item.title}</h5>
                  <p>{item.desc}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="">
        <Container>
          <Row className="">
            <Col lg="12" className="text-center">
              <h2>Popular Food</h2>
            </Col>

            <Col lg="12" className="">
              <div className="food__category d-flex align-items-center justify-content-center gap-4">
                <button
                  className={`all__btn ${
                    categorys === "All" ? "foodBtnActive" : ""
                  }`}
                  onClick={() => setCategory("All")}
                >
                  All
                </button>


                <button
                  className={`d-flex align-items-center gap-2 ${
                    categorys === "BURGER" ? "foodBtnActive" : ""
                  }`}
                  onClick={() => setCategory("BURGER")}
                >
                  <img src={foodCategoryImg01} alt="hamporger" />
                  Burger
                </button>
                <button
                  className={`d-flex align-items-center gap-2 ${
                    categorys === "PIZZA" ? "foodBtnActive" : ""
                  }`}
                  onClick={() => setCategory("PIZZA")}
                >
                  <img src={foodCategoryImg02} alt="hamporger" />
                  Pizza
                </button>
                <button
                  className={`d-flex align-items-center gap-2 ${
                    categorys === "BREAD" ? "foodBtnActive" : ""
                  }`}
                  onClick={() => setCategory("BREAD")}
                >
                  <img src={foodCategoryImg03} alt="hamporger" />
                  Bread
                </button>
              </div>
            </Col>

            {allProducts.map((item) => (
              <Col lg="3" md="4" sm="6" xs="6" key={item.id} className="mt-5">
                <ProductCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="why__choose-us">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <img src={whyImg} alt="why test treat" className="w-100" />
            </Col>
            <Col lg="6" md="6">
              <div className="why__tasty-treat">
                <h2 className="tasty__treat-title mb-4">
                  why <span>Tasty Treat ?</span>
                </h2>

                <p className="tasty__treat-desc">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. At
                  ut beatae, amet debitis voluptate, numquam totam cumque
                  doloremque ab vel iusto, nam voluptatum repellendus? Repellat
                  aut fugiat doloremque laudantium reprehenderit.
                </p>

                <ListGroup className="mt-4">
                  <ListGroupItem className="border-0 ps-0">
                    <p className="choose__us-title d-flex align-items-center gap-2">
                      {" "}
                      <i class="ri-checkbox-circle-line"></i>Fresh and Tasty
                      Food
                    </p>
                    <p className="d-flex align-items-center gap-2">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Nihil modi enim eligendi ?
                    </p>
                  </ListGroupItem>

                  <ListGroupItem className="border-0 ps-0">
                    <p className="choose__us-title d-flex align-items-center gap-2">
                      {" "}
                      <i class="ri-checkbox-circle-line"></i>Quality support
                    </p>
                    <p className="choose__us-desc">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Nihil modi enim eligendi. Eius itaque nostrum voluptates
                      voluptatibus aliquam quibusdam voluptas placeat quisquam
                      optio ducimus nam, odio, molestiae quasi architecto eaque?
                    </p>
                  </ListGroupItem>

                  <ListGroupItem className="border-0 ps-0">
                    <p className="choose__us-title d-flex align-items-center gap-2">
                      {" "}
                      <i class="ri-checkbox-circle-line"></i>Order from any
                      Location
                    </p>
                    <p className="choose__us-desc  ">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Nihil molestiae quasi architecto eaque?
                    </p>{" "}
                  </ListGroupItem>
                </ListGroup>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5">
              <h2>Hot Pizza</h2>
            </Col>

            {hotPizza.map((item) => (
              <Col lg="3" md="4" key={item.id} className="mt-5">
                <ProductCard item={item} />
              </Col>
            ))}


          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="6" md="6" className="text-center mb-5">
              <div className="testimonial mb-5">
                <h5 className="testimonial__subtitle mb-4">Testimonial</h5>
                <h2 className="testimonial__title mb-4">
                  What Our <span>Customers</span>are saying{" "}
                </h2>
                <p className="testimonial__desc">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
                  quisquam!
                </p>

                <TestimonialSlider />
              </div>
            </Col>
            <Col lg="6" md="6" className="text-center mb-5">
              <img src={networkImg} alt="network" className="w-100" />
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
