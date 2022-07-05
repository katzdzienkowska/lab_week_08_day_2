import React, {useState, useEffect} from 'react';
import NewsList from '../components/NewsList';
import TitleSearch from '../components/TitleSearch';


const MainNews = () => {


    const [newsId, setNewsId] = useState([]);
    const [news, setNews] = useState([]);
    const [filteredNews, setFilteredNews] = useState([]);

    useEffect(() => {
        fetch('https://hacker-news.firebaseio.com/v0/topstories.json')
            .then(res => res.json())
            .then(data => setNewsId(data))
    }, []);

    
    const getNews = async () => {
        // console.log(articleId);
        const promises = newsId.map( title => fetch(`https://hacker-news.firebaseio.com/v0/item/${title}.json`).then(res => res.json()))
        const news = await Promise.all(promises);
        // console.log(articles);
        setNews(news);
        setFilteredNews(news);
    };
    
    useEffect(() => {
        getNews();
    }, [newsId]);

    const filter = (searchTerm) => {
        const lowerSearch = searchTerm.toLowerCase();
        const filteredNews = news.filter((news) => {
          return news.title.toLowerCase().indexOf(lowerSearch) > -1;
        });
        setFilteredNews(filteredNews);
      }
    

    return (
        <>
            <h1>News:</h1>
            <TitleSearch handleChange={filter}/>
            <NewsList newsList={filteredNews} />
        </>
    );
};

export default MainNews;