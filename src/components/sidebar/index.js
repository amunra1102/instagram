import React, { useContext } from 'react';

import LoggedInUserContext from '../../context/logged-in-user';
import User from './user';
import Suggestions from './suggestions';

const Sidebar = () => {
  const { user } = useContext(LoggedInUserContext);
  return (
    <div className="p-4">
      <User username={user?.username} fullName={user?.fullName} />
      <Suggestions
        userId={user?.userId}
        following={user?.following}
        loggedInUserDocId={user?.docId}
      />
    </div>
  );
};

export default Sidebar;
