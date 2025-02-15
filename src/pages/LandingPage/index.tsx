import "../../App.css";
import { Icons } from "../../assets/icons";
import { Images } from "../../assets/images";
import ProjectItem from "./components/ProjectItem";
import ServiceCard from "./components/ServiceCard";
import TechSkill from "./components/TechSkill";
import ContactCard from "./components/ContactCard";
import { useTranslation } from "react-i18next";
import i18n from "../../locales/i18next";

function LandingPage() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col flex-1 justify-center items-center px-6">
      <div className="w-full justify-center items-center flex flex-1 flex-col mt-[120px]">
        <div className="max-w-[754px] justify-center items-center pt-40 pb-[144px] flex flex-1 flex-col">
          <img
            src="https://www.github.com/leofusinato.png"
            width={96}
            height={96}
            className="rounded-full border border-red p-1"
            alt="profile image"
          />

          <span className="font-inconsolata text-subtitle mt-14 text-gray-500 mb-2 text-center">
            {t("greeting.part1")}{" "}
            <span className="text-red">Leonardo Alex Fusinato</span>{" "}
            {t("greeting.part2")}
          </span>

          <span className="text-gray-600 font-asap text-title-lg mb-5 text-center">
            {t("role")}
          </span>

          <span className="text-gray-400 font-mavenpro text-sm text-center mb-20">
            {t("generalDescription")}
          </span>

          <div className="flex gap-4 mb-24 flex-wrap justify-center">
            <TechSkill
              label="GitHub"
              icon={Icons.GithubLogo}
              link="https://github.com/leofusinato"
            />

            <TechSkill
              label="React Native"
              icon={Icons.ReactNativeLogo}
              link="https://reactnative.dev/"
            />

            <TechSkill
              label="Node.js"
              icon={Icons.NodeLogo}
              link="https://nodejs.org/en"
            />

            <TechSkill
              label="Typescript"
              icon={Icons.TypescriptLogo}
              link="https://www.typescriptlang.org/"
            />
          </div>

          <img src={Icons.CaretDoubleDown} />

          <div className="mt-20 flex flex-col items-center">
            <span className="font-inconsolata text-subtitle text-red">
              {t("myWork.title")}
            </span>

            <span className="mt-2 font-asap text-title-md text-gray-600">
              {t("myWork.description")}
            </span>
          </div>

          <div className="grid gap-6 mt-14 grid-cols-1">
            <ProjectItem
              image={Images.ElderageImage}
              alt="elderage image"
              title={t("projects.1.title")}
              description={t("projects.1.description")}
              url="https://www.linkedin.com/posts/leonardo-alex-fusinato-210419194_ap%C3%B3s-um-longo-per%C3%ADodo-decidi-finalmente-activity-7123470691068170243-w_bw?utm_source=share&utm_medium=member_desktop&rcm=ACoAAC2fvuwB2pRVXmk4VPf_W1L2HgaCESfk0Rs"
            />
          </div>
        </div>

        <div className="flex w-full flex-col flex-1 h-full items-center bg-gray-100 pt-[88px] pb-32 px-6">
          <div className="mt-20 flex flex-col items-center">
            <span className="font-inconsolata text-subtitle text-red">
              {t("myServices.title")}
            </span>

            <span className="mt-2 font-asap text-title-md text-gray-600">
              {t("myServices.description")}
            </span>
          </div>

          <div className="grid grid-cols-2 mt-14 gap-6">
            <ServiceCard
              icon={Icons.Devices}
              alt="devices icon"
              title={t("myServices.1.title")}
              description={t("myServices.1.description")}
            />

            <ServiceCard
              icon={Icons.HardDrives}
              alt="hard drives icon"
              title={t("myServices.2.title")}
              description={t("myServices.2.description")}
            />
          </div>
        </div>

        <div className="flex flex-col pt-[128px] pb-[200px]">
          <div className="flex flex-col gap-2 justify-center items-center">
            <span className="font-inconsolata text-subtitle text-purple">
              {t("contact.title")}
            </span>

            <span className="text-gray-600 font-asap text-title-md">
              {t("contact.description.part1")}
            </span>

            <span className="text-gray-500 font-mavenpro text-md">
              {t("contact.description.part2")}
            </span>
          </div>

          <div className="mt-12 flex flex-col gap-4">
            <ContactCard
              icon={Icons.LinkedinLogo}
              alt="linkedin logo"
              link="https://www.linkedin.com/in/leonardo-alex-fusinato-210419194/"
              label="Linkedin"
            />

            <ContactCard
              icon={Icons.InstagramLogo}
              alt="instagram logo"
              link="https://instagram.com/leeofusinato"
              label="Instagram"
            />

            <ContactCard
              icon={Icons.GithubLogo}
              alt="github logo"
              link="https://github.com/leofusinato"
              label="GitHub"
            />

            <ContactCard
              icon={Icons.EnvelopeSimple}
              alt="email logo"
              link="mailto:leonardo.alex.fusinato@gmail.com"
              label="Email"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
