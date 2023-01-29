import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';

const NotFound = () => {
	return (
		<div>
			<Navbar />
			<div className='my-2 text-center'>
				<p className='font-extrabold text-red-600 text-8xl'>4 <span className='text-blue-800 '>0</span> 4</p>
				<p className='text-red-500'>Something went wrong!!!</p>
				<h4 className="text-3xl"> Please <button>Sign out</button> and log back in</h4>
			</div>
			<Footer />
		</div>
	);
};

export default NotFound;