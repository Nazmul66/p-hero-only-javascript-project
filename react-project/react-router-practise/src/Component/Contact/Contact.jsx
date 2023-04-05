import React from 'react';
import { useLoaderData } from 'react-router-dom';
import DataLoad from '../DataLoad/DataLoad';

const Contact = () => {
    const fakeApi = useLoaderData();
    return (
        <div>
            {
              fakeApi.map((fake) => <DataLoad
              fake = {fake}
              key = {fake.id}
              ></DataLoad>)
            }
        </div>
    );
};

export default Contact;