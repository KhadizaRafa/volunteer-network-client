import { MDBRow } from 'mdbreact';
import React, { useEffect, useState } from 'react';
import {MDBContainer } from 'mdbreact';
import Header from '../Header/Header';
import Tasks from '../Tasks/Tasks';

const Home = () => {
    const [tasks, setTasks] = useState([])
    const baseUrl = 'https://dry-refuge-10480.herokuapp.com'
    const url = `${baseUrl}/getTasks`;

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => setTasks(data))
            .catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))
    }, []);

    return (
        <div>
            <Header></Header>
            <MDBContainer>
                <MDBRow>
                        {
                            tasks.map(task => <Tasks task={task} key={task._id}></Tasks>)
                        }
                </MDBRow>
            </MDBContainer>

        </div>
    );
};

export default Home;