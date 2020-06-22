import React from 'react';


const Card = ({name, email, id}) => {
    return (
         <div className="black tc bg-light-green pointer dib br3 pa3 ma2 grow bw2 shadow-5">
        <img alt="robots" src={`https://robohash.org/${id}?150x150`} /> 
        <div>
            <h2> {name}</h2>
        </div>
        <p>{email}</p>
    </div> );
}
 
export default  Card;