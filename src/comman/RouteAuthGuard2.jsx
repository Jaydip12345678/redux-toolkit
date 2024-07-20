import { useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import { Userdata } from "../redux/middlewares/auth";

const RouteAuthGuard2 = ({ children }) => {
    const dispatch = useDispatch()
    const Useravalable = localStorage.getItem('UserDetails');

    if (Useravalable) {
        dispatch(Userdata(Useravalable))
        return children;
    } else {
        return <Navigate to="/" replace />;
    }
};

export default RouteAuthGuard2;