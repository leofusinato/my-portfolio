import "./App.css";
import { Icons } from "./assets/icons";
import { Images } from "./assets/images";

function App() {
  return (
    <div className="flex flex-col flex-1 justify-center items-center">
      <div className="w-full justify-center items-center flex flex-1 flex-col mt-[120px]">
        <div className="max-w-[754px] justify-center items-center pt-40 pb-[144px] flex flex-1 flex-col">
          <img
            src="https://www.github.com/leofusinato.png"
            width={96}
            height={96}
            className="rounded-full border border-red p-1"
            alt="profile image"
          />

          <span className="font-inconsolata text-subtitle mt-14 text-gray-500 mb-2">
            Hello World! Meu nome é{" "}
            <span className="text-red">Leonardo Alex Fusinato</span> e sou
          </span>

          <span className="text-gray-600 font-asap text-title-lg mb-5">
            Desenvolvedor Mobile
          </span>

          <span className="text-gray-400 font-mavenpro text-sm text-center mb-20">
            Transformo necessidades em aplicações reais, evolventes e
            funcionais. Desenvolvo aplicativos através da minha paixão pela
            tecnologia, contribuindo com soluções inovadoras e eficazes para
            desafios complexos.
          </span>

          <div className="flex gap-4 mb-24">
            <a
              href="https://github.com/leofusinato"
              target="_blank"
              rel="noreferrer"
              className="flex px-4 py-2 gap-2 rounded-full bg-gray-300 items-center"
            >
              <img src={Icons.GithubLogo} />
              <span className="text-md font-mavenpro text-gray-500">
                GitHub
              </span>
            </a>

            <a
              href="https://reactnative.dev/"
              target="_blank"
              rel="noreferrer"
              className="flex px-4 py-2 gap-2 rounded-full bg-gray-300 items-center"
            >
              <img src={Icons.ReactNativeLogo} />
              <span className="text-md font-mavenpro text-gray-500">
                React Native
              </span>
            </a>

            <a
              href="https://nodejs.org/en"
              target="_blank"
              rel="noreferrer"
              className="flex px-4 py-2 gap-2 rounded-full bg-gray-300 items-center"
            >
              <img src={Icons.NodeLogo} />
              <span className="text-md font-mavenpro text-gray-500">
                Node.js
              </span>
            </a>

            <a
              href="https://www.typescriptlang.org/"
              target="_blank"
              rel="noreferrer"
              className="flex px-4 py-2 gap-2 rounded-full bg-gray-300 items-center"
            >
              <img src={Icons.TypescriptLogo} />
              <span className="text-md font-mavenpro text-gray-500">
                Typescript
              </span>
            </a>
          </div>
          <img src={Icons.CaretDoubleDown} />

          <div className="mt-20 flex flex-col items-center">
            <span className="font-inconsolata text-subtitle text-red">
              Meu trabalho
            </span>

            <span className="mt-2 font-asap text-title-md text-gray-600">
              Veja os projetos em destaque
            </span>
          </div>

          <div className="grid gap-6 mt-14 grid-cols-1">
            <div className="max-w-[330px] px-3 pt-3 pb-[17px] bg-gray-300 rounded-xl flex flex-col">
              <img
                src={Images.ElderageImage}
                alt="elderage image"
                className="max-w-[306px] rounded-xl"
              />

              <span className="font-asap text-title-sm text-gray-600 mt-5 mb-2">
                Elderage
              </span>

              <span className="font-mavenpro text-sm text-gray-500">
                Aplicativo para auxiliar nas tarefas do dia a dia de cuidadores
                de idosos
              </span>
            </div>
          </div>
        </div>

        <div className="flex w-full flex-col flex-1 h-full items-center bg-gray-100 pt-[88px] pb-32">
          <div className="mt-20 flex flex-col items-center">
            <span className="font-inconsolata text-subtitle text-red">
              Meus serviços
            </span>

            <span className="mt-2 font-asap text-title-md text-gray-600">
              Como posso ajudar o seu negócio
            </span>
          </div>

          <div className="grid grid-cols-2 mt-14 gap-6">
            <div className="flex flex-col p-5 max-w-[280px] border border-gray-200 rounded-xl">
              <img src={Icons.Devices} alt="devices" width={48} height={48} />

              <span className="mt-5 font-asap text-title-sm text-gray-600">
                Websites e Aplicativos
              </span>

              <span className="mt-2 font-mavenpro text-sm text-gray-500">
                Desenvolvimento de interfaces de alto nível escalável de acordo
                com a necessidade do cliente
              </span>
            </div>

            <div className="flex flex-col p-5 max-w-[280px] border border-gray-200 rounded-xl">
              <img
                src={Icons.HardDrives}
                alt="devices"
                width={48}
                height={48}
              />

              <span className="mt-5 font-asap text-title-sm text-gray-600">
                API e banco de dados
              </span>

              <span className="mt-2 font-mavenpro text-sm text-gray-500">
                Criação de serviços do sistema
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col pt-[128px] pb-[200px]">
          <div className="flex flex-col gap-2 justify-center items-center">
            <span className="font-inconsolata text-subtitle text-purple">
              Contato
            </span>

            <span className="text-gray-600 font-asap text-title-md">
              Gostou do meu trabalho?
            </span>

            <span className="text-gray-500 font-mavenpro text-md">
              Entre em contato ou acompanhe as minhas redes sociais!
            </span>
          </div>

          <div className="mt-12 flex flex-col gap-4">
            <a
              href="https://www.linkedin.com/in/leonardo-alex-fusinato-210419194/"
              target="_blank"
              rel="noreferrer"
              className="p-5 rounded-lg bg-gray-300 flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <img src={Icons.LinkedinLogo} alt="linkedin logo" />
                <span className="text-gray-500 font-mavenpro text-md">
                  Linkedin
                </span>
              </div>

              <img
                src={Icons.ArrowUpRight}
                alt="arrow up right"
                className="fill-blue"
                width={24}
                height={24}
              />
            </a>

            <a
              href="https://instagram.com/leeofusinato"
              target="_blank"
              rel="noreferrer"
              className="p-5 rounded-lg bg-gray-300 flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <img src={Icons.InstagramLogo} alt="linkedin logo" />
                <span className="text-gray-500 font-mavenpro text-md">
                  Instagram
                </span>
              </div>

              <img
                src={Icons.ArrowUpRight}
                alt="arrow up right"
                className="fill-blue"
                width={24}
                height={24}
              />
            </a>

            <a
              href="https://github.com/leofusinato"
              target="_blank"
              rel="noreferrer"
              className="p-5 rounded-lg bg-gray-300 flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <img src={Icons.GithubLogo} alt="linkedin logo" />
                <span className="text-gray-500 font-mavenpro text-md">
                  GitHub
                </span>
              </div>

              <img
                src={Icons.ArrowUpRight}
                alt="arrow up right"
                className="fill-blue"
                width={24}
                height={24}
              />
            </a>

            <a
              href="mailto:leonardo.alex.fusinato@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="p-5 rounded-lg bg-gray-300 flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <img src={Icons.EnvelopeSimple} alt="linkedin logo" />
                <span className="text-gray-500 font-mavenpro text-md">
                  Email
                </span>
              </div>

              <img
                src={Icons.ArrowUpRight}
                alt="arrow up right"
                className="fill-blue"
                width={24}
                height={24}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
