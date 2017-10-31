import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const FourOhFour = () => (
    <div>
        <p>Page Not Found - 404</p>
        <Link to="/">Go Home</Link>
    </div>
);

export default FourOhFour;