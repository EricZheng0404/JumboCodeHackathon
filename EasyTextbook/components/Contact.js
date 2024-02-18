import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from 'firebase/firestore/lite';

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

  const [formData, setFormData] = useState({
    fname: '',
    email: '',
    number: '',
    test: '',
  });

  const search = (e) => {
    e.preventDefault();
  }

  const addUser = (e) => {
    e.preventDefault();
    const newId = createUser();
    console.log("Added new user to db: ", {newId});
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
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Contact Screen</Text>
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
            <input type="submit" value="Search for a TestBuddy!" onClick={search}></input>
        </form>
      </div>
    </View>
  );
}

export default UserForm;