import React, { createContext, useState, useContext } from 'react';
import { UserContext } from '../contexts/UserContext';
import course1 from '../images/course1.jpg';
import EnrollmentList from './EnrollmentList';

let enrollmentCount = 0;
export const CourseContext = createContext({ enrollmentCount });

function CourseItem({ course, onClick }) {
    const { userId } = useContext(UserContext);
    const [description, setDescription] = useState("");

    if (!course) {
        return <div>Error: Course data not available.</div>;
    }

    const enrollCourse = async () => {
        try {
            const response = await fetch(`http://localhost:5000/enroll/${userId}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ course_id: course.id }),
            });
            const data = await response.json();
            if (data.success) {
                onClick(); // Trigger re-render
            } else {
                console.error(data.message);
            }
        } catch (error) {
            console.error('Error enrolling in course:', error);
        }
    };

    return (
        <div
            style={{ border: "solid black 1px", width: "300px", alignItems: "center", textAlign: "center" }}
            onMouseEnter={() => setDescription(course.description)}
            onMouseLeave={() => setDescription("")}
        >
            <img src={course1} alt="course" style={{ width: "300px" }} />
            <p>{course.name}</p>
            <p>{course.instructor}</p>
            <button onClick={enrollCourse}>Enroll Now</button>
            <p>{description}</p>
        </div>
    );
}

export default CourseItem;