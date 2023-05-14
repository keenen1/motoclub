// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getDatabase } from 'firebase/database'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyD-MefB41inyM-BohCenT44VoU9Hmg0JJI',
  authDomain: 'motoclub-8d263.firebaseapp.com',
  databaseURL: 'https://motoclub-8d263-default-rtdb.firebaseio.com',
  projectId: 'motoclub-8d263',
  storageBucket: 'motoclub-8d263.appspot.com',
  messagingSenderId: '19612715423',
  appId: '1:19612715423:web:f740079732de58b20bd5aa',
  measurementId: 'G-KFGEJPYT7J'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getDatabase(app)