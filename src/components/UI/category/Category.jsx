import React from 'react'
import {Row,Col, Container}from'reactstrap'
import categoryImg01 from'../../../assets/images/category-01.png'
import categoryImg02 from'../../../assets/images/category-02.png'
import categoryImg03 from'../../../assets/images/category-03.png'
import categoryImg04 from'../../../assets/images/category-04.png'

import'../../../styles/category.css'

const categoryData= [
{
      display:'fast Food',
      imgUrl:categoryImg01
},
{
    display:'Pizza',
    imgUrl:categoryImg02
},
{
    display:'AsianFood',
    imgUrl: categoryImg03
},
{
    display:'Row Meat',
    imgUrl: categoryImg04
}

]

const Category=()=> {
  return <Container>
    <Row>
    {
  categoryData.map((item, index) => (
    <Col lg='3' md='4' sm='6' xs='6' className='mb-4' key={index}>
      <div className="category__item d-flex align-items-center gp-2">
        <div className="category__img">
          <img src={item.imgUrl} alt="categoryImage" />
        </div>
        <h6>{item.display}</h6>
      </div>
    </Col>
  ))
}
        <Col lg='3' md='4'></Col>
    </Row>
  </Container>
  
    
  
};

export default Category
