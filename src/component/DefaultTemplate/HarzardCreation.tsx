import { useState } from "react";
import { Row, Col, Card, Form } from "react-bootstrap";
import edit from "../../assets/icon/edit.png";
import CommonModal from "../../assets/utilits/CommonModal";

interface Control {
  label: string;
  isPresent?: boolean;
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
      { label: "Power De-energization Required", isPresent: true },
      { label: "Insulation Blankets Required", isPresent: true },
      { label: "Fire Watcher Required", isPresent: true },
      { label: "Safe Work Zone Marked", isPresent: true }
    ]
  },
  {
    id: 2,
    title: "Crane or Other Lifting Equip.",
    controls: [
      { label: "Signalman Assigned", isPresent: true },
      { label: "Worker Protected / Overhead Load", isPresent: true },
      { label: "Lifting Equip. Inspected", isPresent: true },
      { label: "Area Around Crane Barricaded", isPresent: true },
      { label: "Tag Line in Use", isPresent: true }
    ]
  },
  {
    id: 3,
    title: "Excavations",
    controls: [
      { label: "Proper Sloping / Shoring", isPresent: true },
      { label: "Access / Ingress Provided", isPresent: true },
      { label: "Protected from water", isPresent: true },
      { label: "Inspected Prior to Entering", isPresent: true },
      { label: "Barricades Provided", isPresent: true }
    ]
  },
  {
    id: 4,
    title: "Electrical",
    controls: [
      { label: "Lock Out / Tag Out / Try Out", isPresent: true },
      { label: "Reviewed Elect. Safety Procedures", isPresent: true },
      { label: "Confirm Equip. De-Energized", isPresent: true },
      { label: "Existing Cords protected", isPresent: true }
    ]
  },
  {
    id: 5,
    title: "Underground Utilities [CAP]",
    hasClearance: true,
    controls: [
      { label: "Safe Work Zone Marked", isPresent: true },
      { label: "Received Ground Disturbance Permit", isPresent: true },
      { label: "Subsurface Survey", isPresent: true },
      { label: "Reviewed As-Built", isPresent: true },
      { label: "Owner Utilities Marked", isPresent: true }
    ]
  }
];

const HarzardCreation: React.FC = () => {
  const [hazards, setHazards] = useState<Hazard[]>(initialHazards);
  const [showModal, setShowModal] = useState(false);
  const [editedHazard, setEditedHazard] = useState<Hazard | null>(null);
  const isAllSelected = editedHazard?.controls.every(
    control => control.isPresent
  ) ?? false;

  // open modal
  const openEditModal = (hazard: Hazard) => {
    setEditedHazard(JSON.parse(JSON.stringify(hazard))); // clone
    setShowModal(true);
  };

  // toggle checkbox ONLY in modal
  const toggleControl = (index: number) => {
    if (!editedHazard) return;

    const updatedControls = editedHazard.controls.map((control, i) =>
      i === index
        ? { ...control, isPresent: !control.isPresent }
        : control
    );

    setEditedHazard({ ...editedHazard, controls: updatedControls });
  };

  // toggle all controls
  const toggleAllControls = (checked: boolean) => {
    if (!editedHazard) return;

    const updatedControls = editedHazard.controls.map(control => ({
      ...control,
      isPresent: checked,
    }));

    setEditedHazard({ ...editedHazard, controls: updatedControls });
  };
  // submit → update main state
  const handleSubmit = () => {
    if (!editedHazard) return;

    setHazards(prev =>
      prev.map(h =>
        h.id === editedHazard.id ? editedHazard : h
      )
    );

    setShowModal(false);
  };

  return (
    <>
      <Card className="shadow-sm bg-light">
        <Card.Body>
          <Row className="align-items-center mb-3">
            <Col>
              <h6 className="fw-semibold mb-0">
                Hazards & Control Measures
              </h6>
            </Col>
          </Row>

          {hazards.map(hazard => (
            <Card key={hazard.id} className="hazard-card mb-3">
              <div className="left-accent" />

              <Card.Body>
                <Row className="align-items-center mb-2">
                  <Col>
                    <Form.Check
                      type="checkbox"
                      className="small-checkbox"
                      label={<strong>{hazard.title}</strong>}
                    />
                  </Col>

                  {hazard.hasClearance && (
                    <Col xs="auto" className="d-flex align-items-center gap-2">
                      <span className="text-muted small">
                        Required clearance distance in
                      </span>
                      <Form.Control size="sm" style={{ width: "80px" }} />
                      <span className="small">ft</span>
                    </Col>
                  )}
                </Row>

                <Row className="mt-2">
                  {hazard.controls
                    .filter(c => c.isPresent === true)
                    .map((control, idx) => (
                      <Col md={3} key={idx}>
                        <Form.Check
                          type="checkbox"
                          label={control.label}
                          className="mb-2 small-checkbox"
                        />
                      </Col>
                    ))}
                </Row>
<br/>
                <div className="hazard-actions mt-4 pt-3">
                  <img
                    src={edit}
                    alt="Edit"
                    width={20}
                    height={20}
                    onClick={() => openEditModal(hazard)}
                  />
                </div>
              </Card.Body>
            </Card>
          ))}
        </Card.Body>
      </Card>

      <CommonModal
        show={showModal}
        title="Edit Hazards & Control Measures"
        onClose={() => setShowModal(false)}
        size="sm"
        onPrimary={handleSubmit}
        primaryText="Submit"
        showSecondaryButton={false}
        primaryButtonClass="btn btn-success buttonColorSuccess"
      >
        <Card>
          <Card.Header className="d-flex align-items-center justify-content-between">
            <span>{editedHazard?.title}</span>

            <Form.Check
              type="checkbox"
              checked={isAllSelected}
              className="small-checkbox"
              onChange={(e) => toggleAllControls(e.target.checked)}
            />
          </Card.Header>

          <Card.Body>
            {editedHazard?.controls.map((control, idx) => (
              <Form.Check
                key={idx}
                type="checkbox"
                label={control.label}
                className="mb-2 small-checkbox"
                checked={!!control.isPresent}
                onChange={() => toggleControl(idx)}
              />
            ))}
          </Card.Body>
        </Card>
      </CommonModal>
    </>
  );
};

export default HarzardCreation;
