interface Props {
  image: string;
  alt: string;
  title: string;
  description: string;
}

const ProjectItem = ({ image, alt, title, description }: Props) => {
  return (
    <div className="max-w-[330px] px-3 pt-3 pb-[17px] bg-gray-300 rounded-xl flex flex-col">
      <img src={image} alt={alt} className="max-w-[306px] rounded-xl" />

      <span className="font-asap text-title-sm text-gray-600 mt-5 mb-2">
        {title}
      </span>

      <span className="font-mavenpro text-sm text-gray-500">{description}</span>
    </div>
  );
};

export default ProjectItem;
