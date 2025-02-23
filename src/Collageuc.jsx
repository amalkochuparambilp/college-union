import React from "react";
import { Route, Routes, Link, HashRouter } from "react-router-dom";
import App from "./App";
import Dev from "./Pages/dev";
import Admin from "./Pages/Admin"; 
import Ambiora from "./Pages/Ambiora";
import ErrorPage from "./Pages/ErrorPage";

const Collagecu = () => {
    return (
        <HashRouter>
            <Routes>
                <Route path="*" element={ <ErrorPage /> } />
                <Route path="/" element={<App />} />
                <Route path="akpdevz" element={<Dev />} />
                <Route path="admin" element={<Admin />} />
                <Route path="artsday" element={<Ambiora />} />
            </Routes>
        </HashRouter>
    );
};
export default Collagecu;
