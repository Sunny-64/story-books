import { Link } from 'react-router-dom';
import Filters from './Filters';
import ReadingHistory from './ReadingHistory';

const Home = () => {
  return (
    <div className="md:grid grid-cols-5 my-8 gap-4">
      <div className="col-span-1 mb-4 md:mb-0">
        <Filters />
      </div>
      <div className="col-span-3 ">
        {/* <div className="">
          <p>Trending Books</p>
          <Link to="/">
            <img className="rounded-md" src="https://github.com/shadcn.png" alt="" />
          </Link>
        </div> */}
      </div>
      <div className="hidden lg:block">
        <ReadingHistory />
      </div>
    </div>
  );
};

export default Home;
