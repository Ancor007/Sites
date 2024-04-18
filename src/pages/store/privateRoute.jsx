import { Navigate, Outlet } from "react-router";
import { useAuth } from "../hooks/use-auth"

const PrivateRoute = () => {
    const token = useAuth()
    return (
        token ? <Outlet/> : <Navigate to="/login" />
    );
};

export default PrivateRoute;
