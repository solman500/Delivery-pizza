import "../styles/checkout.css";
import { AiFillCheckCircle } from "react-icons/ai";
import CommonSection from "../components/UI/common-section/CommonSection";
import { Container, Row, Col, ListGroupItem, ListGroup } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import { useSelector } from "react-redux";
import'../styles/checkout.css'
import { useState } from "react";
const Checkout = () => {
  const [enterName,setEnterName]=useState('')
  const [enterEmail,setEnterEmail]=useState('')
  const [enterPhone,setEnterPhone]=useState('')
  const [enterCity,setEnterCity]=useState('')
  const [enterCountry,setEnterCountry]=useState('')
  const shippingInfo =  []
  const [enterPostalCode,setEnterPostalCode]=useState('')

  const cartTotalAmount = useSelector((state) => state.cart.totalAmount);
  const shippingCost = 30;
  const totalAmount = cartTotalAmount + Number(shippingCost);

  const submitHandler=e=>{
  e.preventDefault()
  const userShippingAddress={
    name:enterName,
    email:enterEmail,
    phone:enterPhone,
    country:enterCountry,
    city:enterCity,
    postalCode:enterPostalCode

  };
  shippingInfo.push(userShippingAddress)
}
  return (
    <Helmet title="Checkout">
      <CommonSection title="Checkout" />
      <section>
        <Container>
          <Row>
            <Col lg="8" md="6">
              <h6 className="mb-4">Shipping Address</h6>
              <form className="checkout__form" onSubmit={submitHandler}>
                <div className="form__group">
                  <input type="text" id="name" placeholder="Enter Your Name" required onChange={e=>setEnterName(e.target.value)}/>
                </div>

                <div className="form__group">
                  <input
                    type="email"
                    id="name"
                    placeholder="Enter Your Email"
                    required onChange={e=>setEnterEmail(e.target.value)}
                  />
                </div>

                <div className="form__group">
                  <input type="number" id="name" placeholder="Phone number" required onChange={e=>setEnterPhone(e.target.value)}/>
                </div>

                <div className="form__group">
                  <input type="text" id="name" placeholder="Enter Your Country" required onChange={e=>setEnterCountry(e.target.value)}/>
                </div>

                <div className="form__group">
                  <input type="text" id="name" placeholder="Enter Your City" required onChange={e=>setEnterCity(e.target.value)}/>
                </div>

                <div className="form__group">
                  <input type="number" id="name" placeholder="Postal Code" required onChange={e=>setEnterPostalCode(e.target.value)} />
                </div>
              <button type='submit' className="addTOCart__btn">Payment</button>
              </form>
            </Col>

            <Col lg="4" md="6">

              <div className="checkout__bill"></div>
              <h6 className="d-flex align-items-center justify-content-between mb-3">
                Subtotal:$<span>{cartTotalAmount}</span>
              </h6>
              <h6 className="d-flex align-items-center justify-content-between mb-3">
                Shipping:$<span>{shippingCost}</span>
              </h6>

              <div className="checkout__total">
                <h5 className="d-flex align-items-center justify-content-between">
                  Total:<span>{totalAmount}</span>
                </h5>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Checkout;
