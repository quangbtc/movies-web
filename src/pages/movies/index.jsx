import React, { Fragment, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import MoviesApi from "../../api/moviesApi";
import TvApi from "../../api/tvApi";
import MovieItem from "../../components/movie/MovieItem";
import ListMovieLayout from "../../layouts/ListMovieLayout";

const Container = styled.div`
  margin: 10px 20px;
`;
const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 20px;
`;
const Button = styled.button`
  font-size: 24px;
  color: white;
  background-color: #47b5e4;
  padding: 10px 20px;
  border-radius: 5px;
  margin: 20px auto;
  cursor: pointer;
  opacity: 0.8;
  &:hover {
    opacity: 1;
  }
`;
const Movies = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const rootPath = location.pathname.split("/")[1];
  console.log("check path", path);
  const pathMovie = path === undefined ? "popular" : path;
  console.log('check path',pathMovie)
  useEffect(() => {
    const getMovies = async () => {
      const params = {
        api_key: process.env.REACT_APP_API_KEY,
      };
      try {
        let response;
        if (rootPath === "movie") {
          response = await MoviesApi.getMoives(pathMovie, params);
        }
        if (rootPath === "tv") {
          response = await TvApi.getMoviesTv(pathMovie, params);
        }
        if (response) {
          setMovies(response.results);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getMovies();
  }, [path]);
  return (
    <Fragment>
      <ListMovieLayout title="Popular movies">
        <Container>
          <List>
            {movies &&
              movies.length > 0 &&
              movies.map((item) => {
                return <MovieItem item={item} key={item.id} />;
              })}
          </List>
          <Button>Load more</Button>
        </Container>
      </ListMovieLayout>
    </Fragment>
  );
};

export default Movies;
