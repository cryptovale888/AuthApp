import './App.css';
import Login from './Components/Users/Login';
import firebaseConfig from './Components/firebaseConfig';
import React from 'react';
import firebase from 'firebase/compat/app'; // Import 'firebase/compat/app' to initialize Firebase
import 'firebase/compat/auth'; // Import other Firebase services as needed
import 'firebase/compat/firestore';

firebase.initializeApp(firebaseConfig);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Login></Login>
      </header>
      <main>

      </main>
    </div>
  );
}

export default App;
