import { getIsAuth } from 'entity/User/model/selectors/getIsAuth/getIsAuth';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { routesPaths } from 'shared/config/router/routerConfig';

export const ProtectedRoute = ({ children }: { children: JSX.Element}) => {
    const isAuth = useSelector(getIsAuth);
    const location = useLocation();

    if (!isAuth) {
        return <Navigate to={routesPaths.main} state={{ from: location }} replace={true} />;
    }
    return children;
};