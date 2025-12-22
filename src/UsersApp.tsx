import { useEffect, useState } from "react";
import { DataStore, Auth } from "aws-amplify";
import { Users } from "./models";
import { FaTrash } from "react-icons/fa";



export default function UsersApp() {
  const [value, setValue] = useState("");
  const [email, setEmail] = useState("");
  const [users, setUsers] = useState<Users[]>([]);
  const [groups, setGroups] = useState<string[]>([]);
  const [isOnline, setIsOnline] = useState<boolean>(navigator.onLine);

  useEffect(() => {

    loadCurrentUser();
    fetchUsers();
    getUserGroups();
    setupNetworkListener();

    const sub = DataStore.observe(Users).subscribe(() => fetchUsers());
    return () => {
      sub.unsubscribe();
      cleanupDataStore();
      removeNetworkListener();
    };
  }, []);


  /* =======================
     DATASTORE LIFECYCLE
     ======================= */

  async function cleanupDataStore() {
    try {
      await DataStore.stop();
      console.log("🛑 DataStore stopped");
    } catch (e) {
      console.error("Error stopping DataStore", e);
    }
  }

  async function clearLocalData() {
    try {
      await DataStore.clear();
      console.log("🧹 DataStore cleared");
      fetchUsers();
    } catch (e) {
      console.error("Error clearing DataStore", e);
    }
  }

  function setupNetworkListener() {
    window.addEventListener("online", updateNetworkStatus);
    window.addEventListener("offline", updateNetworkStatus);
  }

  function removeNetworkListener() {
    window.removeEventListener("online", updateNetworkStatus);
    window.removeEventListener("offline", updateNetworkStatus);
  }

  function updateNetworkStatus() {
    setIsOnline(navigator.onLine);
    console.log("🌐 Network status:", navigator.onLine ? "Online" : "Offline");
  }

  /* =======================
     AUTH / GROUPS
     ======================= */

  async function loadCurrentUser() {
    try {
      const user = await Auth.currentAuthenticatedUser();
      setEmail(user.attributes.email);
    } catch {
      console.log("Not authenticated");
    }
  }



  /** ✅ Amplify Gen 1 – Get Cognito User Groups */
  async function getUserGroups() {
    try {
      const session = await Auth.currentSession();
      const accessToken = session.getAccessToken();
      const payload = accessToken.payload;

      const cognitoGroups = payload["cognito:groups"];

      if (Array.isArray(cognitoGroups)) {
        console.log("User belongs to groups:", cognitoGroups);
        setGroups(cognitoGroups);
      } else {
        console.log("User does not belong to any groups");
        setGroups([]);
      }
    } catch (error) {
      console.error("Error fetching user groups:", error);
      setGroups([]);
    }
  }

  /* =======================
   USERS CRUD
  ======================= */

  async function fetchUsers() {
    try {
      const allUsers = await DataStore.query(Users);
      setUsers(allUsers);
    } catch (err) {
      console.log("error fetching users:", err);
    }
  }

  async function addUser() {
    if (!value.trim() || !email) return;

    try {
      await DataStore.save(
        new Users({
          name: value,
          email, // REQUIRED FIELD
        })
      );

      setValue("");
    } catch (err) {
      console.log("error creating user:", err);
    }
  }

  async function handleDelete(user: Users) {
    try {
      await DataStore.delete(user);
    } catch (err) {
      console.log("error deleting user:", err);
    }
  }

  return (
    <div style={{ padding: "20px", maxWidth: "400px", textAlign: "left" }}>
      {/* OPTIONAL: show groups (for debugging / role-based UI) */}
      {/* Status */}
      <div style={{ fontSize: "12px", marginBottom: "10px", color: "#666" }}>
        🌐 {isOnline ? "Online (Sync Active)" : "Offline (Local Only)"}
      </div>

      {/* Groups */}
      {groups.length > 0 && (
        <div style={{ fontSize: "12px", color: "#666", marginBottom: "10px" }}>
          Groups: {groups.join(", ")}
        </div>
      )}

      {/* Input */}
      <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Enter user name"
          style={{
            flex: 1,
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "6px",
            fontSize: "14px",
          }}
        />
        <button
          onClick={addUser}
          style={{
            padding: "10px 16px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Submit
        </button>
      </div>

      {/* Actions */}
      {<button
        onClick={clearLocalData}
        style={{
          marginBottom: "10px",
          fontSize: "12px",
          background: "#f5f5f5",
          border: "1px solid #ddd",
          padding: "6px 10px",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Clear Local Cache
      </button> }

      <h3>User List</h3>

      <ul style={{ paddingLeft: "20px" }}>
        {users.map((u) => (
          <li
            key={u.id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "6px 0",
              borderBottom: "1px solid #eee",
            }}
          >
            <span>{u.name}</span>
            <FaTrash
              style={{ cursor: "pointer", color: "red" }}
              onClick={() => handleDelete(u)}
            />
          </li>
        ))}
      </ul>

    </div>
  );
}
