import React, { useState } from 'react';

import CourseCatalog from '../components/CourseCatalog';
import EnrollmentList from '../components/EnrollmentList';
import Header from '../components/Header';
import Footer from '../components/Footer';



function CoursesPage() {
	const [rerender, setRerender] = useState(0);

	const addCourse = () => {
		setRerender(oldNum => oldNum + 1);
	};
	const removeCourse = () => {
		setRerender(oldNum => oldNum - 1);
	};


	return (
		<div className="courses-page">
			<Header />
			<div className="content">
				<CourseCatalog onClick = {addCourse}/>
				<EnrollmentList rerender = {rerender} onClick = {removeCourse}/>
			</div>
			<Footer />
		</div>
	);
}

export default CoursesPage;