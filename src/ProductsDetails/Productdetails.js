import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import CheckOut from "../pages/CheckOut/CheckOut";
import SingleModalProduct from "../pages/SingleProduct/SingleModalProduct";
import Header from "../shered/Header";
// import useFetchApi from "../hooks/useFetchApi";

const Productdetails = () => {

  const [cart, setCart] = useState([])
  const [showCart, setShowCart] = useState(false)

  const addToCart = (data) => {
    setCart([...cart, { ...data, quantity: 1 }])
  }

  const handleShow = (value) => {
    setShowCart(value)
  }

  const { id } = useParams();


  const [item, setItem] = useState([]);
  console.log(item);

  //    
  // ===================== ****** 1st stape ****
  // const getItem = async () => {
  //   const res = await fetch(`https://resale-backend.vercel.app/products/${id}`);
  // console.log(res);
  // const data = await res.json();
  // console.log(data)
  // return data;
  // setItem(await res.json());
  // }

  useEffect(() => {
    const getItem = async () => {
      const data = await fetch(`https://resale-backend.vercel.app/products/${id}`).then(res => {
        return res.json();
      });
      setItem(data);
    }
    getItem();
  }, [id]);


  return (
    <>
      <h1>{item.title}</h1>
      <Header count={cart.length}
          handleShow={handleShow} ></Header>

          {
          showCart ?<CheckOut cart={cart} ></CheckOut> :
          <SingleModalProduct product={id} addToCart={addToCart} ></SingleModalProduct>
          }
    </>
  );
};

export default Productdetails;