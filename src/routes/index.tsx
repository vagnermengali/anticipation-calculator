import Home from "../pages/Home";
import Error from "../pages/Error";
import { Routes, Route, Navigate } from "react-router-dom";

const Authenticator = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/error" element={<Error />}></Route>
            <Route
                path="*"
                element={<Navigate to="/error" replace={true} />}
            ></Route>
        </Routes>
    );
}

export default Authenticator;