import React, { useEffect, useState } from 'react';
// import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';
import Header from '../../shered/Header';
import CartList from '../CartList/CartList';


const SingleModalProduct = ({handleClose, show, id, addToCart }) => {

  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  const handelCartClick = id =>{
    navigate(`/api/singleproduct/${id}`);
    console.log("click sucessfull");
}







    const [modalItem, setModalItem] = useState(null);

    useEffect(() => {
        fetch(`https://resale-backend.vercel.app/singleproduct/${id}`).then(res => res.json()).then(data => setModalItem(data));
    }, [id]);
    return (
     
        <Modal show={show} onHide={handleClose} size="xl" aria-labelledby="contained-modal-title-vcenter" centered>
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          {/* {
                product.map((productItem, productIndex) => { */}

            <div className="product-detail-area section-space">
              <div className="container">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="product-detail-thumb me-lg-6">
                      <img src={modalItem?.image} alt="" />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="product-detail-content">
                      <h2 className="product-detail-title mt-n1 me-10">{modalItem?.title}</h2>
                      <div className="product-detail-price">$ {modalItem?.price}</div>
                      <div className="product-detail-review">
                        <div className="product-detail-review-icon">
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star-half-o"></i>
                        </div>
                        <p className="product-detail-review-show">( 1 Review )</p>
                      </div>
                      <p className="product-detail-desc">{modalItem?.description}</p>
                      <div className="mb-3">

                        <button   onClick={() => handelCartClick(id)} className="product-detail-cart-btn" type="button" data-bs-toggle="modal" data-bs-target="#action-CartAddModal">
                        Add to cart
                        
                        </button>
                        {/* <button className="product-detail-cart-btn" type="button" data-bs-toggle="modal" data-bs-target="#action-CartAddModal">Add to cart</button> */}
                        {/* <button className="product-detail-cart-btn" 
                          whenClicked={() => console.log('I just got clicked')}
                          buttonText="Some Button"
                          isDisabled={false}></button> */}
                        
                          </div>

                      <ul className="product-detail-meta">
                        <li><span>condition:</span>{modalItem?.condition}</li>
                        <li><span>location:</span>{modalItem?.location}</li>
                        {/* <li><span>Tag</span> Electronic</li> */}
                      </ul>
                    </div>
                  </div>
                </div>



              </div>
            </div>
          {/* } */}
          </Modal.Body>
          {/* <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer> */}
        </Modal>
    );
};

export default SingleModalProduct;