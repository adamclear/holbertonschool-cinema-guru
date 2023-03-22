import './dashboard.css';
import Favorites from './Favorites';
import Header from '../../components/navigation/Header';
import HomePage from './HomePage';
import PropTypes from 'prop-types';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SideBar from '../../components/navigation/SideBar';
import WatchLater from './WatchLater';

export default function Dashboard({
	userUsername,
	setIsLoggedIn
}) {
	return (
		<BrowserRouter>
			<Header userUsername={userUsername}
				setIsLoggedIn={setIsLoggedIn} />
			<SideBar />
			<main>
				<Routes>
					<Route exact page='/' element={<HomePage />} />
					<Route exact page='/favorites' element={<Favorites />} />
					<Route exact page='/watchlater' element={<WatchLater />} />
				</Routes>
			</main>
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
