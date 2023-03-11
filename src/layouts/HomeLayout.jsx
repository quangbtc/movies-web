import { Fragment, useState, useEffect } from "react";
import styled from "styled-components";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
const Content = styled.div``;
const HomeLayout = ({ children }) => {
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
      <Content>{children}</Content>
      <Footer />
    </Fragment>
  );
};

export default HomeLayout;
