import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";
const News = (props) => {
    const [articles, setarticles] = useState([]);
    const [loading, setloading] = useState(true);
    const [page, setpage] = useState(1);
    const [totalResults, settotalResults] = useState(0);
    let category = props.category;
    let str;
    let str_array;
    str_array = (category).split("")
    str_array[0] = str_array[0].toUpperCase()
    str = str_array.join("")
    document.title = "NewsMonkey - " + (str === "General" ? "Get your daily dose of news" : str)
    const updateNews = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey_2}&page=${page}&pageSize=${props.pageSize}`;
        props.setProgress(0)
        setloading(true)
        let data = await fetch(url);
        props.setProgress(80)
        let parsedData = await data.json()
        setarticles(parsedData.articles)
        setloading(false)
        settotalResults(parsedData.totalResults)
        props.setProgress(100)
    }
    useEffect(() => {
        updateNews()
    }, []);

    const fetchMoreData = async () => {
        setpage(page + 1)
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey_2}&page=${page + 1}&pageSize=${props.pageSize}`;
        setloading(true)
        let data = await fetch(url);
        let parsedData = await data.json()
        setarticles(articles.concat(parsedData.articles))
        setloading(false)
        settotalResults(parsedData.totalResults)
    };
    return (

        <div>
            <h2 className="text-center" style={{ marginTop: "4rem" }}>NewsMonkey - {(str === "General" ? "Top Headlines" : str)}</h2>
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResults}
                loader={<Spinner />}
                style={{ overflow: "hidden" }}
            >
                <div className="container">
                    <div className="row">
                        {articles.map((element) => {
                            return <div className="col-md-4" key={element.url}>
                                <NewsItem key={element.url} title={element.title} description={element.description} imageurl={element.urlToImage} newsurl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                            </div>
                        })}
                    </div>
                </div>
            </InfiniteScroll>
        </div>
    )
}


News.defaultProps = {
    pageSize: 6,
    country: "in",
    category: "general",
}
News.propTypes = {
    pageSize: PropTypes.number,
    country: PropTypes.string,
    category: PropTypes.string,
}
export default News
