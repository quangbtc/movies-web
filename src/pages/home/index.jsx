import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import styled from "styled-components";
import Banner from "../../components/banner/Banner";
import Trending from "../../components/trending/Trending";
import Trailer from "../../components/trailer";

const Container = styled.div``;
const index = () => {
  return (
    <>
      <Header />
      <Container>
        <Banner />
        <Trending />
        <Trailer />
      </Container>
      <Footer />
    </>
  );
};

export default index;
