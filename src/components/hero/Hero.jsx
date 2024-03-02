import { motion } from 'framer-motion';
import './hero.css';
import { styles } from '../../styles';
import { hero } from '../../assets';
import { TypeAnimation } from 'react-type-animation';

const sliderVariants = {
	initial: {
		x: 0,
	},
	animate: {
		x: '-480%',
		transition: {
			repeat: Infinity,
			repeatType: 'mirror',
			duration: 16,
		},
	},
};

const slideLeftVariants = {
	initial: {
		x: 500,
		opacity: 0,
	},
	animate: {
		x: 0,
		opacity: 1,
		transition: {
			duration: 1,
			staggerChildren: 0.1,
		},
	},
};

const slideBottomVariants = {
	initial: {
		y: -500,
		opacity: 0,
	},
	animate: {
		y: 0,
		opacity: 1,
		transition: {
			duration: 1,
			staggerChildren: 0.1,
		},
	},
};

const fadeInVariants = {
	initial: {
		opacity: 0,
	},
	animate: {
		opacity: 1,
		transition: {
			duration: 2,
			delay: 1,
		},
	},
};

const Hero = () => {
	return (
		<section className={`relative w-full h-screen mx-auto overflow-hidden`}>
			<div
				className={`myDetails inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-6 mb-[60px]`}
			>
				<motion.div
					className='flex flex-col justify-center items-center mt-5'
					variants={slideLeftVariants}
					initial='initial'
					animate='animate'
				>
					<div className='w-5 h-5 rounded-full bg-[#915EFF]' />
					<div className='w-1 sm:h-80 h-40 violet-gradient' />
				</motion.div>

				<div>
					<motion.h1
						className={`${styles.heroHeadText} text-white `}
						variants={slideBottomVariants}
						initial='initial'
						animate='animate'
					>
						Hi, I'm <span className='text-[#915EFF]'>Rushikesh</span>
					</motion.h1>

					<motion.p
						className={`${styles.heroSubText}  mt-0 sm:mt-4 text-white-100`}
						variants={fadeInVariants}
						initial='initial'
						animate='animate'
					>
						<TypeAnimation
							sequence={[
								1500,
								'I develop Mobile Applications',
								1000,
								'I develop Lottie Animations',
								1000,
								'I create Assets',
								1000,
								'I create Content',
								1000,
							]}
							wrapper='span'
							speed={50}
							style={{ fontSize: '2em', display: 'inline-block' }}
							repeat={Infinity}
							de
						/>
					</motion.p>
				</div>
			</div>

			<img id='heroImage' src={hero} alt='' />

			<motion.div
				className='slidingTextContainer'
				variants={sliderVariants}
				initial='initial'
				animate='animate'
			>
				Developer Writer Animator
			</motion.div>
		</section>
	);
};

export default Hero;
