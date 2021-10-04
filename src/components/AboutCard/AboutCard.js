import React from "react";

const AboutCard = (props) => {
    const { img, name, job, expert } = props.leader;
    return (
        <div className="mb-3">
            <div className="row align-items-center g-0">
                <div className="col-md-6">
                    <img src={img} className="img-fluid rounded-start" alt="" />
                </div>
                <div className="col-md-6 border">
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>

                        <p className="card-text">
                            <small className="text-muted">{job} of Academy.</small>
                        </p>
                        <p>Expert in {expert}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutCard;
