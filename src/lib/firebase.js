import Firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

// Here is where I want to import the seed file
// import { seedDatabase } from '../seed';

const config = {
  apiKey: 'AIzaSyDeZrZr-dlGmGLo-2IAvasiLyGzHJewXvM',
  authDomain: 'instagram-119bd.firebaseapp.com',
  projectId: 'instagram-119bd',
  storageBucket: 'instagram-119bd.appspot.com',
  messagingSenderId: '567106098372',
  appId: '1:567106098372:web:0c2aa89a95847a31a02591'
};

const firebase = Firebase.initializeApp(config);

const { FieldValue } = Firebase.firestore;

// Here is where I want to call the seed file (only ONCE!)
// seedDatabase(firebase);

export { firebase, FieldValue };
