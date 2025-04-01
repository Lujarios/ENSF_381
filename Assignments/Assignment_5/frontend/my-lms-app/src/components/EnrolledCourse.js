import React from 'react';
import course1 from '../images/course1.jpg';



function EnrolledCourse({course, onClick}) {
    
    if (!course) {
        return <div>Error: Course data not available.</div>;
    }
    function calculateCreditHours(weeks) {
        return (weeks * 4); // assuming that every course requires 4 hours per week
    }
    const weeksString = course.duration.split(" ")[0]; // Get the first part before the space
    console.log(weeksString);
    const weeks = isNaN(weeksString) ? 0 : parseInt(weeksString, 10);
    console.log(weeks);

    return (
        <div style = {{border: "solid black 1px", width: "300px", alignItems: "center", textAlign: "center"}}>
            <img src={course1} alt="course" style={{ width: "300px" }} />
            <p>{course.name}</p>
            <p>Credit Hours: {calculateCreditHours(weeks)} </p>
            <button
                onClick={() => {
                    onClick();
                    localStorage.setItem(`${course.id}`, false);

                }}
            >
                Drop Course
            </button>
            <p></p>

        </div>
    );
}

export default EnrolledCourse;