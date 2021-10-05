import React from "react";
import CourseCard from "../CourseCard/CourseCard";

// dynamic course card container component
const CourseCards = (props) => {
    const { courses } = props || {};
    return (
        <div className="my-4 row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            {courses.map((course) => (
                <CourseCard key={course.id} course={course}></CourseCard>
            ))}
        </div>
    );
};

export default CourseCards;
