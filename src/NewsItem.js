const NewsItem = (props) => {
    return ( 
        <div className="NewsItem">
            <img src={props.urlToImage} alt="img" />
            <h4>{props.title}</h4>
            <p>{props.description}</p>
            <p>{props.publishedAt}</p>
            <a href={props.url}>Read More</a>
        </div>
     );
}
 
export default NewsItem;