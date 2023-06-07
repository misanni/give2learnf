// @ts-nocheck
'use client';
import React from 'react';
import Image from 'next/image';
import image1 from '../image/UI-icons/fill-in-2.png';
import image2 from '../image/UI-icons/trash.png';
import image3 from '../image/UI-icons/Laptop mac.png';
import image4 from '../image/UI-icons/plus.png';
import image7 from '../image/UI-icons/Vector-5.png';
import image8 from '../image/UI-icons/Vector.png';
import image9 from '../image/UI-icons/Vector-4.png';
import image5 from '../image/dl.png';
import image6 from '../image/edit.png';
import Nav from '../nav/Nav.tsx';
import Footer from '../footer/Footer.tsx';
// import axios from 'axios';
import Link from 'next/link';
// import { useState } from 'react';
// import { useEffect } from 'react';
// import { useRouter } from 'next/router';

function page() {


	// const [submitted, setSubmitted] = useState(false);
	
	// function handleSubmit(event) {
	// 	event.preventDefault();
    // 	axios.post('https://give2learn-backend.onrender.com/donations').then(response => {
	// 		console.log(response)
	// 	}).catch(err => {
	// 		console.log(err)
	// 	});
	// 	setSubmitted(true);
	// }
	return (
		// const post = useLoaderData();

<div className='p-5 bg-g2l-pale-yellow'>
	<div>
		<Nav/>
	</div>
	<div className='mb-3 ml-10' ><Link href='/'>&lt; Back to homepage</Link></div>
	{/* homepage div */}
			<div className='p-32'>
		
			<h2 className='mb-5 text-2xl/20 font-black text-xl'>My Application</h2>
  				<div className=' rounded-lg drop-shadow-lg bg-white p-10'>
				  {/* <Form action={`/delete/${post.id}`} method="post"> top container div */}
				  				<div className='justify-end flex'>
									<Image className='mb-10 mr-2' src={image6} alt=''width='20'></Image>
									<Image className='mb-10 ml-2' src={image5} alt=''width='20'></Image>
									
										{/* <Form action={`/delete/${post.id}`} method="post">
										
											<button>Delete Book</button>
										</Form> */}
								</div>
								{/* </Form> */}
						
						<div className=' flex flex-col' >
						<ul className='flex max-w-[900px] justify-between'>
											<li className='w-[100px] '>Application under review &nbsp;</li>
											<li>Approved &nbsp; &nbsp;</li>
											<li>Out for shipping &nbsp; &nbsp;</li>
											<li>Delivered</li>
									</ul>
							<div className='progressbar flex items-center w-[900px] h-1 mr-80 mb-5 mt-5 justify-between bg-gray-200 rounded-full z-0'>
									<div className='bg-blue-800 text-white progressbar-step flex w-8 h-8 rounded-full counter-reset counter-step items-center justify-center'>
									1   
									</div>
									<div className='progressbar-step flex bg-gray-200 progressbar-step w-8 h-8 rounded-full counter-reset counter-step items-center justify-center'>
									2
									</div>
									<div className='progressbar-step flex bg-gray-200 progressbar-step w-8 h-8 rounded-full counter-reset counter-step items-center justify-center'>
									3
									</div>
									<div className='progressbar-step flex bg-gray-200 progressbar-step w-8 h-8 rounded-full counter-reset counter-step items-center justify-center'>
									4
									</div>
							</div>

							
							
				</div>
				

				
						<br></br><br></br><br></br>
				{/*  */}
				<div className='justify-between flex'>
								<div className='justify-between flex'>
									<div>
									<Image className='mr-8' src={image3} alt=''width='90'></Image>
									</div>
									<ul>
										<li>#0784329</li>
										<li>Laptop</li>
										<li>Dell, Dell Latitude 5000</li>
									</ul>
								</div>
								{/*  */}
								<div>
									<h1>Application under review</h1>
								</div>
								{/*  */}
							  <ul>
										<li>Date: 05/22/23</li>
										<li>Quantity:6</li>
								</ul>
						</div>
				
						{/* arrowdown */}
									<div className='flex justify-center'>
									<Image src={image9} alt=''width='30'></Image>
									</div>
						{/* arrowdown */}		
				<div className='flex justify-between'>
				<div className='flex'>
					
				</div>
				<div> 
					
				</div>

				</div>
			</div>
		{/*  */}
		<br></br>

		{/* 2 */}
	
<div className='rounded-lg drop-shadow-lg p-5 bg-white' >
			<div className='justify-end flex'>
				<Image className='mb-10 mr-2' src={image6} alt=''width='20'></Image>

				<Image className='mb-10 ml-2' src={image5} alt=''width='20'></Image>
			
						{/* <Form action={`/delete/${post.id}`} method="post">
						
							<button>Delete Book</button>
						</Form> */}
			</div>
<div className='justify-between flex'>
								<div className='justify-between flex'>
								
									<div>
										<Image className='mr-8' src={image8} alt=''width='90'></Image>
									</div>
									<ul>
										<li>#060943</li>
										<li>Desktop</li>
										<li>Apple, iMac 24"</li>
									</ul>
								</div>
								{/*  */}
								<div>
									<h1>Approved</h1>
								</div>
								{/*  */}
							  <ul>
										<li>Date: 02/15/23</li>
										<li>Quantity:6</li>
								</ul>
						</div>
						{/* arrowdown */}
									<div className=' flex justify-center'>
									<Image src={image7} alt=''width='30'></Image>
									</div>
						{/* arrowdown */}		
						

</div>
		{/*  */}
		
		<div className='flex justify-center'>
		<button className=" mt-10 mb-10 flex items-center px-4 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded-md">
		<Link href='/requestflow'><span className="mr-2">New Application</span></Link>
      			+
    	</button>
	
		</div>
			</div>
			
		{/* /requestflow */}
		<div><Footer/></div>
	</div>

	);
}

export default page;
