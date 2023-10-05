import React from 'react';
import { Link } from 'react-router-dom';
import './Dog.css';

const Dog = ({ name, image, path }) => {
    return (
        <div className="dog-container">
            <img className="dog-image" alt={name} src={image}></img>
            <Link to={`/dogs/${path}`}>{name}</Link>
        </div>
    );  
}

export default Dog;