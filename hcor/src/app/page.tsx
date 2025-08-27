"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Input } from "@/components/input";
import { formataCPF } from "@/utils/utils";
import Link from "next/link";

import request from "@/services/api";
import { usePatientStore } from "@/store/patientStore";

import IconArrowRightLight from "@/../public/seta-pequena-direita.png";

export default function Home() {
  const [searchCpf, setSearchCpf] = useState<string>("");

  const { setSelectedPatient } = usePatientStore();
  async function getPatient(searchCpf: string) {
    const response = await request({
      url: `/patient`,
      method: "get",
      params: {},
    });

    if (response.success) {
      const found = response.success.find(
        (p) => p.cpf === searchCpf.replace(/\D/g, "")
      );

      setSelectedPatient(found);
      return found ?? null;
    }
    return null;
  }

  useEffect(() => {
    getPatient(searchCpf);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchCpf]);

  return (
    <main className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-center min-h-screen p-8 pb-20 gap-16 sm:p-20 bg-[var(--primary-light-1)]">
      <div className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <p className="font-normal text-4xl text-[var(--primary-blue-1)]">
          Recuperador de documentos
        </p>
        <div className="max-w-[854px] w-full h-[77px] flex items-center justify-between border border-bg-primary-light-2 rounded-full bg-[var(--primary-light-2)]">
          <Input
            type="input"
            value={formataCPF(searchCpf)}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setSearchCpf(event.target.value ?? "")
            }
            placeholder={"Digite aqui seu CPF"}
            className={
              "w-[70%] h-full outline-hidden text-2xl pl-6  text-[var(--primary-blue-1)]"
            }
          />
          <Link href={"/info-patient"}>
            <button className="w-[59px] h-[59px] flex items-center justify-center">
              <Image
                src={IconArrowRightLight}
                width={59}
                height={59}
                alt="Picture of the author"
              />
            </button>
          </Link>
        </div>
      </div>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center"></footer>
    </main>
  );
}
