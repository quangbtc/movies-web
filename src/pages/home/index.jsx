import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import styled from "styled-components";

const Container = styled.div``;
const index = () => {
  return (
    <>
      <Header />
      <Container>Home</Container>
      <Footer />
    </>
  );
};

export default index;
