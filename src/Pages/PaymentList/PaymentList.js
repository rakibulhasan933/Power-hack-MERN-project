import React from 'react';
import { useForm } from 'react-hook-form';

const PaymentList = () => {
	const { register, handleSubmit, formState: { errors } } = useForm();
	const onSubmit = data => console.log(data);
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
										<span className="label-text">Email</span>
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
					table
				</div>
			</div>
		</div>
	);
};

export default PaymentList;