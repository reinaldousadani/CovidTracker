import React, { useState, useEffect } from "react";
import axios from "axios";
import Result from "../components/Result";
import Topnav from "../components/Topnav";
import styled from "styled-components";
import Loader from "react-loader-spinner";

const Container = styled.div`
  height: auto;
  display: grid;
  place-items: center;
  p {
    margin: 20px;
    border: 20px;
  }
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

  const [loading, setLoading] = useState(true);

  /* Fetch using axios */
  useEffect(() => {
    axios
      .get("https://covid19.mathdro.id/api")
      .then((res) => {
        setWorld({
          confirmed: res.data.confirmed.value,
          recovered: res.data.recovered.value,
          deaths: res.data.deaths.value,
        });
        setLoading(false);
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
        {loading ? (
          <>
          <Loader type="BallTriangle" color="#141414" height={80} width={80} />
          <p>Fetching data. Please wait</p>
          </>
        ) : (
          <Result
            confirmed={world.confirmed}
            recovered={world.recovered}
            deaths={world.deaths}
          />
        )}
      </Container>
    </>
  );
};

export default Global;
