const FiltersData = [
  {
    title: 'Categories',
    items: ['Novel', 'Poem', 'Drama'],
  },
  {
    title: 'Genre',
    items: ['Fiction', 'Literature', 'Mystery', 'Thriller'],
  },
];
const Filters = () => {
  return FiltersData.map((filter, index) => (
    <div className="mb-6" key={index}>
      <p className="font-semibold text-gray-500 text-xl">{filter.title}</p>
      <ul className="mt-2 space-y-2">
        {filter.items.map((item, index) => (
          <li className="text-gray-700" key={index}>{item}</li>
        ))}
      </ul>
    </div>
  ));
};

export default Filters;