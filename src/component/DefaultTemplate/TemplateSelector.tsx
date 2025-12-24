import { useState } from "react";
import { Container, Card } from "react-bootstrap";
import { CheckCircle, Circle } from "react-bootstrap-icons";
import "../DefaultTemplate/templeateSelector.css";

type TemplateType = "custom" | "previous";

export default function TemplateSelector() {
    const [selected, setSelected] = useState<TemplateType>("previous");

    return (
        <Container className="template-container">
            <p className="text-muted mb-3">
                Select one of the below options to start template creation:
            </p>

            {/* Custom Templates */}
            <Card
                className={`template-card ${selected === "custom" ? "active custom" : ""
                    }`}
                onClick={() => setSelected("custom")}
            >
                <div className="left-bar custom" />
                <Card.Body className="d-flex justify-content-between">
                    <div>
                        <h6 className="fw-bold">Custom Templates</h6>
                        <p className="text-muted mb-0">
                            Create and save custom pre-task plan templates tailored to your
                            needs & to identify hazards and plan safe work activities.
                        </p>
                    </div>

                    {selected === "custom" ? (
                        <CheckCircle className="icon active" />
                    ) : (
                        <Circle className="icon" />
                    )}
                </Card.Body>
            </Card>

            <Card
                className={`so${selected === "previous" ? "active previous" : ""
                    }`}
                onClick={() => setSelected("previous")}
            >
                <div className="left-bar previous" />
                <Card.Body className="d-flex justify-content-between">
                    <div>
                        <h6 className="fw-bold">Previous Day Templates</h6>
                        <p className="text-muted mb-0">
                            Generate a pre-task plan from the previous day while reviewing and
                            updating site hazards and controls, to save time and maintain
                            continuity.
                        </p>
                    </div>

                    {selected === "previous" ? (
                        <CheckCircle className="icon active" />
                    ) : (
                        <Circle className="icon" />
                    )}
                </Card.Body>
            </Card>
        </Container>
    );
}
