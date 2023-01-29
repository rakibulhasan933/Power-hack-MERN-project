import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<div className="px-3 navbar bg-base-200">
			<div className="navbar-start">
				<div className="dropdown">
					<label tabIndex={0} className="btn btn-ghost lg:hidden">
						<svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
					</label>
					<ul tabIndex={0} className="p-2 mt-3 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
						<li><Link to='/bill-payment'>Billing</Link></li>
					</ul>
				</div>
				<Link className="text-xl normal-case btn btn-ghost" to='/'>Power Hack</Link>
			</div>
			<div className="hidden navbar-center lg:flex">
				<ul className="px-1 menu menu-horizontal">
					<li><Link to='/bill-payment'>Billing</Link></li>
				</ul>
			</div>
			<div className="navbar-end">
				<button>Total Amount : 0 </button>
			</div>
		</div>
	);
};

export default Navbar;