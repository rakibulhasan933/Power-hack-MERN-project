import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../Shared/Loading/Loading';

const RequireAuth = ({ children }) => {

	const location = useLocation();
	if (loading) {
		return <Loading />
	}
	if (!user) {
		return <Navigate to="/login" state={{ from: location }} replace />
	}
	return children;
};

export default RequireAuth;