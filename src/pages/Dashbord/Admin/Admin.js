import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import '../Dashbord.css'

const Admin = () => {

    const {user} =  useContext(AuthContext)
    return (
        <>
            <div className="tab_info">
                <div className="row">
                    <div className="col-md-12">
                        <div className="panel panel-primary">
                           
                            <div className="panel-body">
                                <ul className="list-group">
                                    <li className="list-group-item">
                                        <div className="checkbox">
                                            <input type="checkbox" id="checkbox" className="allCheck" />
                                            <label for="checkbox">
                                                List group item heading
                                            </label>
                                        </div>
                                        <div className="pull-right action-buttons">
                                            <i className="fa-solid fa-trash"></i>
                                        </div>
                                    </li>
                                    <li className="list-group-item">
                                        <div className="checkbox">
                                            <input type="checkbox" id="checkbox2" className="allCheck" />
                                            <label for="checkbox2">
                                                List group item heading 1
                                            </label>
                                        </div>
                                        <div className="pull-right action-buttons">
                                            <i className="fa-solid fa-trash"></i>
                                        </div>
                                    </li>
                                    <li className="list-group-item">
                                        <div className="checkbox">
                                            <input type="checkbox" id="checkbox3" className="allCheck" />
                                            <label for="checkbox3">
                                                List group item heading 2
                                            </label>
                                        </div>
                                        <div className="pull-right action-buttons">
                                            <i className="fa-solid fa-trash"></i>
                                        </div>
                                    </li>
                                    <li className="list-group-item">
                                        <div className="checkbox">
                                            <input type="checkbox" id="checkbox4" className="allCheck" />
                                            <label for="checkbox4">
                                                List group item heading 3
                                            </label>
                                        </div>
                                        <div className="pull-right action-buttons">
                                            <i className="fa-solid fa-trash"></i>
                                        </div>
                                    </li>
                                    <li className="list-group-item">
                                        <div className="checkbox">
                                            <input type="checkbox" id="checkbox5" className="allCheck" />
                                            <label for="checkbox5">
                                                List group item heading 4
                                            </label>
                                        </div>
                                        <div className="pull-right action-buttons">
                                            <i className="fa-solid fa-trash"></i>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Admin;