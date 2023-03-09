import React, { useState, useEffect } from "react";
import styled from "styled-components";
import trendingApi from "../../api/trendingApi";
import MovieItem from "../movie/MovieItem";
import Switch from "../switch";
import { MediaType, TimeWindow } from "../../api/constant";

const Container = styled.div`
  padding: 5px 50px;
`;
const Header = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 0px;
  gap: 20px;
  h3 {
    padding-left: 50px;
    font-size: 20px;
    color: black;
  }
`;
const ListMovie = styled.div`
  margin: 10px auto;
  display: flex;
  justify-content: space-around;
  gap: 10px;
  align-items: flex-start;
  align-content: flex-start;
`;

const Trending = () => {
  const [change, setChange] = useState("day");
  const [listMovie, setListMovie] = useState([]);

  const handleOnClick = (type) => {
    if (type === "left") {
      setChange("day");
    }
    if (type === "right") {
      setChange("week");
    }
  };
  useEffect(() => {
    const getTrending = async (type) => {
      try {
        let params = {
          api_key: process.env.REACT_APP_API_KEY,
        };
        let response;
        if (type === "day") {
          response = await trendingApi.getTrending(
            MediaType.all,
            TimeWindow.day,
            params
          );
        }
        if (type === "week") {
          response = await trendingApi.getTrending(
            MediaType.all,
            TimeWindow.week,
            params
          );
        }
        if (response) {
          setListMovie(response.results);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getTrending(change);
  }, [change]);
  console.log("check list movies", listMovie);
  return (
    <Container>
      <Header>
        <h3>Trending</h3>
        <Switch left="Day" right="This week" onClick={handleOnClick} />
      </Header>
      <ListMovie>
        {listMovie &&
          listMovie.length > 0 &&
          listMovie.splice(0, 8).map((item) => {
            return <MovieItem item={item} key={item.id} />;
          })}
      </ListMovie>
    </Container>
  );
};

export default Trending;
