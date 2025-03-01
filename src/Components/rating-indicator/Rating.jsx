import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import './Rating.css';

function Rating({ numOfStars = 5 }) {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    const handleClick = (i) => setRating(i),
        handleMouseEnter = (i) => setHover(i),
        handleMouseLeave = () => setHover(rating);
    return (
        <div className="rating">
            <h1>Star Rating</h1>
            {[...Array(numOfStars)].map((_, i) => {
                i++;
                return (
                    <FaStar key={i}
                        className={i <= (hover || rating) ? 'active star' : 'inactive star'}
                        onClick={() => handleClick(i)}
                        onMouseEnter={() => handleMouseEnter(i)}
                        onMouseLeave={() => handleMouseLeave(i)}
                        size={40}
                    />
                )
            })}
        </div>
    )
}

export default Rating;