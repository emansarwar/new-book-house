import React, { useContext } from "react";
// import { setAuthToken } from '../../../api/auth';
import { setAuthToken } from "../../../api/auth";
import { AuthContext } from "../../../contexts/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { googleSignIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";
  const handleGoogleSIgnIn = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
        console.log(user);
        setAuthToken(user);
        console.log(user.email)
        navigate(from, { replace: true });
      })
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <button onClick={handleGoogleSIgnIn} className=" btn btn btn-wide btn-success mt-2">
        Google Sign-In
      </button>
    </div>
  );
};

export default SocialLogin;
