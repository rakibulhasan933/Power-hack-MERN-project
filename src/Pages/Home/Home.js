import React from 'react';
import bg from '../../assets/pexels-daniel-reche-1556704.jpg';

const Home = () => {
	return (
		<div style={{ background: `url(${bg})` }} className="min-h-screen bg-cover">
			<h1>Home</h1>
		</div>
	);
};

export default Home;