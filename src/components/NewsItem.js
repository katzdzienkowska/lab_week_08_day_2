import React from 'react';


const NewsItem = ({news}) => {

  return (
    <li>
        <a href={news.url} target='_blank' rel='noreferrer'>{news.title}</a>  
    </li>
  );
};

export default NewsItem;