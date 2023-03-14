
import styled from "styled-components";
import Sort from "./Sort";
import Filter from "./Filter";

//===========SCSS===========//
const Container = styled.div`
  width: 256px;
  padding-left: 50px;
`;
const Button = styled.button`
  font-size: 18px;
  color: white;
  padding: 10px 8px;
  background-color: #53c2bf;
  margin: 20px 5px;
  border-radius: 5px;
  cursor: pointer;
  opacity: 0.8;
  &:hover {
    opacity: 1;
  }
`;

//===========SCSS===========//

const Sidebar = () => {
  return (
    <Container>
      <Sort />
      <Filter />
      <Button>Search</Button>
    </Container>
  );
};

export default Sidebar;
