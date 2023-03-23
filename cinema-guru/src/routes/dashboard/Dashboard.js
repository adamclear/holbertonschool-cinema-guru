import './dashboard.css';
import Favorites from './Favorites';
import Header from '../../components/navigation/Header';
import HomePage from './HomePage';
import PropTypes from 'prop-types';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SideBar from '../../components/navigation/SideBar';
import WatchLater from './WatchLater';
import ls from 'local-storage';

export default function Dashboard({
	userUsername,
	setIsLoggedIn
}) {
	return (
		<BrowserRouter>
			<div className='fullPage'>
				<Header userUsername={userUsername}
					setIsLoggedIn={setIsLoggedIn} />
				<div className='mainContent'>
					<SideBar />
					<Routes>
						<Route exact path='/' element={<HomePage />} />
						<Route exact path='/favorites' element={<Favorites />} />
						<Route exact path='/watchlater' element={<WatchLater />} />
						<Route exact path='/*' element={<HomePage />} />
					</Routes>
				</div>
			</div>
		</BrowserRouter>
	);
}

Dashboard.propTypes = {
	userUsername: PropTypes.string.isRequired,
	setIsLoggedIn: PropTypes.func.isRequired
}

Dashboard.defaultProps = {
	userUsername: "",
	setIsLoggedIn: () => {}
}
