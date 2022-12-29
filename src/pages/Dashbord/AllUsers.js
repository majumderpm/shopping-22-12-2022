// import { useQuery } from '@tanstack/react-query';
import { useQueries } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import { Col } from 'react-bootstrap';
import toast from 'react-hot-toast';

const AllUsers = () => {
  // const { data: users = [], refetch } = useQueries({
  //   queryKey: ['users'],
  //   queryFn: async () => {
  //     const res = await fetch('https://resale-backend.vercel.app/users');
  //     const data = await res.json();
  //     return data;
  //   }
  // });

  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    fetch(`https://resale-backend.vercel.app/allusers`, {
      headers: {
        authorization: `bearer ${localStorage.getItem('accessToken')}`
      }
    })
      .then(res => res.json())
      .then(data => {
        // if (data.modifiedCount > 0) {
        //   toast.success('Make admin successful.')
        //   refetch();
        // }
        setAllUsers(data);
        console.log(data);
      })
  }, [])


  const handleMakeAdmin = id => {
    fetch(`https://resale-backend.vercel.app/users/admin/${id}`, {
      method: 'PUT',
      headers: {
        authorization: `bearer ${localStorage.getItem('accessToken')}`
      }
    })
      .then(res => res.json())
      .then(data => {
        if (data.modifiedCount > 0) {
          toast.success('Make admin successful.')
          // refetch();
        }
      })
  }

  return (
    <div>
      <Col sm={9}>
        <h2 className="text-3xl">All Users</h2>
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
              {
                allUsers.map((user, i) => <tr key={user._id}>
                  <th>{i + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user?.role !== 'admin' && <button onClick={() => handleMakeAdmin(user._id)} className='btn btn-xs btn-primary'>Make Admin</button>}</td>
                  <td><button className='btn btn-xs btn-danger'>Delete</button></td>
                </tr>)
              }

            </tbody>
          </table>
        </div>
      </Col>
    </div>
  );
};

export default AllUsers;