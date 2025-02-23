import { Link } from 'react-router-dom';
import Filters from './Filters';
import ReadingHistory from './ReadingHistory';
import BookDetailCard from '@/components/cards/BookDetailCard';
import { books, trendingBooks } from './data';

const Home = () => {
  return (
    <div className="pt-8 sm:flex gap-4 justify-between">
      {/* left side */}
      <div className="basis-1/5 hidden md:block">
        <Filters />
      </div>

      {/* main content */}
      <div className="basis-full lg:px-2 xl:px-4">
        <div>
          <p className="font-semibold text-xl mb-3">Books of the Day</p>
          <div className="grid gap-4 xl:gap-8 grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4">
            {/* TODO -> Change this to a slider */}
            {trendingBooks.slice(0, 5).map(({ image }, index: number) => (
              <Link key={index} to="/">
                <img className="rounded-md h-[250px] w-full object-cover" src={image} alt="image" />
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-8">
          <p className="font-semibold text-xl mb-3">Trending Books</p>
          {books.map((book, index) => (
            <BookDetailCard key={index} {...book} className={'my-4'} />
          ))}
        </div>
      </div>

      {/* right side */}
      <div className="basis-2/5 pl-4 hidden lg:block">
        <ReadingHistory />
      </div>
    </div>
  );
};

export default Home;
