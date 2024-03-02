import { BrowserRouter } from 'react-router-dom';

import {
	About,
	Contact,
	Experience,
	Network,
	Hero,
	Tech,
	Works,
	StarsCanvas,
	Navbar,
} from './components';
import CustomCursor from './components/CustomCursor';

const App = () => {
	return (
		<BrowserRouter>
			<CustomCursor />
			<div className='relative z-0 bg-primary'>
				<div>
					<Navbar />
					<Hero />
				</div>
				<About />
				<Experience />
				<div className='relative z-0'>
					<Tech />
					<Works />
					<Network />
					<Contact />

					<StarsCanvas />
				</div>
			</div>
		</BrowserRouter>
	);
};

export default App;
