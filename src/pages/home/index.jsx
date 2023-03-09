import React, { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import styled from "styled-components";
import Banner from "../../components/banner/Banner";
import Trending from "../../components/trending/Trending";
import Trailer from "../../components/trailer";
import Popular from "../../components/popular";
import useDebounce from "../../hooks/useDebounce";

const Container = styled.div``;
const Home = () => {
  const [showHeader, setShowHeader] = useState(true);
  const [currentHeight, setCurrentHeight] = useState(0);
  const handlescroll = () => {
    setTimeout(() => {
      setCurrentHeight(window.scrollY);
    }, 50);

    if (currentHeight > window.scrollY) {
      setShowHeader(true);
    } else if (currentHeight < window.scrollY) {
      setShowHeader(false);
    }
  };

  console.log("check height", currentHeight, window.scrollY);
  useEffect(() => {
    window.addEventListener("scroll", handlescroll);
    return () => {
      window.removeEventListener("scroll", handlescroll);
    };
  });

  return (
    <>
      <Header show={showHeader} />
      <Container>
        <Banner />
        <Trending />
        <Trailer />
        <Popular />
      </Container>
      <Footer />
    </>
  );
};

export default Home;
