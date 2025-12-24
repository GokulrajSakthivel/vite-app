import { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Form,
  Button,
  Badge,
  InputGroup,
} from "react-bootstrap";
import { Search, PlusCircle} from "react-bootstrap-icons";
import "bootstrap/dist/css/bootstrap.min.css";

import group1 from "../../assets/icon/group1.png";
import group2 from "../../assets/icon/group2.png";
import group3 from "../../assets/icon/group3.png";
import group4 from "../../assets/icon/group4.png";
import bin from "../../assets/icon/bin.png";
import edit from "../../assets/icon/edit.png";

import CommonModal from "../../assets/utilits/CommonModal";
import TemplateSelector from "../DefaultTemplate/TemplateSelector";

export default function ForemanDashboard() {
  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <Container fluid className="p-2">
      {/* Header */}
      <h4 className="mb-3 headerText">Foreman Dashboard</h4>

      {/* Filters */}
      <Row className="mb-2 g-3">
        <Col md={4}>
          <Form.Select>
            <option>Region</option>
          </Form.Select>
        </Col>
        <Col md={4}>
          <Form.Select>
            <option>Business Unit</option>
          </Form.Select>
        </Col>
        <Col md={4}>
          <Form.Select>
            <option>Project Site</option>
          </Form.Select>
        </Col>
      </Row>

      {/* Stats */}
      <Row className="mb-4 g-3">
        {[
          { label: "Total PTP's", value: 8, img: group1 },
          { label: "In Progress", value: 6, img: group2 },
          { label: "Submitted", value: 2, img: group3 },
          { label: "Reviewed", value: 1, img: group4 },
        ].map((item, i) => (
          <Col md={3} key={i}>
            <Card className="shadow-sm litleCard">
              <Card.Body className="d-flex justify-content-between align-items-center">
                        <div className="d-flex flex-column">
                            <p className="titleCardText mb-1">{item.label}</p>
                            <h4 className="fw-bold">{item.value}</h4>
                        </div>
                {item.label === "Reviewed" ? (
                  <Badge pill className="greenlightbackground">
                    <img src={item.img} alt={item.label} width={30} height={35} />
                  </Badge>
                ) : (
                  <img src={item.img} alt={item.label} width={40} height={40} />
                )}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Templates */}
      <Card className="whiteBackground">
        <Card.Body>
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h5 className="headerText2">
              Previously Worked PTP Templates
            </h5>

            <Button variant="dark" onClick={() => setShowModal(true)}>
              <PlusCircle className="me-2" />
              Create New PTP
            </Button>
          </div>

          {/* Search */}
          <Row className="mb-3 g-2">
            <Col md={4}>
              <InputGroup>
                <InputGroup.Text>
                  <Search />
                </InputGroup.Text>
                <Form.Control placeholder="Search..." />
              </InputGroup>
            </Col>
            <Col md={3}>
              <Form.Select>
                <option>Status</option>
              </Form.Select>
            </Col>
            <Col md={3}>
              <Form.Control type="date" />
            </Col>
          </Row>

          {/* List */}
          {["In Progress", "Submitted"].map((status, i) => (
            <Card key={i} className="mb-3 border-0 shadow-sm">
              <Card.Body>
                <div className="d-flex justify-content-between">
                  <div>
                    <div className="d-flex align-items-center">
                      <h6 className="headerText2 mb-3 me-2">
                        Attachment N Pre-Task Plan
                      </h6>

                      <Badge
                        bg={status === "In Progress" ? "primary" : "info"}
                        className="mb-2"
                      >
                        {status}
                      </Badge>
                    </div>

                    <div className="text-muted small">
                      Copied from Dec 10, 2025 | Date Dec 11, 2025
                      <br />
                      Submitted by Nick Fries | Last Updated Dec 11, 2025
                    </div>
                  </div>

                  <div className="text-end">
                    <span className="me-2">
                      <img src={bin} alt="Delete" width={20} height={20} />
                    </span>

                    <span>
                      <img src={edit} alt="Edit" width={20} height={20} />
                    </span>
                  </div>

                </div>
              </Card.Body>
            </Card>
          ))}
        </Card.Body>
      </Card>

      {/* ================= MODAL ================= */}
          <CommonModal
              show={showModal}
              title="Select Template Type"
              onClose={() => setShowModal(false)}
              onPrimary={() => {
                  console.log("Proceed");
                  setShowModal(false);
              }}
              primaryText="Get Started →"
            //   secondaryText="Cancel"
              showSecondaryButton={false}
          >
              <TemplateSelector />
          </CommonModal>
    </Container>
  );
}
