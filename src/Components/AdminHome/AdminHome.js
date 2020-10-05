import { MDBCol, MDBContainer, MDBRow } from 'mdbreact';
import logo from '../../logos/Group 1329.png';
import delImg from '../../logos/trash-2 9.png'
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const AdminHome = () => {
    const volunteerListUrl = '/adminHome/volunteerList'
    const eventAddUrl = '/adminHome/eventAdd'

    const [volunteerList, setVolunteerList] = useState([]);
    const [isDeleted, setIsDeleted] = useState(false);

    useEffect(() => {
        fetch('https://dry-refuge-10480.herokuapp.comgetVolunteers')
            .then(res => res.json())
            .then(result => {
                setVolunteerList(result);
                setIsDeleted(false);
            })
    }, [isDeleted])

    const handleDelete = (id) => {
        fetch(`https://dry-refuge-10480.herokuapp.comtaskDelete/${id}`, {
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
        <div className="mt-3">
        <table className="table table-striped volunteer">
            <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Registration Date</th>
                    <th scope="col">Volunteer list</th>
                    <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    volunteerList && volunteerList.map(item =>
                        <tr key={item._id}>
                            <th>{item.fullName}</th>
                            <td>{item.email}</td>
                            <td>{item.date}</td>
                            <td>{item.taskName}</td>
                            <td><img className="w-50" onClick={() => handleDelete(item._id)} 
                            src={delImg} alt="delete" height="40px" width="5px" /></td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    </div>
    );
};

export default AdminHome;