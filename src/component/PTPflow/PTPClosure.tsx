import { useRef, useState } from "react";
import { Card, Row, Col, Table, Button, Form } from "react-bootstrap";
import { Trash } from "react-bootstrap-icons";
import "./crewsignin.css";
import sign from "../../assets/icon/sign.png";
import SignatureCanvas from "react-signature-canvas";
import { ArrowClockwise } from "react-bootstrap-icons";
import CommonModal from "../../assets/utilits/CommonModal";
const initialMembers = [
    { id: 1, name: "Jane Cooper", username: "@jane", initials: "JC" },
    { id: 2, name: "Esther Howard", username: "@esther", initials: "EH" },
    { id: 3, name: "Wade Warren", username: "@wade456", image: true },
    { id: 4, name: "Jenny Wilson", username: "@jenny", initials: "JW" },
    { id: 5, name: "Jacob Jones", username: "@jacob", image: true },
    { id: 6, name: "Guy Hawkins", username: "@guy", initials: "GH" },
    { id: 7, name: "Ronald Richards", username: "@ronald", initials: "RR" },
    { id: 8, name: "Devon Lane", username: "@devon", initials: "DL" },
    { id: 9, name: "Danny Lane", username: "@danny", initials: "DL" },
];
const PTPClosure: React.FC = () => {
    const [members, setMembers] = useState(initialMembers);
    const [newMemberName, setNewMemberName] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [showModal, setShowModal] = useState<boolean>(false);
    const sigRef = useRef<SignatureCanvas>(null);
    const modelsigRef = useRef<SignatureCanvas>(null);
    const [comments, setComments] = useState("");

    const membersPerPage = 5;

    const indexOfLastMember = currentPage * membersPerPage;
    const indexOfFirstMember = indexOfLastMember - membersPerPage;
    const currentMembers = members.slice(indexOfFirstMember, indexOfLastMember);
    const totalPages = Math.ceil(members.length / membersPerPage);

    const handleAddMember = () => {
        if (!newMemberName.trim()) return;
        const newId = members.length + 1;
        const newMember = {
            id: newId,
            name: newMemberName,
            username: `@${newMemberName}`,
            initials: newMemberName
                .split(" ")
                .map((n) => n[0])
                .join("")
                .toUpperCase(),
        };
        setMembers([...members, newMember]);
        setNewMemberName("");
    };

    const handleDeleteMember = (id: number) => {
        setMembers(members.filter((m) => m.id !== id));
        if ((currentPage - 1) * membersPerPage >= members.length - 1) {
            setCurrentPage(currentPage - 1);
        }
    };
    const clearSignature = () => {
        modelsigRef.current?.clear();
    };
    const formClearSignature = () => {
        sigRef.current?.clear();
    };

    return (
        <>
            <Card className="shadow-sm crew-card">
                <Card.Body>
                    {/* Header */}
                    <Row className="align-items-center justify-content-between mb-3">
                        <Col>
                            <h6 className="mb-1 fw-semibold">PTP Review</h6>
                            <div className="text-muted small">
                                Date <span className="ms-2">12/08/2025</span>
                            </div>
                        </Col>
                    </Row>

                    {/* Table */}
                    <div className="table-wrapper">
                        <Table responsive className="align-middle crew-table">
                            <thead>
                                <tr>
                                    <th>No.</th>
                                    <th>Member Names</th>
                                    <th>Sign in<br />Comments & Time</th>
                                    <th>Sign off<br />Comments & Time</th>
                                    {/* <th>Action</th> */}
                                </tr>
                            </thead>
                            <tbody>
                                {currentMembers.map((m, index) => (
                                    <tr key={m.id}>
                                        <td>{indexOfFirstMember + index + 1}</td>
                                        <td>
                                            <div className="d-flex align-items-center gap-2">
                                                <div className="avatar">
                                                    {m.image ? (
                                                        <img src="https://i.pravatar.cc/40" alt="avatar" />
                                                    ) : (
                                                        <span>{m.initials}</span>
                                                    )}
                                                </div>
                                                <div>
                                                    <div className="fw-medium">{m.name}</div>
                                                    <div className="text-muted small">{m.username}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="work-text">
                                                <div className="work-title">Started my work</div>
                                                <div className="work-time">01/10/2025 09:12 AM</div>
                                            </div>
                                        </td>

                                        <td className="signin-text" onClick={() => { setShowModal(!showModal) }} ><span className="signCss"><img src={sign} alt="Sign in" width={20} height={20} /> <span >Sign Off</span></span></td>

                                        {/* <td>
                                            <Trash
                                                className="text-danger cursor-pointer"
                                                onClick={() => handleDeleteMember(m.id)}
                                            />
                                        </td> */}
                                    </tr>
                                ))}


                            </tbody>
                        </Table>
                    </div>

                    {/* Numbered Pagination */}
                    <div className="d-flex justify-content-end gap-2 mt-3">
                        <Button
                            size="sm"
                            className="pagination-btn"
                            disabled={currentPage === 1}
                            onClick={() => setCurrentPage(currentPage - 1)}
                        >
                            &lt;
                        </Button>

                        {[...Array(totalPages)].map((_, i) => (
                            <Button
                                key={i}
                                size="sm"
                                className={`pagination-btn ${currentPage === i + 1 ? "active-page" : ""}`}
                                onClick={() => setCurrentPage(i + 1)}
                            >
                                {i + 1}
                            </Button>
                        ))}

                        <Button
                            size="sm"
                            className="pagination-btn"
                            disabled={currentPage === totalPages}
                            onClick={() => setCurrentPage(currentPage + 1)}
                        >
                            &gt;
                        </Button>
                    </div>


                    {/* SIGNATURE CARD */}
                    <div className="mt-3">
                        <Card className="signature-card">
                            <Card.Header className="headerCard">
                                <h6 className="mb-0 fw-semibold">Sign in Legend</h6>
                            </Card.Header>

                            <Card.Body>
                                <Row className="mt-3">
                                    {/* LEFT : QUESTIONS */}
                                    <Col md={7}>
                                        <div className="incident-checklist">
                                            {[
                                                "Are all of tools/equipment used, debris, trash, etc. cleaned up and stored properly?",
                                                "Have all permits been closed or called off as required?",
                                                "Did any incidents, injuries, property damage, or near misses occur?",
                                                "Was the incident reported?"
                                            ].map((text, idx) => (
                                                <Form.Check
                                                    key={idx}
                                                    type="checkbox"
                                                    label={text}
                                                    className="mb-3 small-checkbox"
                                                />
                                            ))}
                                        </div>
                                    </Col>

                                    {/* RIGHT : DESCRIPTION */}
                                    <Col md={5}>
                                        <Form.Control
                                            as="textarea"
                                            rows={6}
                                            placeholder="Provide description of the incident here..."
                                            className="incident-textarea"
                                        />
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </div>


                    <div className="mt-2">
                        <Card>
                            <Card.Header className="headerCard">
                                <h6 className="mb-0 fw-semibold">Sign in Legend</h6>
                            </Card.Header>
                            <Card.Body>
                                <Row>
                                    <Col md={7} className="border-end">
                                        <div className="signature-box">
                                            <span className="signature-placeholder">Sign here..</span>

                                            <SignatureCanvas
                                                ref={sigRef}
                                                penColor="#000"
                                                canvasProps={{
                                                    className: "signature-canvas"
                                                }}
                                            />
                                            <button
                                                type="button"
                                                className="signature-clear-btn"
                                                onClick={formClearSignature}
                                            >
                                                <ArrowClockwise size={18} />
                                            </button>
                                        </div>
                                    </Col>

                                    <Col md={5} className="">
                                        <div className="signature-details">
                                            <div className="label">Company Name</div>
                                            <div className="value">Partners Excavating</div>

                                            <Row className="mt-3">
                                                <Col>
                                                    <div className="label">Name</div>
                                                    <div className="value">Nick Fries</div>
                                                </Col>
                                                <Col>
                                                    <div className="label">Date</div>
                                                    <div className="value">12/11/2025</div>
                                                </Col>
                                            </Row>
                                        </div>
                                    </Col>
                                </Row>

                            </Card.Body>
                        </Card>
                    </div>
                </Card.Body>
            </Card>
            <CommonModal
                show={showModal}
                title="Sign In"
                onClose={() => setShowModal(false)}
                onPrimary={() => {
                    console.log("Proceed");
                }}
                primaryText="Sign In"
                showSecondaryButton={true}
                secondaryButtonClass="btn btn-outline-secondary"
                primaryButtonClass="btn btn-success buttonColorSuccess"
            >
                {/* ================= COMMENTS ================= */}
                <div className="mb-3">
                    <label className="form-label fw-medium">Enter Comments</label>
                    <textarea
                        className="form-control comment-textarea"
                        placeholder="Enter your comments here.."
                        maxLength={1000}
                        value={comments}
                        onChange={(e) => setComments(e.target.value)}
                    />
                    <div className="text-end small text-muted">
                        {comments.length}/1000
                    </div>
                </div>

                {/* ================= SIGNATURE ================= */}
                <label className="form-label fw-medium">Signature</label>

                <Row className="align-items-stretch">
                    {/* SIGN PAD */}
                    <Col md={7} className="border-end">
                        <div className="signature-box">
                            <SignatureCanvas
                                ref={modelsigRef}
                                penColor="#000"
                                canvasProps={{ className: "signature-canvas" }}
                            />

                            <button
                                type="button"
                                className="signature-clear-btn"
                                onClick={clearSignature}
                            >
                                <ArrowClockwise size={18} />
                            </button>

                            <div className="signature-line" />
                        </div>
                    </Col>

                    {/* DETAILS */}
                    <Col md={5} className="ps-4">
                        <div className="signature-details">
                            <div className="label">Company Name</div>
                            <div className="value">Partners Excavating</div>

                            <Row className="mt-3">
                                <Col>
                                    <div className="label">Name</div>
                                    <div className="value">Jane Cooper</div>
                                </Col>
                                <Col>
                                    <div className="label">Date</div>
                                    <div className="value">12/11/2025</div>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </CommonModal>

        </>
    );
};

export default PTPClosure;
