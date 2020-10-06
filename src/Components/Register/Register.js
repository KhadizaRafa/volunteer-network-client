import React, { useContext, useState } from 'react';
import logo from '../../logos/Group 1329.png';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from 'mdbreact';
import { UserContext } from '../../App';
import './Register.css'
import { Link, useHistory, useParams } from 'react-router-dom';


const Register = () => {
    const { taskName } = useParams();
    console.log(taskName)
    const baseUrl = 'https://dry-refuge-10480.herokuapp.com'
    const url = `${baseUrl}/addVolunteer`;
    const [loggedInUser] = useContext(UserContext);
    const [volunteer, setVolunteer] = useState({ 
        name: '',
        email: '',
        date: '',
        description: '',
        taskName: '' });
    let history = useHistory();

    const handleChange = (e) => {
        const newVolunteer = { ...volunteer };
        newVolunteer[e.target.name] = e.target.value;
        setVolunteer(newVolunteer);
    }

    const handleRegister = (e) => {
        const newVolunteer = { ...volunteer };
        newVolunteer.name = loggedInUser.name;
        newVolunteer.email = loggedInUser.email;
        newVolunteer.taskName = taskName;

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newVolunteer)
        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                    history.push('/userTasks');
                }
            })
        e.preventDefault();
    }

    return (
        <div className="mx-auto">
            <Link to='/'><img src={logo} alt="" style={{ width: "250px" }} className="m-3"></img></Link>
            <MDBContainer className="mt-3">
                <MDBRow >
                    <MDBCol md="5" className="register-box p-5">
                        <p className="h5 text-center mb-5">Register as a Volunteer</p>
                        <form onSubmit={handleRegister}>
                            <MDBInput label="Full Name" group type="text" value={loggedInUser.name} className="mt-2" />
                            <MDBInput label="Username or Email" group type="email" value={loggedInUser.email} className="mt-2"/>
                            <MDBInput label="Date" group type="date" name="date" onBlur={handleChange} className="mt-2"/>
                            <MDBInput label="Description" group type="text" name="description" onBlur={handleChange} className="mt-2"/>
                            <MDBInput label="Register for Task" group type="text" value={taskName} className="mt-2" />
                            <MDBBtn color="primary" type="submit" className="w-100">Register</MDBBtn>
                        </form>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </div>
    );
};

export default Register;
