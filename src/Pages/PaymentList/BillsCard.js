import React from 'react';
import BillCard from './BillCard';

const BillsCard = ({ currentBill, isLoading }) => {
	return (
		<div>
			<div className="overflow-x-auto">
				<table className="table w-full table-zebra">
					<thead>
						<tr>
							<th>Billing ID</th>
							<th>Full Name</th>
							<th>Email</th>
							<th>Phone</th>
							<th>Paid Amount</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
						{
							currentBill?.map((item) => <BillCard key={item._id} item={item} />)
						}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default BillsCard;