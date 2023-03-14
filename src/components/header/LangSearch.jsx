import React, { Fragment, useState } from "react";
import { SearchOutlined } from "@mui/icons-material";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { changeLanguage } from "../../redux/actions";
const Container = styled.div`
  position: relative;
  width: inherit;
  padding: 10px 0px;
  margin: 10px auto;
  background-color: white;
  z-index: 100;
  border-radius: 5px;
`;
const SearchContainer = styled.div`
  margin: 10px;
  position: fixed;
  left: 20px;
  right: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #333;
  border-radius: 5px;
  input {
    flex: 80%;
    padding-left: 10px;
  }
`;
const ListItem = styled.ul`
  margin-top: 50px;
  width: inherit;
  max-height: 200px;
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
const Button = styled.button`
  min-width: 100px;
  margin: 10px auto;
  border-radius: 10px;
  padding: 10px 8px;
  background-color: #76cba9;
  font-size: 20px;
  cursor: pointer;
  opacity: 0.8;
  &:hover {
    opacity: 1;
  }
  transition: all 0.3s ease;
`;

const LangSearch = ({ languages }) => {
  const [valueSearch, setValueSearch] = useState("");
  const [filters, setFilters] = useState([]);
  const [lang, setLang] = useState({ language: "", country: "" });
  const hanleOnclick = (item) => {
    setValueSearch(item.english_name);
    setLang({
      language: item.iso_639_1,
      country: item.english_name,
    });
  };
  const hanleOnchange = (e) => {
    setValueSearch(e.target.value);
    const search = languages.filter((item) =>
      item.english_name.startsWith(valueSearch)
    );
    setFilters(search);
  };
  const disPatch = useDispatch();
  const handleChangeLanguage = () => {
    changeLanguage(disPatch, lang);
  };
  return (
    <Fragment>
      <Container>
        <SearchContainer>
          <input
            type="text"
            value={valueSearch}
            onChange={(e) => hanleOnchange(e)}
          />
          <SearchOutlined sx={{ color: "#333", fontWeight: "200" }} />
        </SearchContainer>
        <ListItem>
          {filters && filters.length > 0
            ? filters.map((item, index) => {
                return (
                  <Item key={index} onClick={() => hanleOnclick(item)}>
                    {item.english_name} - ({item.iso_639_1})
                  </Item>
                );
              })
            : languages &&
              languages.length > 0 &&
              languages.map((item, index) => {
                return (
                  <Item key={index} onClick={() => hanleOnclick(item)}>
                    {item.english_name} - ({item.iso_639_1})
                  </Item>
                );
              })}
        </ListItem>
      </Container>
      <Button onClick={handleChangeLanguage}>Load</Button>
    </Fragment>
  );
};

export default LangSearch;
