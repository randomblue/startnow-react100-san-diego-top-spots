import React from 'react';

export default props => (

    <div className='card m-3 p-3'>
    

            <h4 className='card-header text-center'>{props.name}</h4>
            <p className='card-body'>{props.description}</p>
            <a className='btn btn-primary btn-block' target='_blank' href={`https://maps.google.com/?q=${props.location[0]},${props.location[1]}`}>Location</a>    
        
    
    </div>

);