

import React, { createContext, useState, useContext } from 'react';
import course1 from '../images/course1.jpg';
//import {MyContext} from './EnrollmentList';
import EnrollmentList from './EnrollmentList';


let enrollmentCount = 0;
export const CourseContext = createContext({ enrollmentCount });
function CourseItem({ course, onClick }) {


    const [description, setDescription] = useState("");
    if (!course) {
        return <div>Error: Course data not available.</div>;
    }

    return (
        <div
            style={{ border: "solid black 1px", width: "300px", alignItems: "center", textAlign: "center" }}
            onMouseEnter={() => setDescription(course.description)}
            onMouseLeave={() => setDescription("")}
        >
            <img src={course1} alt="course" style={{ width: "300px" }} />
            <p>{course.name}</p>
            <p>{course.instructor}</p>
            <button
                onClick={() => {
                    onClick();
                    let enrolledAlready = (localStorage.getItem(`${course.id}`) === 'true');
                    console.log(enrolledAlready)
                    if (enrolledAlready === false) {
                        localStorage.setItem(`${course.id}`, true);
                    }
                }}
            >
                Enroll Now
            </button>
            <p>{description}</p>
        </div>
    );
}

export default CourseItem;