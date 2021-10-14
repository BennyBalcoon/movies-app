import "../styles/Categories.css";

const Categories = ({ setActiveCategory, categories, activeCategory, setPageNumber }) => {
  return (
    <div className="movies-categories">
      <select
        value={activeCategory}
        onChange={(e) => setActiveCategory(e.target.value)}
        className="movies-categories-select"
      >
        <option value="">All kinds</option>
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>
      <button
        onClick={() => {
          setActiveCategory("");
          setPageNumber(0);
        }}
      >
        Reset
      </button>
    </div>
  );
};

export default Categories;
