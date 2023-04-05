import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const DataLoadDetails = () => {
    const data = useLoaderData();
    const {id, name, phone, company, email, } = data;
    const navigateBack = useNavigate();
    const handleBAck = () =>{
        navigateBack(-1)
    }
    return (
        <div className='text-center'>
            <h1>{id}</h1>
            <h3>{name}</h3>
            <h5>{phone}</h5>
            <p>{company.catchPhrase}</p>
            <p>{email}</p>
            <button onClick={handleBAck}>Go Back</button>
        </div>
    );
};

export default DataLoadDetails;