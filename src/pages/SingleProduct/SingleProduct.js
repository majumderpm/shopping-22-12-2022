import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';
import './SingleProduct.css';
import SingleModalProduct from './SingleModalProduct';


const SingleProduct = ({ allproduct }) => {

  const [show, setShow] = useState(false);
  const { _id, image, title, price, status, description, condition, location } = allproduct;

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  return (
    <div className="col-sm-6 col-lg-6 col-xl-4 mb-6">
      <div className="product-item">
        <div className="product-item-thumb">
          {/* <Link to={`/productdetails/${_id}`}> */}
          <span onClick={handleShow}>  <img src={image} alt="" /></span>
          {/* </Link> */}
        </div>
        <SingleModalProduct
        show={show} 
        handleClose={handleClose}
        id={_id}
        ></SingleModalProduct>
        <span className="badges">{status}</span>
        <div className="product-item-action">
          <button
            type="button"
            className="product-action-btn action-btn-wishlist"
            data-bs-toggle="modal"
            data-bs-target="#action-WishlistModal"
          >
            <i className="fa-regular fa-heart"></i>
          </button>
          <button
            type="button"
            className="product-action-btn action-btn-compare"
            data-bs-toggle="modal"
            data-bs-target="#action-CompareModal"
          >
            <i className="fa-solid fa-shuffle"></i>
          </button>
          <button
            type="button"
            className="product-action-btn action-btn-quick-view"
            data-bs-toggle="modal"
            data-bs-target="#action-QuickViewModal"
          >
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
        <div className="product-item-info text-center pb-6">
          <h5 className="product-item-title mb-2">
            {title}
          </h5>
          <div className="product-item-price">
            $ {price}
            <span className="price-old">$260.00</span>
          </div>
          <div className="product-item-review-icon">
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;