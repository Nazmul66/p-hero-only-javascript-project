import React, { useEffect, useState } from 'react';
import './Card.css';
import SingleData from '../SingleData/SingleData';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';

const Card = () => {
    const [cards, setCards] = useState([]);
    const [singleData, setSingleData] = useState({});
    const [showAll, setShowAll] = useState(false);
    const [uniqueId, setUniqueId] = useState(null);

    const removeSeeMore = () =>{
        setShowAll(true);
    }

    // sort data
    const handleSorted = () =>{
        const sortedData = cards.sort((a,b) =>{
            return new Date(a.published_in) - new Date(b.published_in);
        })
        setCards([...cards,sortedData])
    }

    useEffect( () =>{
        fetch(`https://openapi.programming-hero.com/api/ai/tool/${uniqueId}`)
        .then(res => res.json())
        .then(data => setSingleData(data.data))
    },[uniqueId])

    useEffect( () =>{
        fetch("https://openapi.programming-hero.com/api/ai/tools")
        .then(res => res.json())
        .then(data => setCards(data.data.tools))
    }, []);
    
    return (
        <>
        <span onClick={handleSorted}>
          <Button>Sort By Date</Button>
        </span>
        <div className='card-action'>
            {
            cards.slice(0, showAll ? 12 : 6).map(singleData => <SingleData 
                cards = {singleData}
                 key = {singleData.id}
                 setUniqueId = {setUniqueId}
                ></SingleData>)
            }
        </div>
        {
            !showAll && (<div onClick={removeSeeMore}>
            <Button>See More</Button>
            </div>)
        }
        <Modal singleData = {singleData} />
        </>
    );
};

export default Card;