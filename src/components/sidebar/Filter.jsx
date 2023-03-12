import { useState } from "react";
import { ArrowDropDown, ExpandMoreOutlined } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Divider,
  Toolbar,
} from "@mui/material";
import styled from "styled-components";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

//===========SCSS============
const FilterContainer = styled.div`
  margin: 20px auto;
`;
const ContainerSection = styled.div`
  text-align: left;
`;
const Title = styled.h4`
  text-align: left;
  margin-bottom: 5px;
`;
const Text = styled.p`
  width: 27px;
  font-size: 13px;
  font-weight: 400;
`;
const InputGroup = styled.div`
  text-align: left;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
`;
const Input = styled.input`
  width: 20px;
`;
const Label = styled.label`
  flex: 1;
  font-size: 13px;
  font-weight: 600;
`;

const DateGroup = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
`;
const DatePickerContain = styled.div`
  width: 150px;
  height: 30px;
`;

//===========SCSS============

const Filter = () => {
  return (
    <FilterContainer>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreOutlined />}>
          <Title>Filter</Title>
        </AccordionSummary>
        <Divider />
        <AccordionDetails>
          <ContainerSection>
            <Text>Show me</Text>
            <InputGroup>
              <Input type="radio" name="movies" />
              <Label>Every things</Label>
            </InputGroup>
            <InputGroup>
              <Input type="radio" name="movies" />
              <Label>Movies I haven't seen</Label>
            </InputGroup>
            <InputGroup>
              <Input type="radio" name="movies" />
              <Label>Movies I have seen</Label>
            </InputGroup>
          </ContainerSection>
        </AccordionDetails>
        <Divider />
        <AccordionDetails>
          <ContainerSection>
            <Text>Availabilities</Text>
            <InputGroup>
              <Input type="checkbox" />
              <Label>Search all availabilities?</Label>
            </InputGroup>
          </ContainerSection>
        </AccordionDetails>
        <AccordionDetails>
          <ContainerSection>
            <Text>Release Dates</Text>
            <InputGroup>
              <Input type="checkbox" />
              <Label>Search all releases?</Label>
            </InputGroup>
            <InputGroup>
              <Input type="checkbox" />
              <Label>Search all country?</Label>
            </InputGroup>
            <InputGroup>
              <Input type="checkbox" />
              <Label>Premiere</Label>
            </InputGroup>
            <InputGroup>
              <Input type="checkbox" />
              <Label>Theatrical (limited)</Label>
            </InputGroup>
            <InputGroup>
              <Input type="checkbox" />
              <Label>Theatrical</Label>
            </InputGroup>
            <InputGroup>
              <Input type="checkbox" />
              <Label>Digital</Label>
            </InputGroup>
            <InputGroup>
              <Input type="checkbox" />
              <Label>Phisical</Label>
            </InputGroup>
            <InputGroup>
              <Input type="checkbox" />
              <Label>TV</Label>
            </InputGroup>
            <DateGroup>
              <Text>From</Text>
              <DatePicker />
            </DateGroup>
            <DateGroup>
              <Text>To</Text>
              <DatePickerContain>
                <DatePicker />
              </DatePickerContain>
            </DateGroup>
          </ContainerSection>
        </AccordionDetails>
      </Accordion>
    </FilterContainer>
  );
};

export default Filter;
