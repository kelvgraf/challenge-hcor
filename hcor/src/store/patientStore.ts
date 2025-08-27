import { create } from "zustand";

interface Patient {
  id: number;
  name: string;
  cpf: string;
}

interface PatientState {
  patients: Patient[];
  selectedPatient: Patient | null;
  listPdfs: string[];
  setPatients: (patients: Patient[]) => void;
  setSelectedPatient: (patient: Patient | null) => void;
  setListPdfs: (pdfs: string[]) => void;
}

export const usePatientStore = create<PatientState>((set) => ({
  patients: [],
  selectedPatient: null,
  listPdfs: [],
  setPatients: (patients) => set({ patients }),
  setSelectedPatient: (patient) => set({ selectedPatient: patient }),
  setListPdfs: (pdfs) => set({ listPdfs: pdfs }),
}));
