import { Navigate } from 'react-router-dom';

import fakeAuth from '../utils/fake-auth';

const PrivateRoute = (props) => {
  return fakeAuth.isAuthenticated
    ? props.children
    : <Navigate to="/login" />
};

export default PrivateRoute;
