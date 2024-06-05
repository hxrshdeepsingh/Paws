// components/ProtectedRoute.js

import useAuth from '../hooks/useAuth';
import Loading from './loading';

const ProtectedRoute = (WrappedComponent) => {
  return (props) => {
    const isAuthenticated = useAuth();

    if (!isAuthenticated) {
      return <Loading/>;
    }
    else{
      return <WrappedComponent {...props} />;
    }
  };
};

export default ProtectedRoute;