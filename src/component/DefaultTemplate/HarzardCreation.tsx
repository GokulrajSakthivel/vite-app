import { useEffect, useState } from "react";
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

const HarzardCreation: React.FC = () => {
  const [hazards, setHazards] = useState<Hazard[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [editedHazard, setEditedHazard] = useState<Hazard | null>(null);
  const isAllSelected = editedHazard?.controls.every(
    control => control.isPresent
  ) ?? false;

  // open modal
  const openEditModal = (hazard: Hazard) => {
    setEditedHazard(JSON.parse(JSON.stringify(hazard))); 
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

  useEffect(() => {
    // Fetch and transform data from JSON file
    fetch("/src/component/DefaultTemplate/RetriveMasterData.Json")
      .then(res => res.json())
      .then(data => {
        // Filter hazards control measures from master data
        const hazardItems = data.data.listMasters.items.filter(
          (item: any) => item.categoryName === "HAZARDS-CONTROL-MEASURE" && item.isActive
        );

        // Sort by displayOrder
        hazardItems.sort((a: any, b: any) => a.displayOrder - b.displayOrder);

        // Transform the data to match our Hazard interface
        const transformedHazards: Hazard[] = hazardItems.map((item: any, index: number) => ({
          id: index + 1,
          title: item.MasterDescription,
          hasClearance: item.MasterDescription.toLowerCase().includes('utilities'),
          // controls: item.items.items
          //   .filter((control: any) => control.isActive)
          //   .map((control: any) => ({
          //     label: control.itemName,
          //     isPresent: true
          //   }))
        }));

        setHazards(transformedHazards);
        console.log('Loaded hazards from JSON:', transformedHazards);
      })
      .catch(error => {
        console.error('Error loading hazards:', error);
      });
  }, []);
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
{/* {hazard?.controls.length > 0 && (
                <Row className="mt-2">
                  {hazard?.controls
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
                </Row>)} */}
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
