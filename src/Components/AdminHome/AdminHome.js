import { MDBCol, MDBRow } from 'mdbreact';
import logo from '../../logos/Group 1329.png';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AdminVolunteerListView from '../AdminVolunteerListView/AdminVolunteerListView';
import AdminEventAdd from '../AdminEventAdd/AdminEventAdd';

const AdminHome = () => {
    const baseUrl = 'https://dry-refuge-10480.herokuapp.com'
    const [volunteerList, setVolunteerList] = useState([]);
    const [isDeleted, setIsDeleted] = useState(false);
    const [isEvent,setIsEvent] = useState(false)

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
                <Link to='/'><img src={logo} alt="" style={{ width: "200px"}}></img></Link>
                <div className="col-md-12 mt-5">
                     <Link to='#' onClick={() => setIsEvent(false)}>Volunteer List</Link><br/>
                     <Link to='#' onClick={() => setIsEvent(true)}>Add Event</Link>
                </div>    
            </MDBCol>
            <MDBCol md='7'>
                {
                    !isEvent && <h5 className="mb-5">Volunteer Registration List</h5> 
                }
                { 
                    isEvent?
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