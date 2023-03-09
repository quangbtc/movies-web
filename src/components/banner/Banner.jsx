import React from "react";
import styled from "styled-components";
import { IMAGES } from "../../assets/images/images";

const Container = styled.div`
  margin-top: 74px;
  margin-left: 50px;
  margin-right: 50px;
  padding: 20px 0px;
  background-color: light;
  background-image: url(${IMAGES.banner});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 300px;
`;
const Content = styled.div`
  h2 {
    margin-top: 20px;
    color: white;
    font-size: 60px;
    font-weight: 600;
    text-align: left;
    padding: 10px 50px;
  }
  h3 {
    font-size: 36px;
    font-weight: 600;
    text-align: left;
    margin: 20px auto;
    padding: 10px 50px;
    color: white;
  }
`;
const SearchContainer = styled.div`
  padding: 20px 50px;
`;
const Search = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  height: 46px;
  border-radius: 200px;
`;
const Input = styled.input`
  flex: 1;
  height: inherit;
  border-radius: 200px;
  padding-left: 20px;
  font-size: 20px;
`;
const Button = styled.button`
  width: 120px;
  font-size: 20px;
  border-radius: 200px;
  height: inherit;
  background: linear-gradient(45deg, #60d6ab, #4ebdd6);
  cursor: pointer;
  opacity: 0.8;
  &:hover {
    opacity: 1;
  }
`;
const Banner = () => {
  return (
    <Container>
      <Content>
        <h2>Welcome...</h2>
        <h3>Milions of movies,TV show and people to discover. Explore now</h3>
        <SearchContainer>
          <Search>
            <Input placeholder="Search movies,tv show,companies..." />
            <Button>Search</Button>
          </Search>
        </SearchContainer>
      </Content>
    </Container>
  );
};

export default Banner;
