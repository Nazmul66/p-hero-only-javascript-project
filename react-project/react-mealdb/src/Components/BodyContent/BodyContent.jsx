import React from 'react';
import { Link } from 'react-router-dom';

const BodyContent = (props) => {
    const {idMeal, strArea ,strMealThumb , strMeal,strYoutube} = props.food;
    return (
        <div className="border-2 border-orange-700 p-6 rounded-lg">
            <img src={strMealThumb} alt="" className='h-72 w-full object-cover rounded-lg'/>
            <h2 className="font-bold my-2"><em >Menu:</em> {strMeal}</h2>
            <h4 className="font-bold mb-8"><em>Country Food:</em> {strArea}</h4>
            <p className='font-semibold text-md mb-7'>{strYoutube}</p>
            <Link to={`/details/${idMeal}`}><button className='border-2 border-red-900 px-5 py-1 rounded-lg'>More Details</button></Link>
        </div>
    );
};

export default BodyContent;