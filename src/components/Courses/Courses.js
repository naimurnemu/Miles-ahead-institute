import React, { useEffect, useState } from 'react';
import CourseCards from '../CourseCards/CourseCards';

const Courses = () => {
    const [coursesData, setCoursesData] = useState([])
    useEffect(()=>{
        fetch("./data.JSON")
    .then(res=> res.json())
    .then(data => setCoursesData(data))
    },[])
    return (
        <div className="container">
            <div className="text-danger p-5 mt-5 bg-light">
                <h2>There are {coursesData.length} courses in Miles Ahead Academy.</h2>
                <h5 className="text-info">"Make hard look easy!" --Stein writes</h5>
            </div>
            <CourseCards courses={coursesData}></CourseCards>
        </div>
    );
};

export default Courses;