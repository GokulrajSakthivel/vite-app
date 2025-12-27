import React from "react";
import type { ReactNode } from "react";
import { Modal, Button } from "react-bootstrap";

export interface CommonModalProps {
  show: boolean;
  title?: string;
  children: ReactNode;

  onClose: () => void;
  onPrimary?: () => void;

  primaryText?: string;
  secondaryText?: string;

  size?: "sm" | "lg" | "xl";
  centered?: boolean;

  showSecondaryButton?: boolean;
  primaryButtonClass?: string; 
  secondaryButtonClass?: string;
}

const CommonModal: React.FC<CommonModalProps> = ({
  show,
  title = "Popup",
  children,

  onClose,
  onPrimary,

  primaryText = "Get Started",
  secondaryText = "Cancel",

  size = "lg",
  centered = true,

  showSecondaryButton = true,
  primaryButtonClass,
  secondaryButtonClass,
  
}) => {
  return (
    <Modal
      show={show}
      onHide={onClose}
      size={size}
      centered={centered}
      backdrop="static"
      className="custom-modal"
    >
      {title && (
        <Modal.Header closeButton className="commonPopmodelHeader">
          <Modal.Title className="headerFontColor">
            {title}
          </Modal.Title>
        </Modal.Header>
      )}

      <Modal.Body>{children}</Modal.Body>

      <Modal.Footer className="d-flex justify-content-end gap-2">
        {showSecondaryButton && (
          <Button className="btn btn-outline-secondary" onClick={onClose} variant="outline-secondary" >
            {secondaryText}
          </Button>
        )}

        {onPrimary && (
          <Button onClick={onPrimary} className={primaryButtonClass || "get-started-btn"}>
            {primaryText} 
          </Button>
        )}
      </Modal.Footer>
    </Modal>
  );
};

export default CommonModal;
