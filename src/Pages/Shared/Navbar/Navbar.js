import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<div className="px-6 navbar bg-base-200">
			<div className="navbar-start">
				<Link className="text-xl normal-case btn btn-ghost" to='/'>Power Hack</Link>
			</div>
			<div className="navbar-end">
				<button>Paid Total: 0 </button>
			</div>
		</div>
	);
};

export default Navbar;