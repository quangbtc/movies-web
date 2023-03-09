import React from "react";
import { Grid, List, ListItem } from "@mui/material";
import styled from "styled-components";

const Container = styled.div`
  background-color: #05213a;
  padding: 100px 50px;
`;
const Title = styled.div`
  color: white;
  padding-left: 20px;
  text-align: left;
  font-size: 24px;
  text-transform: uppercase;
`;
const Button = styled.button`
  min-width: 100px;
  padding: 10px 20px;
  cursor: pointer;
`;
const Logo = styled.h2`
  font-size: 50px;
  color: #76cba9;
  margin: 20px auto;
`;

const Footer = () => {
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <Logo>MOIVES</Logo>
          <Button>Hi QUangpt</Button>
        </Grid>
        <Grid item xs={2.5}>
          <Title>The basic</Title>
          <List>
            <ListItem
              sx={{
                color: "white",
                cursor: "pointer",
                "&:hover": {
                  color: "#76cba9",
                },
              }}
            >
              About TMDB
            </ListItem>
            <ListItem
              sx={{
                color: "white",
                cursor: "pointer",
                "&:hover": {
                  color: "#76cba9",
                },
              }}
            >
              Contact Us
            </ListItem>
            <ListItem
              sx={{
                color: "white",
                cursor: "pointer",
                "&:hover": {
                  color: "#76cba9",
                },
              }}
            >
              Supports forums
            </ListItem>
            <ListItem
              sx={{
                color: "white",
                cursor: "pointer",
                "&:hover": {
                  color: "#76cba9",
                },
              }}
            >
              Api
            </ListItem>
            <ListItem
              sx={{
                color: "white",
                cursor: "pointer",
                "&:hover": {
                  color: "#76cba9",
                },
              }}
            >
              System Status
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={2.5}>
          <Title>Get Involved</Title>
          <List>
            <ListItem
              sx={{
                color: "white",
                cursor: "pointer",
                "&:hover": {
                  color: "#76cba9",
                },
              }}
            >
              Contribution Bible
            </ListItem>
            <ListItem
              sx={{
                color: "white",
                cursor: "pointer",
                "&:hover": {
                  color: "#76cba9",
                },
              }}
            >
              Add New Movie
            </ListItem>
            <ListItem
              sx={{
                color: "white",
                cursor: "pointer",
                "&:hover": {
                  color: "#76cba9",
                },
              }}
            >
              Add New TV Show
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={2.5}>
          <Title>Community</Title>
          <List>
            <ListItem
              sx={{
                color: "white",
                cursor: "pointer",
                "&:hover": {
                  color: "#76cba9",
                },
              }}
            >
              Discussions
            </ListItem>
            <ListItem
              sx={{
                color: "white",
                cursor: "pointer",
                "&:hover": {
                  color: "#76cba9",
                },
              }}
            >
              Leaderboard
            </ListItem>
            <ListItem
              sx={{
                color: "white",
                cursor: "pointer",
                "&:hover": {
                  color: "#76cba9",
                },
              }}
            >
              Twitter
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={2.5}>
          <Title>Leagal</Title>
          <List>
            <ListItem
              sx={{
                color: "white",
                cursor: "pointer",
                "&:hover": {
                  color: "#76cba9",
                },
              }}
            >
              Terms of Use
            </ListItem>
            <ListItem
              sx={{
                color: "white",
                cursor: "pointer",
                "&:hover": {
                  color: "#76cba9",
                },
              }}
            >
              API Terms of Use
            </ListItem>
            <ListItem
              sx={{
                color: "white",
                cursor: "pointer",
                "&:hover": {
                  color: "#76cba9",
                },
              }}
            >
              Privacy Policy
            </ListItem>
          </List>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Footer;
