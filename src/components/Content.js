import React from 'react';
import Item from './Item';

function Content() {
    return (
        <div className="Content">
            <Item displayContent={"https://shielded-brushlands-10812.herokuapp.com"}/>  
            <Item displayContent={"https://natours-rc.herokuapp.com"}/>    
            <Item displayContent={"https://omnifood-rc.herokuapp.com"}/> 
            <Item displayContent={"http://fegbar.herokuapp.com/whats-in-guv"}/>      
            <Item displayContent={"https://rc-ncnews.herokuapp.com"}/>      
        </div>            
    )
}
export default Content;