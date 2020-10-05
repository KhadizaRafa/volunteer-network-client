import React from 'react';
import { MDBCard, MDBCardBody, MDBCardImage, MDBCol, MDBCardTitle } from 'mdbreact';
import { Link } from 'react-router-dom';

const Tasks = (props) => {
    const { _id, name, photoUrl } = props.task;
    const registerUrl = `/register/${name}`
    return (
        <MDBCol md="3">
            <MDBCard>
                <Link to={registerUrl}>
                    <MDBCardImage className="img-fluid" src={require(`../../images/${photoUrl}`)} waves />
                    <MDBCardBody>
                        <MDBCardTitle>{name}</MDBCardTitle>
                    </MDBCardBody>
                </Link>
            </MDBCard>

        </MDBCol>
    );
};

export default Tasks;