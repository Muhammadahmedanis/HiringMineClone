import React, { useState } from "react";
import Navbar from "./Navbar";
import Sections from "./Sections";
import Footer from "./Footer";
import Jobs from "./Jobs";

function Home() {
    const[dark, setDark] = useState(false);

    return(
        <>
        <Navbar setDark={setDark} />
        <Sections dark={dark} />
        {/* <Jobs dark={dark} /> */}
        <Footer />
        </>
    )
}
export default Home;