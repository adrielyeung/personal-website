import React from "react";
import "../App.css";
import Cover from "../components/Cover";
import Cards from "../components/Cards";

const SITE_NAME = "Adriel the Explorer";

function Home() {
    document.title = SITE_NAME;
    return (
        <>
            <Cover />
            <Cards />
        </>
    );
}

export default Home;