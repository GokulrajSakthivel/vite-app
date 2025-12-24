import { useState } from "react";
import HarzardCreation from "./HarzardCreation";
import RequirementCreation from "./RequirementCreation";

export default function TempleteCreation() {
    const [stage, setStage] = useState<number>(1);

    return (
        <div style={{ padding:0}}>
            <div>
                <h6>
                    Create Trade Specific Custom Template
                </h6>
            </div>
            {stage === 1 && <HarzardCreation />}
            {stage === 2 && <RequirementCreation />}

            <div
                className="d-flex justify-content-between align-items-center mt-4 pt-3"
                style={{ borderTop: "1px solid #e6ebf5" }}
            >
                <button
                    className="btn btn-outline-dark d-flex align-items-center gap-2 px-3"
                    onClick={() => setStage(1)}
                    disabled={stage === 1}
                >
                    ← Prev
                </button>

                {/* Next Button */}
                <button
                    className="btn btn-dark d-flex align-items-center gap-2 px-4"
                    onClick={() => {
                        if (stage === 2) {

                        } else {
                            setStage(2);
                        }
                    }

                    }
                    // disabled={stage === 2}
                >
                    {stage === 2 ? "Submit →" : "Next →"}
                </button>
            </div>
        </div>
    );
}
