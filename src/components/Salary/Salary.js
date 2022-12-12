import React from 'react';
import Salary from './Salary';

const Salarys = (props) => {
    const income = props.info;
    //console.log(income);
    for (let i = 0; i < income.length; i++) {
        const incm = income[i];
        const total = incm.Salary;
        
    }
    return (
        <div>
            <h2>Your Salary</h2>
            <h2>Name: {}</h2>
            <h2>salary: {}</h2>
        </div>
    );
};

export default Salarys;