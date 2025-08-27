import Image from "next/image";
import Logo from "@/../public/HCor_Logo_Pref_A_Neg_RGB.png";
import IconeSair from "@/../public/saida.png";

function Header() {
  return (
    <header className={"w-full h-24 flex justify-center bg-blue-500"}>
      <div
        className={
          "max-w-[1920px] w-full pl-8 pr-8 flex  justify-between align-center"
        }
      >
        <div className={"w-2/4 flex items-center"}>
          <h1 className="flex items-center">
            <Image src={Logo} width={121} alt="Picture of the author" />
          </h1>
        </div>
        <div className="w-2/4 flex items-center justify-end gap-4">
          <p>{`Olá, William`}</p>
          <button>
            <Image src={IconeSair} width={24} alt="Picture of the author" />
          </button>
        </div>
      </div>
    </header>
  );
}
export { Header };
