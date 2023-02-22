import React from "react";
import { SearchOutlined } from "@mui/icons-material";
import styled from "styled-components";
const Container = styled.div`
  padding: 10px 0px;
  margin: 10px auto;
  background-color: white;
  z-index: 100;
  border-radius: 5px;
`;
const SearchContainer = styled.div`
  margin: 10px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #333;
  border-radius: 5px;
  input {
    flex: 1;
    padding-left: 10px;
  }
`;
const ListItem = styled.ul`
  margin-top: 50px;
  height: 200px;
  overflow-y: scroll;
`;
const Item = styled.li`
  color: #333;
  text-align: left;
  padding-left: 10px;
  margin-bottom: 1px;
  cursor: pointer;
  &:hover {
    background-color: lightcyan;
  }
`;

const LangSearch = () => {
  return (
    <Container>
      <SearchContainer>
        <input type="text" />
        <SearchOutlined sx={{ color: "#333", fontWeight: "200" }} />
      </SearchContainer>
      <ListItem>
        <Item>English (US)</Item>
        <Item>English (US)</Item>
        <Item>English (US)</Item>
        <Item>English (US)</Item>
        <Item>English (US)</Item>
        <Item>English (US)</Item>
        <Item>English (US)</Item>
        <Item>English (US)</Item>
        <Item>English (US)</Item>
        <Item>English (US)</Item>
        <Item>English (US)</Item>
        <Item>English (US)</Item>
        <Item>English (US)</Item>
        <Item>English (US)</Item>
        <Item>English (US)</Item>
        <Item>English (US)</Item>
        <Item>English (US)</Item>
        <Item>English (US)</Item>
        <Item>English (US)</Item>
        <Item>English (US)</Item>
        <Item>English (US)</Item>
        <Item>English (US)</Item>
        <Item>English (US)</Item>
        <Item>English (US)</Item>
      </ListItem>
    </Container>
  );
};

export default LangSearch;
