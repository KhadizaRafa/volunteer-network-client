import { MDBContainer, MDBRow } from 'mdbreact';
import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import Header from '../Header/Header';
import UserTaskDetails from '../UserTaskDetails/UserTaskDetails';

const UserTasks = () => {
    const [loggedInUser] = useContext(UserContext);
    const [userTasks,setUserTasks] = useState([])
    const [isDeleted, setIsDeleted] = useState(false);

    const baseUrl = 'https://dry-refuge-10480.herokuapp.com'
    const url = `${baseUrl}/getUserTasks/?email=${loggedInUser.email}`;

    useEffect(() =>{
        fetch(url,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response =>response.json())
        .then(data =>setUserTasks(data))
    }, [loggedInUser.email, isDeleted])

    const handleDelete = (id) => {
        fetch(`${baseUrl}/taskDelete/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then((result => {
                if (result) {
                    setIsDeleted(true);
                    console.log(result);
                }
            }));
    }


    return (
        <MDBContainer>
            <Header email={loggedInUser.name}></Header>
            <MDBRow>
            {
              userTasks && userTasks.map(task=><UserTaskDetails task={task} key={task._id}  handleDelete={handleDelete}></UserTaskDetails>)
            }
            </MDBRow>
            
        </MDBContainer>
    );
};

export default UserTasks;