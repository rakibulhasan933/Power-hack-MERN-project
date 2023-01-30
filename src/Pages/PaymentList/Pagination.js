import React from 'react';

const Pagination = ({ productPerPage, totalProducts, paginate }) => {
	const pageNumbers = [];

	for (let i = 1; i <= Math.ceil(totalProducts / productPerPage); i++) {
		pageNumbers.push(i);
	};

	return (
		<div className='flex flex-row items-center justify-center m-2'>
			<div className="btn-group">
				{
					pageNumbers?.map((number) => (
						<button key={number} onClick={() => paginate(number)} className='rounded btn'>{number}</button>
					))
				}
			</div>
		</div>
	);
};

export default Pagination;