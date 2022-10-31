import { getUserInfo } from 'entity/User';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export const ProtectedRoute = ({ children }: { children: JSX.Element}) => {
    const user = useSelector(getUserInfo);

    if (!user) {
        return <Navigate to="/" />;
    }
    return children;
};