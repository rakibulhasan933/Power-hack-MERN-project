import React from 'react';

const PaymentList = () => {
	return (
		<div >
			<div className="flex flex-col ">
				<div className="flex flex-row p-3 my-2 rounded-sm bg-base-200">
					<div className="flex justify-start">
						<h2>Billing</h2>
					</div>
					<div className="flex justify-center ">
						<input type="text" placeholder="Search" className="input input-bordered" />
					</div>
					<div className="flex justify-end">
						<button>Add Bill</button>
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