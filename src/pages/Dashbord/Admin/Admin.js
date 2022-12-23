import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import '../Dashbord.css'

const Admin = () => {

    const { user } = useContext(AuthContext)
    return (
        <>
            <div className="tab_info">
                <table class="table table-striped custab">
                    <thead>
                        {/* <a href="#" class="btn btn-primary btn-xs pull-right"><b>+</b> Add new categories</a> */}
                        <tr>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Parent ID</th>
                            <th class="text-center">Action</th>
                        </tr>
                    </thead>
                    {/* <tr>
                        <td>1</td>
                        <td>News</td>
                        <td>News Cate</td>
                        <td class="text-center"><a class='btn btn-info btn-xs' href="#"><span class="glyphicon glyphicon-edit"></span> Edit</a> <a href="#" class="btn btn-danger btn-xs"><span class="glyphicon glyphicon-remove"></span> Del</a></td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Products</td>
                        <td>Main Products</td>
                        <td class="text-center"><a class='btn btn-info btn-xs' href="#"><span class="glyphicon glyphicon-edit"></span> Edit</a> <a href="#" class="btn btn-danger btn-xs"><span class="glyphicon glyphicon-remove"></span> Del</a></td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Blogs</td>
                        <td>Parent Blogs</td>
                        <td class="text-center"><a class='btn btn-info btn-xs' href="#"><span class="glyphicon glyphicon-edit"></span> Edit</a> <a href="#" class="btn btn-danger btn-xs"><span class="glyphicon glyphicon-remove"></span> Del</a></td>
                    </tr> */}
                </table>
                {/* {
                    users.map((user, i)=><tr key={user._id}></tr>)
                } */}
            </div>
        </>
    );
};

export default Admin;