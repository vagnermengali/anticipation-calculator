import Home from "../pages/Home";
import Error from "../pages/Error";
import HomePage from "../pages/HomeSimulation";
import { Routes, Route, Navigate } from "react-router-dom";

const Authenticator = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/error" element={<Error />}></Route>
            <Route path="/simulation-error" element={<HomePage />}></Route>
            <Route
                path="*"
                element={<Navigate to="/error" replace={true} />}
            ></Route>
        </Routes>
    );
}

export default Authenticator;