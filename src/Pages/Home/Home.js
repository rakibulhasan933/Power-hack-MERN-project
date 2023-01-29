import React from 'react';
import { Link } from 'react-router-dom';
import bg from '../../assets/pexels-daniel-reche-1556704.jpg';

const Home = () => {
	return (
		<div style={{ background: `url(${bg})` }} className="relative min-h-screen bg-cover ">
			<div>
				<div className="absolute bottom-1/3 left-40">
					<h3 className='my-4 text-xl font-normal text-white'>Using sunlight to prevent electricity waste.</h3>
					<button className='p-2 text-base font-medium bg-white rounded w-36 hover:bg-blue-500'><Link to='/pay-bill'>Pay Bill</Link></button>
				</div>
			</div>
		</div>
	);
};

export default Home;