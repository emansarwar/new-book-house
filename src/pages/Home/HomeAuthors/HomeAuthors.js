// import { useEffect, useState } from 'react';
// import Expert from '../Expert/Expert';
import "../../Authors/Authors.css";

// import useAuthors from '../../hooks/useAuthors';
import Author from "../../Author/Author";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const HomeAuthors = () => {
  // const [experts] = useAuthors();
  const [authors, setAuthors] = useState([]);
  const homeAuthors = authors.slice(0, 6);

  useEffect(() => {
    fetch("https://book-house-server-blue.vercel.app/authors")
      .then((res) => res.json())
      .then((data) => setAuthors(data));
  }, []);
  console.log(authors);

  return (
    <div id="authors" className="my-2 authors-main">
      <h1 className="text-5xl py-5 authors-header">Authors</h1>
      <div className="authors-container">
        {homeAuthors.map((author) => (
          <Author key={author._id} author={author} />
        ))}
      </div>
      <div className="view-all text-4xl py-2 mx-1">
        <button>
          <Link to="/authors">View all</Link>
        </button>
      </div>
    </div>
  );
};

export default HomeAuthors;
