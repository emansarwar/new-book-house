// import { useEffect, useState } from 'react';
// import Expert from '../Expert/Expert';
import './Authors.css'

import useAuthors from '../../hooks/useAuthors';
import Author from '../Author/Author';




const Authors = () => {
    const [experts] = useAuthors();
    
    return (
        <div id='experts'>
            <h1 className="experts-header">Authors</h1>
            <div className='experts-container'>
                {
                    experts.map(expert =><Author
                    key={expert.id}
                    expert={expert}
                    />)
                }
            </div>
        </div>
    );
};

export default Authors;