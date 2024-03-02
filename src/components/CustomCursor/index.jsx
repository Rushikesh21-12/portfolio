// CustomCursor.jsx
import React, { useEffect, useState } from 'react';
import './styles.css';
import Lottie from 'react-lottie';
import { Cursor, ReactNative } from '../../lotties';

const CustomCursor = () => {
	const [position, setPosition] = useState({ x: 0, y: 0 });

	const onMouseMove = (e) => {
		setPosition({ x: e.clientX, y: e.clientY });
	};

	useEffect(() => {
		document.addEventListener('mousemove', onMouseMove);

		return () => {
			document.removeEventListener('mousemove', onMouseMove);
		};
	}, []);

	return (
		<>
			<div className='cursor-outline' style={{ left: `${position.x}px`, top: `${position.y}px` }}>
				<Lottie
					options={{
						loop: true,
						autoplay: true,
						animationData: Cursor,
						rendererSettings: {
							preserveAspectRatio: 'xMidYMid slice',
						},
					}}
					style={{ cursor: 'none' }}
					height={30}
					width={20}
				/>
			</div>
		</>
	);
};

export default CustomCursor;
