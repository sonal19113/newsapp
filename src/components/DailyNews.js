import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class DailyNews extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page:1, 
    };
  }
 
  async componentDidMount(){
      let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=71e52780adfe4064aefa4c5331398065&page=1&pageSize=${this.props.pageSize}`;
      let data=await fetch(url);
      let parseData= await data.json();
      this.setState({articles: parseData.articles,
        totalResults:parseData.totalResults })
      console.log(parseData)
  }
  handlePreviousClick= async()=>{
    let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=71e52780adfe4064aefa4c5331398065&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
    let data=await fetch(url);
    let parseData= await data.json();
    this.setState({
        page: this.state.page-1,
        articles: parseData.articles
       
    })


}
handleNextClick= async()=>{
    if(this.state.page+1> Math.ceil(this.state.totalResults/this.props.pageSize)){

    }
    else{
    let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=71e52780adfe4064aefa4c5331398065&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
    let data=await fetch(url);
    let parseData= await data.json();
    this.setState({
        page: this.state.page+1,
        articles: parseData.articles,
       })

}}

  render() {
    return (
      <div className="container my-3">
        <h2 className="d-flex justify-content-around">News Monkey: Top Headlines</h2>

        <div className="row">
          {this.state.articles.map((element) => {
           return <div className="col-md-4 my-4" key={element.url}>
              <NewsItem title={element.title?element.title.slice(0,40)+"..":""} description={element.description?element.description.slice(0,100)+"....":""}
               imageUrl={element.urlToImage?element.urlToImage:"https://ichef.bbci.co.uk/news/1024/branded_news/131A4/production/_109644287_gettyimages-1169966883.jpg"} newsUrl={element.url}
              />
            </div>;
          })}
          <div className="container d-flex justify-content-around my-4">
              <button disabled={this.state.page<=1} className="btn btn-dark" onClick={this.handlePreviousClick}>  &larr; Previous</button>
              <button disabled={this.state.page+1> Math.ceil(this.state.totalResults/this.props.pageSize)}className="btn btn-dark" rel="noreferrer" target="_blank"onClick={this.handleNextClick}>Next   &rarr;</button>
          </div>
        </div>
      </div>
    );
  }
}

export default DailyNews;
