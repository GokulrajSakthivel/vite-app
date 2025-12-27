import React, { useState } from "react";
import { Row, Col, Card, Form } from "react-bootstrap";
import { CheckboxRemove } from "./CheckboxWithRemove";
import CommonModal from "../../assets/utilits/CommonModal";

import cap from "../../assets/icon/Cap.png";
import rc from "../../assets/icon/rc.png";
import rppe from "../../assets/icon/rppe.png";
import edit from "../../assets/icon/edit.png";

/* ================= TYPES ================= */

interface SectionItem {
  label: string;
  isPresent?: boolean;
}

interface SubSection {
  title: string;
  items: SectionItem[];
}

interface Section {
  id: string;
  title: string;
  icon: string;
  columns?: number;
  items?: SectionItem[];
  subSections?: SubSection[];
  editingSubSection?: string;
}

/* ================= COMPONENT ================= */

const RequirementCreation: React.FC = () => {
  const [sections, setSections] = useState<Section[]>([
    {
      id: "permits",
      title: "Critical Activity Permits",
      icon: cap,
      columns: 3,
      items: [
        { label: "Confined Space", isPresent: true },
        { label: "Hot Work", isPresent: true },
        { label: 'Ground Disturbance (over 12")', isPresent: true },
        { label: "Pressure Testing", isPresent: true },
        { label: "Guard Rail Removal", isPresent: true },
        { label: "Excavation", isPresent: true },
        { label: "Energy Isolation/LOTO", isPresent: true },
        { label: "Traffic", isPresent: true },
      ],
    },
    {
      id: "checklists",
      title: "Required Checklists",
      icon: rc,
      columns: 3,
      items: [
        { label: "Backfill Checklist", isPresent: true },
        { label: "Demo Checklist", isPresent: true },
        { label: "Exploratory Zone Checklist", isPresent: true },
        { label: "Utility Installation Checklist", isPresent: true },
        { label: "Cranes Checklist", isPresent: true },
        { label: "Hydro Checklist", isPresent: true },
        { label: "Pressure Testing Checklist", isPresent: true },
        { label: "Excavation Zone Checklist", isPresent: true },
      ],
    },
    {
      id: "ppe",
      title: "Required PPE",
      icon: rppe,
      subSections: [
        {
          title: "Head Protection",
          items: [
            { label: "Hard Hat", isPresent: true },
            { label: "Ear Plugs / Muffs", isPresent: true },
          ],
        },
        {
          title: "Eye Protection",
          items: [
            { label: "Safety Glasses", isPresent: true },
            { label: "Face Shield", isPresent: true },
            { label: "Chemical Goggles", isPresent: true },
          ],
        },
        {
          title: "Hand Protection",
          items: [
            { label: "Cut Resistant Gloves", isPresent: true },
            { label: "Welder Gloves", isPresent: true },
            { label: "Nitrile Gloves", isPresent: true },
          ],
        },
      ],
    },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [editedSection, setEditedSection] = useState<Section | null>(null);

  /* ================= OPEN MODAL ================= */
  const openEditModal = (section: Section, subSectionTitle?: string) => {
    // 🔒 Block Required PPE header editing
    if (section.id === "ppe" && !subSectionTitle) return;

    const clone = JSON.parse(JSON.stringify(section));
    if (subSectionTitle) {
      clone.editingSubSection = subSectionTitle;
    }
    setEditedSection(clone);
    setShowModal(true);
  };

  /* ================= TOGGLE CHECKBOX ================= */
  const toggleItem = (index: number, subTitle?: string) => {
    if (!editedSection) return;

    if (editedSection.items && !subTitle) {
      const updatedItems = editedSection.items.map((item, i) =>
        i === index ? { ...item, isPresent: !item.isPresent } : item
      );
      setEditedSection({ ...editedSection, items: updatedItems });
    }

    if (editedSection.subSections && subTitle) {
      const updatedSubs = editedSection.subSections.map(sub =>
        sub.title === subTitle
          ? {
              ...sub,
              items: sub.items.map((item, i) =>
                i === index ? { ...item, isPresent: !item.isPresent } : item
              ),
            }
          : sub
      );
      setEditedSection({ ...editedSection, subSections: updatedSubs });
    }
  };

  /* ================= SUBMIT ================= */
  const handleSubmit = () => {
    if (!editedSection) return;

    setSections(prev =>
      prev.map(sec =>
        sec.id === editedSection.id
          ? { ...editedSection, editingSubSection: undefined }
          : sec
      )
    );
    setShowModal(false);
  };

  /* ================= RENDER ================= */
  return (
    <>
      <Card className="shadow-sm bg-light">
        <Card.Body>
          {sections.map(section => {
            const hasItems =
              section.items?.some(i => i.isPresent) ||
              section.subSections?.some(s => s.items.some(i => i.isPresent));

            if (!hasItems) return null;

            return (
              <Card key={section.id} className="mb-3">
                <Card.Body>
                  {/* HEADER */}
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center">
                      <img src={section.icon} alt="" className="me-2" width={23}
                        height={26} />
                      <h6 className="titleCardTextBold mt-1">{section.title}</h6>
                    </div>

                 
                    {section.id !== "ppe" && (
                      <img
                        src={edit}
                        width={20}
                        height={20}
                        style={{ cursor: "pointer" }}
                        onClick={() => openEditModal(section)}
                      />
                    )}
                  </div>

                  <hr />

                  {/* NORMAL ITEMS */}
                  {section.items && (
                    <Row>
                      {section.items
                        .filter(i => i.isPresent)
                        .map(item => (
                          <Col md={section.columns || 3} sm={6} key={item.label}>
                            <CheckboxRemove label={item.label} onRemove={() => {}} />
                          </Col>
                        ))}
                    </Row>
                  )}

                  {/* PPE SUB-SECTIONS */}
                  {section.subSections?.map(sub =>
                    sub.items.some(i => i.isPresent) ? (
                      <div key={sub.title}>
                        <div className="d-flex align-items-center justify-content-between ppe-header">
                          <span>{sub.title}</span>
                          <img
                            src={edit}
                            width={20}
                            height={20}
                            style={{ cursor: "pointer" }}
                            onClick={() => openEditModal(section, sub.title)}
                          />
                        </div>

                        <Row className="mb-3">
                          {sub.items
                            .filter(i => i.isPresent)
                            .map(item => (
                              <Col md={3} key={item.label}>
                                <CheckboxRemove label={item.label} onRemove={() => {}} />
                              </Col>
                            ))}
                        </Row>
                      </div>
                    ) : null
                  )}
                </Card.Body>
              </Card>
            );
          })}
        </Card.Body>
      </Card>

      {/* ================= MODAL ================= */}
      <CommonModal
        show={showModal}
        title="Edit Requirements"
        onClose={() => setShowModal(false)}
        onPrimary={handleSubmit}
        primaryText="Submit"
        showSecondaryButton={false}
        size="sm"
      >
        <Card>
          <Card.Header>{editedSection?.title}</Card.Header>
          <Card.Body>
            {!editedSection?.editingSubSection &&
              editedSection?.items?.map((item, idx) => (
                <Form.Check
                  key={idx}
                  type="checkbox"
                  label={item.label}
                  checked={!!item.isPresent}
                  onChange={() => toggleItem(idx)}
                  className="mb-2 small-checkbox"
                />
              ))}

            {editedSection?.subSections?.map(sub => {
              if (
                editedSection.editingSubSection &&
                sub.title !== editedSection.editingSubSection
              )
                return null;

              return (
                <div key={sub.title} className="mt-3">
                  <strong>{sub.title}</strong>
                  {sub.items.map((item, idx) => (
                    <Form.Check
                      key={idx}
                      type="checkbox"
                      label={item.label}
                      checked={!!item.isPresent}
                      onChange={() => toggleItem(idx, sub.title)}
                      className="mb-2 small-checkbox"
                    />
                  ))}
                </div>
              );
            })}
          </Card.Body>
        </Card>
      </CommonModal>
    </>
  );
};

export default RequirementCreation;
