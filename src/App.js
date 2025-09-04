import React, { useState } from "react";
import "./App.css";

function App() {
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);
  const [loading, setLoading] = useState(false);

  const searchBooks = async () => {
    if (!query.trim()) return;

    setLoading(true);
    setHasSearched(true);
    setBooks([]); // Clear previous results

    try {
      const res = await fetch(
        `https://openlibrary.org/search.json?title=${query}`
      );
      const data = await res.json();
      setBooks(data.docs || []); // ✅ Use 'docs' and fallback to empty array
    } catch (error) {
      console.error("Error fetching books:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <h1>📚 Book Finder</h1>
      <div className="search-bar">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter book title..."
        />
        <button onClick={searchBooks}>Search</button>
      </div>

      <div className="book-grid">
        {loading ? (
          <div className="loading">
            <p>🔍 Searching for books...</p>
          </div>
        ) : hasSearched && books.length === 0 ? (
          <div className="no-results">
            <img
              src="https://via.placeholder.com/220x280?text=No+Books+Found"
              alt="No books found"
            />
            <p>😕 No books matched your search. Try another title!</p>
          </div>
        ) : (
          books.map((book) => (
            <div
              key={book.key || `${book.title}-${book.first_publish_year}`}
              className="book-card"
            >
              {book.cover_i ? (
                <img
                  src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
                  alt={book.title}
                />
              ) : (
                <div className="no-cover">No Cover</div>
              )}
              <h3>{book.title}</h3>
              <p>Author: {book.author_name?.[0] || "Unknown"}</p>
              <p>Year: {book.first_publish_year || "N/A"}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default App;
