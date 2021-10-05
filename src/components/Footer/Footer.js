import React from "react";
import "./Footer.css";

// footer component is design by row css and bootstrap
const Footer = () => {
    return (
        <div className="footer">
            <div className="container d-flex flex-md-row footer-container flex-sm-column align-items-center">
                <div className="left-footer mx-auto">
                    <div>
                        <h2 className="text-primary">Miles Ahead</h2>
                        <div className="icons">
                             
                        </div>
                        <div className="text-muted">
                            <small>&copy; All rights Reserved by 2021</small>
                        </div>
                    </div>
                </div>

                <div className="text-secondary mx-auto">
                    <h6 className="m-0 mt-1">Miles Ahead Academy</h6>
                    <p className="mb-1 m-0">
                        <small>
                            1381 WEST MASSEY ROAD MEMPHIS, TENNESSEE 38120 (901)
                            474-1000
                        </small>
                    </p>
                    <h6 className="mt-1 m-0">CONTACT US</h6>
                    <p className="m-0">
                        <small>Email: mealsahead@info.com</small>
                        <br />
                        <small>Phone: +45 423 80283</small>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
