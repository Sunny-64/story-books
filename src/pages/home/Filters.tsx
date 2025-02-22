const Filters = () => {
  return (
    <div>
      <div className="mb-3">
        <p className="font-semibold text-gray-500 text-lg">Categories</p>
        <ul className="space-y-1">
          <li>Category 1</li>
          <li>Category 2</li>
          <li>Category 3</li>
        </ul>
      </div>
      <div>
        <p className="font-semibold text-gray-500 text-lg">Genres</p>
        <ul className="space-y-1">
          <li>Genre 1</li>
          <li>Genre 2</li>
          <li>Genre 3</li>
        </ul>
      </div>
    </div>
  );
};

export default Filters;
