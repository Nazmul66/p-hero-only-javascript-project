import React from 'react';
import { useLoaderData } from 'react-router-dom';
import FoodCard from '../FoodCard/FoodCard';

const FoodDetails = () => {
    const  dataID  = useLoaderData();
    return (
        < >
            {
               dataID.meals.map(foods => <FoodCard foods={foods} key={foods.idMeal}></FoodCard>) 
            }
        </>
    );
};

export default FoodDetails;