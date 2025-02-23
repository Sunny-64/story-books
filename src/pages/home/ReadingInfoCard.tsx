interface ReadingInfoCardProps {
  title: string;
  progress?: number;
  author: string;
  image: string;
  customStyles?: string;
}

const ReadingInfoCard: React.FC<ReadingInfoCardProps> = ({ title, progress, author, image, customStyles }) => {
  return (
    <div className={`min-h-12 flex gap-2 items-center bg-secondary rounded-md shadow-sm my-2 ${customStyles}`}>
      <img className="w-11 rounded-md object-cover" src={image} alt="" />
      <div className="w-full px-1 py-2">
        <p className="text-xs">{author}</p>
        <p className="text-sm font-semibold">{title}</p>
        {progress && <p className="text-xs">{progress}% completed</p>}
      </div>
    </div>
  );
};

export default ReadingInfoCard;
