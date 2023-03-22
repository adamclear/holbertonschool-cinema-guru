import './dashboard.css';
import Header from '../../components/navigation/Header';
import PropTypes from 'prop-types';

export default function Dashboard({
	userUsername,
	setIsLoggedIn
}) {
	return (
		<Header userUsername={userUsername}
			setIsLoggedIn={setIsLoggedIn} />
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
