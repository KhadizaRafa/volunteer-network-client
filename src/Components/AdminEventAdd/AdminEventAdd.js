import { MDBBtn, MDBCol, MDBRow } from 'mdbreact';
import React, { useState } from 'react';
import './AdminEventAdd.css'
const AdminEventAdd = () => {
    const baseUrl = 'https://dry-refuge-10480.herokuapp.com'
    const url = `${baseUrl}/addEvent`
    const [event,setEvent] = useState({
        name: '',
        date: '',
        description: '', 
        photoUrl:''
    })

    const handleChange = (e) => {
        if(e.target.name==='photoUrl')
        {
            let fullPath = e.target.value
            let filePath = fullPath.replace(/^.*[\\\/]/, '')

            const newEvent = {...event};
            newEvent[e.target.name] = filePath;
            setEvent(newEvent);
        }
        else{
            const newEvent = {...event};
            newEvent[e.target.name] = e.target.value;
            setEvent(newEvent);
        }
    }

    const handleAddEvent = (e) => {
        const newEvent = {...event};
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newEvent)
        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                    window.location.reload();
                }
            })
        e.preventDefault();
    }

    return (
        <div className="mt-3">
            <h5 className="mb-5 mt-3">Event Add</h5>
            <form onSubmit={handleAddEvent}>
            <div className="eventBox p-5">
            <MDBRow>
                <MDBCol md="6">
                    <div className="form-group">
                        <label htmlFor="formGroupExampleInput">Event Title</label>
                        <input type="text" className="form-control" onBlur={handleChange} name="name" />
                    </div>
                </MDBCol>
                <MDBCol md="6">
                    <div className="form-group">
                        <label htmlFor="formGroupExampleInput">Event Date</label>
                        <input type="date" className="form-control" onBlur={handleChange} name="date" />
                    </div>
                </MDBCol>
            </MDBRow>
            <MDBRow>
                <MDBCol md="6">
                    <div className="form-group">
                        <label htmlFor="formGroupExampleInput">Description</label>
                        <textarea
                            className="form-control"
                            name="description"
                            rows="5"
                            onBlur={handleChange} 
                        />
                    </div>
                </MDBCol>
                <MDBCol md="6">
                    <div className="form-group">
                        <label htmlFor="formGroupExampleInput">Banner</label>
                        <br></br>
                        <input type="file" name="photoUrl" onChange={handleChange} />
                    </div>
                </MDBCol>
            </MDBRow>
            </div>
            <MDBBtn type="submit" color="info">Submit</MDBBtn>
         </form>
        </div>
    );
};

export default AdminEventAdd;