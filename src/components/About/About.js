import React, { useEffect, useState } from "react";
import AboutCard from "../AboutCard/AboutCard";


// this component is for about section
const About = () => {
    const [leaders, setLeaders] = useState([]);
    useEffect(() => {
        fetch("./leader.JSON")
            .then((res) => res.json())
            .then((data) => setLeaders(data));
    }, []);
    return (
        <>
            <div className="mt-5 py-3 container">
                <h3 className="text-danger bg-dark">Why Miles Ahead?</h3>
                <div class="card border-info mb-3">
                    <div class="card-body">
                        <h5 class="card-title"><u>Our Education Approach</u></h5>
                        <p class="card-text">
                            <small>
                                We believe that our students require and deserve
                                an exceptional and innovative academic program
                                that: (1) better engages young minds in deeper
                                learning for a complex world, (2) meets the
                                unique needs of diverse learners, and (3)
                                ensures high grade level achievement. MACS
                                empowers students with academic knowledge and
                                skills, addresses individual academic needs,
                                prepares students to produce high-quality work,
                                and motivates and engages them through service
                                learning.
                            </small>
                        </p>
                    </div>
                </div>
            </div>
            <h2 className="bg-light text-primary">Our Leader Ship</h2>
            {/* call Dynamic about card */}
            <div className="container">
                {leaders.map((leader) => (
                    <AboutCard leader={leader}></AboutCard>
                ))}
            </div>
        </>
    );
};

export default About;
