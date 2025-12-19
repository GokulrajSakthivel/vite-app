import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import UsersApp from "./UsersApp";

export default function App() {
  return (
    <Authenticator>
      {({ signOut, user }) => (
        <div>
          {/* TOP BAR */}
          <header
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "12px 20px",
              background: "#f4f6f8",
              borderBottom: "1px solid #ddd",
            }}
          >
            <div>
              <strong>Amplify App</strong>
            </div>

            <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
              <span style={{ fontSize: "14px" }}>
                {user?.attributes?.email}
              </span>
              <button onClick={signOut}>Sign out</button>
            </div>
          </header>

          {/* MAIN CONTENT */}
          <UsersApp />
        </div>
      )}
    </Authenticator>
  );
}
