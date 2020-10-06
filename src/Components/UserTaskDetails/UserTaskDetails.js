import { MDBCol, MDBRow } from 'mdbreact';
import img from '../../images/babySit.png'
import './UserTaskDetails.css'
import React from 'react';

const UserTaskDetails = ({ task, handleDelete }) => {
    return (
        <MDBCol md="5" className="m-2">
            <MDBRow className="userTile">
                <MDBCol md="4">
                     <img src={img} className="w-100 tileImg" alt="img" />
                </MDBCol>"
                <MDBCol md="6" className="mx-left taskdetails">
                    <h5>{task.taskName}</h5>
                    <p>{(new Date(task.date)).toDateString('dd/MM/yyyy')}</p>
                    <button className="btn btn-info" size="sm" onClick={() => handleDelete(task._id)}>Cancel</button>
                </MDBCol>
            </MDBRow>
        </MDBCol>
    );
};

export default UserTaskDetails;