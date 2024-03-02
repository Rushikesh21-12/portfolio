import React from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-tilt';

import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';
import { networks } from '../constants';

const NetworkCard = ({ index, name, image, link }) => (
	<motion.div
		variants={fadeIn('', 'spring', index * 0.5, 0.75)}
		className='bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full'
	>
		<Tilt
			options={{
				max: 45,
				scale: 1,
				speed: 450,
			}}
		>
			<p className='text-white font-black text-[48px]'>"</p>

			<div className=' flex justify-center items-center'>
				<img
					onClick={() => window.open(link, '_blank')}
					src={image}
					alt={name}
					className='w-100 h-100 rounded object-contain '
				/>
			</div>
		</Tilt>
	</motion.div>
);

const Network = () => {
	return (
		<div className={`mt-12 bg-black-100 rounded-[20px]`}>
			<div className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}>
				<motion.div variants={textVariant()}>
					<p className={styles.sectionSubText}>Get in touch</p>
					<h2 className={styles.sectionHeadText}>Network.</h2>
				</motion.div>
			</div>
			<div
				className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap justify-between lg:justify-center gap-7`}
			>
				{networks.map((testimonial, index) => (
					<NetworkCard key={testimonial.name} index={index} {...testimonial} />
				))}
			</div>
		</div>
	);
};

export default SectionWrapper(Network, '');
