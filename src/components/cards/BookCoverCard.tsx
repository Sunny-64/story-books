import React from 'react';

interface BookCoverCardProps {
  image: string;
}

const BookCoverCard: React.FC<BookCoverCardProps> = ({ image }) => {
  return (
    <div>
      <img className="rounded-md h-[250px] object-cover" src={image} alt="" />
    </div>
  );
};

export default BookCoverCard;
