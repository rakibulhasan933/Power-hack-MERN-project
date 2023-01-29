import React from 'react';

const NotFound = () => {
	return (
		<div className='my-3 text-center'>
			<p className='text-red-500'>Something went wrong!!!</p>
			<p className='text-red-400'>Error Message</p>
			<h4 className="text-3xl"> Please <button>Sign out</button> and log back in</h4>
		</div>
	);
};

export default NotFound;