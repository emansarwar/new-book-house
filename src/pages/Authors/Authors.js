// import { useEffect, useState } from 'react';
// import Expert from '../Expert/Expert';
import "./Authors.css";

// import useAuthors from '../../hooks/useAuthors';
import Author from "../Author/Author";
import { useEffect, useState } from "react";
// import { Link } from 'react-router-dom';

const Authors = () => {
  // const [experts] = useAuthors();
  const [authors, setAuthors] = useState([]);
  useEffect(() => {
    fetch("https://book-house-server.vercel.app/authors")
      .then((res) => res.json())
      .then((data) => setAuthors(data));
  }, []);
  // console.log(authors);

  return (
    <div id="authors" className="authors-main bg-emerald-600">
      <h1 className="text-4xl py-5 authors-header bg-emerald-400">Authors</h1>
      <div className="authors-container">
        {authors.map((author) => (
          <Author key={author._id} author={author} />
        ))}
      </div>
    </div>
  );
};

export default Authors;
