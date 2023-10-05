import React from 'react';
import { Link } from 'react-router-dom';
import './Color.css';

const Color = ({name}) => {
    const path = `/colors/${name}`;

    return(
      <>
        <p className="color-link"><Link to={path}>{name}</Link></p>
      </>
    )
};

export default Color;