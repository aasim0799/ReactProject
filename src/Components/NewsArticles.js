const NewsArticles = (props) => {

    let { title, description, imageUrl, newsUrl } = props;
    return (
        <>
            <div className="card shadow p-3 mb-5  rounded">
                <img src={imageUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <a href={newsUrl} target='_blank' className="btn btn-sm btn-primary col-md-4">Read More About</a>
                </div>
            </div>
        </>
    )
}

export default NewsArticles