import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Jobs from "../pages/Jobs";
import Home from "../pages/Home";

function AppRouter(){
    // const[dark, setDark] = useState(false);
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/job" element={<Jobs  />} />
            </Routes>
        </BrowserRouter>
    )
}
export default AppRouter;