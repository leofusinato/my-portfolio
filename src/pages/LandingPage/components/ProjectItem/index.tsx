interface Props {
  image: string;
  alt: string;
  title: string;
  description: string;
  url: string;
}

const ProjectItem = ({ image, alt, title, description, url }: Props) => {
  return (
    <a
      target="_blank"
      className="max-w-[330px] px-3 pt-3 pb-[17px] bg-gray-300 rounded-xl flex flex-col cursor-pointer"
      href={url}
    >
      <img src={image} alt={alt} className="max-w-[306px] rounded-xl" />

      <span className="font-asap text-title-sm text-gray-600 mt-5 mb-2">
        {title}
      </span>

      <span className="font-mavenpro text-sm text-gray-500">{description}</span>
    </a>
  );
};

export default ProjectItem;
