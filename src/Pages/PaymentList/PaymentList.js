import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const PaymentList = () => {
	const { register, handleSubmit, reset, formState: { errors } } = useForm();
	const onSubmit = data => {
		fetch('http://localhost:5000/add-billing', {
			method: 'POST',
			headers: {
				'content-type': 'application/json',
			},
			body: JSON.stringify(data)
		})
			.then(res => res.json())
			.then(data => {
				if (data.success) {
					toast.success('Your payment successFully');
					reset();
				}
				else {
					toast.error('your payment Failed tray agin')
				}
			});
	};
	return (
		<div >
			<div className="flex flex-col">
				<div className="p-3 my-2 rounded bg-base-200">
					<div className="flex content-center justify-between">
						<h2 className='p-2 text-lg font-medium'>Billing</h2>
						<input type="text" placeholder="Search" className="px-2 rounded w-80" />
						<label htmlFor="payment-modal" className='p-2 text-base font-normal bg-blue-500 rounded cursor-pointer'>
							Add Bill
						</label>
					</div>
					<input type="checkbox" id="payment-modal" className="modal-toggle" />
					<div className="modal modal-bottom sm:modal-middle">
						<div className="modal-box">
							<h3 className="text-lg font-bold text-center">Payment Form</h3>
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
									<label className="label">
										<span className="label-text">Number</span>
									</label>
									<input type="number" className="w-full max-w-xs input input-bordered" {...register("amount", {
										required: {
											value: true,
											message: 'amount number is Required'
										},
										minLength: {
											value: 3,
											message: 'Must be 100 characters or longer'
										},
									})} />
									{errors.amount?.type === 'required' && <span className="text-red-500 label-text-alt">{errors.amount?.message}</span>}
									{errors.amount?.type === 'minLength' && <span className="text-red-500 label-text-alt">{errors.amount?.message}</span>}
								</div>
								<input className='w-full max-w-xs p-2 my-2 text-base font-medium text-white bg-blue-600 cursor-pointer btn' type="submit" value="Submit" />
								<label htmlFor="payment-modal" className="p-3 ml-2 text-base font-medium bg-red-500 rounded cursor-pointer">Cancel</label>
							</form>
						</div>
					</div>
				</div>
				<div className="">
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
								<tr>
									<td>CyGanderton</td>
									<td>Quality Control Specialist</td>
									<td>rakibulmd933@gmail.com</td>
									<td>01794970431</td>
									<td>100</td>
									<td><button className='p-2 text-base font-medium bg-green-400 rounded'>Update</button> <button className='p-2 text-base font-medium bg-red-400 rounded'>Deleted</button></td>
								</tr>
								<tr>
									<td>CyGanderton</td>
									<td>Quality Control Specialist</td>
									<td>rakibulmd933@gmail.com</td>
									<td>01794970431</td>
									<td>100</td>
									<td><button className='p-2 text-base font-medium bg-green-400 rounded'>Update</button> <button className='p-2 text-base font-medium bg-red-400 rounded'>Deleted</button></td>
								</tr>
								<tr>
									<td>CyGanderton</td>
									<td>Quality Control Specialist</td>
									<td>rakibulmd933@gmail.com</td>
									<td>01794970431</td>
									<td>100</td>
									<td><button className='p-2 text-base font-medium bg-green-400 rounded'>Update</button> <button className='p-2 text-base font-medium bg-red-400 rounded'>Deleted</button></td>
								</tr>
								<tr>
									<td>CyGanderton</td>
									<td>Quality Control Specialist</td>
									<td>rakibulmd933@gmail.com</td>
									<td>01794970431</td>
									<td>100</td>
									<td><button className='p-2 text-base font-medium bg-green-400 rounded'>Update</button> <button className='p-2 text-base font-medium bg-red-400 rounded'>Deleted</button></td>
								</tr>
								<tr>
									<td>CyGanderton</td>
									<td>Quality Control Specialist</td>
									<td>rakibulmd933@gmail.com</td>
									<td>01794970431</td>
									<td>100</td>
									<td><button className='p-2 text-base font-medium bg-green-400 rounded'>Update</button> <button className='p-2 text-base font-medium bg-red-400 rounded'>Deleted</button></td>
								</tr>
								<tr>
									<td>CyGanderton</td>
									<td>Quality Control Specialist</td>
									<td>rakibulmd933@gmail.com</td>
									<td>01794970431</td>
									<td>100</td>
									<td><button className='p-2 text-base font-medium bg-green-400 rounded'>Update</button> <button className='p-2 text-base font-medium bg-red-400 rounded'>Deleted</button></td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PaymentList;