import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Jobs from "../components/Jobs";
import Home from "../components/Home";
import Navbar from "../components/Navbar";

function AppRouter(){
    const[dark, setDark] = useState(false);
    return(
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/job" element={<Jobs dark={dark} />} />
            </Routes>
        </BrowserRouter>
    )
}
export default AppRouter;