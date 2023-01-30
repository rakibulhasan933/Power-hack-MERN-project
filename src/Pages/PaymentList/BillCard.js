import React from 'react';

const BillCard = ({ item }) => {
	return (
		<tr>
			<td>{item?._id}</td>
			<td>{item?.name}</td>
			<td>{item?.email}</td>
			<td>{item?.phone}</td>
			<td>{item?.amount}</td>
			<td><button className='p-2 text-base font-medium bg-green-400 rounded'>Update</button> <button className='p-2 text-base font-medium bg-red-400 rounded'>Deleted</button></td>
		</tr>
	);
};

export default BillCard;