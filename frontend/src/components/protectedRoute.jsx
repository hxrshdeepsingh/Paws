// components/ProtectedRoute.js

import useAuth from '../hooks/useAuth';

const ProtectedRoute = (WrappedComponent) => {
  return (props) => {
    const isAuthenticated = useAuth();

    if (!isAuthenticated) {
      return <p>Loading...</p>;
    }

    return <WrappedComponent {...props} />;
  };
};

export default ProtectedRoute;
