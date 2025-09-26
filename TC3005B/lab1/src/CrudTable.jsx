import { useState, useEffect } from "react";
import {
  collection,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  onSnapshot
} from "firebase/firestore";
import { db } from "./DB";
import "./CrudTable.css";

export default function CrudTable() {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState("");
  const [editId, setEditId] = useState(null);
  const [editName, setEditName] = useState("");

  const usersCollection = collection(db, "users");

  useEffect(() => {
    const unsubscribe = onSnapshot(usersCollection, (snapshot) => {
      setUsers(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });
    return () => unsubscribe();
  }, []);

  const addUser = async () => {
    if (!newUser.trim()) return;
    await addDoc(usersCollection, { name: newUser });
    setNewUser("");
  };

  const saveEdit = async (id) => {
    const userDoc = doc(db, "users", id);
    await updateDoc(userDoc, { name: editName });
    setEditId(null);
    setEditName("");
  };

  const deleteUser = async (id) => {
    const userDoc = doc(db, "users", id);
    await deleteDoc(userDoc);
  };
return (
    <div className="crud-container">
      <h2>Users Table</h2>
      <div className="input-group">
        <input
          value={newUser}
          onChange={(e) => setNewUser(e.target.value)}
          placeholder="Enter user name"
        />
        <button className="btn add" onClick={addUser}>Add</button>
      </div>

      <table className="crud-table">
        <thead>
          <tr>
            <th>User Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u) => (
            <tr key={u.id}>
              <td>
                {editId === u.id ? (
                  <input
                    value={editName}
                    onChange={(e) => setEditName(e.target.value)}
                  />
                ) : (
                  u.name
                )}
              </td>
              <td>
                {editId === u.id ? (
                  <>
                    <button className="btn save" onClick={() => saveEdit(u.id)}>Save</button>
                    <button className="btn cancel" onClick={() => setEditId(null)}>Cancel</button>
                  </>
                ) : (
                  <>
                    <button
                      className="btn edit"
                      onClick={() => {
                        setEditId(u.id);
                        setEditName(u.name);
                      }}
                    >
                      Edit
                    </button>
                    <button className="btn delete" onClick={() => deleteUser(u.id)}>Delete</button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
