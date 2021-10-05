import React from "react";

// About single card component by bootstrap card
const AboutCard = (props) => {
    const { img, name, job, expert } = props.leader || {};
    return (
        <div className="mb-3 card">
            <div className="row align-items-center g-0">
                <div className="col-md-6">
                    <img src={img} className="w-100 h-100 rounded-start" alt="" />
                </div>
                <div className="col-md-6">
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
