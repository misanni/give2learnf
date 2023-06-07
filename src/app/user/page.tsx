
// @ts-nocheck
'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import User from '../image/contact.jpeg';

export default function page() {
	return (
		<div>
			<div className='flex flex-col m-20 p-10 items-center justify-center bg-blue-300 rounded-3xl'>
				<div className='flex items-center justify-center mt-20'>
					<div className='flex flex-col items-center justify-center gap-10'>
						<Image
							className='flex rounded-full'
							src={User}
							width='150'></Image>
						<h1>Rebecca Anderson</h1>
						<h3>rebecca@gmail.com</h3>
					</div>
				</div>
				<div className='flex gap-10 items-center justify-center mt-20'>
					<button
						type='button'
						className='btn btn-primary bg-yellow-300 p-4 rounded-3xl'>
						My account
					</button>
					<Link href='/'>
						<button
							className='flex items-center justify-center btn btn-primary bg-yellow-300 p-4 rounded-3xl'
							type='button'>
							Sign out
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
}
