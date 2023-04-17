import React, { useContext } from 'react';
import { UserContext } from '../context/UserProvider';
import { Navigate } from 'react-router-dom';
import { FaCircleNotch } from "react-icons/fa";

const PrivateRoute = ({ children }) => {

  const { user, loading } = useContext(UserContext);

  if (loading) {
    return (<div className='max-w h-[90vh] flex justify-center items-center'>
      <FaCircleNotch className='animate-spin text-8xl' />
    </div>)
  }

  if (user) {
    return children;
  }

  return <Navigate to='/log-in' replace={true} />;
};

export default PrivateRoute;
