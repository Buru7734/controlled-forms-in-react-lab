import { useState } from "react";

const Bookshelf = () => {
  const [books, setBooks] = useState([
    { title: "Fourth Wing", author: "Rebecca Yarros" },
    { title: "The Lion, the Witch and the Wardrobe", author: "C.S. Lewis" },
  ]);

  const [newBooks, setNewBooks] = useState({
    title: "",
    author: "",
  });

  const handleInputChange = (event) => {
    setNewBooks({ ...newBooks, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setBooks([...books, newBooks]);
    setNewBooks({ title: "", author: "" });
  };

  return (
    <>
      <div className="bookshelfDiv">
        <div className="formDiv">
          <h3>Add a Book</h3>
          <form onSubmit={handleSubmit}>
            <label htmlFor="title">
              Book:
              <input
                type="text"
                name="title"
                id="title"
                value={newBooks.title}
                onChange={handleInputChange}
              />
            </label>
            <label htmlFor="author">
              Author:
              <input
                type="text"
                name="author"
                id="author"
                value={newBooks.author}
                onChange={handleInputChange}
              />
            </label>
            <button type="submit">submit</button>
          </form>
        </div>

        <div className="bookCardsDiv">
          <ul>
            {books.map((book, index) => (
              <li key={index}>
                {book.title} by
                {book.author}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Bookshelf;
