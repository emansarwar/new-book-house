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
    fetch("https://book-house-server.vercel.app/authors")
      .then((res) => res.json())
      .then((data) => setAuthors(data));
  }, []);
  // console.log(authors);

  return (
    <div id="authors" className="my-2 bg-teal-500 authors-main text-center">
      <h1 className="text-5xl py-5 bg-teal-400 authors-header">Authors</h1>
      <div className="authors-container">
        {homeAuthors.map((author) => (
          <Author key={author._id} author={author} />
        ))}
      </div>

      <Link className="text-center" to="/authors">
        <button className="btn mb-2 w-2/3  bg-teal-400 text-black text-2xl  rounded hover:bg-teal-300">View all</button>
      </Link>
    </div>
  );
};

export default HomeAuthors;
