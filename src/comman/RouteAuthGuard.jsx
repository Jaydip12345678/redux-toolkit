import { Navigate } from "react-router-dom";

const RouteAuthGuard = ({ children }) => {
    const Useravalable = localStorage.getItem('UserDetails');

    if (Useravalable) {
        return <Navigate to="/1" replace />;
    } else {
        return children;
    }
};

export default RouteAuthGuard;