import { useState, useEffect } from "react";
import "./App.css";
import { db } from "./firebase-config";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

function App() {
  const [newName, setNewName] = useState("");
  const [newMarks, setNewMarks] = useState(0);

  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "users");

  const createUser = async () => {
    await addDoc(usersCollectionRef, {
      name: newName,
      marks: Number(newMarks),
    });
    getUsers();
  };

  const updateUser = async (id, marks) => {
    const userDoc = doc(db, "users", id);
    // console.log(userDoc)
    const newFields = { marks: marks + 1 };
    await updateDoc(userDoc, newFields);
    getUsers();
  };

  const deleteUser = async (id) => {
    const userDoc = doc(db, "users", id);
    await deleteDoc(userDoc);
    getUsers();
  };

  const getUsers = async () => {
    const data = await getDocs(usersCollectionRef);
    // console.log(data.docs)
    setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="App">
      <div className="FormHolder">
        <div className="addUserBox">
          <div className="input1">
            <input
              type="text"
              placeholder="Name..."
              onChange={(event) => {
                setNewName(event.target.value);
              }}
            />
          </div>
          <div className="input2">
            <input
              type="number"
              placeholder="Marks..."
              onChange={(event) => {
                setNewMarks(event.target.value);
              }}
            />
          </div>
          <button onClick={createUser}>Create User</button>
        </div>
      </div>
      <div className="user-cards">
        {users.map((user) => (
          <div key={user.id} className="row mx-auto">
            <div key={user.id} className="user-card">
              <h1>Name: {user.name}</h1>
              <h1>Marks: {user.marks}</h1>
              <div className="buttons">
                <button onClick={() => updateUser(user.id, user.marks)}>
                  Increase Marks
                </button>
                <button onClick={() => deleteUser(user.id)}>Delete User</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
