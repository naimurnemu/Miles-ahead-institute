import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const CourseCard = (props) => {
    console.log(props.course);
    const { title, description, img, price, about, rate } = props.course;
    const { video, article, task } = about;
    return (
        <>
            <div className="col">
                <div className="card h-100 border-0 shadow-lg">
                    <img src={img} alt="" />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>

                        <p className="card-text">{description}</p>
                    </div>
                    <div className="d-flex fw-bold border-bottom justify-content-evenly">
                        <span>Price: ${price}</span>
                        <span>
                            <FontAwesomeIcon className="text-warning" icon={faStar} /> {rate}
                        </span>
                    </div>
                    <div className="d-flex justify-content-evenly p-2">
                        <span>Duration: {video}h</span>
                        <span>Article: {article}</span>
                        <span>Practice: {task}</span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CourseCard;
