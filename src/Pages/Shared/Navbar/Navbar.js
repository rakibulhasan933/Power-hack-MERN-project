import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';

const Navbar = () => {
	const [user] = useAuthState(auth);
	const logout = () => {
		signOut(auth);
	}
	return (
		<div className="px-6 navbar bg-base-200">
			<div className="navbar-start">
				<Link className="text-xl normal-case btn btn-ghost" to='/'>Power Hack</Link>
			</div>
			<div className="navbar-end">
				<button>Paid Total: 0 </button>
				<div className='p-2 text-base font-normal' >{user ? <button onClick={logout} className="btn btn-success">Sign Out</button> : <Link to='/login'>Login</Link>}</div>
			</div>
		</div>
	);
};

export default Navbar;