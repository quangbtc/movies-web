import React, { useState, useEffect } from "react";
import styled from "styled-components";
import MovieItem from "../movie/MovieItem";
import Switch from "../switch";
import MoviesApi from "../../api/moviesApi";
import TvApi from "../../api/tvApi";

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
const MovieContainer = styled.div`
  padding-bottom: 20px;
  width: 100%;
  margin: 10px auto;
  overflow-x: scroll;
`;
const ListMovie = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  align-items: center;
`;

const Popular = () => {
  const [change, setChange] = useState("tv");
  const [listMovie, setListMovie] = useState([]);

  const handleOnClick = (type) => {
    if (type === "left") {
      setChange("tv");
    }
    if (type === "right") {
      setChange("movie");
    }
  };
  useEffect(() => {
    const getPopularList = async (type) => {
      try {
        let params = {
          api_key: process.env.REACT_APP_API_KEY,
        };
        let response;
        if (type === "tv") {
          response = await TvApi.getMoviesTv('popular',params);
        }
        if (type === "movie") {
          response = await MoviesApi.getMoives('popular',params);
        }
        if (response) {
          setListMovie(response.results);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getPopularList(change);
  }, [change]);
  console.log("check list movies", listMovie);
  return (
    <Container>
      <Header>
        <h3>What's Popular</h3>
        <Switch
          left="On Tv"
          right="In Theaters"
          onClick={handleOnClick}
          bgColor="#062542"
          color="black"
          activeColor="#9ff7c8"
        />
      </Header>
      <MovieContainer>
        <ListMovie>
          {listMovie &&
            listMovie.length > 0 &&
            listMovie.map((item) => {
              return <MovieItem item={item} key={item.id} />;
            })}
        </ListMovie>
      </MovieContainer>
    </Container>
  );
};

export default Popular;
