import React from "react";
import "./NotFound.css";

// show this component when route doesn't match
const NotFound = () => {
    return (
        <div className="not-found">
            <div>
                 
                <h1>404</h1>
                <h1>
                    <i>Page Not Found</i>
                </h1>
            </div>
        </div>
    );
};

export default NotFound;
