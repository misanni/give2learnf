
// @ts-nocheck
'use client';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '../image/UI-icons/logo.png';
import { useState } from 'react';

export default function Nav() {
	const [openProfileMenu, setOpenProfileMenu] = useState(false);

	return (
		<header>
			<div className=' bg-g2l-bright-yellow w-full h-8 z-10 ml-0'></div>
			<div className='flex items-center justify-between flex-wrap py-8 px-20 w-screen bg-g2l-pale-yellow drop-shadow-md'>
				<div className='relative w-56 flex gap-2'>
					<div className='text-xl font-semibold text-g2l-bright-yellow'>
						Give
						<span className='text-g2l-blue'>2</span>
						Learn
					</div>
					<div className='logo absolute right-0 top-1'>
						<Image src={Logo} alt='logo' width='40' />
					</div>
				</div>

				<div className='relative flex gap-12 items-center'>
					<Link href='/'>Home</Link>
					<Link href='#'>About</Link>
					<div
						onClick={() => setOpenProfileMenu(!openProfileMenu)}
						className='font-bold bg-g2l-bright-yellow px-3 py-2 rounded-full hover:cursor-pointer'>
						M
					</div>
					<div
						className={`absolute flex flex-col gap-2 bg-g2l-pale-yellow rounded-lg right-0 top-12 p-4 drop-shadow-lg ${
							openProfileMenu ? '' : 'hidden'
						}`}>
						<Link href='/user'>My profile</Link>
						<Link href='/profile'>My Applications</Link>
						<Link href='/'>Logout</Link>
					</div>
				</div>
			</div>
		</header>
	);
}
