import React, { useEffect, useState } from "react";
import Heading from "../Heading/Heading";
import HomeCards from "../HomeCards/HomeCards";

const Home = () => {
    const [courses, setCourses] = useState([])
  useEffect(()=>{
    fetch("./data.JSON")
    .then(res=> res.json())
    .then(data => setCourses(data))
  },[])
    return (
        <>
            <div className="container">
                <Heading></Heading>

                
            </div>
            <div className="container">
                 <HomeCards courses={courses}></HomeCards>
            </div>
        </>
    );
};

export default Home;
