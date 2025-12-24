import { useEffect, useState } from "react";
import { DataStore, Auth } from "aws-amplify";
import { Users, Address } from "./models";
import { FaTrash } from "react-icons/fa";



export default function UsersApp() {

  const [groups, setGroups] = useState<string[]>([]);
  const [isOnline, setIsOnline] = useState<boolean>(navigator.onLine);
  const [users, setUsers] = useState<Users[]>([]);

  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");

  const [selectedUser, setSelectedUser] = useState<Users | null>(null);
  const [addressDrafts, setAddressDrafts] = useState([
    { country: "", phone: "" },
  ]);

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
    console.log("removeNetworkListener calling");
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
      setUserEmail(user.attributes.email);
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

  function addAddressDraft() {
    setAddressDrafts([...addressDrafts, { country: "", phone: "" }]);
  }

  async function fetchUsers() {
    try {
      const allUsers = await DataStore.query(Users);

      console.log(allUsers);

      const usersWithAddresses = await Promise.all(
        allUsers.map(async (u) => {
          const addresses = await u.addresses.toArray(); // ✅ FIX
          return { ...u, addresses };
        })
      );
      console.log(usersWithAddresses);
      setUsers(usersWithAddresses as any);
    } catch (err) {
      console.log("error fetching users:", err);
    }
  }

  async function deleteUser(user: Users) {
    try {
      // 1️⃣ Re-fetch REAL Users model instance
      const realUser = await DataStore.query(Users, user.id);
      if (!realUser) return;

      // 2️⃣ Resolve addresses safely
      const addresses = await realUser.addresses.toArray();

      // 3️⃣ Delete addresses first
      for (const addr of addresses) {
        await DataStore.delete(addr);
      }

      // 4️⃣ Delete user (REAL model instance)
      await DataStore.delete(realUser);

      fetchUsers();
    } catch (err) {
      console.log("error deleting user:", err);
    }
  }

  async function deleteAddress(address: Address) {
    try {
      await DataStore.delete(address);
      fetchUsers();
    } catch (err) {
      console.log("error deleting user:", err);
    }
  }


  /* ---------------- CREATE USER ---------------- */
  async function createUser() {
    if (!userName || !userEmail) return;

    const newUser = await DataStore.save(
      new Users({
        name: userName,
        email: userEmail,
      })
    );

    setUserName("");
    setSelectedUser(newUser);
    fetchUsers();
  }

  /* ---------------- CREATE ADDRESS ---------------- */
  async function saveAddresses() {
    if (!selectedUser) return;

    for (const addr of addressDrafts) {
      if (!addr.country || !addr.phone) continue;

      await DataStore.save(
        new Address({
          userID: selectedUser.id,
          country: addr.country,
          phone: addr.phone,
        })
      );
    }

    setAddressDrafts([{ country: "", phone: "" }]);
    fetchUsers();
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

      <button onClick={clearLocalData}>
        Create Local Cache
      </button>

      <div style={styles.container}>
        {/* ---------- CREATE USER ---------- */}
        <div style={styles.card}>
          <h3 style={styles.heading}>Create User</h3>

          <div style={styles.formRow}>
            <input
              style={styles.input}
              placeholder="Name"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
            <input
              style={styles.input}
              placeholder="Email"
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
            />
          </div>

          <button style={styles.primaryBtn} onClick={createUser}>
            Create User
          </button>
        </div>

        {/* ---------- CREATE ADDRESS ---------- */}
        {/* {selectedUser && (
          <div style={styles.card}>
            <h3 style={styles.heading}>
              Add Address for <span style={{ color: "#007bff" }}>{selectedUser.name}</span>
            </h3>

            <input
              style={styles.input}
              placeholder="Country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            />

            <input
              style={styles.input}
              placeholder="Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />

            <button style={styles.secondaryBtn} onClick={addAddress}>
              Add Address
            </button>
          </div>
        )} */}

        {selectedUser && (
          <div style={styles.card}>
            <h3 style={styles.heading}>
              Add Address for{" "}
              <span style={{ color: "#007bff" }}>{selectedUser.name}</span>
            </h3>

            {addressDrafts.map((addr, index) => (
              <div key={index} style={{ marginBottom: "10px" }}>
                <input
                  style={styles.input}
                  placeholder="Country"
                  value={addr.country}
                  onChange={(e) => {
                    const copy = [...addressDrafts];
                    copy[index].country = e.target.value;
                    setAddressDrafts(copy);
                  }}
                />

                <input
                  style={styles.input}
                  placeholder="Phone"
                  value={addr.phone}
                  onChange={(e) => {
                    const copy = [...addressDrafts];
                    copy[index].phone = e.target.value;
                    setAddressDrafts(copy);
                  }}
                />
              </div>
            ))}

            <button style={styles.secondaryBtn} onClick={addAddressDraft}>
              ➕ Add Another Address
            </button>

            <br /><br />

            <button style={styles.primaryBtn} onClick={saveAddresses}>
              💾 Save Addresses
            </button>
          </div>
        )}


        {/* ---------- LIST USERS ---------- */}
        <div style={styles.card}>
          <h3 style={styles.heading}>Users</h3>

          <ul style={styles.userList}>
            {users.map((u: any) => (
              <li key={u.id} style={styles.userItem}>
                <div style={styles.userHeader}>
                  <span
                    style={styles.userName}
                    onClick={() => setSelectedUser(u)}
                  >
                    {u.name} ({u.email})
                  </span>

                  <FaTrash
                    style={styles.deleteIcon}
                    onClick={() => deleteUser(u)}
                    title="Delete User"
                  />
                </div>

                {u.addresses.length > 0 && (
                  <ul style={styles.addressList}>
                    {u.addresses.map((a: any) => (
                      <li key={a.id}>
                        📍 {a.country} | 📞 {a.phone}
                        <FaTrash
                          style={styles.deleteIcon}
                          onClick={() => deleteAddress(a)}
                          title="Delete User"
                        />
                      </li>

                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>


    </div>
  );
}

const styles = {
  container: {
    maxWidth: "600px",
    margin: "40px auto",
    fontFamily: "Arial, sans-serif",
  },

  card: {
    background: "#fff",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
    marginBottom: "20px",
  },

  heading: {
    marginBottom: "15px",
  },

  formRow: {
    display: "flex",
    gap: "10px",
    marginBottom: "15px",
  },

  input: {
    width: "100%",
    padding: "10px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    marginBottom: "10px",
    fontSize: "14px",
  },

  primaryBtn: {
    backgroundColor: "#007bff",
    color: "#fff",
    padding: "10px 16px",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontWeight: "bold",
  },

  secondaryBtn: {
    backgroundColor: "#28a745",
    color: "#fff",
    padding: "10px 16px",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontWeight: "bold",
  },

  userList: {
    listStyle: "none",
    padding: 0,
  },

  userItem: {
    padding: "10px 0",
    borderBottom: "1px solid #eee",
  },

  userHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  userName: {
    fontWeight: "bold",
    cursor: "pointer",
  },

  deleteIcon: {
    color: "red",
    cursor: "pointer",
  },

  addressList: {
    marginTop: "6px",
    paddingLeft: "16px",
    fontSize: "13px",
    color: "#555",
  },
};

