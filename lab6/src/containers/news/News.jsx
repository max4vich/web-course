import React from 'react';
import './News.styles.css';

function News() {
    return (
        <div className='background'>
        <div className='news_container'>
            
            <div className='header_news'>
                <h1 className='last'>LAST</h1>
                <h1 className='news'>NEWS</h1>
            </div>
            <div className='news_block'>  
                <h2><b>Pakistan Navy Helicopter Crash: </b><br/>
                    A Pakistan Navy helicopter crashed, resulting in the death of 3 crew members.</h2>  
            </div>  
            <div className='news_block'>  
                <h2><b>Russian Military Pilot Defects to Ukraine:</b><br/>
                    A Russian military pilot reportedly defected to Ukraine with a helicopter after a 6month intelligence operation</h2>  
            </div>
            <a href='' className='see_all'>SEE ALL</a>
            </div>
            
        </div>
    );
}

export default News