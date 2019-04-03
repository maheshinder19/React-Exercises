import React, { Component } from "react";
import "./book.css";

export default class Book extends Component {
  render() {
    let {
      bookList,

      match: {
        params: { id }
      }
    } = this.props;
    console.log(id);
    return (
      <div id="book">
        <div className="head wrapper">
          <h1 className="book-title">{bookList[id].title}</h1>
          <button className="logout" onClick={this.props.toggleAuth}>
            Logout
          </button>
        </div>
        <div id="book-details" className=" wrapper">
          <img id="book-img" src={bookList[id].thumbnailUrl} alt="book" />
          <div id="short-details">
            <p className="desc-headings">
              Page count: <span>{bookList[id].pageCount}</span>
            </p>

            <p className="desc-headings">
              By: <span>{bookList[id].authors[0]}</span>
            </p>
            <p className="desc-headings">
              Category: <span>{bookList[id].categories[0]}</span>
            </p>
            <p className="desc-headings">
              Description:{" "}
              <span id="short-desc">{bookList[id].shortDescription}</span>
            </p>
          </div>
          <div id="long-desc">
            <h4>Synopsis</h4>
            {bookList[id].longDescription}
          </div>
        </div>
      </div>
    );
  }
}
