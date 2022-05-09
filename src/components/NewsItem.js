import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl } = this.props;
    return (
      <div className= "d-flex justify-content-center">
        <div className="card " style={{ width: "18rem" }}>
          <img src={imageUrl} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-dark btn-sm d-flex justify-content-center"> Read More </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
