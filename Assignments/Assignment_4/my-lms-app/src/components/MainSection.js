import React, { useEffect, useState } from 'react';
import testimonials from '../data/testimonials';
import courses from '../data/courses';

function MainSection() {
	const [randomCourses, setRandomCourses] = useState([]);
	const [randomTestimonials, setRandomTestimonials] = useState([]);

	useEffect(() => {
		// Get 3 random courses
		const randomCourses = [];
		while (randomCourses.length < 3) {
			const randomIndex = Math.floor(Math.random() * courses.length);
			const randomCourse = courses[randomIndex];
			if (!randomCourses.includes(randomCourse)) {
				randomCourses.push(randomCourse);
			}
		}
		setRandomCourses(randomCourses);

		// Get 2 random testimonials
		const randomTestimonials = [];
		while (randomTestimonials.length < 2) {
			const randomIndex = Math.floor(Math.random() * testimonials.length);
			const randomTestimonial = testimonials[randomIndex];
			if (!randomTestimonials.includes(randomTestimonial)) {
				randomTestimonials.push(randomTestimonial);
			}
		}
		setRandomTestimonials(randomTestimonials);
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
						<div key={testimonial.id} className="testimonial">
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