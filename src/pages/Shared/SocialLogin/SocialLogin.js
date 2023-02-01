import React, { useContext } from 'react';
// import { setAuthToken } from '../../../api/auth';
import { setAuthToken } from '../../../api/auth';
import { AuthContext } from '../../../contexts/AuthProvider';

const SocialLogin = () => {

    const { googleSignIn } = useContext(AuthContext);

    const handleGoogleSIgnIn = () => {
        googleSignIn()
            .then(result => {
                const user = result.user;
                console.log(user);
                setAuthToken(user);
            })
            .catch(err => console.error(err));
    }

    return (
        <div>
            {/* <p className='text-center'><small>Social Login</small></p> */}
            
            <button onClick={handleGoogleSIgnIn} className=' btn btn btn-wide btn-success mt-2'>Google Sign-In</button>
        
            {/* <div className="form-control mt-6">
              <input className="btn btn-primary" type="submit" value="Login" />
            </div> */}
        </div>
    );
};

export default SocialLogin;