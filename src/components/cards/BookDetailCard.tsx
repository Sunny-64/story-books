import React from 'react';
import { Button, Chip } from '../core';
import { FaHeart } from 'react-icons/fa6';
import { IoEye } from "react-icons/io5";

interface BookDetailCardProps {
  image: string;
  author: string;
  likes: number;
  views: number;
  title: string;
  summary: string;
  genres: string[];
  className?: string;
}

const BookDetailCard: React.FC<BookDetailCardProps> = ({
  image = '',
  author,
  likes,
  views,
  title,
  summary,
  genres,
  className,
}) => {
  return (
    <div className={`md:min-h-[250px] sm:flex gap-4 rounded-2xl bg-secondary shadow-md ${className}`}>
      <div className="h-[250px] w-full sm:min-h-[200px] sm:h-auto sm:w-42 flex-shrink-0">
        <img className="h-full w-full object-cover rounded-2xl" src={image} alt={title} />
      </div>

      <div className="px-2 md:px-4 py-4">
        <div className="flex justify-between">
          <p className="text-lg font-medium">{author}</p>
          <div className="flex gap-2">
            <div className='flex items-center gap-2'>
              <span><FaHeart /> </span>
              <span>{likes}</span>
            </div>
            <div className='flex items-center gap-2'>
              <span><IoEye /></span>
              <span>{views}</span>
            </div>
          </div>
        </div>

        <div>
          <p className="text-xl font-semibold mb-2">{title}</p>
          <p className="min-h-24">{summary}</p>
        </div>

        <div>
          <div className="flex flex-wrap gap-4 justify-between my-2">
            <div className="flex flex-wrap gap-2">
              {genres.slice(0, 3).map((genre, index) => (
                <Chip chipText={genre} key={index} />
              ))}
              <Chip chipText="more.." />
            </div>

            <div className="flex gap-2">
              <Button label="Read Now" />
              <Button label="Save" variant="outline" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetailCard;
