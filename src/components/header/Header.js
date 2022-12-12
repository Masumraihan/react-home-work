import React, { useState } from 'react';
import data from '../../FakeData/data.json';
import './Header.css';
import Content from './../Content/Content';
import Salary from '../Salary/Salary';
import Salarys from '../Salary/Salary';
const Header = () => {
    //console.log(data)
    const [user,setUser] = useState(data);
    const [salary,setSalary] = useState([]);

    const handleAddSalary = (userInfo) => {
        console.log('clicked',userInfo)
        const currentSalary = [...salary,userInfo];
        setSalary(currentSalary);
    };

    return (
        <div className='container'>
            <div className="user">
                {
                    user.map(userDetails => 
                    <Content 
                    handleAddSalary = {handleAddSalary}
                    userinfo = {userDetails}>
                    </Content>)
                }
            </div>
            <div className="salary">
                <Salarys info={salary}></Salarys>
            </div>
        </div>
    );
};

export default Header;