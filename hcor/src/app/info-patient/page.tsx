"use client";
import { useEffect, useState } from "react";
import { request } from "@/services/api";
import Image from "next/image";

import { usePatientStore } from "@/store/patientStore";
import { formatDateToBR } from "@/utils/utils";

import { Typography } from "@/components/typography";

import ReceitaMedica from "@/../public/Receita -medica.jpg";
import { PdfViewer } from "../pdf/[id]/page";

export default function InfoPatientPage() {
  const [selectedPdf, setSelectedPdf] = useState<string | null>(null);
  const { selectedPatient, listPdfs } = usePatientStore();

  async function getPatient() {
    const response = await request({
      url: `/patient`,
      method: "get",
      params: {
        language: "pt-BR",
      },
    });

    if (response.success) {
      console.log(response.success);
    }
  }

  useEffect(() => {
    getPatient();
  });
  console.log("listPdfs", listPdfs);
  return (
    <main className="w-full h-screen flex justify-center bg-[var(--primary-light-1)]">
      <div className="w-full max-w-[1920px] mx-auto pt-20 px-8 sm:px-20">
        <div>
          <Typography
            text={"Suas Informações"}
            variant="h2"
            className="font-semibold text-2xl  text-[var(--primary-blue-1)] mb-6"
          />
          <div className="flex justify-center items-center gap-8 mb-12">
            <span>
              <Typography
                text={selectedPatient?.nome}
                variant="p"
                className="text-[var(--primary-blue-1)] text-[20px] font-semibold"
              />
              <Typography
                text={"Name"}
                variant="p"
                className="text-center text-[var(--primary-blue-1)]"
              />
            </span>
            <span>
              <Typography
                text={selectedPatient?.ultimoAtendimento}
                variant="p"
                className="text-[var(--primary-blue-1)] text-[20px] font-semibold"
              />
              <Typography
                text={"Ult. Atendimento"}
                variant="p"
                className="text-center text-[var(--primary-blue-1)]"
              />
            </span>
            <span>
              <Typography
                text={selectedPatient?.prontuario}
                variant="p"
                className="text-[var(--primary-blue-1)] text-[20px] font-semibold"
              />
              <Typography
                text={"Prontuário"}
                variant="p"
                className="text-center text-[var(--primary-blue-1)]"
              />
            </span>
            <span>
              <Typography
                text={formatDateToBR(selectedPatient?.dataNascimento)}
                variant="p"
                className="text-[var(--primary-blue-1)] text-[20px] font-semibold"
              />
              <Typography
                text={"Data de nascimento"}
                variant="p"
                className="text-center text-[var(--primary-blue-1)]"
              />
            </span>
            <span>
              <Typography
                text={selectedPatient?.idade}
                variant="p"
                className="text-[var(--primary-blue-1)] text-[20px] font-semibold"
              />
              <Typography
                text={"Idade"}
                variant="p"
                className="text-center text-[var(--primary-blue-1)]"
              />
            </span>
            <span>
              <Typography
                text={formatDateToBR(selectedPatient?.ultimaVisitaHcor)}
                variant="p"
                className="text-[var(--primary-blue-1)] text-[20px] font-semibold"
              />
              <Typography
                text={"Ultima visita ao hcor"}
                variant="p"
                className="text-center text-[var(--primary-blue-1)]"
              />
            </span>
          </div>
        </div>
        <div>
          <Typography
            text={"Últimos vistos"}
            variant="h2"
            className="font-semibold text-2xl  text-[var(--primary-blue-1)] mb-6"
          />

          <span>
            {selectedPatient?.atestadosMedicos.length === 0 && (
              <Typography
                text={"Você ainda não visualizou documentos"}
                variant="p"
                className=" text-[var(--primary-blue-1)]"
              />
            )}
            {selectedPatient?.atestadosMedicos.map((item, index) => (
              <div key={index} className="items-center cursor-pointer">
                <Image
                  src={ReceitaMedica}
                  alt={`PDF ${item.id}`}
                  className="w-32 h-40 cursor-pointer border rounded"
                  onClick={() => setSelectedPdf(item.pdf)}
                />
              </div>
            ))}
          </span>
        </div>
        <div>
          <Typography
            text={"Receitas"}
            variant="p"
            className="font-semibold text-2xl  text-[var(--primary-blue-1)] mb-6"
          />

          <span>
            {selectedPatient?.atestadosMedicos.length === 0 && (
              <Typography
                text={"Você não possui atestados médicos"}
                variant="p"
                className=" text-[var(--primary-blue-1)]"
              />
            )}

            {selectedPatient?.atestadosMedicos.map((item, index) => (
              <div key={index} className="items-center cursor-pointer">
                <Image
                  src={ReceitaMedica}
                  alt={`PDF ${item.id}`}
                  className="w-32 h-40 cursor-pointer border rounded"
                  onClick={() => setSelectedPdf(item.pdf)}
                />
              </div>
            ))}
          </span>
        </div>
        <div>
          <Typography
            text={"Atestados médicos"}
            variant="p"
            className="font-semibold text-2xl  text-[var(--primary-blue-1)] mb-6"
          />

          <span className="flex gap-4">
            {selectedPatient?.receitas.length === 0 && (
              <Typography
                text={"Você não possui receitas médicas"}
                variant="p"
                className=" text-[var(--primary-blue-1)]"
              />
            )}

            {selectedPatient?.receitas.map((item, index) => (
              <div key={index} className="items-center cursor-pointer">
                <Image
                  src={ReceitaMedica}
                  alt={`PDF ${item.id}`}
                  className="w-32 h-40 cursor-pointer border rounded"
                  onClick={() => setSelectedPdf(item.pdf)}
                />
              </div>
            ))}
          </span>
        </div>
        {selectedPdf && (
          <PdfViewer
            pdfUrl={selectedPdf}
            onClose={() => setSelectedPdf(null)}
          />
        )}
      </div>
    </main>
  );
}
