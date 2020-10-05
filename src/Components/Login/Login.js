import React, { useContext } from 'react';
import logo from '../../logos/Group 1329.png';
import google from '../../logos/google.png'
// import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
import './Login.css'

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }
    
    const handleGoogleSignIn=()=>{
        const googleProvider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(googleProvider).then(function (result) {
            const { displayName, email } = result.user;
            const signedInUser = { name: displayName, email }
            setLoggedInUser(signedInUser);
            history.replace(from);
        }).catch(function (error) {
        });
    }

    return (
        <div >
            <img src={logo} alt="" style={{ width: "250px" }} className="m-3"></img>
            <h4 className="text-center mt-5">Login With Google</h4>
             <div className="login-form mx-auto">
            <div className="social-btn  ml-3 m-2 p-2" onClick={handleGoogleSignIn}>
                <div className="d-flex">
                    <div className="text-left mr-5">
                        <img src={google} alt="google" className="img img-fluid social-img text-left" />
                    </div>
                    <div className="ml-5"> Continue with Google</div>
                </div>
            </div>
            <p className="text-center mt-2">Don't have an account? <strong className="login-tag text-warning">Create an account</strong> </p>
        </div>
        </div>
    );
};

export default Login;