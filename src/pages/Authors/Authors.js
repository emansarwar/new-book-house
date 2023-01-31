// import { useEffect, useState } from 'react';
// import Expert from '../Expert/Expert';
import './Authors.css'

// import useAuthors from '../../hooks/useAuthors';
import Author from '../Author/Author';
import { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';




const Authors = () => {
    // const [experts] = useAuthors();
    const [authors, setAuthors] = useState([]);
    useEffect( () =>{
        fetch('http://localhost:5000/authors')
        .then(res =>res.json())
        .then(data => setAuthors(data))
    }, []);
    console.log(authors)
    
    return (
        <div id='authors' className='authors-main'>
            <h1 className="text-4xl py-5 authors-header">Authors</h1>
            <div className='authors-container'>
                {
                    authors.map(author =><Author
                    key={author._id}
                    author={author}
                    />)
                }
            </div>
            
            
        </div>
    );
};

export default Authors;