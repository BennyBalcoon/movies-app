// import { plantList } from "../data/plantList";
import "../styles/MoviesList.css";
import MovieCard from "./MovieCard";
import Categories from "./Categories";
import { useState } from "react";
import { useFetch } from "../utils";
import { Loader } from "../styles/Loader";
import styled from "styled-components";

const LoaderWrapper = styled.div`
  width: 300px;
  margin: 0 auto;
`;

const MoviesList = () => {
  const { data, setData, isLoading, error } = useFetch();
  const [activeCategory, setActiveCategory] = useState("");

  const categories = data.map((movie) => movie.category);
  const catList = categories.reduce((acc, value) => {
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

  return (
    <div>
      {isLoading ? (
        <LoaderWrapper>
          <Loader />
        </LoaderWrapper>
      ) : (
        <main>
          <Categories categories={catList} setActiveCategory={setActiveCategory} activeCategory={activeCategory} />
          <ul className="movies-list">
            {data.map(({ id, cover, title, category, likes, dislikes }) =>
              !activeCategory || activeCategory === category ? (
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
              ) : null
            )}
          </ul>
        </main>
      )}
    </div>
  );
};

export default MoviesList;
