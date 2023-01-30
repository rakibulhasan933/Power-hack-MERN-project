import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';


const BillCard = ({ item }) => {
	const { register, handleSubmit, reset, formState: { errors } } = useForm();
	const onSubmit = data => {
		fetch(`https://power-hack-house-server.vercel.app/update-billing/${item._id}`, {
			method: 'PUT',
			headers: {
				'content-type': 'application/json',
			},
			body: JSON.stringify(data)
		})
			.then(res => res.json())
			.then(data => {
				if (data.matchedCount) {
					Swal.fire(
						'Update!',
						'This Oder has been Updated.',
						'success'
					)
				}
				else {
					toast.error('Failed Updated');
				}
			});
	}



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
				fetch(`https://power-hack-house-server.vercel.app/delete-billing/${id}`, {
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
		<>
			<tr>
				<td>{item?._id}</td>
				<td>{item?.name}</td>
				<td>{item?.email}</td>
				<td>{item?.phone}</td>
				<td>{item?.amount}</td>

				<td><label htmlFor="update-modal" className='p-2 text-base font-medium bg-green-400 rounded cursor-pointer'>
					Update
				</label>
					<button onClick={() => handleDeleteOder(item._id)} className='p-2 ml-2 text-base font-medium bg-red-400 rounded'>Deleted</button></td>
			</tr>
			<input type="checkbox" id="update-modal" className="modal-toggle" />
			<div className="modal modal-bottom sm:modal-middle">
				<div className="modal-box">
					<h3 className="text-lg font-bold text-center">Update From Form</h3>
					<form onSubmit={handleSubmit(onSubmit)}>
						<div className="w-full max-w-xs form-control">
							<label className="label">
								<span className="label-text">Name</span>
							</label>
							<input type="text" className="w-full max-w-xs input input-bordered" {...register("name")} />

							<label className="label">
								<span className="label-text">Email</span>
							</label>
							<input type="email" className="w-full max-w-xs input input-bordered" {...register("email")} />
							<label className="label">
								<span className="label-text">Phone</span>
							</label>
							<input type="tel" className="w-full max-w-xs input input-bordered" {...register("phone", {
								required: {
									value: true,
									message: 'Phone number is Required'
								},
								minLength: {
									value: 11,
									message: 'Must be 11 characters'
								},
								maxLength: {
									value: 11,
									message: 'Must be 11 characters'
								},
							})} />
							<label className="label">
								{errors.phone?.type === 'required' && <span className="text-red-500 label-text-alt">{errors.phone?.message}</span>}
								{errors.phone?.type === 'minLength' && <span className="text-red-500 label-text-alt">{errors.phone?.message}</span>}
								{errors.phone?.type === 'maxLength' && <span className="text-red-500 label-text-alt">{errors.phone?.message}</span>}
							</label>
						</div>
						<input className='w-full max-w-xs p-2 my-2 text-base font-medium text-white bg-blue-600 cursor-pointer btn' type="submit" value="Submit" />
						<label htmlFor="update-modal" className="p-3 ml-2 text-base font-medium bg-red-500 rounded cursor-pointer">Cancel</label>
					</form>
				</div>
			</div>
		</>
	);
};

export default BillCard;