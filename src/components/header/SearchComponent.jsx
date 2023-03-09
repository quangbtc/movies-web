import { Fragment, useState, useEffect } from "react";
import { Close, RotateLeft, Search } from "@mui/icons-material";
import { Divider, List, ListItem } from "@mui/material";
import styled, { keyframes } from "styled-components";
import SearchApi from "../../api/searchApi";
import VARIABLE from "../../constant";
import useDebounce from "../../hooks/useDebounce";
const Container = styled.div`
  padding: 5px 50px;
  border-bottom: 1px solid #e3e3e3;
`;
const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Rotate = keyframes`
  from{
    transform: rotate(0deg);
  }
  to{
    transform: rotate(90deg);
  }
`;
const IconContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 0px 10px;
  cursor: pointer;
  animation: ${Rotate} 0.3s ease-in;
  transition: all 0.3s;
`;
const InputContainer = styled.div`
  flex: 1;
  height: 40px;
  margin-left: 10px;
`;

const ResultContainer = styled.div``;
const Header = styled.div`
  padding: 10px 50px;
  text-align: left;
  border-bottom: 1px solid #e3e3e3;
`;

const Title = styled.h3`
  font-size: 24px;
`;

const Input = styled.input`
  height: inherit;
  font-size: 18px;
`;

const SearchComponent = () => {
  const [result, setResult] = useState([]);
  const [search, setSearch] = useState("");
  const [searching, setSearching] = useState(false);
  const debounceSearch = useDebounce(search, 500);
  const hanldeOnchangeInput = (event) => {
    setSearch(event.target.value);
  };
  useEffect(() => {
    const params = {
      api_key: VARIABLE.api_key,
      query: search,
    };
    const getSearch = async () => {
      try {
        if (debounceSearch) {
          setSearching(true);
          const response = await SearchApi.searchKeyword(params);
          if (response) {
            setSearching(false);
            setResult(response.results);
          }
        } else {
          setResult([]);
          setSearching(false);
        }
      } catch (error) {
        setSearching(false);
        console.log(error);
      }
    };
    getSearch();
  }, [debounceSearch]);

  console.log("check result", result);
  return (
    <Fragment>
      <Container>
        <SearchContainer>
          <Search />
          <InputContainer>
            <Input
              placeholder="Search movies,tv,companies..."
              value={search}
              onChange={(event) => hanldeOnchangeInput(event)}
            />
          </InputContainer>
          <IconContainer onClick={() => setSearch("")}>
            {searching === true ? <RotateLeft /> : <Close />}
          </IconContainer>
        </SearchContainer>
      </Container>
      <ResultContainer>
        <Header>
          <Title>Trending</Title>
        </Header>
        <List>
          {result &&
            result.length > 0 &&
            result.map((item) => {
              return (
                <ListItem
                  sx={{
                    borderBottom: "1px solid #e3e3e3",
                    paddingLeft: "50px",
                  }}
                  key={item.id}
                >
                  <IconContainer>
                    {" "}
                    <Search />
                  </IconContainer>
                  {item.name}
                </ListItem>
              );
            })}
        </List>
      </ResultContainer>
    </Fragment>
  );
};

export default SearchComponent;
