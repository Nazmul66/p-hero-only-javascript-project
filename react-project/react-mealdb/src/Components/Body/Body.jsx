import React from 'react';
import { useLoaderData } from 'react-router-dom';
import BodyContent from '../BodyContent/BodyContent';

const Body = () => {
    const body = useLoaderData();

    return (
        <div className='grid grid-cols-3 gap-8 max-w-[1240px] mx-auto py-12'>
            {
               body.meals.map(food => <BodyContent food={food} key={food.idMeal}/>) 
            }
        </div>
    );
};

export default Body;