import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Navbar,
  Nav,
  Offcanvas,
  Button,ButtonGroup
} from "react-bootstrap";
import { BellFill } from "react-bootstrap-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import "./AppLayout.css";
import logo from "../src/assets/icon/Logo.png";
export default function AppLayout({ children }: { children: React.ReactNode }) {
  const [showSidebar, setShowSidebar] = useState(false);
  const [lang, setLang] = useState<"EN" | "ES">("EN");
  return (
    <div className="app-root">
      {/* Header */}
     
      <Navbar fixed="top" className="px-3 header-bg">
  {/* Mobile Hamburger */}
  <Button
    variant="outline-light"
    className="d-lg-none me-2"
    onClick={() => setShowSidebar(true)}
  >
    ☰
  </Button>

  {/* Logo */}
  <Navbar.Brand href="#" className="d-flex align-items-center gap-2">
    <img src={logo} alt="App Logo" width={60} height={35} />
    <span className="header-title">Daily Pre-Task Planner</span>
  </Navbar.Brand>

  {/* Right Section */}
  <Nav className="ms-auto align-items-center gap-4">
    {/* Language Toggle */}
    <div className="lang-toggle">
      <ButtonGroup>
        <button
          className={`lang-btn ${lang === "EN" ? "active" : ""}`}
          onClick={() => setLang("EN")}
        >
          EN
        </button>
        <button
          className={`lang-btn ${lang === "ES" ? "active" : ""}`}
          onClick={() => setLang("ES")}
        >
          ES
        </button>
      </ButtonGroup>
    </div>

    {/* Notification */}
    <div className="notification">
      <BellFill size={18} />
      <span className="notify-dot" />
    </div>

    {/* Profile */}
    <div className="profile d-flex align-items-center gap-2">
      <img
        src="https://i.pravatar.cc/40"
        alt="user"
        className="profile-img"
      />
      <div className="profile-text">
        <div className="profile-name">Allatt, Caverly</div>
        <div className="profile-role">Foreman</div>
      </div>
    </div>
  </Nav>
</Navbar>

      {/* Mobile + Tablet Sidebar (Offcanvas) */}
      <Offcanvas
        show={showSidebar}
        onHide={() => setShowSidebar(false)}
        placement="start"
        className="mobile-sidebar"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="p-0">
          <Nav className="flex-column sidebar-nav">
            <Nav.Link onClick={() => setShowSidebar(false)} href="/about">about</Nav.Link>
            <Nav.Link onClick={() => setShowSidebar(false)} href="/todo">todo</Nav.Link>
            <Nav.Link onClick={() => setShowSidebar(false)} href="/templetecreation">Templete Creation</Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>

      {/* Main layout */}
      <Container fluid className="main-container">
        <Row className="h-100 g-0">
         
          <Col lg={2} className="sidebar d-none d-lg-block">
            <Nav className="flex-column sidebar-nav">
              <Nav.Link onClick={() => setShowSidebar(false)} href="/about">about</Nav.Link>
              <Nav.Link onClick={() => setShowSidebar(false)} href="/todo">todo</Nav.Link>

            </Nav>
          </Col>

          {/* Content */}
          <Col xs={12} lg={10} className="content-area ">
          <Container fluid className="pt-4 pb-3">

            {children}
            </Container>
          </Col>
        </Row>
      
      </Container>

      <footer className="footer bg-dark text-white text-center footerbg">
       
        <p className="footerText"> ©  powered by STGINFO</p>
      </footer>
    </div>
  );
}
