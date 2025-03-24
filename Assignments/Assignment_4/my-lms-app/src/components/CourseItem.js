// Displays information of a course given the course object example:
/* 
	{
		id: 10,
		name: "Augmented Reality",
		instructor: "Dr. Jane Doe",
		description: "Learn ARKit and ARCore.",
		duration: "26 weeks",
		image: "images/course10.jpg"
	}
 */

import React from 'react';

function CourseItem(props) {
	return (
		<div className="course-item">
			<img src={props.course.image} alt={props.course.name} />
			<h3>{props.course.name}</h3>
			<p>Instructor: {props.course.instructor}</p>
			<p>{props.course.description}</p>
			<p>Duration: {props.course.duration}</p>
		</div>
	);
}

export default CourseItem;