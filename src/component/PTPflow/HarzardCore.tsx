import { useState } from "react";
import { Row, Col, Card, Button, Form } from "react-bootstrap";
import { Plus, Trash, Pencil } from "react-bootstrap-icons";
import "./HarzardCore.css";

interface Control {
  label: string;
}

interface Hazard {
  id: number;
  title: string;
  hasClearance?: boolean;
  controls: Control[];
}

const initialHazards: Hazard[] = [
  {
    id: 1,
    title: "Overhead Utilities",
    hasClearance: true,
    controls: [
      { label: "Power De-energization Required" },
      { label: "Insulation Blankets Required" },
      { label: "Fire Watcher Required" },
      { label: "Safe Work Zone Marked" }
    ]
  },
  {
    id: 2,
    title: "Crane or Other Lifting Equip.",
    controls: [
      { label: "Signalman Assigned" },
      { label: "Worker Protected / Overhead Load" },
      { label: "Lifting Equip. Inspected" },
      { label: "Area Around Crane Barricaded" },
      { label: "Tag Line in Use" }
    ]
  },
  {
    id: 3,
    title: "Excavations",
    controls: [
      { label: "Proper Sloping / Shoring" },
      { label: "Access / Ingress Provided" },
      { label: "Protected from water" },
      { label: "Inspected Prior to Entering" },
      { label: "Barricades Provided" }
    ]
  },
  {
    id: 4,
    title: "Electrical",
    controls: [
      { label: "Lock Out / Tag Out / Try Out" },
      { label: "Reviewed Elect. Safety Procedures" },
      { label: "Confirm Equip. De-Energized" },
      { label: "Existing Cords protected" }
    ]
  },
  {
    id: 5,
    title: "Underground Utilities [CAP]",
    hasClearance: true,
    controls: [
      { label: "Safe Work Zone Marked" },
      { label: "Received Ground Disturbance Permit" },
      { label: "Subsurface Survey" },
      { label: "Reviewed As-Built" },
      { label: "Owner Utilities Marked" }
    ]
  }
];

const HarzardCore: React.FC = () => {
  const [hazards, setHazards] = useState<Hazard[]>(initialHazards);

  const removeHazard = (id: number) => {
    setHazards(hazards.filter(h => h.id !== id));
  };

  return (
    <Card className="shadow-sm bg-light">
      <Card.Body>
        {/* Header */}
        <Row className="align-items-center mb-3">
          <Col>
            <h6 className="fw-semibold mb-0">Hazards & Control Measures</h6>
          </Col>
          <Col xs="auto">
            <Button variant="outline-dark" size="sm">
              <Plus size={14} /> Add Hazard
            </Button>
          </Col>
        </Row>

        {/* Hazard Cards */}
        {hazards.map(hazard => (
          <Card key={hazard.id} className="hazard-card mb-3">
            <div className="left-accent" />

            <Card.Body>
              {/* Title Row */}
              <Row className="align-items-center mb-2">
                <Col>
                  <Form.Check
                    type="checkbox"
                    label={<strong>{hazard.title}</strong>}
                    className="small-checkbox "
                  />
                </Col>

                {hazard.hasClearance && (
                  <Col xs="auto" className="d-flex align-items-center gap-2">
                    <span className="text-muted small">
                      Required clearance distance in
                    </span>
                    <Form.Control
                      size="sm"
                      style={{ width: "80px" }}
                    />
                    <span className="small">ft</span>
                  </Col>
                )}
              </Row>

              {/* Controls */}
              <Row className="mt-2">
                {hazard.controls.map((control, idx) => (
                  <Col md={3} key={idx}>
                    <Form.Check
                      type="checkbox"
                      label={control.label}
                      className="mb-2 small-checkbox" 
                    />
                  </Col>
                ))}
              </Row>

              {/* Action Icons */}
              <div className="hazard-actions">
                <Pencil className="me-3 text-primary cursor-pointer" />
                <Trash
                  className="text-danger cursor-pointer"
                  onClick={() => removeHazard(hazard.id)}
                />
              </div>
            </Card.Body>
          </Card>
        ))}
      </Card.Body>
    </Card>
  );
};

export default HarzardCore;
