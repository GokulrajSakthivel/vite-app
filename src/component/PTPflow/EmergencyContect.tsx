import { useState } from "react";
import { Card, Row, Col, Form } from "react-bootstrap";

interface EmergencyFormData {
  actionPlanDiscussed: boolean;
  safety: string;
  superintendent: string;
  other: string;
  musterArea: string;
}

const EmergencyNames: React.FC = () => {
  const [formData, setFormData] = useState<EmergencyFormData>({
    actionPlanDiscussed: true,
    safety: "",
    superintendent: "",
    other: "",
    musterArea: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <Card className="shadow-sm bg-light">
      <Card.Body>
        <Row className="align-items-center mb-2">
          <Col>
            <h6 className="mb-0 fw-semibold text-dark">
              Emergency Names & Phone Numbers
            </h6>
          </Col>
        </Row>

        <Card className="mb-2 shadow-sm">
          <Card.Body>
            <Row className="g-3">

              {/* Switch row */}
              <Col
                md={12}
                className="d-flex align-items-center bg-light p-2 rounded"
              >
                <p className="mb-0 me-3">
                  Emergency Action Plan discussed before start of job?
                </p>

                <Form.Check
                  type="switch"
                  name="actionPlanDiscussed"
                  checked={formData.actionPlanDiscussed}
                  onChange={handleChange}
                  className="custom-switch small-checkbox"
                />
              </Col>

              {/* Safety */}
              <Col md={6}>
                <Form.Label>Safety</Form.Label>
                <Form.Control
                  name="safety"
                  value={formData.safety}
                  onChange={handleChange}
                  placeholder="Mark Haggenmaker (434) 282-398"
                />
              </Col>

              {/* Superintendent */}
              <Col md={6}>
                <Form.Label>Superintendent</Form.Label>
                <Form.Control
                  name="superintendent"
                  value={formData.superintendent}
                  onChange={handleChange}
                  placeholder="BMB Stephen Wolf (434) 312-1922"
                />
              </Col>

              {/* Other */}
              <Col md={6}>
                <Form.Label>Other</Form.Label>
                <Form.Control
                  name="other"
                  value={formData.other}
                  onChange={handleChange}
                  placeholder="Enter Emergency Contact Number"
                />
              </Col>

              {/* Muster Area */}
              <Col md={6}>
                <Form.Label>Emergency Muster Area</Form.Label>
                <Form.Control
                  name="musterArea"
                  value={formData.musterArea}
                  onChange={handleChange}
                  placeholder="BMB Office Trailer"
                />
              </Col>

            </Row>
          </Card.Body>
        </Card>

        {/* Debug / confirmation */}
        {/* Remove this in production */}
        <pre className="mt-3 bg-white p-2 rounded small">
          {JSON.stringify(formData, null, 2)}
        </pre>

      </Card.Body>
    </Card>
  );
};

export default EmergencyNames;
