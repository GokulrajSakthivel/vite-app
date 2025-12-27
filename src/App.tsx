import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import UsersApp from "./UsersApp";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import ForemanDashboard from "./component/Dashoard/FormanDashbaord";
import TempleteCreation from "./component/DefaultTemplate/TempleteCreation";
import TempleteCreateComponentMain from "./component/PTPflow/TempleteCreateComponentMain";
import AppLayout from "./AppLayout";
import AddMasterAndItemsWithDataStore from "./MasterDtata";

export default function App() {
  return (
    <Authenticator hideSignUp>
      {({ signOut, user }) => (
        <>
        <button onClick={signOut}>Sign out</button>
        
        <AppLayout >
          <div className="content-inner">
            {/* <Layout signOut={undefined} user={undefined}> */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              {/* <Route path="/todo" element={<TodoCRUD />} /> */}
              <Route path="/foremandashboard" element={<ForemanDashboard />} />
              <Route path="/CreateTemplate" element={<TempleteCreation />} />
              <Route path="/templetecreation" element={<TempleteCreateComponentMain />} />
              <Route path="/userform" element={<UsersApp />} />
            </Routes>
            {/* </Layout> */}
          </div>
        </AppLayout>
        </>


        // <div>
        //   {/* TOP BAR */}
        //   <header
        //     style={{
        //       display: "flex",
        //       justifyContent: "space-between",
        //       alignItems: "center",
        //       padding: "12px 20px",
        //       background: "#f4f6f8",
        //       borderBottom: "1px solid #ddd",
        //     }}
        //   >
        //     <div>
        //       <strong>Amplify App</strong>
        //     </div>

        //     <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
        //       <span style={{ fontSize: "14px" }}>
        //         {user?.attributes?.email}
        //       </span>
        //       <button onClick={signOut}>Sign out</button>
        //     </div>
        //   </header>

        //   {/* MAIN CONTENT */}
        //   {/* <UsersApp /> */}
        // </div>
      )}


    </Authenticator>
  );
}
