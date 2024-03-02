import {
	javascript,
	typescript,
	html,
	css,
	git,
	figma,
	tatvasoft,
	segwitz,
	reactNative,
	redux,
	flutter,
	afterEffects,
	illustrator,
	contentCreator,
	freelancer,
	edar,
	rio,
	Linkedin,
	Medium,
	Github,
	Instagram,
	zelff,
} from '../assets';
import { AssetsCreator, ContentCreator, LottieLogo, ReactNative } from '../lotties';

export const navLinks = [
	{ id: 'about', title: 'About' },
	{ id: 'work', title: 'Work' },
	{ id: 'projects', title: 'Projects' },
	{ id: 'contact', title: 'Contact' },
];

const services = [
	{
		title: 'React Native\nDeveloper',
		lottie: ReactNative,
		height: 80,
		width: 80,
	},
	{
		title: 'Lottie\nAnimation\nCreator',
		lottie: LottieLogo,
		height: 60,
		width: 60,
	},
	{
		title: 'Assets\nCreator',
		lottie: AssetsCreator,
		height: 70,
		width: 70,
	},
	{
		title: 'Content\nCreator',
		lottie: ContentCreator,
		height: 80,
		width: 80,
	},
];

const technologies = [
	{
		name: 'ReactNative',
		icon: reactNative,
	},
	{
		name: 'JavaScript',
		icon: javascript,
	},
	{
		name: 'TypeScript',
		icon: typescript,
	},
	{
		name: 'git',
		icon: git,
	},
	{
		name: 'figma',
		icon: figma,
	},
	{
		name: 'redux',
		icon: redux,
	},
	{
		name: 'flutter',
		icon: flutter,
	},
	{
		name: 'afterEffects',
		icon: afterEffects,
	},
	{
		name: 'illustrator',
		icon: illustrator,
	},
	{
		name: 'contentCreator',
		icon: contentCreator,
	},
	{
		name: 'HTML 5',
		icon: html,
	},
	{
		name: 'CSS 3',
		icon: css,
	},
];

const experiences = [
	{
		title: 'Lottie Animaator',
		company_name: 'Freelancer',
		icon: freelancer,
		date: 'March 2023 - Present',
		points: [
			'Led creation of stunning Lottie animations in After Effects, consistently surpassing client expectations.',
			'Produced captivating animations tailored to diverse industries, aligning seamlessly with brand identity and user experience goals.',
			'Meticulously managed file sizes and rendering efficiency for seamless playback on various platforms, enhancing user engagement.',
			'Achieved client satisfaction through on-time project delivery, post-support, and garnered new clients through referrals and positive networks.',
		],
	},
	{
		title: 'Content Creator',
		company_name: 'Freelancer',
		icon: freelancer,
		date: 'Jan 2023 - Present',
		points: [
			'Independently conceptualized and crafted engaging blog posts, ensuring a consistent flow of high-quality content.',
			'Developed strategies to captivate and retain readership, fostering a loyal and growing online community.',
			'Implemented search engine optimization techniques to enhance blog visibility and reach a broader audience.',
			'Stay updated on industry trends, content marketing best practices, and platform changes.',
		],
	},
	{
		title: 'React Native Developer',
		company_name: 'Segwitz',
		icon: segwitz,
		date: 'Jan 2023 - Present',
		points: [
			'Led projects, ensuring timely completion, mentored junior developers.',
			'Enhanced app speed, responsiveness through optimization techniques.',
			'Seamlessly integrated third-party APIs for enhanced functionality.',
			'Resolved complex issues, maintained code quality through reviews.',
		],
	},
	{
		title: 'React Native Developer',
		company_name: 'TatvaSoft',
		icon: tatvasoft,
		date: 'Apr 2022 - Nov 2023',
		points: [
			'Implemented UI components, navigational structures for responsive applications.',
			'Resolved bugs, ensured smooth functionality through effective testing.',
			'Agile response to changing requirements, quick implementation.',
			'Actively learned latest React Native trends, applied new knowledge.',
		],
	},
];

const networks = [
	{ name: 'Linkedin', image: Linkedin, link: 'https://www.linkedin.com/in/rushikesh-solanki/' },
	{ name: 'Medium', image: Medium, link: 'https://medium.com/@rushi_21' },
	{ name: 'Github', image: Github, link: 'https://github.com/Rushikesh21-12' },
	{ name: 'Instagram', image: Instagram, link: 'https://www.instagram.com/_rushyu_21/' },
];

const projects = [
	{
		name: 'EDAR (App)',
		description:
			"Malaysia's top platform for affordable LPG gas and groceries. Recycle to save, pay it forward, and support local businesses. A circular economy, waste-to-wealth solution. Shop smart, live sustainably! 🌱🛒",
		tags: [
			{ name: 'react-native', color: 'blue-text-gradient' },
			{ name: 'restapi', color: 'green-text-gradient' },
			{ name: 'javascript', color: 'pink-text-gradient' },
		],
		image: edar,
		projectLink: 'https://play.google.com/store/apps/details?id=com.edar',
	},
	{
		name: 'Rio (App)',
		description:
			'RIO - Reforestation App is dedicated to realizing the benefits of planting trees and healthier planet. This app is designed to educate, engage, and empower people to take action and contribute to the greener world!',
		tags: [
			{ name: 'react-native', color: 'blue-text-gradient' },
			{ name: 'restapi', color: 'green-text-gradient' },
			{ name: 'typescript', color: 'pink-text-gradient' },
		],
		image: rio,
		projectLink: 'https://play.google.com/store/apps/details?id=com.plano.rio',
	},
	{
		name: 'Zelff',
		description:
			'Zelff - Tailored grooming app with seamless salon connections and exclusive discounts. The app revolutionizes your grooming routine, offering personalized pampering for a unique and effortless experience.',
		tags: [
			{ name: 'react-native', color: 'blue-text-gradient' },
			{ name: 'restapi', color: 'green-text-gradient' },
			{ name: 'typescript', color: 'pink-text-gradient' },
		],
		image: zelff,
		projectLink: '',
	},
];

export { services, technologies, experiences, networks, projects };
