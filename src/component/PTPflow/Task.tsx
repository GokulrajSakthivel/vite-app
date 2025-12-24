

// import { Card } from "react-bootstrap";
import { useState } from "react";
import { Row, Col, Button, Card, Form } from "react-bootstrap";
import { Plus, Trash } from "react-bootstrap-icons";
import CommonModal from "../../assets/utilits/CommonModal";
import "../../component/PTPflow/CreateTemplate.css";
import bin from "../../assets/icon/bin.png";
import edit from "../../assets/icon/edit.png";
import HazardChip from "./HazardChip";
interface TaskFormData {
    task: string;
    tools: string;
    hazards: string;
    controls: string;
    initials: string;
}
interface TaskItem {
    id: number;
    task: string;
    tools: string;
    hazards: string;
    controls: string;
    initials: string;
}

const Task: React.FC = () => {
    const [showModal, setShowModal] = useState<boolean>(false);
    const [formData, setFormData] = useState<TaskFormData>({
        task: "",
        tools: "",
        hazards: "",
        controls: "",
        initials: "",
    });
    const [errors, setErrors] = useState<Partial<TaskFormData>>({});
    const [tasks, setTasks] = useState<TaskItem[]>([]);
    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
        setErrors((prev) => ({
            ...prev,
            [name]: "",
        }));
    };

    const validate = () => {
        const newErrors: Partial<TaskFormData> = {};
        if (!formData.task) newErrors.task = "Task is required";
        if (!formData.tools) newErrors.tools = "Tools & Equipment is required";
        if (!formData.hazards) newErrors.hazards = "Hazards are required";
        if (!formData.controls) newErrors.controls = "Control measures are required";
        if (!formData.initials) newErrors.initials = "Initials are required";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = () => {
        if (!validate()) return;


        const newTask: TaskItem = {
            id: Date.now(),
            ...formData,
        };

        setTasks((prev) => [...prev, newTask]); 
        resetForm();
        setShowModal(false);
        setFormData({
            task: "",
            tools: "",
            hazards: "",
            controls: "",
            initials: "",
        });
    };
    const handleAddTask = () => {
        setShowModal(!showModal);
    }
    const resetForm = () => {
        setFormData({
            task: "",
            tools: "",
            hazards: "",
            controls: "",
            initials: "",
        });
        setErrors({});
    };
    return (
        <>
            <Card className="shadow-sm bg-light">
                <Card.Body>
                    <Row className="align-items-center">
                        <Col>
                            <h6 className="mb-0 fw-semibold text-dark">
                                Tasks, Hazards, Controls & Assignments
                            </h6>
                        </Col>
                        <Col xs="auto">
                            <Button
                                variant="outline-dark"
                                className="d-flex align-items-center gap-2 px-3"
                                onClick={handleAddTask}
                            >
                                <Plus size={16} />
                                Add Task
                            </Button>
                        </Col>
                    </Row>
                    <Row className="mt-4">
                        <Col className="">
                            {tasks.map((item, index) => (
                                <Card key={item.id} className="mb-3 shadow-sm border-0 task-card">
                                    <div className="left-bar previous" />
                                    <Card.Body className="position-relative">

                                        {/* Left orange bar */}
                                        <div className="task-left-bar" />

                                        {/* Edit / Delete */}
                                        <div className="position-absolute top-0 end-0 p-3 d-flex gap-2">
                                            <span className="me-2">
                                                <span className="me-2">
                                                    <img src={edit} alt="Edit" width={20} height={20} />
                                                </span>
                                                <span className="me-2">


                                                    <img src={bin} alt="Delete" width={20} height={20} onClick={() =>
                                                        setTasks((prev) => prev.filter((t) => t.id !== item.id))
                                                    } />
                                                </span>
                                            </span>
                                        </div>
                                        <div className="ps-3">
                                            <small className="text-muted">Task {index + 1}</small>
                                            <h6 className="fw-semibold">{item.task}</h6>

                                            <small className="text-muted">Tools & Equipment</small>
                                            <p className="mb-2">{item.tools}</p>

                                            <small className="text-muted">
                                                Potential Hazards / Exposures & Control Measures
                                            </small>

                                            {/* Hazards chip */}
                                            <div className="d-flex flex-wrap gap-2 my-2">
                                                {item.hazards.split(",").map((hazard, i) => (
                                                    <HazardChip key={i} label={hazard.trim()} onRemove={() => {
                                                        setTasks((prev) => {
                                                            const newTasks = [...prev];
                                                            newTasks[index].hazards = newTasks[index].hazards
                                                                .split(",")
                                                                .filter((_, idx) => idx !== i)
                                                                .join(",");
                                                            return newTasks;
                                                        });
                                                    }} />
                                                ))}
                                            </div>
                                            <p className="mb-2">{item.controls}</p>
                                            <small className="text-muted">Competent Person Initials</small>
                                            <p className="fw-semibold">{item.initials}</p>
                                        </div>
                                    </Card.Body>
                                </Card>
                            ))}

                        </Col>
                    </Row>
                </Card.Body>
            </Card>
            <CommonModal
                show={showModal}
                title="Select Template Type"
                onClose={() => {
                    setShowModal(false);
                    resetForm();
                }}
                onPrimary={() => {
                    console.log("Proceed");
                    handleSubmit();
                }}
                primaryText="Add Task"

                showSecondaryButton={true}
                secondaryButtonClass="btn btn-outline-secondary"
                primaryButtonClass="btn btn-success buttonColorSuccess"
            >
                <Form className="p-3 position-relative">
                    {/* Delete Icon */}
                    <div className="position-absolute top-0 end-0 p-2">
                        <Button variant="outline-danger" size="sm">
                            <Trash />
                        </Button>
                    </div>

                    {/* Task */}
                    <Form.Group className="mb-1">
                        <Form.Label>Task</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={2}
                            name="task"
                            placeholder="Enter task information..."
                            value={formData.task}
                            onChange={handleChange}
                            isInvalid={!!errors.task}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.task}
                        </Form.Control.Feedback>
                    </Form.Group>

                    {/* Tools & Equipment */}
                    <Form.Group className="mb-2">
                        <Form.Label>Tools & Equipment</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={2}
                            name="tools"
                            placeholder="Enter Tools & Equipment information..."
                            value={formData.tools}
                            onChange={handleChange}
                            isInvalid={!!errors.tools}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.tools}
                        </Form.Control.Feedback>
                    </Form.Group>

                    {/* Hazards */}
                    <Form.Group className="mb-2">
                        <Form.Label>Hazards or Exposures</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={2}
                            name="hazards"
                            placeholder="Enter Hazard or Exposures..."
                            value={formData.hazards}
                            onChange={handleChange}
                            isInvalid={!!errors.hazards}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.hazards}
                        </Form.Control.Feedback>
                    </Form.Group>

                    {/* Controls */}
                    <Form.Group className="mb-2">
                        <Form.Label>Hazard Control Measures</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={2}
                            name="controls"
                            placeholder="Enter Hazard Control Measures..."
                            value={formData.controls}
                            onChange={handleChange}
                            isInvalid={!!errors.controls}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.controls}
                        </Form.Control.Feedback>
                    </Form.Group>

                    {/* Initials */}
                    <Form.Group className="mb-2">
                        <Form.Label>Competent Person Initials</Form.Label>
                        <Form.Control
                            type="text"
                            name="initials"
                            value={formData.initials}
                            onChange={handleChange}
                            isInvalid={!!errors.initials}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.initials}
                        </Form.Control.Feedback>
                    </Form.Group>

                </Form>
            </CommonModal>
        </>
    );
};
export default Task;