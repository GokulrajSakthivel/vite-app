import React, { useRef } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import SignatureCanvas from "react-signature-canvas";
import { ArrowClockwise } from "react-bootstrap-icons";
import "./ptpreview.css";

const PTPReview: React.FC = () => {
    const sigRef = useRef<SignatureCanvas | null>(null);

    const clearSignature = () => {
        sigRef.current?.clear();
    };

    return (
        <Card className="shadow-sm bg-light">
            <Card.Body>
                {/* HEADER */}
                <Row className="mb-3">
                    <Col>
                        <h6 className="mb-0 fw-semibold text-dark">PTP Review</h6>
                    </Col>
                </Row>
                <Card>

                    <Card.Body>
                        {/* ================= COMMENTS ================= */}
                        <div className="mb-4">
                            <label className="form-label fw-medium">Enter Comments</label>
                            <textarea
                                className="form-control comment-textarea"
                                placeholder="Enter your comments here.."
                                maxLength={1000}
                            />
                        </div>

                        {/* ================= SIGNATURE + FORM ================= */}
                        <Row className="align-items-stretch">
                            {/* SIGNATURE BOX */}
                            <Col md={8}>
                                <div className="signature-container">
                                    <span className="signature-placeholder">Sign here..</span>

                                    <SignatureCanvas
                                        ref={sigRef}
                                        penColor="#000"
                                        canvasProps={{ className: "signature-canvas" }}
                                    />

                                    <button
                                        type="button"
                                        className="signature-reset-btn"
                                        onClick={clearSignature}
                                    >
                                        <ArrowClockwise size={18} />
                                    </button>

                                    <div className="signature-line" />
                                </div>
                            </Col>

                            {/* RIGHT INPUTS */}
                            <Col md={4}>
                                <input
                                    type="text"
                                    className="form-control mb-3"
                                    placeholder="Enter Date here.."
                                />

                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter Phone Number.."
                                />
                            </Col>
                        </Row>

                        {/* ================= ACTION BUTTONS ================= */}
                        <div className="d-flex justify-content-end gap-3 mt-4">
                            <Button variant="  btn btn-outline-secondary">Flag for Changes</Button>
                            <Button className="btn-success px-4">PTP Reviewed</Button>
                        </div>
                    </Card.Body>
                </Card>
            </Card.Body>
        </Card>
    );
};

export default PTPReview;
