import React from 'react';
import './Content.css';

const Content = (props) => {
    const {name,email,phone,id} = props.userinfo;
    return (
        <div className='user_container'>
            <h2>User ID: {id}</h2>
            <h3>Name: {name}</h3>
            <p>Email: {email}</p>
            <h5>Phone: {phone}</h5>
            <button onClick={()=>props.handleAddSalary(props.userinfo)}>More Info</button>


        </div>
    );
};

export default Content;