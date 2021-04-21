import React, { useContext, useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';

import LoggedInUserContext from '../context/logged-in-user';
import { getUserPhotosByUsername } from '../services/firebase';

import Post from './post';

const TimeLine = () => {
  const [photos, setPhotos] = useState(null);
  const { user } = useContext(LoggedInUserContext);

  useEffect(() => {
    getUserPhotosByUsername(user?.username).then((res) => setPhotos(res));
  }, [user?.username]);

  return (
    <div className="container col-span-2">
      {!photos ? (
        <Skeleton count={4} width={640} height={500} className="mb-5" />
      ) : (
        photos.map((content) => (
          <Post key={content.docId} content={content} username={user?.username} />
        ))
      )}
    </div>
  );
};

export default TimeLine;
