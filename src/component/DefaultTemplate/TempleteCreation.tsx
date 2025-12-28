import { useState } from "react";
import HarzardCreation from "./HarzardCreation";
import RequirementCreation from "./RequirementCreation";
import TemplateLibrary from "./TemplateLibrary";
import CommonModal from "../../assets/utilits/CommonModal";
import { Button, Card, Col, Form, Row } from "react-bootstrap";

export default function TempleteCreation() {
    const [stage, setStage] = useState<number>(0);
    const [showModal, setShowModal] = useState<boolean>(false);
    const [templateName, setTemplateName] = useState("");
    const [error, setError] = useState("");
    const handleSave = () => {
        if (!templateName.trim()) {
            setError("Template name is required");
            return;
        }

        setError("");

        console.log("Saved Template:", templateName);

        // Close modal after success
        setShowModal(false);

        // reset (optional)
        setTemplateName("");
    };
    return (
        <div>
            <div>
                <h5>
                    {stage === 0 ? "Template Library" : "Create Trade Specific Custom Template"}
                </h5>
            </div>
            {stage === 0 && <TemplateLibrary setStage={setStage} />}
            {stage === 1 && <HarzardCreation />}
            {stage === 2 && <RequirementCreation />}

            <CommonModal
                show={showModal}
                title="Save Template As"
                onClose={() => setShowModal(false)}
                // onPrimary={() => {
                //     console.log("Proceed");
                //     setShowModal(false);
                // }}
                // primaryText="Get Started →"
                showSecondaryButton={false}
            >
                <Card className="shadow-sm border-1 p-3 bg-light">
                    <Row className="align-items-center">
                        <Col md={10}>
                            <Form.Control
                                type="text"
                                placeholder="Enter Template Name..."
                                value={templateName}
                                onChange={(e) => {
                                    setTemplateName(e.target.value);
                                    if (error) setError("");
                                }}
                                isInvalid={!!error}
                            />
                            <Form.Control.Feedback type="invalid">
                                {error}
                            </Form.Control.Feedback>
                        </Col>

                        <Col md={2} className="text-end">
                            <Button
                                className="save-btn buttonColorSuccess"
                                onClick={handleSave}
                            >
                                Save
                            </Button>
                        </Col>
                    </Row>

                </Card>
                {/* <TemplateSelector /> */}
            </CommonModal>

            {stage !== 0 && <div
                className="d-flex justify-content-between align-items-center pt-3"
                style={{ borderTop: "1px solid #e6ebf5" }}
            >
                <button
                    className="btn btn-outline-dark d-flex align-items-center gap-2 px-3"
                    onClick={() => setStage(1)}
                    disabled={stage === 1}
                >
                    ← Prev
                </button>

                <button
                    className="btn btn-dark d-flex align-items-center gap-2 px-4"
                    onClick={() => {
                        if (stage === 2) {
                            setShowModal(true)
                        } else {
                            setStage(2);
                        }
                    }
                    }
                >
                    {stage === 2 ? "Save Template →" : "Next →"}
                </button>
            </div>}
        </div>
    );
}
