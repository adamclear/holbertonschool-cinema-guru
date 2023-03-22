import './App.css';
import Authentication from './routes/auth/Authentication';
import axios from 'axios';
import Dashboard from './routes/dashboard/Dashboard';
import { useEffect, useState } from 'react';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [userUsername, setUserUsername] = useState('');

  useEffect(() => {
    const accessToken = localStorage.getItem('acccessToken');
    if (!accessToken) return;
    axios.post('http://localhost:8000/api/auth/', null, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      }
    })
    .then(response => {
      setIsLoggedIn(true);
      setUserUsername(response.data.username);
    })
    .catch(error => {
      console.error(error);
    });
  });

  return (
    <div className="App">
      {isLoggedIn ?
        <Dashboard userUsername={userUsername}
          setIsLoggedIn={setIsLoggedIn}/> :
        <Authentication setIsLoggedIn={setIsLoggedIn}
          setUserUsername={setUserUsername} />}
    </div>
  );
}

export default App;
