import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  border: 1px solid;
  border-color: ${(props) => (props.borderColor ? props.borderColor : "black")};
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
  border-color: ${(props) => (props.borderColor ? props.borderColor : "black")};
  background-color: ${(props) =>
    props.type === false ? props.bgColor : "none"};
  color: ${(props) => (props.type === false ? props.activeColor : props.color)};
`;
const Right = styled.div`
  height: inherit;
  display: flex;
  border-radius: 200px;
  border-color: ${(props) => (props.borderColor ? props.borderColor : "black")};
  align-items: center;
  text-align: center;
  padding: 5px 10px;
  background-color: ${(props) =>
    props.type === true ? props.bgColor : "none"};
  color: ${(props) => (props.type === true ? props.activeColor : props.color)};
`;
const Switch = ({
  left,
  right,
  onClick,
  color,
  borderColor,
  bgColor,
  activeColor,
}) => {
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
    <Container borderColor={borderColor}>
      <Left
        onClick={(e) => handleOnClick(e, "left")}
        type={show}
        borderColor={borderColor}
        bgColor={bgColor}
        color={color}
        activeColor={activeColor}
      >
        {left}
      </Left>
      <Right
        onClick={(e) => handleOnClick(e, "right")}
        type={show}
        borderColor={borderColor}
        bgColor={bgColor}
        color={color}
        activeColor={activeColor}
      >
        {right}
      </Right>
    </Container>
  );
};

export default Switch;
