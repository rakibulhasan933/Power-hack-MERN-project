import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import Navbar from '../Pages/Shared/Navbar/Navbar';

const Main = () => {
	return (
		<div className='m-2 '>
			<Navbar />
			<div className="m-2">
				<Outlet />
			</div>
			<Footer />
		</div>
	);
};

export default Main;