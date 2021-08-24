import React from "react";

const Book = (props) => {
  const { img, title, author } = props;
  const clickHandler = (e) => {
    console.log(e);
    console.log(e.target);
    alert("hellowww");
  };

  const complexExample = (author) => {
    console.log(author);
  };
  return (
    <article
      className="book"
      onMouseOver={() => {
        console.log(title);
      }}
    >
      <img src={img} alt="general image" />
      <h1 onClick={() => console.log(title)}>{title}</h1>
      <h1 style={{ color: "#f17", fontSize: "0.75rem", letterSpacing: "5px" }}>
        {author.toUpperCase()}
      </h1>
      <button type="button" onClick={clickHandler}>
        ref Example
      </button>
      <button type="button" onClick={() => complexExample(author)}>
        ref Complex Example
      </button>
    </article>
  );
};

export default Book;
