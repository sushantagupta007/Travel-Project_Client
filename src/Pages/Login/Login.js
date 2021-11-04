import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from './../../Hooks/useFirebase';

const Login = () => {

    const {googleSign} = useFirebase(); 
   

    return (
        <div className="border w-50 mx-auto p-4">
            <h2 className="text-center border-bottom"> Login Here </h2>
            <div className="d-flex justify-content-evenly">
                <button onClick={googleSign} type="button" className="btn btn-warning"> Google Login In  </button>
                <button type="button" className="btn btn-danger"> Facebook Login In  </button>
                <button type="button" className="btn btn-info"> Twitter Login In  </button>
            </div>
            <div className="text-center my-2">
                <p> Already Reistered? If not then follow <Link to="/registration">Registration</Link></p>
            </div>
        </div>
    );
};

export default Login;