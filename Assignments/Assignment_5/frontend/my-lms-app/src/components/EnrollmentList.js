import React, { useEffect, useState, useContext } from 'react';
import EnrolledCourse from './EnrolledCourse';
import { UserContext } from '../contexts/UserContext';

function EnrollmentList({ rerender, onClick }) {
    const { userId } = useContext(UserContext); // Get userId from UserContext
    const [enrolledCourseIds, setEnrolledCourseIds] = useState([]);
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        // Fetch all courses
        const fetchCourses = async () => {
            try {
                const response = await fetch('http://localhost:5000/courses');
                if (!response.ok) throw new Error('Failed to fetch courses');
                const data = await response.json();
                setCourses(data.courses);
            } catch (error) {
                console.error('Error fetching courses:', error);
            }
        };

        // Fetch enrolled courses for the user
        const fetchEnrolledCourses = async () => {
            try {
                const response = await fetch(`http://localhost:5000/student_courses/${userId}`);
                if (!response.ok) throw new Error('Failed to fetch enrolled courses');
                const data = await response.json();
                setEnrolledCourseIds(data.enrolled_courses); // Save enrolled course IDs
            } catch (error) {
                console.error('Error fetching enrolled courses:', error);
            }
        };

        fetchCourses();
        fetchEnrolledCourses();
    }, [userId, rerender]);

    function calculateTotalCreditHours() {
        let total = 0;
        courses.forEach((course) => {
            if (enrolledCourseIds.includes(course.id)) {
                const weeks = parseInt(course.duration.split(' ')[0], 10) || 0;
                total += weeks * 4; // Assuming 4 credit hours per week
            }
        });
        return total;
    }

    return (
        <div>
            <h1>Enrolled Courses</h1>
            <p>Total Credit Hours: {calculateTotalCreditHours()}</p>
            <div style={{ display: 'flex', margin: 50 }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
                    {courses.map((course) => {
                        if (enrolledCourseIds.includes(course.id)) {
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
