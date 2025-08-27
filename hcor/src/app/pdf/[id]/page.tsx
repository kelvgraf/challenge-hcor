"use client";

import { usePatientStore } from "@/store/patientStore";

interface PdfViewerProps {
  pdfUrl: string;
  onClose: () => void;
}

export function PdfViewer({ pdfUrl, onClose }: PdfViewerProps) {
  const { setListPdfs } = usePatientStore();

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-[90%] h-[90%] relative">
        <button
          onClick={() => {
            setListPdfs((prev: any) => [...prev, pdfUrl]);
            onClose();
          }}
          className="absolute top-2 right-36 bg-[var(--primary-blue-1)] pointer text-white px-3 py-1 rounded"
        >
          Continuar
        </button>
        <button
          onClick={onClose}
          className="absolute top-2 right-60 bg-[var(--primary-blue-1)] pointer text-white px-3 py-1 rounded"
        >
          Fechar
        </button>

        <iframe
          src={pdfUrl}
          className="w-full h-full rounded-lg"
          title="PDF Viewer"
        />
      </div>
    </div>
  );
}
