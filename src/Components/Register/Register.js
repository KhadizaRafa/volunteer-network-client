import React, { useContext, useState } from 'react';
import logo from '../../logos/Group 1329.png';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from 'mdbreact';
import { UserContext } from '../../App';
import './Register.css'
import { useHistory, useParams } from 'react-router-dom';

const Register = () => {

    const { taskName } = useParams();
    const baseUrl = 'https://dry-refuge-10480.herokuapp.com'
    const url = `${baseUrl}/addVolunteer`;

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [volunteer, setVolunteer] = useState({ fullName: '', email: '', date: '', description: '', taskName: ''});
    let history = useHistory();

    const handleChange = (e) => {
        const newVolunteer = { ...volunteer };
        newVolunteer[e.target.name] = e.target.value;
        console.log(e.target.name,e.target.value)
        setVolunteer(newVolunteer);
    }

    const handleRegister = (e) => {
        const newVolunteer = { ...volunteer};
        newVolunteer.fullName = loggedInUser.name;
        newVolunteer.email = loggedInUser.email;
        newVolunteer.taskName = taskName;

        fetch(`${baseUrl}/addVolunteer`, {
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
            <img src={logo} alt="" style={{ width: "250px" }} className="m-3"></img>
            <MDBContainer className="mt-3">
                <MDBRow >
                    <MDBCol md="5"  className="register-box p-5">
                        <p className="h5 text-center mb-5">Register as a Volunteer</p>
                        <form onSubmit={handleRegister}>
                            {/* <div className="grey-text mt-3"> */}
                                <MDBInput label="Full Name" group type="text" value={loggedInUser.name} />
                                <MDBInput label="Username or Email" group type="email" value={loggedInUser.email} />
                                <MDBInput label="Date" group type="text" name="date" onBlur={handleChange} />
                                <MDBInput label="Description" group type="text" name="description" onChange={handleChange} />
                                <MDBInput label="Register for Task" group type="text" value={taskName}/>
                            {/* </div>
                            <div className="text-center"> */}
                                <MDBBtn color="primary" type="submit" className="w-100">Register</MDBBtn>
                            {/* </div> */}
                        </form>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </div>
    );
};

export default Register;
