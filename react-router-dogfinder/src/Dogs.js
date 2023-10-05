import React from 'react';
import Dog from './Dog';
import { v4 as uuidv4 } from 'uuid';

import './Dogs.css';

const Dogs = () => {
    
    const dogData = [
        {name: "Duke", image: "https://www.akc.org/wp-content/uploads/2017/11/Great-Dane-On-White-01.jpg", path: "duke"},
        {name: "Perry", image: "https://media-be.chewy.com/wp-content/uploads/2021/05/05180433/Cocker-Spaniel_FeaturedImage-1024x615.jpg", path: "perry"},
        {name: "Whiskey", image: "https://www.thesprucepets.com/thmb/8UgAnzf_7o7i7qPPr528XtM0IW8=/2121x0/filters:no_upscale():strip_icc()/GettyImages-839279536-313d30c290584bc0a207bc6243263bd4.jpg", path: "whiskey"}
    ];
    
    return (
        <div className="dog-house">
            <h1>Welcome to the dog house!</h1>
            <h3>Select one of the dogs:</h3>
            <div className="dogs-container">
                {dogData.map(({ name, image, path }) => {return <Dog name={name} image={image} path={path} key={uuidv4()}/>})}
            </div>
        </div>
    );
};

export default Dogs;