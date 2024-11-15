interface Props {
  link: string;
  icon: string;
  label: string;
}

const TechSkill = ({ link, icon, label }: Props) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className="flex px-4 py-2 gap-2 rounded-full bg-gray-300 items-center"
    >
      <img src={icon} />
      <span className="text-md font-mavenpro text-gray-500">{label}</span>
    </a>
  );
};

export default TechSkill;
