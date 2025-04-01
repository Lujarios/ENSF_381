import React, { useEffect, useState } from 'react';

function MainSection() {
	const [randomCourses, setRandomCourses] = useState([]);
	const [randomTestimonials, setRandomTestimonials] = useState([]);

	useEffect(() => {
		// Fetch courses from the backend
		fetch('http://localhost:5000/courses')
			.then((response) => response.json())
			.then((data) => {
				const courses = data.courses; // Extract courses array
				// Get 3 random courses
				const selectedCourses = [];
				while (selectedCourses.length < 3 && courses.length > 0) {
					const randomIndex = Math.floor(Math.random() * courses.length);
					const randomCourse = courses[randomIndex];
					if (!selectedCourses.includes(randomCourse)) {
						selectedCourses.push(randomCourse);
					}
				}
				setRandomCourses(selectedCourses);
			})
			.catch((error) => console.error('Error fetching courses:', error));

		// Fetch testimonials from the backend
		fetch('http://localhost:5000/testimonials')
			.then((response) => response.json())
			.then((data) => {
				const testimonials = data.testimonials; // Extract testimonials array
				setRandomTestimonials(testimonials);
			})
			.catch((error) => console.error('Error fetching testimonials:', error));
	}, []);

	function reviewStars(rating) {
		const stars = '★'.repeat(rating) + '☆'.repeat(5 - rating);
		return stars;
	}

	return (
		<main className="index">
			<section id="about">
				<h2>About LMS</h2>
				<p>The Learning Management System (LMS) helps students and instructors manage courses, quizzes, and track
					performance efficiently.</p>
				<h3>Key Features:</h3>
				<div>
					<p>- Enroll in courses</p>
					<p>- Attempt quizzes</p>
					<p>- View leaderboards</p>
				</div>
			</section>

			<br />

			<section id="featured-courses">
				<h2>Featured Courses</h2>
				<table className="course-list">
					<tr>
						{randomCourses.map((course) => (
							<td key={course.id} className="course" width="33%">
								<h3>{course.name}</h3>
								<p>{course.description}</p>
								<p>Instructor: {course.instructor}</p>
								<p>Duration: {course.duration}</p>
							</td>
						))}
					</tr>
				</table>
			</section>

			<br />

			<section id="testimonials">
				<h2>Testimonials</h2>
				<div className="testimonial-list">
					{randomTestimonials.map((testimonial) => (
						<div key={testimonial.courseName} className="testimonial">
							<h3>{testimonial.courseName} Rating: {reviewStars(testimonial.rating)}</h3>
							<p><i>"{testimonial.review}" - {testimonial.studentName}</i></p>
						</div>
					))}
				</div>
			</section>
		</main >
	);
}

export default MainSection;