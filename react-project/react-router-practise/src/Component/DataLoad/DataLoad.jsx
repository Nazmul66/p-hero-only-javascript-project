import React from 'react';
import './DataLoad.css';
import { Link, useNavigate } from 'react-router-dom';

const DataLoad = ({fake}) => {
    const {id, name, email, phone, username , company} = fake;

    const navigate = useNavigate();
    const handleData = () =>{
        navigate(`/dataLoadDetails/${id}`);
    }
    return (
        <div className='text-center jalwa'>
            <h1>{name}</h1>
            <h3>{username}</h3>
            <p>{email}</p>
            <p>{phone}</p>
            <p>{company ? company.name : "NO Name"}</p>
            <p className='text-[blue]'>
                <Link to={`/dataLoadDetails/${id}`}>Show details</Link>
                <button onClick={handleData}>Show details1</button>
            </p>
        </div>
    );
};

export default DataLoad;