import React, { useState, useEffect } from "react";
import axios from "axios";
import Result from "../components/Result";
import Topnav from "../components/Topnav";
import styled from "styled-components";

const Container = styled.div`
  height: auto;
  display: grid;
  place-items: center;
`;

const Header = styled.div`
  display: grid;
  margin-top: 75px;
  place-items: center;
  padding: 20px;
`;

const Global = () => {
  const [world, setWorld] = useState({
    confirmed: NaN,
    recovered: NaN,
    deaths: NaN,
  });

  useEffect(() => {
    axios
      .get("https://covid19.mathdro.id/api")
      .then((res) => {
        setWorld({
          confirmed: res.data.confirmed.value,
          recovered: res.data.recovered.value,
          deaths: res.data.deaths.value,
        });
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Topnav />
      <Header>
        <h1>GLOBAL</h1>
        <h1>COVID-19 CASES</h1>
      </Header>
      <Container>
        <Result
          confirmed={world.confirmed}
          recovered={world.recovered}
          deaths={world.deaths}
        />
      </Container>
    </>
  );
};

export default Global;
