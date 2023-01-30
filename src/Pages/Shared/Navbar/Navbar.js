import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link } from 'react-router-dom';
import Loading from '../Loading/Loading';


const Navbar = () => {
	const { data, isLoading, error } = useQuery({
		queryKey: ['length'],
		queryFn: () =>
			fetch('http://localhost:5000/bill-list').then(
				(res) => res.json()
			),
	},
		{
			refetchInterval: 2000,
		}
	);

	if (isLoading) {
		return <Loading />
	}
	if (error) {
		console.log(error);
	}

	return (
		<div className="px-6 navbar bg-base-200">
			<div className="navbar-start">
				<Link className="text-xl normal-case btn btn-ghost" to='/'>Power Hack</Link>
			</div>
			<div className="navbar-end">
				<button>Paid Total: </button>
			</div>
		</div>
	);
};

export default Navbar;