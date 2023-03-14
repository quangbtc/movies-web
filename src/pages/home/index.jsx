import React from "react";
import styled from "styled-components";
import Banner from "../../components/banner/Banner";
import Trending from "../../components/trending/Trending";
import Trailer from "../../components/trailer";
import Popular from "../../components/popular";
import HomeLayout from "../../layouts/HomeLayout";

const Container = styled.div``;
const Home = () => {
  return (
    <>
      <HomeLayout>
        <Container>
          <Banner />
          <Trending />
          <Trailer />
          <Popular />
        </Container>
      </HomeLayout>
    </>
  );
};

export default Home;
