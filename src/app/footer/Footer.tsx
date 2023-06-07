
// @ts-nocheck
import Image from 'next/image';
import Logo from '../image/UI-icons/logo.png';
import TwitterIcon from '../image/UI-icons/twitter.svg';
import InstagramIcon from '../image/UI-icons/instagram.svg';
import FacebookIcon from '../image/UI-icons/facebook.svg';
import YoutubeIcon from '../image/UI-icons/youtube.svg';

export default function Footer() {
	return (
		<footer className='flex flex-col gap-8 items-center bg-g2l-mid-yellow p-16 pb-28 w-screen'>
			<div className='flex flex-col items-center gap-2'>
				<Image src={Logo} alt='logo' width='35' />
				<p className='text-sm'>We believe in digital inclusion</p>
			</div>

			<div className='flex gap-4 hover:cursor-pointer'>
				<Image src={TwitterIcon} alt='twitter icon' width='27' />
				<Image src={InstagramIcon} alt='instagram icon' width='27' />
				<Image src={FacebookIcon} alt='facebook icon' width='27' />
				<Image src={YoutubeIcon} alt='Youtube icon' width='27' />
			</div>

			<div className='flex gap-16 text-xs'>
				<p className='hover:cursor-pointer'>Contact</p>
				<p className='hover:cursor-pointer'>Our Mission</p>
				<p className='hover:cursor-pointer'>FAQ</p>
			</div>
		</footer>
	);
}
