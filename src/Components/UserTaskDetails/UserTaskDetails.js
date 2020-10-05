import { MDBCol, MDBRow } from 'mdbreact';
import img from '../../images/babySit.png'
import React from 'react';

const UserTaskDetails = ({ task, handleDelete }) => {
    return (
        <MDBCol md="6">
            <MDBRow>
                <MDBCol md="6">
                     <img src={img} className=" ml-5 mt-3 w-50" alt="img" />
                </MDBCol>"
                <MDBCol md="6">
                    <h5>{task.eventName}</h5>
                    <p>{(new Date(task.date)).toDateString('dd/MM/yyyy')}</p>
                    <button className="btn btn-primary" onClick={() => handleDelete(task._id)}>Cancel</button>
                </MDBCol>
            </MDBRow>
        </MDBCol>
    );
};

export default UserTaskDetails;