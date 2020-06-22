import React from 'react';
import './Card.scss';

export default function Card({ id, name, email, username, website, phone} 
  : { id : number, name : string, email : string, username : string, phone : string, website : string}) {
    return (
        <div className='tc bg-moon-gray br3 pa3 ma2 bw2 shadow-5 card-rotate'>
          <div className='card-rotate__side card-rotate__side--front'>
            <img alt='robots' src={`https://robohash.org/${id}?size=200x200`} />
            <h2>{name}</h2>
            <p>{email}</p>
          </div>
          <div className='card-rotate__side card-rotate__side--back'>
            <h2>{username}</h2>
            <p>{website}</p>
            <p>{phone}</p>
          </div>
      </div>     
    )
}
