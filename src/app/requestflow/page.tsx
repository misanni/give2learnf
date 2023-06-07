// @ts-nocheck
'use client';
import axios from 'axios';
import Link from 'next/link';
import { useState } from 'react';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Nav from '../nav/Nav';

export default function Request() {
	const [submitted, setSubmitted] = useState('');

	const url = 'https://give2learn-backend.onrender.com/requests';
	const [data, setData] = useState({
		deviceType: '',
		isPC: '',
		modelType: '',
		quantityToRequest: '',
	});

	async function handleChange(e) {
		const newData = { ...data };
		newData[e.target.id] = e.target.value;
		setData(newData);
		console.log(data);
	}

	async function handleSubmit(e) {
		e.preventDefault();
		await axios.post(url, data);
		setSubmitted(true);
	}

	return (
		<div>
			<Nav />
			<div className='pl-20 pr-20'>
				<p className='pl-0 p-10'>
					<Link href='/'>&lt; Back to homepage</Link>
				</p>
				<h1 className='pl-0 p-10 text-lg font-bold'>
					Device Request from
				</h1>
				<div className=''>
					<form
						className='bg-blue-200 py-10 px-10'
						onSubmit={handleSubmit}
						method='post'
						action='POST'>
						<h3 className='font-bold mb-10'>Device info</h3>
						<label htmlFor='deviceType' className='mb-3'>
							what type of device do you need?
						</label>
						<div className=''>
							<select
								name='deviceType'
								id='deviceType'
								className='w-1/6'
								onChange={(e) => handleChange(e)}
								value={data.deviceType}>
								<option value='' selected></option>
								<option>Desktop</option>
								<option>Laptop</option>
								<option>Tablets</option>
							</select>
						</div>
						<div className=''>
							<h3 className='font-bold mt-10'>
								Please provide device information
							</h3>

							<div className='grid gap-8'>
								<div>
									<label htmlFor='isPC' className='mt-2'>
										pc or mac
									</label>
									<select
										className='w-1/6 mt-2 mb-5'
										onChange={(e) => handleChange(e)}
										value={data.isPC}
										title='isPC'
										id='isPC'
										required>
										<option value='' selected></option>
										<option value='true'>PC</option>
										<option value='false'>MAC</option>
									</select>
									<p>Brand</p>
									<div className='flex gap-8'>
										<select
											className='w-1/6 mt-2 mb-5'
											onChange={(e) => handleChange(e)}
											value=''
											title=''
											id='modelType'>
											<option value='' selected></option>
											<option disabled>Dell</option>
											<option disabled>Apple</option>
										</select>
									</div>
									<p>Model</p>
									<div className='flex gap-8'>
										<select
											className='w-1/6 mt-2 mb-5'
											onChange={(e) => handleChange(e)}
											value={data.modelType}
											title='modelType'
											id='modelType'
											required>
											<option value='' selected></option>
											<option>Washington</option>
											<option>California</option>
											<option>New York</option>
											<option>Massachusetts</option>
										</select>
									</div>
									<p>Quantity</p>
									<div className='flex gap-8'>
										<input
											className='bg-gray-200 w-1/6 mt-2 mb-5'
											onChange={(e) => handleChange(e)}
											value={data.quantityToRequest}
											title='quantityToRequest'
											id='quantityToRequest'
											type='number'
											placeholder='0'
											required></input>
									</div>
									<button
										title='button'
										type='submit'
										className='btn btn-primary bg-blue-500 hover:bg-blue-700 text-white text-xl mt-10 py-2 px-7 rounded'>
										Submit
									</button>
								</div>
							</div>
						</div>
					</form>
					{submitted && (
						<p>
							Application Submitted! <br />
							<br /> Your application have been submitted and will
							be reviewed. You will receive a confirmation email
							once approved.
						</p>
					)}
					{submitted && (
						<p>
							Expected Delivery <br />
							<br /> Expected delivery will be sent to your email
							once application is approved.
						</p>
					)}
				</div>
			</div>
		</div>
	);
}
