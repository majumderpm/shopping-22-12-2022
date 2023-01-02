import React, { useEffect, useState } from 'react';
import useOrders from '../../../hooks/useOrders';
// import AuthContext from '../../../contexts/AuthProvider/AuthProvider';

const MyOrders = () => {
  // const {user} = useContext(AuthContext)
    const [myOrders, setmyOrders] = useState([]);


    console.log(myOrders);
    // const [orders, setOrder, orderloading] = useOrders(user?.email);
    const handelMyOreder = id => {
        const token = localStorage.getItem('accessToken')

        fetch(`http://localhost:5000/singleuserOrder`, {
        //   method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `bearer ${token}`,
          },
        })
          .then(res => res.json())
          .then(data => setmyOrders(data))
          .catch(error => console.log(error))
      }
      // console.log(localStorage.getItem('accessToken'));

      useEffect(() => {
        handelMyOreder()
      }, [])


    return (
        <>
             <h2 className="text-3xl">My Orders</h2>
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Email</th>
                <th>Admin</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {/* {
                myOrders && myOrders.map((user, i) => <tr key={user._id}>
                  <th>{i + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
    
                </tr>)
              } */}

            </tbody>
          </table>
        </div>
        </>
    );
};

export default MyOrders;