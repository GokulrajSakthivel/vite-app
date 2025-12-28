import { useEffect, useState } from "react";
import { Row, Col, Card, Form } from "react-bootstrap";
import edit from "../../assets/icon/edit.png";
import CommonModal from "../../assets/utilits/CommonModal";
import { DataStore } from "aws-amplify";
import { Master, MasterItem } from "../../models";
import { useLoader } from "../../assets/utilits/LoaderContext";
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
  // const { showLoader, hideLoader } = useLoader();
const { showLoader: _showLoader, hideLoader: _hideLoader } = useLoader();
  async function clearLocalData() {
    try {
      await DataStore.clear();
      console.log("🧹 DataStore cleared");
      // fetchUsers();
    } catch (e) {
      console.error("Error clearing DataStore", e);
    }
  }
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
  async function fetchMaster() {
    try {
      _showLoader()
      const allMasters = await DataStore.query(Master);

      console.log(allMasters);

      const masterItemsFinal = await Promise.all(
        allMasters.map(async (m) => {
          const masterItems = await  m.items.toArray(); 
          return { ...m, masterItems };
        })
      );

      
      console.log(typeof masterItemsFinal);


            // 1️⃣ Get only HAZARD category
      const hazardMasters = masterItemsFinal.filter(
        (item: any) => item.categoryName === "HAZARD"
      );

      if (!hazardMasters.length) return;

      // 2️⃣ Sort hazards by displayOrder
      const hazardsSorted = hazardMasters[0].masterItems.sort(
        (a: any, b: any) => a.displayOrder - b.displayOrder
      );

      // 3️⃣ Transform hazards
      const transformedHazards = hazardsSorted.map(
        (hazard: any, index: number) => {

          // match control master using mastercode
          const matchedMaster = masterItemsFinal.find(
            (m: any) => m.masterName === hazard.mastercode
          );

          return {
            id: index + 1,
            title: hazard.itemName,

            controls: matchedMaster
              ? matchedMaster.masterItems
                  .sort(
                    (a: any, b: any) =>
                      a.displayOrder - b.displayOrder
                  )
                  .map((control: any) => ({
                    label: control.itemName,
                    isPresent: true
                  }))
              : []
          };
        }
      );
    console.log(transformedHazards)    
    
    setHazards(transformedHazards);
     
      // setUsers(usersWithAddresses as any);
    } catch (err) {
      console.log("error fetching users:", err);
    }finally{
      setTimeout(() => {
        _hideLoader()
      }, 100);
     
    }
  }

useEffect(() => {
  fetchMaster();
  
}, []);

  return (
    <>
    {/* <button onClick={clearLocalData}>Clear DataStore</button> */}
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
                      disabled
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
{hazard?.controls.length > 0 && (
                <Row className="mt-2">
                  {hazard?.controls
                    .filter(c => c.isPresent === true)
                    .map((control, idx) => (
                      <Col md={3} key={idx}>
                        <Form.Check
                          type="checkbox"
                          label={control.label}
                          className="mb-2 small-checkbox"
                          disabled
                        />
                      </Col>
                    ))}
                </Row>)}
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
            {/* <span>{editedHazard?.title}</span> */}

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
