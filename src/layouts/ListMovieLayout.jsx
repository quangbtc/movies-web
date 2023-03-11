import { Fragment, useState, useEffect } from "react";
import styled from "styled-components";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Sidebar from "../components/sidebar";
const Container = styled.div`
  display: flex;
`;
const TitleContainer = styled.div`
  margin-top: 70px;

  h3 {
    padding: 20px 50px;
    font-size: 24px;
    font-weight: 600;
    text-align: left;
  }
`;

const Content = styled.div`
  flex: 1;
`;
const ListMovieLayout = (props) => {
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

  useEffect(() => {
    window.addEventListener("scroll", handlescroll);
    return () => {
      window.removeEventListener("scroll", handlescroll);
    };
  });

  return (
    <Fragment>
      <Header show={showHeader} />
      <TitleContainer>
        <h3>{props.title}</h3>
      </TitleContainer>
      <Container>
        <Sidebar />
        <Content>{props.children}</Content>
      </Container>
      <Footer />
    </Fragment>
  );
};

export default ListMovieLayout;
