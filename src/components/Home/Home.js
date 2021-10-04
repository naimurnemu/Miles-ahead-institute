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
            <div className="pt-4 mt-2 container">
              <h2 className="bg-dark text-light p-2 rounded">Explore <span className="text-warning">Miles Ahead</span></h2>
            </div>
            <div className="container">
                 <HomeCards courses={courses}></HomeCards>
            </div>
        </>
    );
};

export default Home;
