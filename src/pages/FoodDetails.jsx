import React, { useEffect } from "react";
import products from "../assets/fake-data/products";
import { useParams } from "react-router-dom";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";
import { Container, Row, Col, ListGroupItem, ListGroup } from "reactstrap";
import ProductCard from "../components/UI/product-card/ProductCard";
import "../styles/all-foods.css";
import ReactPaginate from "react-paginate";
import "../styles/pagination.css";
import { useState } from "react";
import "../styles/product-details.css";
import { useDispatch } from "react-redux";

// import productImg from "../assets/images/product_01.1.jpg";
import { cartActions } from "../store/shopping-cart/cartSlice.js";
const FoodDetails = () => {
  const [tab, setTab] = useState("desc");
  const { id } = useParams();
  const product = products.find((product) => product.id === id);
  const [previewImg, setPreviewImg] = useState(product.image01);
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredName, setEnteredName] = useState("");
  const [reviewMsg, setReviewMsg] = useState("");
  const { title, price, category, desc, image01 } = product;
  const relatedProduct = products.filter((item) => category === item.category);
  const dispatch = useDispatch();

  const addItem = () => {
    dispatch(
      cartActions.addItem({
        id,
        title,
        price,
        image01,
      })
    );

    const submitHandler =e=>{
      e.preventDefault()
    }
    useEffect(() => {
      setPreviewImg(product.image01);
    }, [product]);

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [product]);
  };
  return (
    <Helmet title="Product-Details">
      <CommonSection title={title} />
      <section>
        <Container>
          <Row>
            <Col lg="2" md="2">
              <div className="product__images">
                <div
                  className="img__item mb-3"
                  onClick={() => setPreviewImg(product.image01)}
                >
                  <img src={product.image01} alt="image" className="w-50" />
                </div>
                <div
                  className="img__item mb-3"
                  onClick={() => setPreviewImg(product.image02)}
                >
                  <img src={product.image02} alt="image" className="w-50" />
                </div>
                <div
                  className="img__item mb-3"
                  onClick={() => setPreviewImg(product.image03)}
                >
                  <img src={product.image03} alt="image" className="w-50" />
                </div>
              </div>
            </Col>

            <Col lg="4" md="4" className="mb-5">
              <div className="product__main-img">
                <img src={previewImg} alt="image" className="w-100" />
              </div>
            </Col>

            <Col lg="6" md="6" className="mb-5">
              <div className="single__product-content">
                <h2 className="product__title mb-3">{title}</h2>
                <p className="product__price ">
                  {" "}
                  Price:<span>${price}</span>
                </p>
                <p className="category mb-5">
                  Category:<span>{category}</span>
                </p>

                <button onClick={addItem} className="addTOCart__btn">
                  Add to Cart
                </button>
              </div>
            </Col>

            <Col lg="12">
              <div className="tabs d-flex align-items-center gap-5 py-3">
                <h6
                  className={`${tab === "desc" ? "tab__active" : ""}`}
                  onClick={() => setTab("desc")}
                >
                  Description
                </h6>
                <h6
                  className={`${tab === "rev" ? "tab__active" : ""}`}
                  onClick={() => setTab("rev")}
                >
                  Review
                </h6>
              </div>

              {tab === "desc" ? (
                <div className="tab__content">
                  <p>{desc}</p>
                </div>
              ) : (
                <div className="tab__form mb-3">
                  <div className="review pt-5">
                    <p className="user__name mb-0">ahmed soliman</p>
                    <p className="user__email">ahmedsolliman@gmail.com</p>
                    <p className="feedback__text">Great Product</p>
                  </div>

                  <div className="review">
                    <p className="user__name mb-0">ahmed soliman</p>
                    <p className="user__email">ahmedsolliman@gmail.com</p>
                    <p className="feedback__text">Great Product</p>
                  </div>

                  <div className="review">
                    <p className="user__name mb-0">ahmed soliman</p>
                    <p className="user__email">ahmedsolliman@gmail.com</p>
                    <p className="feedback__text">Great Product</p>
                  </div>

                  <form className="form " onSubmit={submitHandler}>
                    <div className="form__group">
                      <input
                        type="text"
                        required
                        placeholder="Enter your Name"
                        onChange={(e) => setEnteredName(e.target.value)}
                      />
                    </div>
                    <div className="form__group">
                      <input
                        type="text"
                        required
                        placeholder="Enter your email"
                        onChange={(e) => setEnteredEmail(e.target.value)}
                      />
                    </div>
                    <div className="form__group">
                      <textarea
                      required
                        row={5}
                        type="text"
                        placeholder="Enter your Msg Review"
                        onChange={(e) => setReviewMsg(e.target.value)}
                      />
                    </div>

                    <button type="submit" className="addTOCart__btn">
                      Submit
                    </button>
                  </form>
                </div>
              )}
            </Col>

            <Col lg="12" className="mb-5">
              <h2 className="related__Product-title">You Might also Like</h2>
            </Col>

            {relatedProduct.map((item) => (
              <Col lg="3" md="4" sm="6" xs="6" key={item.id} className="mb-4">
                {" "}
                <ProductCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default FoodDetails;
