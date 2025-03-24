/* 

MainSection Component: 
	a. About LMS: Brief description of the system. 
	b. Featured Courses: Display 3 random courses from courses.js. 
	c. Testimonials: Show 2 random testimonials from testimonials.js on each render 
(use useEffect). Include student name, review, and star rating (e.g., ★★★★☆).
 */

/* From the original paae

	<main class="index">
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
	</main>
 */

import React, { useEffect, useState } from 'react';
import CourseItem from './CourseItem';
// CourseItem displays information about a course given the course object
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

			<section id="featured-courses">
				<h2>Featured Courses</h2>
				<div className="course-list">
					{randomCourses.map((course) => (
						<CourseItem key={course.id} course={course} />
					))}
				</div>
			</section>

			<section id="testimonials">
				<h2>Testimonials</h2>
				<div className="testimonial-list">
					{randomTestimonials.map((testimonial) => (
						<div key={testimonial.id} className="testimonial">
							<p>{testimonial.review}</p>
							<p>{testimonial.student}</p>
							<p>Rating: {testimonial.rating}</p>
						</div>
					))}
				</div>
			</section>
		</main>
	);
}

export default MainSection;