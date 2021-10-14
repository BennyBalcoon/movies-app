import "../styles/MoviesList.css";
import MovieCard from "./MovieCard";
import Categories from "./Categories";
import { useState } from "react";
import { useFetch } from "../utils";
import { Loader } from "../styles/Loader";
import styled from "styled-components";
import ReactPaginate from "react-paginate";

const LoaderWrapper = styled.div`
  width: 300px;
  margin: 0 auto;
`;

const MoviesList = () => {
  const { data, setData, isLoading, error } = useFetch();
  const [activeCategory, setActiveCategory] = useState("");
  const [pageNumber, setPageNumber] = useState(1);

  const categoriesList = data.map((movie) => movie.category);
  const categoriesListFiltered = categoriesList.reduce((acc, value) => {
    if (acc.indexOf(value) === -1) {
      acc.push(value);
    }
    return acc;
  }, []);

  const removeCard = (id) => {
    const newCardArray = [...data];
    const index = newCardArray
      .map((item) => {
        return item.id;
      })
      .indexOf(id);
    console.log(index);
    newCardArray.splice(index, 1);

    setData(newCardArray);
    setActiveCategory(activeCategory);
  };

  const moviesPerPage = 4;
  const pagesVisited = pageNumber * moviesPerPage;

  const displayMovies = data
    .slice(pagesVisited, pagesVisited + moviesPerPage)
    .map(({ id, cover, title, category, likes, dislikes }) => {
      return !activeCategory || activeCategory === category ? (
        <div key={id}>
          <MovieCard
            id={id}
            cover={cover}
            title={title}
            category={category}
            likes={likes}
            dislikes={dislikes}
            removeCard={removeCard}
          />
        </div>
      ) : null;
    });

  const pageCount = Math.ceil(data.length / moviesPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div>
      {isLoading ? (
        <LoaderWrapper>
          <Loader />
        </LoaderWrapper>
      ) : (
        <main>
          <Categories
            categories={categoriesListFiltered}
            setActiveCategory={setActiveCategory}
            activeCategory={activeCategory}
          />
          <ul className="movies-list">{displayMovies}</ul>
          <ReactPaginate
            previousLabel={"Previous"}
            nextLabel={"Next"}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={"paginationButtons"}
            previousLinkClassName={"previousButton"}
            nextLinkClassName={"nextButton"}
            disabledClassName={"paginationDisabled"}
            activeClassName={"paginationActive"}
          />
        </main>
      )}
    </div>
  );
};

export default MoviesList;
