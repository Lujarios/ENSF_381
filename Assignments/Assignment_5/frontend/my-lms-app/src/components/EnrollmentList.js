import React, { useEffect, useState, useContext } from 'react';
import EnrolledCourse from './EnrolledCourse';
import { CourseContext } from './CourseItem';

function EnrollmentList({ rerender, onClick }) {
    const [courses, setCourses] = useState([]);
    const enrollmentCount = useContext(CourseContext);

    console.log("IN ENROLLMENT LIST");
    console.log(enrollmentCount);

    useEffect(() => {
        console.log("rerender");
    }, [rerender]);

    useEffect(() => {
        // Fetch courses from the backend
        const fetchCourses = async () => {
            try {
                const response = await fetch('http://localhost:5000/courses');
                if (!response.ok) {
                    throw new Error('Failed to fetch courses');
                }
                const data = await response.json();
                setCourses(data.courses); // Extract the courses array
            } catch (error) {
                console.error('Error fetching courses:', error);
            }
        };

        fetchCourses();
    }, []);

    function calculateTotalCreditHours() {
        let total = 0;
        courses.forEach((course) => {
            if (localStorage.getItem(`${course.id}`) === 'true') {
                const weeksString = course.duration.split(" ")[0]; // Get the first part before the space
                console.log(weeksString);
                const weeks = isNaN(weeksString) ? 0 : parseInt(weeksString, 10);
                total = total + (weeks * 4);
            }
        });
        return total;
    }

    return (
        <div>
            <h1>Enrolled Courses</h1>
            <p>Total Credit Hours: {calculateTotalCreditHours()}</p>

            <div style={{
                display: 'flex', margin: 50
            }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
                    {courses.map((course) => {
                        const isEnrolled = localStorage.getItem(`${course.id}`) === 'true';
                        if (isEnrolled) {
                            console.log("COURSE ENROLLED");
                            return <EnrolledCourse key={course.id} course={course} onClick={onClick} />;
                        }
                        return null;
                    })}
                </div>
            </div>
        </div>
    );
}

export default EnrollmentList;
