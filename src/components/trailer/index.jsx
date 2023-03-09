import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Switch from "../switch";
import TrailerItem from "./TrailerItem";
import { IMAGES } from "../../assets/images/images";
import TvApi from "../../api/tvApi";
import MoviesApi from "../../api/moviesApi";

const Container = styled.div`
  position: relative;
  margin: 10px 50px;
  padding: 20px 0px;
  background-image: url(${IMAGES.trailer});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  z-index: 10;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  h3 {
    padding-left: 50px;
    font-size: 20px;
    color: white;
  }
  z-index: 10;
`;
const TrailerContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow-x: scroll;
`;
const TrailerList = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 20px;
  padding: 10px 20px;
`;
const Trailer = () => {
  const [change, setChange] = useState("tv");
  const [results, setResults] = useState([]);
  const handleOnclick = (type) => {
    if (type === "left") {
      setChange("tv");
    }
    if (type === "right") {
      setChange("movie");
    }
  };
  useEffect(() => {
    const getLastest = async () => {
      try {
        let response;
        const params = {
          api_key: process.env.REACT_APP_API_KEY,
        };
        if (change === "tv") {
          response = await TvApi.getTvAiringToday(params);
        }
        if (change === "movie") {
          response = await MoviesApi.getNowPlaying(params);
        }
        console.log("check movies", response);
        if (response) {
          setResults(response.results);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getLastest();
  }, [change]);
  return (
    <Container>
      <Header>
        <h3>Latest Trailers</h3>
        <Switch
          left="On TV"
          right="In Theaters"
          onClick={handleOnclick}
          borderColor="#9ff7c8"
          bgColor="#9ff7c8"
          color="white"
          activeColor="black"
        />
      </Header>
      <TrailerContainer>
        <TrailerList>
          {results &&
            results.length > 0 &&
            results.map((item) => {
              return <TrailerItem item={item} key={item.id} />;
            })}
        </TrailerList>
      </TrailerContainer>
    </Container>
  );
};

export default Trailer;
