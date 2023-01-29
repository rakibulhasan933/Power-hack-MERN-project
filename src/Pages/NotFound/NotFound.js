import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';

const NotFound = () => {
	return (
		<div className='h-screen '>
			<Navbar />
			<div className='my-3 text-center'>
				<p className='text-red-500'>Something went wrong!!!</p>
				<p className='text-red-400'>Error Message</p>
				<h4 className="text-3xl"> Please <button>Sign out</button> and log back in</h4>
			</div>
			<Footer />
		</div>
	);
};

export default NotFound;