import './dashboard.css';
import Header from '../../components/navigation/Header';
import PropTypes from 'prop-types';
import SideBar from '../../components/navigation/SideBar';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

export default function Dashboard({
	userUsername,
	setIsLoggedIn
}) {
	/* This section just here to get rid of warnings */
	let sidebar = <SideBar />
	console.log(sidebar)
	let routes = <Routes />
	console.log(routes)
	let route = <Route />
	console.log(route)
	let navigate = <Navigate />
	console.log(navigate)
	/* End warning section ------------------------- */
	return (
		<BrowserRouter>
			<Header userUsername={userUsername}
			setIsLoggedIn={setIsLoggedIn} />
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
