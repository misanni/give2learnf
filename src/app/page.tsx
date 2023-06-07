// @ts-nocheck

'use client';
import Link from 'next/link';
import Image from 'next/image';
import image1 from './image/UI-icons/gift.svg';
import image2 from './image/UI-icons/teacher.svg';
import Nav from './nav/Nav';
import Footer from './footer/Footer';
import LandingImg from './image/UI-icons/landing_img.png';
import Dots from './image/UI-icons/carousel_bottom.svg';

export default function Home() {
	const landingImgStyle = {
		opacity: 0.35,
		zIndex: -1,
	};

	return (
		<body className='container w-screen h-full'>
			{/* yellow bar */}
			<Nav />
			<main className='w-screen h-full'>
				<div className='relative flex flex-col justify-center gap-8 text-center h-[35rem] w-screen'>
					<Image
						src={LandingImg}
						alt='image of young girl using laptop'
						fill={true}
						objectFit='cover'
						style={landingImgStyle}
					/>

					<h1 className='text-2xl text-center mx-auto max-w-5xl font-bold'>
						More than 1 out of 10 students do not have the
						technology needed to complete schoolwork
					</h1>
					<h3 className='text-md max-w-2xl text-center mx-auto'>
						Make a difference by providing your unwanted computer or
						tablet to students in need.
					</h3>
					<div className='flex w-full max-w-md justify-between text-center mx-auto'>
						<Link href='/donationflow'>
							<button
								type='button'
								className=' bg-g2l-bright-yellow hover:bg-g2l-button-hover text-sm font-bold py-3 px-6 rounded-lg'>
								Donate a Device
							</button>
						</Link>
						<Link href='/requestflow'>
							<button
								type='button'
								className=' bg-g2l-bright-yellow hover:bg-g2l-button-hover text-sm font-bold py-3 px-6 rounded-lg'>
								Apply for a Device
							</button>
						</Link>
					</div>
				</div>

				<div className='flex flex-col items-center gap-8 bg-g2l-pale-yellow p-24 mx-auto pb-28'>
					<div className='flex flex-col items-center'>
						<h2 className='text-center text-xl font-bold mx-auto mb-8'>
							Our Mission
						</h2>
						<p className='text-md text-center mb-16 max-w-5xl'>
							Founded in 2005, Give2Learn is a non-profit
							organization dedicated to help meet the growing
							demand for technology in classrooms. We believe all
							students deserve access to technology in order to
							participate on an even level playing field, yet some
							students are falling behind due to the lack of tech
							resources. Your generous computer and tablet
							donations assists us to give students the devices
							needed to complete schoolwork and to continue to
							learn. We invite anyone with a computer or tablet
							they no longer need to donate today!
						</p>
						<button className='py-2 px-6 border-g2l-blue border-2 w-fit rounded-lg text-g2l-blue text-sm hover:bg-g2l-blue hover:text-white'>
							Learn more about the schools you support
						</button>
					</div>

					{/* gray divider line */}
					<div className='w-2/3 bg-[#D7D6D3] h-[0.1rem] opacity-80 mb-8'></div>

					<div className='flex flex-col gap-16 mb-4'>
						<h2 className='text-center text-xl font-bold mx-auto'>
							How It works
						</h2>
						<div className='flex gap-48'>
							<Image
								src={image1}
								alt='illustration of smiling person learning on giant gift box'
								width='1000'></Image>
							<div className='flex flex-col gap-6 justify-center w-fit'>
								<h3 className='text-lg font-bold'>Donors</h3>
								<p className='text-md'>
									Donating your unwanted computer or tablet
									(any brand—new or old) is quick and easy!
									Simply fill out a form describing the device
									and we’ll provide a free shipping label. You
									have the option to have your items picked-up
									too. We will then refurbish the devices and
									send them off to schools. You will receive a
									charitable tax exemption receipt for every
									donation.
								</p>
							</div>
						</div>
						<div className='flex gap-52'>
							<div className='flex flex-col gap-6 justify-center w-fit'>
								<h3 className='text-lg font-bold'>
									Teachers and Schools
								</h3>
								<p className='text-md'>
									Are you in need of a computer or tablet for
									your classroom? Tell us why you are a
									candidate and we will process your request
									for a refurbished device to further your
									students’ education.
								</p>
							</div>
							<Image
								src={image2}
								alt='illustration of smiling person learning on giant gift box'
								width='1000'></Image>
						</div>
					</div>

					{/* gray divider line */}
					<div className='w-2/3 bg-[#D7D6D3] h-[0.1rem] opacity-80 my-6'></div>

					<div className='flex flex-col items-center gap-8 max-w-3xl text-md text-center'>
						<div>
							<p>
								“Give2Learn gave us three computers, which
								impacted our students greatly. It increased
								collaboration and communication amongst them.
								And now they have equal learning opportunities.”
							</p>
							<p>-Alex S., Elementary School Teacher</p>
						</div>
						<Image
							src={Dots}
							alt='dots indicating a carousel slider for the quotes'
						/>
					</div>
				</div>
			</main>
			<Footer />
		</body>
	);
}
