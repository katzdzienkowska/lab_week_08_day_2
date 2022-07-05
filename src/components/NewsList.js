import React from 'react';
import NewsItem from './NewsItem';


const NewsList = ({newsList}) => {

    const newsNodes = newsList.map((news) => {
        return (<NewsItem news= {news} key={news.id}/>)
    })

    return(
        <>
        <ul>
            {newsNodes}
        </ul>
        
        </>
    )
}

export default NewsList;