import React from 'react';

const Employee = (props) => {
    const { firstName, lastName, Id: eId } = props; // object destructuring 
    return (
        <div>
            <h6> Employee Name: {firstName} {lastName} </h6>
        </div>
    );
};

export default Employee;