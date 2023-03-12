import { useState } from "react";
import { ArrowDropDown, ExpandMoreOutlined } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Divider,
} from "@mui/material";
import styled from "styled-components";

//===========SCSS============
const SortContainer = styled.div``;
const Title = styled.h4`
  text-align: left;
  margin-bottom: 5px;
`;
const Select = styled.div`
  position: relative;
  width: inherit;
  border-radius: 5px;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  background-color: #e4e7eb;
  cursor: pointer;
  opacity: 0.8;
  &:hover {
    opacity: 1;
  }
  transition: all 0.3s ease;
  input {
    background-color: transparent;
  }
`;
const PopperContainer = styled.div`
  padding: 10px 0px;
  width: inherit;
  border-radius: 5px;
  border: 1px solid #e3e3e3;
  background-color: white;
  position: absolute;
  left: 0;
  right: 0;
  top: 35px;
  z-index: 1000;
`;
const List = styled.ul`
  overflow: hidden;
`;
const ListItem = styled.li`
  padding: 5px 10px;
  text-align: left;
  cursor: pointer;
  &:hover {
    background-color: #e4e7eb;
  }
`;

//===========SCSS============

const Sort = () => {
  const [openSelect, setOpenSelect] = useState(false);
  return (
    <SortContainer>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreOutlined />}>
          <Title>Sort</Title>
        </AccordionSummary>
        <Divider />
        <AccordionDetails>
          <Title>Sort by Results</Title>

          <Select onClick={() => setOpenSelect(!openSelect)}>
            <input type="text" readOnly />
            <ArrowDropDown />
            {openSelect && (
              <PopperContainer>
                <List>
                  <ListItem>Title az</ListItem>
                  <ListItem>Title az</ListItem>
                  <ListItem>Title az</ListItem>
                  <ListItem>Title az</ListItem>
                  <ListItem>Title az</ListItem>
                </List>
              </PopperContainer>
            )}
          </Select>
        </AccordionDetails>
      </Accordion>
    </SortContainer>
  );
};

export default Sort;
