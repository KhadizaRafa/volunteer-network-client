import React from 'react';
import delImg from '../../logos/trash-2 9.png'

const AdminVolunteerListView = ({ volunteer, handleDelete }) => {
    return (
        <div className="mt-3">
            <table className="table table-striped volunteer">
             {
                <thead >
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Registration Date</th>
                        <th scope="col">Volunteer list</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
             }
                <tbody>
                    <tr key={volunteer._id}>
                        <th>{volunteer.name}</th>
                        <td>{volunteer.email}</td>
                        <td>{volunteer.date}</td>
                        <td>{volunteer.taskName}</td>
                        <td><img style={{backgroundColor:'red',height:'28px',width:'30px',padding:'2px', borderRadius:'5px'}} onClick={() => handleDelete(volunteer._id)}
                            src={delImg} alt="delete" /></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default AdminVolunteerListView;