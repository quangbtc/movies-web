import React, { Fragment } from "react";
import styled from "styled-components";
import ListMovieLayout from "../../layouts/ListMovieLayout";

const Container = styled.div``;
const Movies = () => {
  return (
    <Fragment>
      <ListMovieLayout title="Popular movies">
        <Container>Hello list</Container>
      </ListMovieLayout>
    </Fragment>
  );
};

export default Movies;
