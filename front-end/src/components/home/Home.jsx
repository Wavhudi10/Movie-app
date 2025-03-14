import Hero from "../hero/Hero.jsx";
import React from "react";

function Home ({movies}) {
    return (
        <Hero movies={movies}/>
    );
}

export default Home;