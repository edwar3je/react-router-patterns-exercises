import React from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import './ColorPage.css';

const ColorPage = ({ colors }) => {

    let capitalColor;
    let colorSelect;

    const colorUrl = useParams();

    function doesExist(colorProvided) {
        for(let color of colors){
            if (color.name === colorProvided){
                return true
            }
        }
        return false
    }

    if(!doesExist(colorUrl.color)){
        console.log('uh oh, color not found');
        return(
            <Navigate to="/colors"/>
        )
    } else {
        for(let color of colors){
            if(color.name === colorUrl.color){
                colorSelect = color
            }
        }
        capitalColor = colorUrl.color.toUpperCase();
        console.log(colorSelect);
        console.log(capitalColor);
    }

    return (
        <div className="color-page-container" style={{backgroundColor: colorSelect.color}}>
            <h1>THIS IS {capitalColor}.</h1>
            <h1>ISN'T IT BEAUTIFUL?</h1>
            <h1><Link to="/colors">GO BACK</Link></h1>
        </div>
    );
};

export default ColorPage;