import React from "react";
import"./TaskCss.css";
interface HazardChipProps {
  label: string;
  onRemove?: () => void;
}

const HazardChip: React.FC<HazardChipProps> = ({ label }) => {
  return (
    <span className="hazard-chip">
      <span className="hazard-chip-text">{label}</span>

    </span>
  );
};

export default HazardChip;