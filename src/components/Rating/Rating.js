import React, { useState, useEffect } from "react";
import stars from '../../assets/png/stars.png';
import notStars from '../../assets/png/not-star.png';

const Rating = (ratin) => {
    const [rating, setRating] = useState(5);
    const getRating = () => {
        ratin.rating < 5 ? setRating(ratin.rating) : setRating(5);
    }
    useEffect(() => { getRating() }, [getRating]);

    return(
        <>
            {new Array(rating).fill(1).map((star, i) => (<img src={stars} alt="stars" key={star+i}/>))}
            {new Array(5 - rating).fill(1).map((star, i) => (<img src={notStars} alt="stars" key={star+i}/>))}
        </>
    )
}

export { Rating }