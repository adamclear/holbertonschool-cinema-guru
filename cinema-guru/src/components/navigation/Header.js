import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './navigation.css';
import PropTypes from 'prop-types';

export default function Header({
	userUsername, setIsLoggedIn
}) {
	function logout() {
    localStorage.removeItem('accessToken');
    setIsLoggedIn(false);
  }

	return (
		<nav className='Header'>
			<div className='title'>
				Cinema Guru
			</div>
			<div className='userInfo'>
				<img src="https://picsum.photos/100/100"
					alt="avatar"
					className='avatarImg' />
				<p>
					Welcome, {userUsername}
					<span onClick={logout}
						className='logoutSpan'>
						<FontAwesomeIcon icon={faSignOutAlt} />
						Logout
					</span>
				</p>
			</div>
		</nav>
	);
}

Header.propTypes = {
	userUsername: PropTypes.string.isRequired,
	setIsLoggedIn: PropTypes.func.isRequired
}

Header.defaultProps = {
	userUsername: "",
	setIsLoggedIn: () => {}
}
