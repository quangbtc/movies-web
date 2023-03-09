import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  border: 1px solid black;
  border-radius: 200px;
  height: 30px;
  display: flex;
  align-items: center;
  cursor: pointer;
  font-weight: 600;
`;
const Left = styled.div`
  height: inherit;
  padding: 5px 10px;
  display: flex;
  align-items: center;
  text-align: center;
  border-radius: 200px;
  background-color: ${(props) => (props.type === false ? "#062542" : "none")};
  color: ${(props) => (props.type === false ? "#8ef1c3" : "black")};
`;
const Right = styled.div`
  height: inherit;
  display: flex;
  border-radius: 200px;
  align-items: center;
  text-align: center;
  padding: 5px 10px;
  background-color: ${(props) => (props.type === true ? "#062542" : "none")};
  color: ${(props) => (props.type === true ? "#8ef1c3" : "black")};
`;
const Switch = ({ left, right, onClick }) => {
  const [show, setShow] = useState(false);
  const handleOnClick = (e, type) => {
    if (type === "left") {
      setShow(false);
      onClick("left");
    } else {
      setShow(true);
      onClick("right");
    }
  };
  return (
    <Container>
      <Left onClick={(e) => handleOnClick(e, "left")} type={show}>
        {left}
      </Left>
      <Right onClick={(e) => handleOnClick(e, "right")} type={show}>
        {right}
      </Right>
    </Container>
  );
};

export default Switch;
