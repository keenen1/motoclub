import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { initializeApp } from 'firebase/app'
import { getDatabase } from 'firebase/database'

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
const db = getDatabase()

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
