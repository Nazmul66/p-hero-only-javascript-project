import React from 'react';

const FoodCard = (props) => {
    const {idMeal, strArea ,strMealThumb, strInstructions , strMeal,strYoutube} = props.foods;
    return (
        <div className='grid grid-cols-2 gap-8 p-10 mt-10 max-w-[840px] mx-auto border-orange-600 border-2 rounded-lg'>
            <div className=''>
                <img src={strMealThumb} alt="" className='rounded-lg' />
            </div>
            <div className=''>
                 <h1 className='font-medium mb-3'>Menu No: {idMeal}</h1>
                 <h4 className='text-2xl font-medium mb-2'>Meals: {strMeal}</h4>
                 <p className='text-2xl font-medium mb-2'>Country Food: {strYoutube}</p>
                 <p>{strInstructions.slice(0, 400) + "....."}</p>
                 <p>price: $11</p>
            </div>
        </div>
    );
};

export default FoodCard;