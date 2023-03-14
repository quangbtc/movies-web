import React, { Fragment, useState } from "react";
import styled, { keyframes } from "styled-components";
import TippyHeadless from "@tippyjs/react/headless";
import { Link } from "react-router-dom";
import {
  AddCircle,
  ArrowDropDown,
  Close,
  Notifications,
  Search,
} from "@mui/icons-material";
import {
  Avatar,
  Box,
  Divider,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import LangSearch from "./LangSearch";
import SearchComponent from "./SearchComponent";
import configgration from "../../api/configration";
import { useSelector } from "react-redux";
import { TypeMovies } from "../../api/moviesApi";
import { TypeTv } from "../../api/tvApi";

const Fade = keyframes`
  from{
    opacity: 0;
  }
  to{
    opacity: 1;
  }
`;
const Container = styled.div`
  background-color: #374f66;
  height: 64px;
  color: white;

  display: ${(props) => (props.show === true ? "flex" : "none")};
  align-items: center;
  justify-content: space-between;

  padding: 10px 50px;
  position: fixed;
  right: 0;
  top: 0;
  left: 0;
  z-index: 1000;
  animation: ${Fade} 0.5s ease-in-out;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const Logo = styled.div`
  margin-right: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  h1 {
    color: #8ecea2;
  }
  div {
    width: 60px;
    height: 20px;
    border-radius: 20px;
    background-color: #4bdbd4;
    margin-left: 10px;
  }
`;
const Menu = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;
const Item = styled.li`
  margin-right: 20px;
  color: light;
  cursor: pointer;
  font-weight: 600;
`;
const TippyContainer = styled.div`
  padding: 10px 5px;
  background-color: lightcyan;
  width: 300px;
  border-radius: 5px;
  overflow: hidden;
`;
const TippyItem = styled.div`
  padding: 5px 20px;
  text-align: left;
  &:hover {
    background-color: lightgreen;
  }
  transition: all 0.3s ease;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 20px;
`;
const IconContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;
const Text = styled.div`
  line-height: 30px;
  text-align: center;
  width: 30px;
  height: 30px;
  font-size: 14px;
  text-transform: uppercase;

  border: 1px solid white;
  border-radius: 5px;
`;
const Head = styled.div`
  h4 {
    color: #333;
    padding: 5px 10px;
  }
`;
const Content = styled.div`
  padding: 5px 10px;
`;
const InputGroup = styled.div`
  position: relative;
  color: #333;
  cursor: pointer;
`;
const Label = styled.div`
  display: flex;
  justify-content: space-between;
  span {
    padding: 5px 10px;
  }
`;
const Select = styled.div`
  display: flex;
  align-items: center;
  background-color: lightgray;
  padding: 0px 10px;
  justify-content: space-between;
  height: 30px;
  border-radius: 5px;
  border: 1px solid #333;
  cursor: pointer;
`;
const Option = styled.span``;
const ProfileContainer = styled.div`
  background-color: white;
  color: #333;
  min-width: 200px;
  border: 1px solid #e3e3e3;
  border-radius: 5px;
  z-index: 100;
`;
const SlideDown = keyframes`
    from {
   opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const SearchContainer = styled.div`
  display: ${(props) => (props.show === true ? "block" : "none")};
  background-color: white;
  animation: ${SlideDown} 0.3s linear;
  position: fixed;
  top: 64px;
  left: 0;
  right: 0;
  z-index: 1000;
`;

//============END SCSS======
const MENU = [
  {
    name: "Movies",
    children: [
      { name: "Popular", path: `/movie/${TypeMovies.popular}` },
      {
        name: "Now playing",
        path: `/movie/${TypeMovies.now_playing}`,
      },
      {
        name: "Up comming",
        path: `/movie/${TypeMovies.upComing}`,
      },
      {
        name: "Top rate",
        path: `/movie/${TypeMovies.top_rated}`,
      },
    ],
  },
  {
    name: "TV show",
    children: [
      { name: "Popular", path: `/tv/${TypeTv.popular}` },
      {
        name: "Airing Today",
        path: `/tv/${TypeTv.airing_today}`,
      },
      {
        name: "On TV",
        path: `/tv/${TypeTv.onTheAir}`,
      },
      {
        name: "Top Rated",
        path: `/tv/${TypeTv.top_rated}`,
      },
    ],
  },
  {
    name: "People",
    children: [{ name: "Popular People", path: "/people" }],
  },
  {
    name: "More",
    path: "/movie",
    children: [
      { name: "Discussion", path: "/" },
      {
        name: "Leaderboard",
        path: "/now-playing",
      },
      {
        name: "Support",
        path: "/up-comming",
      },
      {
        name: "API",
        path: "/top-rate",
      },
    ],
  },
];
const PROFILE_SETTING = [
  {
    name: "Quang",
    desc: "Profile setting",
    path: "/profile",

    divide: true,
  },
  {
    name: "Discussion",
    path: "/discussion",
    divide: false,
  },
  {
    name: "List",
    path: "/list",
    divide: false,
  },
  {
    name: "Ratings",
    path: "/ratings",
    divide: false,
  },
  {
    name: "Watchlist",
    path: "/watchlist",
    divide: true,
  },
  {
    name: "Edit profile",
    path: "/edit",
    divide: false,
  },
  {
    name: "Settings",
    path: "/settings",
    divide: true,
  },
  {
    name: "Logout",
    path: "/logout",
    divide: false,
  },
];
const Header = ({ show }) => {
  const [showLanguage, setShowLanguage] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [languages, setLanguages] = useState([]);
  const handleShowLanguage = async () => {
    const params = {
      api_key: process.env.REACT_APP_API_KEY,
    };
    try {
      const response = await configgration.getLanguages(params);
      if (response) {
        setLanguages(response);
      }
    } catch (error) {
      console.log(error);
    }
    setShowLanguage(!showLanguage);
  };
  const language = useSelector((state) => state.language.language);
  console.log("check", language);
  return (
    <Fragment>
      <Container show={show}>
        <Left>
          <Logo>
            <Link to="/">
              <h1>MOVIES</h1>
            </Link>
            <div></div>
          </Logo>
          <Menu>
            {MENU.map((e, i) => {
              return (
                <>
                  <TippyHeadless
                    interactive={true}
                    placement="bottom"
                    render={(attrs) =>
                      e.children &&
                      e.children.length > 0 && (
                        <TippyContainer tabIndex="-1" {...attrs}>
                          {e.children &&
                            e.children.length > 0 &&
                            e.children.map((item, index) => {
                              return (
                                <TippyItem key={index}>
                                  <Link to={item.path}>{item.name}</Link>
                                </TippyItem>
                              );
                            })}
                        </TippyContainer>
                      )
                    }
                  >
                    <Item key={i}>{e.name}</Item>
                  </TippyHeadless>
                </>
              );
            })}
          </Menu>
        </Left>
        <Right>
          <TippyHeadless
            interactive={true}
            trigger="click"
            render={(attrs) => (
              <TippyContainer tabIndex="-1" {...attrs}>
                <TippyItem>
                  <Link>Add new movie</Link>
                </TippyItem>
                <TippyItem>
                  <Link>Add new tv show</Link>
                </TippyItem>
              </TippyContainer>
            )}
          >
            <IconContainer>
              <AddCircle />
            </IconContainer>
          </TippyHeadless>
          <TippyHeadless
            interactive={true}
            trigger="click"
            placement="bottom"
            render={(attrs) => (
              <TippyContainer tabIndex="-1" {...attrs}>
                <Head>
                  <h4>Languages Preferences</h4>
                </Head>
                <Content>
                  <InputGroup>
                    <Label>
                      <span>Defaul language</span>
                      <span>Reset</span>
                    </Label>
                    <Select onClick={() => handleShowLanguage()}>
                      <Option>
                        {language.country} + {language.language}
                      </Option>
                      <ArrowDropDown />
                    </Select>
                  </InputGroup>
                  {showLanguage && <LangSearch languages={languages} />}
                </Content>
              </TippyContainer>
            )}
          >
            <IconContainer onClick={() => setShowLanguage(false)}>
              <Text>{language.language}</Text>
            </IconContainer>
          </TippyHeadless>

          <IconContainer>
            <Notifications />
          </IconContainer>
          <TippyHeadless
            interactive={true}
            trigger="click"
            render={(attrs) => (
              <ProfileContainer tabIndex={-1} {...attrs}>
                <Box>
                  {PROFILE_SETTING.map((item, index) => (
                    <>
                      <ListItemButton
                        key={index}
                        component="a"
                        href={item.path}
                      >
                        <ListItemText
                          primary={item.name}
                          secondary={item.desc ? item.desc : ""}
                        />
                      </ListItemButton>
                      {item.divide && <Divider />}
                    </>
                  ))}
                </Box>
              </ProfileContainer>
            )}
          >
            <IconContainer>
              <Avatar sx={{ backgroundColor: "orange" }}>Q</Avatar>
            </IconContainer>
          </TippyHeadless>

          <IconContainer onClick={() => setShowSearch(!showSearch)}>
            {showSearch === true ? (
              <Close />
            ) : (
              <Search sx={{ color: "blue" }} />
            )}
          </IconContainer>
        </Right>
      </Container>
      <SearchContainer show={showSearch}>
        <SearchComponent />
      </SearchContainer>
    </Fragment>
  );
};

export default Header;
