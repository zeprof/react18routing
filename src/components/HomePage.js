import React from "react";

import {Link} from "react-router-dom";

const HomePage = () => (
    <div>
        <h1>Demo Router Home Page</h1>
        <p>React demo router.</p>
        <Link to="about">En apprendre plus</Link>
    </div>
)

export default HomePage;