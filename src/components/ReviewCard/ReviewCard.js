import React from "react";
import { Image } from "react-bootstrap";

const ReviewCard = () => {
    return (
        <div class="col">
            <div class="card">
            <Image src="holder.js/171x180" roundedCircle />
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">
                        This is a longer card with supporting text below as a
                        natural lead-in to additional content. This content is a
                        little bit longer.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;
