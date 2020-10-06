import { MDBCol, MDBRow } from 'mdbreact';
import logo from '../../logos/Group 1329.png';
import volunteerImg from '../../logos/users-alt 1.png'
import eventAddImg from '../../logos/plus 1.png'
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AdminVolunteerListView from '../AdminVolunteerListView/AdminVolunteerListView';
import AdminEventAdd from '../AdminEventAdd/AdminEventAdd';

const AdminHome = () => {
    const baseUrl = 'https://dry-refuge-10480.herokuapp.com'
    const [volunteerList, setVolunteerList] = useState([]);
    const [isDeleted, setIsDeleted] = useState(false);
    const [isEvent, setIsEvent] = useState(false)

    useEffect(() => {
        fetch(`${baseUrl}/getVolunteers`)
            .then(res => res.json())
            .then(result => {
                setVolunteerList(result);
                setIsDeleted(false);
            })
    }, [isDeleted])

    const handleDelete = (id) => {
        fetch(`${baseUrl}/taskDelete/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then((result => {
                if (result) {
                    setIsDeleted(true);
                }
            }));
    }

    return (
        <MDBRow>
            <MDBCol md='3'>
                <Link to='/'><img src={logo} alt="" style={{ width: "200px" }} className="mt-2"></img></Link>
                <div className="col-md-12 mt-5">
                    <div className="mt-3">
                        <Link to='#' onClick={() => setIsEvent(false)}>
                            <img src={volunteerImg} style={{ width: "20px" }}></img>
                            <span className="m-2">Volunteer List</span>
                        </Link>
                    </div>
                    <div className="mt-3">
                        <Link to='#' onClick={() => setIsEvent(true)}>
                            <img src={eventAddImg} style={{ width: "20px" }}></img>
                            <span className="m-2">Add Event</span>
                        </Link>
                    </div>
                </div>
            </MDBCol>
            <MDBCol md='7'>
                {
                    !isEvent &&  <h5 className="mt-2 mb-5">Volunteer Registration List</h5>
                }
                {
                    isEvent ?
                        <AdminEventAdd></AdminEventAdd>
                        :
                        volunteerList.map(volunteer =>
                            <AdminVolunteerListView volunteer={volunteer} key={volunteer._id} handleDelete={handleDelete} ></AdminVolunteerListView>)
                }
            </MDBCol>
        </MDBRow>




    );
};

export default AdminHome;