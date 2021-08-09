import dotenv from 'dotenv';
import firebase from 'firebase';
const firebaseConfig = {
  apiKey: 'AIzaSyBg-n1s_j4quwsdNQx87kHlHMDVKC0y-Ig',
  authDomain: 'corporate-messenger-d38d6.firebaseapp.com',
  databaseURL: 'https://corporate-messenger-d38d6-default-rtdb.firebaseio.com',
  projectId: 'corporate-messenger-d38d6',
  storageBucket: 'corporate-messenger-d38d6.appspot.com',
  messagingSenderId: '266251696125',
  appId: '1:266251696125:web:6f35487c76394be0f40b94',
  measurementId: 'G-J84R1M079N',
};

firebase.initializeApp(firebaseConfig);

dotenv.config();
