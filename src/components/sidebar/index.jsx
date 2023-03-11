
import { useState } from "react";
import styled from "styled-components";
import Sort from "./Sort";
import Filter from "./Filter";

//===========SCSS===========//
const Container = styled.div`
  width: 256px;
  padding-left: 50px;
`;

//===========SCSS===========//

const Sidebar = () => {
  return (
    <Container>
      <Sort />
      <Filter />
    </Container>
  );
};

export default Sidebar;
