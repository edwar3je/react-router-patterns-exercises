import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import './ColorForm.css';

const ColorForm = ({ addColor }) => {

    const navigate = useNavigate();
    
    const initialState = {
        name: "",
        color: "",
    };
    
    const [formData, setFormData] = useState(initialState);

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(data => ({
            ...data,
            [name]: value
        }));
    };

    const handleSubmit = e => {
        e.preventDefault();
        const { name, color } = formData;
        console.log({
            name: name,
            color: color,
            id: uuidv4()
        });
        addColor({
            name: name,
            color: color,
            id: uuidv4()
        });
        setFormData(initialState);
        navigate('/colors');
    };

    return (
        <div className="form-container">
            <form className="actual-form" onSubmit={handleSubmit}>
                <label htmlFor="color-name">Color name</label>
                <input type="text" id="color-name" name="name" placeholder="color name here" onChange={handleChange}></input>
                <label htmlFor="color-value">Color value</label>
                <input type="color" id="color-value" name="color" onChange={handleChange}></input>
                <button type="submit" className="submit-button">Add this color</button>
            </form>
        </div>
    );
}

export default ColorForm;