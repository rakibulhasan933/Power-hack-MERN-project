import React from 'react';

const PaymentList = () => {
	return (
		<div >
			<div className="flex flex-col">
				<div className="p-3 my-2 rounded-sm bg-base-200">
					<div className="flex content-center justify-between">
						<h2 className='text-lg font-normal'>Billing</h2>
						<input type="text" placeholder="Search" className="px-2 input-bordered w-80" />
						<button className='p-2 text-base font-normal bg-blue-500 rounded'>Add Bill</button>
					</div>
				</div>
				<div className="">
					table
				</div>
			</div>
		</div>
	);
};

export default PaymentList;