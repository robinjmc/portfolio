import React from 'react';
import Device from './Device';

function Item({displayContent}) {
    return (
        <div className="Item">
            <Device type={"--laptop"} display={displayContent}/> 
        </div>   
    );
}
export default Item;