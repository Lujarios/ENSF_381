import React, { useEffect, useState } from 'react';
import CourseItem from './CourseItem';

function CourseCatalog({ onClick }) {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const response = await fetch('http://localhost:5000/courses');
                if (!response.ok) {
                    throw new Error('Failed to fetch courses');
                }
                const data = await response.json();
                setCourses(data.courses); // Access the "courses" array from the response
            } catch (error) {
                console.error('Error fetching courses:', error);
            }
        };

        fetchCourses();
    }, []);

    return (
        <div>
            <h1>Course Catalog</h1>
            <div style={{ display: 'flex', margin: 50 }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
                    {courses.map((course) => (
                        <CourseItem key={course.id} course={course} onClick={onClick} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default CourseCatalog;
