import React, { useEffect, useState } from "react";
import ReviewCard from "../ReviewCard/ReviewCard";

// there is overviews and feed backs of student.
const Reviews = () => {
    const [students, setStudents] = useState([]);
    useEffect(() => {
        fetch("./student.JSON")
            .then((res) => res.json())
            .then((data) => setStudents(data));
    }, []);
    return (
        <>
            <div className="mt-5 py-3">
                <h3 className="text-warning bg-dark p-2">
                    Overview of H S Ahead Academy
                </h3>
                <div className="card container mb-3">
                    <p className="card-text text-start p-2">
                        We believe that our students require and deserve an
                        exceptional and innovative academic program that: <br />
                        (1) better engages young minds in deeper learning for a
                        complex world, <br />
                        (2) meets the unique needs of diverse learners, and{" "}
                        <br />
                        (3) ensures high grade level achievement. <br /> MAA
                        empowers students with academic knowledge and skills,
                        addresses individual academic needs, prepares students
                        to produce high-quality work, and motivates and engages
                        them through service learning.
                    </p>
                </div>
            </div>
            <div>
                <h4 className="text-danger p-2"> Student's Feedback</h4>
                <div className="card m-3 p-3">
                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 pb-4">
                        {students.map((student) => (
                            <ReviewCard student={student}></ReviewCard>
                        ))}
                    </div>
                </div>
            </div>

            <div>
                <h4 className="text-danger p-2"> Our Student also Says</h4>
                <div className="card container mb-3">
                    <p className="card-text text-start">
                        Education is an essential part of our lives. We are
                        nothing without knowledge, and education is what
                        separates us from others. The main step to acquire
                        education is enrolling oneself in a school. School
                        serves as the first learning place for most of the
                        people. Similarly, it is the first spark in receiving an
                        education. My school is my second home where I spend
                        most of my time. Above all, it gives me a platform to do
                        better in life and also builds my personality. I feel
                        blessed to study in one of the most prestigious and
                        esteemed schools of the city. In addition, my school has
                        a lot of assets which makes me feel fortunate to be a
                        part of it. In this essay on my school, I will tell you
                        why I love my school and what my school has taught me.
                        <img
                            className="img-fluid"
                            src="https://d1whtlypfis84e.cloudfront.net/guides/wp-content/uploads/2019/07/23120150/school-1024x682.jpeg"
                            alt=""
                        />
                    </p>
                    <p>
                        However, their vintage architecture does not mean it is
                        out-dated, as it is well-equipped with all the
                        contemporary gadgets. I see my school as a lighthouse of
                        education bestowing knowledge as well as ethical conduct
                        upon us. In contrast to other schools, my school does
                        not solely focus on academic performance. In other
                        words, it emphasizes on the overall development of their
                        students. Along with our academics, extra-curricular
                        activities are also organized at our school. This one of
                        the main reasons why I love my school as it does not
                        measure everyone on the same scale. Our hardworking
                        staff gives time to each child to grow at their own pace
                        which instills confidence in them. My school has all the
                        facilities of a library, computer room, playground,
                        basketball court and more, to ensure we have it all at
                        our disposal.
                    </p>
                </div>
            </div>
        </>
    );
};

export default Reviews;
