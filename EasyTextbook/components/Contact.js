import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { initializeApp } from "firebase/app";
import SearchResults from '../components/SearchResults';
import { getFirestore, collection, addDoc, query, where, getDocs } from 'firebase/firestore/lite';
import FindInfoContainer from './FindInfo'; // Ensure this path is correct

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2bUiboJDhbpHn5J3kiUXnI_G7avXrjqA",
  authDomain: "tuftshackathondb.firebaseapp.com",
  projectId: "tuftshackathondb",
  storageBucket: "tuftshackathondb.appspot.com",
  messagingSenderId: "885169630160",
  appId: "1:885169630160:web:97af9c7c36ad31a17227d5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


function UserForm() {

  const initialFormData = {
    fname: '',
    email: '',
    number: '',
    test: ''
  };

  const [formData, setFormData] = useState({
    fname: '',
    email: '',
    number: '',
    test: ''
  });

  const [results, setResults] = useState({
    matches: null
  });

  const startSearch = (e) => {
    e.preventDefault();
    const q = query(collection(db, "users"),
                    where("test", "==", formData.test),
                    where("email", "!=", formData.email));
    search(q);
  }

  async function search(q) {
    const querySnapshot = await getDocs(q);
    const match_array = [];

    querySnapshot.forEach((doc) => {
      match_array.push(doc.data());
    });

    setResults({...results, matches: match_array});
  }

  const addUser = (e) => {
    e.preventDefault();
    const newId = createUser();
    console.log("Added new user to db: ", {newId});
    setFormData(initialFormData);
  }

  async function createUser() {
    const docRef = await addDoc(collection(db, "users"), {
      name: formData.fname,
      email: formData.email,
      number: formData.number,
      test: formData.test
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
      alert("Error adding document. Please try again.");
    });

    return docRef.id;
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'top' }}>
      <FindInfoContainer></FindInfoContainer>
      <div>
        <form id="partnerForm">
            <label htmlFor="fname">First name:</label><br/>
            <input type="text"
                  id="fname"
                  name="fname"
                  value={formData.fname}
                  onChange={(e) => setFormData({...formData, fname: e.target.value})}></input><br/>
            <label htmlFor="email">Email:</label><br/>
            <input type="text"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}></input><br/>
            <label htmlFor="number">Phone number:</label><br/>
            <input type="text"
                  id="number"
                  name="number"
                  value={formData.number}
                  onChange={(e) => setFormData({...formData, number: e.target.value})}></input><br/>
            <label htmlFor="test">Studying for:</label>
            <select
                    id="test"
                    name="test"
                    value={formData.test}
                    onChange={(e) => setFormData({...formData, test: e.target.value})}>
                <option value="">Select...</option>
                <option value="sat">SAT</option>
                <option value="psat">PSAT</option>
                <option value="gre">GRE</option>
            </select><br/>
            <input type="submit" value="Submit" onClick={addUser}></input>
            <input type="submit" value="Search for a TestBuddy" onClick={startSearch}></input>
        </form>
      </div>
      <div>
        <SearchResults results={results.matches} />
      </div>
    </View>
  );
}

export default UserForm;