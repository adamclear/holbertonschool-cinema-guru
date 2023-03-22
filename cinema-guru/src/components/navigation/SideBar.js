import Activity from '../Activity';
import axios from 'axios';
import { FiClock, FiFolder, FiStar } from 'react-icons/fi';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './navigation.css';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SideBar() {
	const [selected, setSelected] = useState('home');
	const [small, setSmall] = useState(true);
	const [activities, setActivities] = useState([]);
	const [showActivities, setShowActivities] = useState(false);
	const navigate = useNavigate();

	function setPage(pageName) {
		setSelected(pageName);
	}

	useEffect(() => {
		const accessToken = localStorage.getItem('accessToken');
		axios.get(process.env.REACT_APP_API_ACT, {
			headers: { authorization: `Bearer ${accessToken}` }
		})
		.then((response) => setActivities(response.data))
	});

	/* Delete later */
	/* Delete later */

	return (
		<div className={`Sidebar${small ? "_small" : ""}`}
			onMouseEnter={() => {
				setSmall(false);
				setShowActivities(true);
			}}
			onMouseLeave={() => {
				setSmall(true);
				setShowActivities(false);}}>
				<div className='Pages'>
					<div className={`Home${selected === 'home' ? '_active' : ''}`}
						icon={FiFolder}
						onClick={() => {
							setPage('home');
							navigate('/');}}>
							Home
					</div>
					<div className={`Favorites${selected === 'favorites' ? '_active' : ''}`}
						onClick={() => {
							setPage('favorites');
							navigate('/favorites');}}>
							Favorites
					</div>
					<div className={`WatchLater${selected === 'watchLater' ? '_active' : ''}`}
						onClick={() => {
							setPage('watchLater');
							navigate('/watchlater');}}>
							Watch Later
					</div>
				</div>
				<h3>Latest Activities</h3>
				<ul className='ActivitiesList'>
					{activities}
				</ul>
		</div>
	)
}