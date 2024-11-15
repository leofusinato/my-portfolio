interface Props {
  icon: string;
  alt: string;
  title: string;
  description: string;
}

const ServiceCard = ({ icon, alt, title, description }: Props) => {
  return (
    <div className="flex flex-col p-5 max-w-[280px] border border-gray-200 rounded-xl">
      <img src={icon} alt={alt} width={48} height={48} />

      <span className="mt-5 font-asap text-title-sm text-gray-600">
        {title}
      </span>

      <span className="mt-2 font-mavenpro text-sm text-gray-500">
        {description}
      </span>
    </div>
  );
};

export default ServiceCard;
