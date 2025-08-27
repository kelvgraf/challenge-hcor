import { NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";

export async function GET() {
  const pacientes = [
    {
      nome: "William Rodrigues da Silva",
      ultimoAtendimento: "2298383",
      prontuario: "2023132234",
      dataNascimento: "1990-05-30",
      idade: 32,
      ultimaVisitaHcor: "2025-08-20",
      id: uuidv4(),
      cpf: "02128155045",
      receitas: [
        { pdf: "/pdfs/receitas/Receita_medica.pdf", id: uuidv4() },
        { pdf: "/pdfs/receitas/Receita_medica.pdf", id: uuidv4() },
      ],
      atestadosMedicos: [
        { pdf: "/pdfs/atestados/Atestado_medico.pdf", id: uuidv4() },
      ],
    },
    {
      nome: "Maria Fernanda Oliveira",
      ultimoAtendimento: "2298384",
      prontuario: "2023132235",
      dataNascimento: "1985-11-12",
      idade: 39,
      ultimaVisitaHcor: "2025-07-10",
      id: uuidv4(),
      cpf: "96574326001",
      receitas: [
        { pdf: "/pdfs/receitas/Receita_medica.pdf", id: uuidv4 },
        { pdf: "/pdfs/receitas/Receita_medica.pdf", id: uuidv4 },
      ],
      atestadosMedicos: [],
    },
    {
      nome: "Carlos Henrique Souza",
      ultimoAtendimento: "2298385",
      prontuario: "2023132236",
      dataNascimento: "1995-02-18",
      idade: 30,
      ultimaVisitaHcor: "2025-06-01",
      id: uuidv4(),
      cpf: "02268858014",
      receitas: [],
      atestadosMedicos: [
        { pdf: "/pdfs/atestados/Atestado_medico.pdf", id: uuidv4() },
      ],
    },
  ];
  return NextResponse.json(pacientes);
}
