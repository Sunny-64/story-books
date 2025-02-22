import { completedBooks, pendingBooks } from './data';
import ReadingInfoCard from './ReadingInfoCard';

const ReadingHistory = () => {
  return (
    <div>
      <div>
        <p className="mb-2 font-semibold text-lg">Continue Reading</p>
        {pendingBooks?.map(({ title, author, image, progress }) => (
          <ReadingInfoCard title={title} author={author} image={image} progress={progress} />
        ))}
      </div>

      <div className="mt-4">
        <p className="mb-2 font-semibold text-lg">Completed</p>
        {completedBooks?.map(({ title, author, image }) => (
          <ReadingInfoCard title={title} author={author} image={image} />
        ))}
      </div>
    </div>
  );
};

export default ReadingHistory;
