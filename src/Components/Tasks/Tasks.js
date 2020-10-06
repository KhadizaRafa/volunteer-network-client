import React from 'react';
import { MDBCard, MDBCardBody, MDBCardImage, MDBCol } from 'mdbreact';
import { Link } from 'react-router-dom';

const Tasks = (props) => {
    const {name, photoUrl } = props.task;
    const registerUrl = `/register/${name}`
    const randomColor = (0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);
    const style = {
        backgroundColor: `#${randomColor}`
    }
    return (
        <MDBCol md="3">
            <MDBCard className='m-3'>
                <Link to={registerUrl}>
                    <MDBCardImage className="img-fluid" src={require(`../../images/${photoUrl}`)} waves />
                    <MDBCardBody style={style}>
                        <h6 className="text-white">{name}</h6>
                    </MDBCardBody>
                </Link>
            </MDBCard>
        </MDBCol>
    );
};

export default Tasks;