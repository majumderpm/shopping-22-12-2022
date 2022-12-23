import React, { useContext } from 'react';
import { Navbar } from 'react-bootstrap';
import { Link, Outlet } from 'react-router-dom';
import Footer from '../shered/Footer';
import Header from '../shered/Header';
import useAdmin from '../hooks/useAdmin';
import { AuthContext } from '../contexts/AuthProvider/AuthProvider';
// import Navbar from '../Pages/Shared/Navbar/Navbar';

const DashbordLayout = () => {
    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email)
    return (
        <div>
          <Header></Header>
    
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 text-base-content">
                        <li><Link to="/dashboard">My Appointments</Link></li>
                        {
                            isAdmin && <>
                                <li><Link to="/dashboard/allusers">All users</Link></li>
                                <li><Link to="/dashboard/adddoctor">Add A Doctor</Link></li>
                                <li><Link to="/dashboard/managedoctors">Manage Doctors</Link></li>
                            </>
                        }

                    </ul>

                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default DashbordLayout;