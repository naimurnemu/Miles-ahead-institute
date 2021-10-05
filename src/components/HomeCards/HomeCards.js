import React from 'react';
import HomeCard from '../HomeCard/HomeCard';

// home cards container by jsx
const HomeCards = (props) => {
    const {courses} = props || {}
    const bestCourses = courses.slice(0,4)
    return (
        <div className="row row-cols-1 row-cols-md-2 g-4 pb-4">
             {
                 
                 bestCourses.map(bestCourse => <HomeCard key={bestCourse.id} course={bestCourse}></HomeCard>)
             }
        </div>
    );
};

export default HomeCards;