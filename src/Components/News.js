
import React, { Component } from 'react'
import NewsArticles from './NewsArticles'


export class News extends Component {
  
    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false
        }
    }
    async componentDidMount(props) {
        let url = `https://saurav.tech/NewsAPI/top-headlines/category/${this.props.category}/in.json`

       
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({ articles: parsedData.articles })
        
    }

    render() {
        return (
            <>

                <div className="container my-3">
                    
                    <div className="row my-3" >
                        {this.state.articles.map((element, idx) => {
                            if (idx < 33) {
                                return (

                                    <div className="col-md-4" key={element.url}>
                                        <NewsArticles title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} />
                                    </div>
                                )
                            }
                            {/* else if(idx>12 && idx<24){
                            return(
                            
                            <div className="col-md-4" key= {element.url}>
                                <NewsArticles  title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} />
                            </div>
                            )
                        } */}
                        })}
                        {/* <div className="container mt-5">
                            <nav aria-label="Page navigation example">
                                <ul className="pagination justify-content-center">
                                    <li className="page-item disabled">
                                        <a className="page-link" href="#" tabindex="-1">Previous</a>
                                    </li>
                                    <li className="page-item"><Link className="page-link" to="/" >1</Link></li>
                                    <li className="page-item"><a className="page-link" href="#" >2</a></li>
                                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                                    <li className="page-item">
                                        <a className="page-link" href="#">Next</a>
                                    </li>
                                </ul>
                            </nav>
                        </div> */}
                        {/* <Pagination next='idx'/> */}
                    </div>

                </div>

            </>
        )
    }
}

export default News