import "../styles/Categories.css";

const SelectNumberPerPage = ({ numChoice, moviesPerPage, setMoviesPerPage, setPageNumber }) => {
  return (
    <div className="movies-categories">
      <select
        value={moviesPerPage}
        onChange={(e) => setMoviesPerPage(e.target.value)}
        className="movies-categories-select"
      >
        {numChoice.map((num) => (
          <option key={num} value={num}>
            {num}
          </option>
        ))}
      </select>
      <button
        onClick={() => {
          setMoviesPerPage(4);
          setPageNumber(0);
        }}
      >
        Reset
      </button>
    </div>
  );
};

export default SelectNumberPerPage;
