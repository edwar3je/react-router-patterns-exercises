import React from 'react';
import { Link } from 'react-router-dom';
import Color from './Color';
import './ColorsSelect.css';

const ColorsSelect = ({ colors }) => {
    return (
        <div className="factory-container">
            <div className="intro-form-container">
                <h3>Welcome to the Color Factory</h3>
                <h1><Link to="/colors/new">Add a Color</Link></h1>
            </div>
            <div className="colors-container">
                <p>Please select a color.</p>
                <div className="actual-colors-container">
                    {colors.map(({ name, id }) => {
                        return <Color name={name} key={id}/>
                    })}
                </div>
            </div>
        </div>
    );
};

export default ColorsSelect;