import React from 'react';
import Device from './Device';
import Reads from './Reads';

function Item({displayContent, readme}) {
    return (
        <div className="Item">
            <Device type={"--iphone"} display={displayContent}/>
            <Reads readme={readme}/>
        </div>   
    );
}
export default Item;