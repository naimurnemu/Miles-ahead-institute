import React from "react";

const HomeCard = (props) => {
    console.log(props.course);
    const { title, price, creator, img } = props.course;

    return (
        <div className="col">
            <div className="card">
                <img className="img-fluid" src={img} alt="" />
                <div className="card-body">
                    <h5 className="card-title m-0">{title}</h5>
                    <p className="m-0 text-primary">
                         <small className="text-dark">Course by</small> {creator}
                    </p>
                    <div className="d-flex justify-content-evenly">
                        <div>
                            <h5 className="text-danger">${price}</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeCard;
