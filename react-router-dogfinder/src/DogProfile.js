import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import './DogProfile.css';

const DogProfile = () => {
    const { dogname } = useParams();
    const availableDogs = ['duke', 'perry', 'whiskey'];
    const imageDogs = ["https://www.akc.org/wp-content/uploads/2017/11/Great-Dane-On-White-01.jpg", "https://media-be.chewy.com/wp-content/uploads/2021/05/05180433/Cocker-Spaniel_FeaturedImage-1024x615.jpg", "https://www.thesprucepets.com/thmb/8UgAnzf_7o7i7qPPr528XtM0IW8=/2121x0/filters:no_upscale():strip_icc()/GettyImages-839279536-313d30c290584bc0a207bc6243263bd4.jpg"];
    const dogNames = ['Duke', 'Perry', 'Whiskey'];
    let dogIdx;

    if (!availableDogs.includes(dogname)){
        return <Navigate to="/dogs" />
    } else {
        dogIdx = availableDogs.indexOf(dogname)
    }

    return (
        <div className="profile-container">
            <img className="dog-profile-image" alt={dogNames[dogIdx]} src={imageDogs[dogIdx]}></img>
            <h1>Say hi to {dogNames[dogIdx]}</h1>
            <Link to="/dogs">Go to doghouse</Link>
        </div>
    );
};

export default DogProfile;