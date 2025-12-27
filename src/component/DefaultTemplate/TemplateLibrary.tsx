import { Card, Col, Row } from "react-bootstrap";


const TemplateLibrary: React.FC = () => {
    return (<>

        <Card className="shadow-sm bg-light">
            <Card.Body>
                <Row className="align-items-center mb-3">
                    <Col>
                        <h6 className="fw-semibold mb-0">
                            Hazards & Control Measures
                        </h6>
                    </Col>
                </Row>

            </Card.Body>
        </Card>

    </>)


}

export default TemplateLibrary;



