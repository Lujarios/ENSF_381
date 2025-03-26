import React from 'react';
import courses from '../data/courses';
import CourseItem from './CourseItem';

function CourseCatalog({onClick}) {
    return (
        <div>
            <h1>Course Catalog</h1>
            <div style={{ display: 'flex', margin: 50}}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>

                {courses.map((course) => (
                    <CourseItem  key = {course.id} course={course} onClick = {onClick}/>
                ))}
            </div>
        </div>

        </div>
        
    );
}

export default CourseCatalog;
