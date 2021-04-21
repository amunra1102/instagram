import React, { useEffect, useState } from 'react';

import LoggedInUserContext from '../context/logged-in-user';
import Header from '../components/header';
import TimeLine from '../components/time-line';
import Sidebar from '../components/sidebar';
import { getUserByUserId } from '../services/firebase';

const Dashboard = () => {
  const [user, setUser] = useState({
    username: '',
    userId: ''
  });

  useEffect(() => {
    document.title = 'Instagram';
    const { uid } = JSON.parse(localStorage.getItem('authUser'));
    getUserByUserId(uid).then((res) => setUser(res[0]));
  }, []);

  return (
    <LoggedInUserContext.Provider value={{ user }}>
      <div className="bg-gray-background">
        <Header />
        <div className="grid grid-cols-3 gap-4 justify-between mx-auto max-w-screen-lg">
          <TimeLine />
          <Sidebar />
        </div>
      </div>
    </LoggedInUserContext.Provider>
  );
};

Dashboard.propTypes = {};

export default Dashboard;
