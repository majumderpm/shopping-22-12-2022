import React, { useContext, useEffect, useState } from 'react';
import { Col, Nav, Navbar, Row, Tab } from 'react-bootstrap';
import { Link, Outlet } from 'react-router-dom';
import Footer from '../shered/Footer';
import Header from '../shered/Header';
import useAdmin from '../hooks/useAdmin';
import { AuthContext } from '../contexts/AuthProvider/AuthProvider';
// import Navbar from '../Pages/Shared/Navbar/Navbar';
import '../../src/pages/Dashbord/Dashbord.css';

const DashbordLayout = () => {
    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email)

    const [currentUser, setcurrentUser] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/users/${user?.email}`)
            .then(res => res.json())
            .then(data => setcurrentUser(data))
            .catch(error => console.log(error))

    }, [])
    // console.log(currentUser);


    const handelMyOreder = id => {
        const token = localStorage.getItem('accessToken')

        fetch(`https://resale-backend.vercel.app/singleuserOrder`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `bearer ${token}`,
          },
        })
          .then(res => res.json())
          .then(data => {
            
          })
          .catch(error => console.log(error))
      }
    //   console.log(localStorage.getItem('accessToken'));

      useEffect(() => {
        handelMyOreder()
      }, [user])


    return (
        <div>
            <Header></Header>

            <div className="drawer drawer-mobile">

              <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                    <Row>
                        <Col sm={3}>
                            <Nav variant="pills" className="flex-column">
                                {/* <Nav.Item>
                                    <div eventKey="first"><Link to="/dashbord/allusers" className='all_tab'>All users</Link></div>
                                </Nav.Item>
                                <Nav.Item>
                                    <div eventKey="first"><Link to="/dashbord/allbuyers" className='all_tab'>All Buyer</Link></div>
                                </Nav.Item>
                                <Nav.Item>
                                    <div eventKey="first"><Link to="/dashbord/allsellers" className='all_tab'>All Seller</Link></div>
                                </Nav.Item> */}
                                <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                    {
                        currentUser.role === "admin" ? <>
                        <li eventKey="first"> <Link to="/dashbord/allusers">All Users</Link> </li>
                            <li eventKey="first"> <Link to="/dashbord/allbuyers">All Buyers</Link> </li>
                            <li eventKey="first"> <Link to="/dashbord/allsellers">All Sellers</Link> </li>
                        </> : <>
                            {
                                currentUser.role === "seller" ? <>
                                    <li eventKey="first"> <Link to="/dashbord/myproducts">My Products</Link> </li>
                                    <li eventKey="first"> <Link to="/dashbord/addProduct">Add Product</Link> </li>
                                    <li eventKey="first"> <Link to="/dashbord/mybuyers">My Buyers</Link> </li>
                                </> : <>
                                    <li eventKey="first"> <Link to="/dashbord/myorders">My Orders</Link> </li>
                                    <li eventKey="first"> <Link to="/dashbord/mywishlist">My Wishlist</Link> </li>
                                </>
                            }
                        </>
                    }
                </ul>
                            </Nav>
                        </Col>
                        <Col sm={9}>
                        <Outlet></Outlet>
                        </Col>
                    </Row>
                </Tab.Container> 
                
            </div>
            <Footer></Footer>
        </div>
    );
};

export default DashbordLayout;