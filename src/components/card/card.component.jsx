import React from 'react';
import './card.styles.css';

export const Card = (props) => (
    <div className="card-container">
        <img
            alt="monster"
            src={`https://robohash.org/${props.mr.id}?set=set1`}
        />
        <h2>{props.mr.name}</h2>
        <p>{props.mr.email}</p>
    </div>
);