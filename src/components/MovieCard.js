import "../styles/MovieCard.css";
import styled from "styled-components";
import { useState } from "react";

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 15px;
  margin-top: 20px;
  border-radius: 30px;
  width: 300px;
  height: 300px;
  transition: 200ms;
  &:hover {
    cursor: pointer;
    box-shadow: 2px 2px 10px #e2e3e9;
  }
`;

const CardTitle = styled.div`
  color: #4f4c6b;
  font-size: 20px;
  font-weight: bold;
  align-self: center;
  height: 25px;
  display: flex;
  align-items: center;
`;

const CardCategory = styled.div`
  color: #4f4c6b;
  font-size: 14px;
  font-weight: normal;
  align-self: center;
  /* height: 25px; */
  display: flex;
  align-items: center;
`;

const CardImage = styled.img`
  height: 250px;
  width: 250px;
  margin-top: 20px;
  border-radius: 20px;
  object-fit: cover;
`;

const CardRating = styled.span`
  padding-right: 20px;
`;

const RemoveButton = styled.span`
  display: flex;
  float: right;
  border-radius: 20px 20px 20px 0;
  background-color: whitesmoke;
  padding: 15px;
  font-weight: 400;
  &:hover {
    cursor: pointer;
    box-shadow: 2px 2px 10px #e2e3e9;
  }
`;

const MovieCard = ({ id, cover, title, category, likes, dislikes, removeCard }) => {
  const [isLiked, setIsLiked] = useState(false);
  const favorite = isLiked ? "I love it !! ⭐️⭐️⭐️" : "";
  return (
    <CardWrapper onClick={() => setIsLiked(!isLiked)}>
      <li key={id}>
        <CardImage src={cover} alt={`${title}'s cover`}></CardImage>
        <CardTitle>
          {title} <span>{favorite}</span>
        </CardTitle>
        <CardCategory>{category}</CardCategory>
        <CardRating>{likes} 👍</CardRating>
        <CardRating>{dislikes} 👎</CardRating>
        <RemoveButton onClick={() => removeCard(id)}>🗑</RemoveButton>
      </li>
    </CardWrapper>
  );
};

export default MovieCard;
