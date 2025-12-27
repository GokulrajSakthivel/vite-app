import { Form } from "react-bootstrap";
import { X } from "react-bootstrap-icons";

interface Props {
  label: string;
  onRemove: () => void;
}

export const CheckboxRemove: React.FC<Props> = ({ label, onRemove }) => {
  return (
    <div className="d-flex align-items-center justify-content-between checkbox-row">
      <Form.Check type="checkbox" label={label} className="small-checkbox"disabled />
      {/* <X className="remove-icon" onClick={onRemove} /> */}
    </div>
  );
};
