import { useState } from "react";
import {
  Card,
  Col,
  Row,
  Form,
  Button
} from "react-bootstrap";
import { PencilSquare, Eye, Plus } from "react-bootstrap-icons";
import edit from "../../assets/icon/edit.png";
import eye from "../../assets/icon/Eye.png";
const templateData = [
  {
    id: 1,
    title: "Electrical Work - PTP Template",
    createdOn: "Dec 11, 2025, 9:00 AM EST",
    createdBy: "Nick Fries",
  },
  {
    id: 2,
    title: "Plumbing Work - PTP Template",
    createdOn: "Dec 10, 2025, 9:00 AM EST",
    createdBy: "Nick Fries",
  },
  {
    id: 3,
    title: "Mechanical (HVAC) - PTP Template",
    createdOn: "Dec 10, 2025, 9:00 AM EST",
    createdBy: "John Nicolas",
  },
  {
    id: 4,
    title: "Carpentry - PTP Template",
    createdOn: "Dec 09, 2025, 9:00 AM EST",
    createdBy: "Nick Fries",
  },
  {
    id: 5,
    title: "Concrete & Formwork - PTP Template",
    createdOn: "Dec 08, 2025, 9:00 AM EST",
    createdBy: "Nick Fries",
  },
  {
    id: 6,
    title: "Structural Steel / Ironwork - PTP Template",
    createdOn: "Dec 08, 2025, 9:00 AM EST",
    createdBy: "Nick Fries",
  },
];

const TemplateLibrary: React.FC<{ setStage: React.Dispatch<React.SetStateAction<number>> }> = ({ setStage }) => {
  const [search, setSearch] = useState("");

  const filteredTemplates = templateData.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Card className="shadow-sm bg-light">
      <Card.Body>

        {/* Header */}
        <Row className="align-items-center mb-3">
          <Col>
            <h6 className="fw-semibold mb-0">List of Templates</h6>
          </Col>
        </Row>

        {/* Search & Button */}
        <Row className="align-items-center mb-3">
          <Col md={6}>
            <Form.Control
              type="text"
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </Col>

          <Col md={6} className="text-end">
            <Button variant="dark" onClick={() => setStage(1)}>
              <Plus className="me-2" />
              Create New Template
            </Button>
          </Col>
        </Row>

        {/* Template List */}
        {filteredTemplates.map((item) => (
          <Card key={item.id} className="mb-3 shadow-sm border-0">
            <Card.Body>
              <Row className="align-items-center">
                <Col md={9}>
                  <h6 className="fw-semibold mb-1 headerWithUnderline">{item.title}</h6>
                  <small className="text-muted">
                    <span className="grayShoud"> Created on</span><span className="ligtblocktext"> {item.createdOn} by {item.createdBy}</span>
                  </small>
                </Col>

                <Col md={3} className="text-end">
                  <span className="me-2">
                    <img src={edit} alt="Edit" width={20} height={20} />
                  </span>
                  <span className="me-2">
                    <img src={eye} alt="eye" width={45} height={25} />
                  </span>

                </Col>
              </Row>
            </Card.Body>
          </Card>
        ))}
      </Card.Body>
    </Card>
  );
};

export default TemplateLibrary;
