import React from 'react';
import Item from './Item';


import natours from '../reads/natours.md';
import fegbar from '../reads/fegbar.md';
import ncnews from '../reads/nc-news.md';
import omnifoods from '../reads/omnifoods.md';
import tetris from '../reads/tetris.md';
import lyallhakaraia from '../reads/lyallhakaraia.md';
import trillo from '../reads/trillo.md';
import nexter from '../reads/nexter.md';

function Content() {
    return (
        <div className="Content">
            <Item displayContent={"https://shielded-brushlands-10812.herokuapp.com"} readme={tetris}/>  
            <Item displayContent={"https://lyallhakaraia.co.uk"} readme={lyallhakaraia}/>  
            <Item displayContent={"https://natours-rc.herokuapp.com"} readme={natours}/>   
            <Item displayContent={"https://nexter-rc.herokuapp.com"} readme={nexter}/>    
            <Item displayContent={"https://trillo-rc.herokuapp.com"} readme={trillo}/>     
            <Item displayContent={"https://omnifood-rc.herokuapp.com"} readme={omnifoods}/> 
            <Item displayContent={"https://fegbar.herokuapp.com/whats-in-guv"} readme={fegbar}/>      
            <Item displayContent={"https://rc-ncnews.herokuapp.com"} readme={ncnews}/>      
        </div>            
    )
}
export default Content;

