import React from "react";
// import { Image } from "react-bootstrap";

// this card is about student is who give feed back
const ReviewCard = (props) => {
    const { picture, name, email, comment } = props.student || {};
    return (
        <div className="col">
            <div className="card mb-3 bg-dark">
                <div className="row g-0">
                    <div className="col-md-7">
                        <div className="card-body">
                            <h5 className="card-title m-0 text-light">
                                {name}
                            </h5>
                            <p className="card-text border-bottom">
                                <small className="text-muted">{email}</small>
                            </p>
                            <p className="card-text fw-bolder text-warning">
                                {comment}
                            </p>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <img
                            src={picture}
                            className="w-100 h-100 rounded-start"
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;
