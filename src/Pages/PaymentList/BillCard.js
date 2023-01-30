import React, { useState } from 'react';
import Swal from 'sweetalert2';

const BillCard = ({ item }) => {
	const [isDelete, setIsDelete] = useState(null);
	const handleDeleteOder = (id) => {
		Swal.fire({
			title: 'Are you sure?',
			text: "You won't be able to revert this!",
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Yes, delete it!'
		}).then((result) => {
			if (result.isConfirmed) {
				fetch(`http://localhost:5000/delete-billing/${id}`, {
					method: 'DELETE'
				})
					.then(res => res.json())
					.then(result => {
						if (result.deletedCount) {

							Swal.fire(
								'Deleted!',
								'This Oder has been deleted.',
								'success'
							)
							setIsDelete(true);

						} else {
							setIsDelete(false);
						}
					})
			}

		})
	};

	return (
		<tr>
			<td>{item?._id}</td>
			<td>{item?.name}</td>
			<td>{item?.email}</td>
			<td>{item?.phone}</td>
			<td>{item?.amount}</td>
			<td><button className='p-2 text-base font-medium bg-green-400 rounded'>Update</button> <button onClick={() => handleDeleteOder(item._id)} className='p-2 text-base font-medium bg-red-400 rounded'>Deleted</button></td>
		</tr>
	);
};

export default BillCard;