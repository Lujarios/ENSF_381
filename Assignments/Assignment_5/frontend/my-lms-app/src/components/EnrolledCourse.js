import React, { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';
import course1 from '../images/course1.jpg';

function EnrolledCourse({ course, onClick }) {
    const { userId } = useContext(UserContext);

    const dropCourse = async () => {
        try {
            const response = await fetch(`http://localhost:5000/drop/${userId}`, {
                method: 'DELETE',
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
            console.error('Error dropping course:', error);
        }
    };

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
        <div style={{ border: 'solid black 1px', width: '300px', textAlign: 'center' }}>
            <img src={course1} alt="course" style={{ width: '300px' }} />
            <p>{course.name}</p>
            <p>Credit Hours: {calculateCreditHours(weeks)} </p>
            <button onClick={dropCourse}>Drop Course</button>
        </div>
    );
}

export default EnrolledCourse;