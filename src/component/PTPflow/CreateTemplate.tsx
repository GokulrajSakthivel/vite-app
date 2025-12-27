import React, { useState } from "react";
import { Row, Col, Card } from "react-bootstrap";
import { CheckboxRemove } from "./CheckboxWithRemove";
import "./CreateTemplate.css";

import cap from "../../assets/icon/Cap.png";
import rc from "../../assets/icon/rc.png";
import rppe from "../../assets/icon/rppe.png";

interface SectionItem {
  label: string;
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
}

const CreateTemplate: React.FC = () => {
  const [sections, setSections] = useState<Section[]>([
    {
      id: "permits",
      title: "Critical Activity Permits",
      icon: cap,
      columns: 3,
      items: [
        { label: "Confined Space" },
        { label: "Hot Work" },
        { label: 'Ground Disturbance (over 12")' },
        { label: "Pressure Testing" },
        { label: "Guard Rail Removal" },
        { label: "Excavation" },
        { label: "Energy Isolation/LOTO" },
        { label: "Traffic" },
      ],
    },
    {
      id: "checklists",
      title: "Required Checklists",
      icon: rc,
      columns: 3,
      items: [
        { label: "Backfill Checklist" },
        { label: "Demo Checklist" },
        { label: "Exploratory Zone Checklist" },
        { label: "Utility Installation Checklist" },
        { label: "Cranes Checklist" },
        { label: "Hydro Checklist" },
        { label: "Pressure Testing Checklist" },
        { label: "Excavation Zone Checklist" },
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
            { label: "Hard Hat" },
            { label: "Ear Plugs / Muffs" },
          ],
        },
        {
          title: "Eye Protection",
          items: [
            { label: "Safety Glasses" },
            { label: "Face Shield" },
            { label: "Chemical Goggles" },
          ],
        },
      ],
    },
  ]);

  const removeItem = (
    sectionId: string,
    label: string,
    subSectionTitle?: string
  ) => {
    setSections(prev =>
      prev.map(section => {
        if (section.id !== sectionId) return section;

        // Normal section
        if (section.items) {
          return {
            ...section,
            items: section.items.filter(item => item.label !== label),
          };
        }

        // Sub-section (PPE)
        if (section.subSections) {
          return {
            ...section,
            subSections: section.subSections.map(sub =>
              sub.title === subSectionTitle
                ? {
                    ...sub,
                    items: sub.items.filter(item => item.label !== label),
                  }
                : sub
            ),
          };
        }

        return section;
      })
    );
  };

  return (
    <Card className="shadow-sm bg-light">
      <Card.Body>
        {sections.map(section => {
          const hasItems =
            section.items?.length ||
            section.subSections?.some(s => s.items.length);

          if (!hasItems) return null;

          return (
            <Card key={section.id} className="mb-3">
              <Card.Body>
                {/* Header */}
                <div className="d-flex align-items-center">
                  <img
                    src={section.icon}
                    alt={section.title}
                    className="icon-img me-2"
                  />
                  <h6 className="titleCardTextBold">{section.title}</h6>
                </div>

                <hr />

                {/* Normal items */}
                {section.items && (
                  <Row>
                    {section.items.map(item => (
                      <Col
                        md={section.columns || 3}
                        sm={6}
                        key={item.label}
                        className="mb-2"
                      >
                        <CheckboxRemove
                          label={item.label}
                          onRemove={() =>
                            removeItem(section.id, item.label)
                          }
                        />
                      </Col>
                    ))}
                  </Row>
                )}

                {/* Sub sections (PPE) */}
                {section.subSections?.map(sub => (
                  sub.items.length > 0 && (
                    <div key={sub.title}>
                      <div className="ppe-header">{sub.title}</div>
                      <Row className="mb-3">
                        {sub.items.map(item => (
                          <Col md={3} key={item.label}>
                            <CheckboxRemove
                              label={item.label}
                              onRemove={() =>
                                removeItem(
                                  section.id,
                                  item.label,
                                  sub.title
                                )
                              }
                            />
                          </Col>
                        ))}
                      </Row>
                    </div>
                  )
                ))}
              </Card.Body>
            </Card>
          );
        })}
      </Card.Body>
    </Card>
  );
};

export default CreateTemplate;
