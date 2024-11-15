import { Icons } from "../../../../assets/icons";

interface Props {
  icon: string;
  alt: string;
  link: string;
  label: string;
}

const ContactCard = ({ icon, alt, link, label }: Props) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className="p-5 rounded-lg bg-gray-300 flex items-center justify-between"
    >
      <div className="flex items-center gap-3">
        <img src={icon} alt={alt} />
        <span className="text-gray-500 font-mavenpro text-md">{label}</span>
      </div>

      <img
        src={Icons.ArrowUpRight}
        alt="arrow up right"
        className="fill-blue"
        width={24}
        height={24}
      />
    </a>
  );
};

export default ContactCard;
