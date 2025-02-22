interface ReadingInfoCardProps {
  title: string;
  progress?: number;
  author: string;
  image: string;
}

const ReadingInfoCard: React.FC<ReadingInfoCardProps> = ({ title, progress, author, image }) => {
  return (
    <div className="flex gap-2 items-center bg-secondary rounded-md shadow-sm px-1 py-1 my-2">
      <img className="rounded-full w-10 h-10" src={image} alt="" />
      <div className="w-full">
        <p className="text-xs">{author}</p>
        <p className="text-sm font-semibold">{title}</p>
        {progress && <p className="text-xs">{progress}% completed</p>}
      </div>
    </div>
  );
};

export default ReadingInfoCard;
