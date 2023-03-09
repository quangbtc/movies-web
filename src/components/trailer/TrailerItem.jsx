import { MoreVertOutlined, PlayArrow } from "@mui/icons-material";
import React from "react";
import styled from "styled-components";
import TippyHeadless from "@tippyjs/react/headless";
import { Box, Divider, ListItemButton, ListItemText } from "@mui/material";
import { MENU } from "../../constant";
const Container = styled.div`
  width: 300px;
`;
const ImgContainer = styled.div`
  width: inherit;
  position: relative;
  border-radius: 10px;
  &:hover {
    transform: scale(1.03);
  }
`;
const Img = styled.img`
  width: inherit;
  height: 250px;
  border-radius: 10px;
  object-fit: cover;
`;
const WrapperIcon = styled.div`
  position: absolute;
  right: 10px;
  top: 10px;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: #e3e3e3;
  opacity: 0.8;
  z-index: 100;
  cursor: pointer;
  &:hover {
    opacity: 1;
  }
`;
const PlayIcon = styled.div`
  position: absolute;
  color: white;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:hover {
    transform: scale(1.3);
  }
`;
const Title = styled.h4`
  margin-top: 10px;
  text-align: center;
  font-size: 20px;
  color: white;
  font-weight: 600;
  cursor: pointer;
  &:hover {
    color: #64dfb3;
  }
`;
const Description = styled.div`
  text-align: center;
  font-size: 14px;
  color: white;
  font-weight: 600;
  padding: 5px 10px;

  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;
const MenuContainer = styled.div`
  background-color: white;
  border-radius: 10px;
  border: 1px solid #e3e3e3;
  z-index: 100;
`;
const TrailerItem = ({ item }) => {
  const BASE_IMAGE_URL = "https://www.themoviedb.org/t/p/w220_and_h330_face";
  return (
    <Container>
      <ImgContainer>
        <Img src={BASE_IMAGE_URL + item.backdrop_path} />
        <TippyHeadless
          interactive={true}
          trigger="click"
          placement="left-end"
          render={(attrs) => (
            <MenuContainer tabIndex={-1} {...attrs}>
              <Box>
                {MENU.map((item, index) => (
                  <>
                    <ListItemButton key={index} component="a" href={item.path}>
                      <ListItemText
                        primary={item.name}
                        secondary={item.desc ? item.desc : ""}
                      />
                    </ListItemButton>
                    {item.divide && <Divider />}
                  </>
                ))}
              </Box>
            </MenuContainer>
          )}
        >
          <WrapperIcon>
            <MoreVertOutlined />
          </WrapperIcon>
        </TippyHeadless>
        <PlayIcon>
          <PlayArrow sx={{ fontSize: "60px" }} />
        </PlayIcon>
      </ImgContainer>
      <Title>{item.title ? item.title : item.original_name}</Title>
      <Description>{item.overview}</Description>
    </Container>
  );
};

export default TrailerItem;
