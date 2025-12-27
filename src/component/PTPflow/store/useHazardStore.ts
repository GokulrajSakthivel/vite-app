import { create } from "zustand";

export interface Hazard {
  id: number;
  title: string;
  controls: string[];
  selectedControls: string[];
  hasClearance?: boolean;
  clearance?: string;
}

interface HazardState {
  hazards: Hazard[];
  addHazard: (hazard: Hazard) => void;
  deleteHazard: (id: number) => void;
  toggleControl: (hazardId: number, control: string) => void;
  setClearance: (hazardId: number, value: string) => void;
}

export const useHazardStore = create<HazardState>((set) => ({
  hazards: [],

  addHazard: (hazard) =>
    set((state) => ({ hazards: [...state.hazards, hazard] })),

  deleteHazard: (id) =>
    set((state) => ({
      hazards: state.hazards.filter((h) => h.id !== id),
    })),

  toggleControl: (hazardId, control) =>
    set((state) => ({
      hazards: state.hazards.map((hazard) =>
        hazard.id === hazardId
          ? {
              ...hazard,
              selectedControls: hazard.selectedControls.includes(control)
                ? hazard.selectedControls.filter((c) => c !== control)
                : [...hazard.selectedControls, control],
            }
          : hazard
      ),
    })),

  setClearance: (hazardId, value) =>
    set((state) => ({
      hazards: state.hazards.map((hazard) =>
        hazard.id === hazardId
          ? { ...hazard, clearance: value }
          : hazard
      ),
    })),
}));
