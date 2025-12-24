import { Stepper } from "react-form-stepper";
import { Container } from "react-bootstrap";
import "../../styles/stepper.css"
import { useState } from "react";
import Task from "./Task";
import CreateTemplate from "./CreateTemplate";
import { useTaskStore } from "./store/useTaskStore";
import HarzardCore from "./HarzardCore";
import EmergencyContect from "./EmergencyContect";
import CrewSignin from "./CrewSignin";
import PTPReview from "./PTPReview";
import PtpDayClosure from "./PTPClosure";
import PTPClosure from "./PTPClosure";
const TempleteCreateComponentMain: React.FC = () => {
    const tasks = useTaskStore((state) => state.tasks);
    const [StepperActive, setStepperActive] = useState(2);
    const steps = [
        { label: "Tasks" },
        { label: "Hazards & Controls" },
        { label: "Requirements" },
        { label: "Emergency Contacts" },
        { label: "Crew Sign In" },
        { label: "PTP Review" },
        { label: "PTP Day Closure" },

    ];
    console.log(tasks);
    return (<>
        <div>
            <Container fluid className="pt-3 pb-5">
                <h5 className="fw-bold mb-3">Create Templete</h5>
                <div className="step completed-step">
                    <Stepper
                        steps={steps}
                        activeStep={StepperActive}
                        connectorStateColors
                        styleConfig={{
                            size: 26,
                            circleFontSize: 12,
                            labelFontSize: "13px",
                            fontWeight: "500",
                            activeBgColor: "#ffffff",
                            completedBgColor: "#2ecc71",
                            inactiveBgColor: "#e9edff",
                            activeTextColor: "#ff6a00",
                            completedTextColor: "#ffffff",
                            inactiveTextColor: "#a9aec0",
                            borderRadius: "50%",
                        }}
                        connectorStyleConfig={{
                            size: 2,
                            completedColor: "#2ecc71",
                            activeColor: "#ff6a00",
                            disabledColor: "#dfe3f0",
                            style: "solid",
                        }}
                    />

                </div>
                {StepperActive == 0 ? <Task /> : null}
                {StepperActive == 1 ? <HarzardCore /> : null}
                {StepperActive == 2 ? <CreateTemplate /> : null}
                {StepperActive == 3 ? <EmergencyContect /> : null}
                {StepperActive == 4 ? <CrewSignin /> : null}
                {StepperActive == 5 ? <PTPReview /> : null}
                {StepperActive == 6 ? <PTPClosure /> : null}



                <div
                    className="d-flex justify-content-between align-items-center mt-4 pt-3"
                    style={{ borderTop: "1px solid #4768a9ff" }}
                >
                    {StepperActive !== 0 ? <><button
                        className="btn btn-outline-dark d-flex align-items-center gap-2 px-3"
                        onClick={() =>
                            setStepperActive((prev) => Math.max(prev - 1, 0))
                        }
                        disabled={StepperActive === 0}
                    >
                        ← Prev
                    </button></> : <><div
                        className="d-flex align-items-center gap-2 px-3"></div></>}
                    <button
                        className="btn btn-dark d-flex align-items-center gap-2 px-4"
                        onClick={() =>
                            setStepperActive((prev) =>
                                Math.min(prev + 1, steps.length - 1)
                            )
                        }
                        disabled={StepperActive === steps.length - 1}
                    >
                        Next →
                    </button>
                </div>
            </Container>
        </div>
    </>);
}
export default TempleteCreateComponentMain;