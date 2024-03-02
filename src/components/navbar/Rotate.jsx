import React, { useEffect, useState } from 'react';
import './navbar.css'; // Import your CSS file with styles

const RotatingText = ({ text, duration = 2000, style = {} }) => {
	const [rotation, setRotation] = useState(0);
	const isFocused = useIsFocused();

	useEffect(() => {
		const interval = setInterval(() => {
			if (isFocused) {
				setRotation((prevRotation) => (prevRotation + 1) % 360);
			}
		}, duration / 360);

		return () => clearInterval(interval);
	}, [isFocused]);

	const textStyle = {
		fontSize: scaledSize(20),
		transform: `rotateY(${rotation}deg)`,
		...style,
	};

	return (
		<div className='rotating-text' style={textStyle}>
			{text}
		</div>
	);
};

export default React.memo(RotatingText);
