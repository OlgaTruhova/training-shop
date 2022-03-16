import React from "react";
import stars from '../../assets/png/stars.png';
import notStars from '../../assets/png/not-star.png';

const Rating = (rating) => {
    return(
        <>
            {new Array(rating.rating).fill(1).map((star, i) => (<img src={stars} alt="stars" key={star+i}/>))}
            {new Array(5 - rating.rating).fill(1).map((star, i) => (<img src={notStars} alt="stars" key={star+i}/>))}
        </>
    )
}

export { Rating }