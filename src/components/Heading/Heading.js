// import Button from "@restart/ui/esm/Button";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Heading.css";

// heading of home page
const Heading = () => {
    return (
        <div className="bg-img">
            <div className="pt-5 banner-text m-5">
                <h1 className="mt-5 p-3">
                    BUILDING CONFIDENCE,
                    <br /> <span className="text-danger">THOUTH SUPPORT</span>
                </h1>
                <p className="text-white ms-4">
                    Support is all about an Course. There are many video in
                    youtube but most of the people can't learn from youtube. For
                    effective learning join with us.
                </p>
                <Link to="/courses">
                    <Button className="ms-4" variant="success">
                        Go to Courses <FontAwesomeIcon icon={faArrowRight} />
                    </Button>
                </Link>
            </div>
        </div>
    );
};

export default Heading;
