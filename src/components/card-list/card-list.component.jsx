import React from 'react';
import { Card } from '../card/card.component';
import './card-list.styles.css';


// export const CardList = props => {
//     return <div className='card-list'> {props.children}</div>
// };

export const CardList = props => (
    <div className='card-list'>
        { props.msters.map(monster => (
            // <h1 key={monster.id}>{monster.name}</h1>
            <Card key={monster.id} mr={monster}/>
        ))}
    </div>
);