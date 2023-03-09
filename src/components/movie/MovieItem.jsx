import React from "react";
import { MoreVertOutlined } from "@mui/icons-material";
import styled from "styled-components";
import TippyHeadless from "@tippyjs/react/headless";
import { Box, Divider, ListItemButton, ListItemText } from "@mui/material";
const Container = styled.div`
  width: 150px;
  display: inline-block;
  border-radius: 10px;
`;
const ImageContainer = styled.div`
  position: relative;
  cursor: pointer;
`;
const Image = styled.img`
  width: 100%;
  height: 225px;
  border-radius: 10px;
  object-fit: cover;
`;
const MenuIcon = styled.span`
  position: absolute;
  top: 10px;
  right: 10px;
  color: white;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: #a49bab;
  opacity: 0.8;
  cursor: pointer;
  &:hover {
    opacity: 1;
  }
`;
const Title = styled.h4`
  text-align: left;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding-left: 10px;
  cursor: pointer;
  &:hover {
    color: #72dec0;
  }
`;
const Time = styled.div`
  text-align: left;
  padding-left: 10px;
  font-size: 12px;
  color: #676e6b;
`;
const MenuContainer = styled.div`
  background-color: white;
  border-radius: 10px;
  border: 1px solid #e3e3e3;
`;
const MENU = [
  {
    name: "Add to list",
    path: "/add_to_list",
    divide: true,
  },
  {
    name: "Favourist",
    path: "/favourist",
    divide: true,
  },
  {
    name: "Watchlist",
    path: "/watch_list",
    divide: true,
  },
  {
    name: "Your rating",
    path: "/add_to_list",
    divide: true,
  },
];
const MovieItem = ({ item }) => {
  const BASE_IMAGE_URL = "https://www.themoviedb.org/t/p/w220_and_h330_face";
  return (
    <Container>
      <ImageContainer>
        <Image src={BASE_IMAGE_URL + item.backdrop_path} />
        <TippyHeadless
          interactive={true}
          trigger="click"
          placement="bottom"
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
          <MenuIcon>
            <MoreVertOutlined />
          </MenuIcon>
        </TippyHeadless>
      </ImageContainer>
      <Title>{item.title ? item.title : item.original_name}</Title>
      <Time>{item.release_date ? item.release_date : item.first_air_date}</Time>
    </Container>
  );
};

export default MovieItem;
