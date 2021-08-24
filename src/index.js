import React from "react";
import ReactDom from "react-dom";

//CSS
import "./index.css";

import { books } from "./books";
import Book from "./Book";
import { greetings } from "./TestingImport/hello";

function BookList() {
  return (
    <div>
      <h1> {greetings} </h1>{" "}
      <section className="booklist">
        {books.map((book) => {
          //const { img, title, author } = book;
          return (
            <Book key={book.id} {...book}>
            </Book>
          );
        })}
      </section>
    </div>
  );
}

ReactDom.render(<BookList />, document.getElementById("root"));
