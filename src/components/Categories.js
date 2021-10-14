import "../styles/Categories.css";

const Categories = ({ setActiveCategory, categories, activeCategory }) => {
  return (
    <div className="movies-categories">
      <select
        value={activeCategory}
        onChange={(e) => setActiveCategory(e.target.value)}
        className="movies-categories-select"
      >
        <option value="">Tous genres</option>
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>
      <button onClick={() => setActiveCategory("")}>Réinitialiser</button>
    </div>
  );
};

export default Categories;
