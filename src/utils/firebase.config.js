// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAO-bznIPtd2MUX71YSB2wc40sji18Xj_w',
  authDomain: 'indonesiaku-b84d2.firebaseapp.com',
  projectId: 'indonesiaku-b84d2',
  storageBucket: 'indonesiaku-b84d2.appspot.com',
  messagingSenderId: '945312676316',
  appId: '1:945312676316:web:723586048f86de94a77719',
  measurementId: 'G-XM7Q59PY5Z',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
