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
  p{
    margin: 20px;
    padding: 20px;
  }
`;

const Header = styled.div`
  display: grid;
  margin-top: 75px;
  place-items: center;
  padding: 20px;
`;

const Indonesia = () => {
  const [indonesia, setIndonesia] = useState({
    confirmed: NaN,
    recovered: NaN,
    deaths: NaN,
  });
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios
      .get("https://covid19.mathdro.id/api/countries/indonesia")
      .then((res) => {
        setIndonesia({
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
        <h1>INDONESIA</h1>
        <h1>COVID-19 CASES</h1>
      </Header>
      <Container>
        {loading ? (
          <>
            <Loader
              type="BallTriangle"
              color="#141414"
              height={80}
              width={80}
            />
            <p>Fetching data. Please wait</p>
          </>
        ) : (
          <Result
            confirmed={indonesia.confirmed}
            recovered={indonesia.recovered}
            deaths={indonesia.deaths}
          />
        )}
      </Container>
    </>
  );
};

export default Indonesia;
