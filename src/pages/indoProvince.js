import React, { useState, useEffect } from "react";
import axios from "axios";
import Topnav from "../components/Topnav";
import styled from "styled-components";
import ProvinceTable from "../components/provinceTable";
import Loader from 'react-loader-spinner';

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

const IndoProvince = () => {

  const [prov, setProv] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios.get("https://indonesia-covid-19.mathdro.id/api/provinsi")
    .then((res) => {
      setProv(res.data.data);
      setLoading(false);
    })
    .catch((err) => console.log(err))
  })

  return (
    <>
      <Topnav />
      <Header>
        <h1>INDONESIA</h1>
        <h1>COVID-19 CASES</h1>
        <h1>BY PROVINCE</h1>
      </Header>
      <Container>
        { loading ? (
          <>
          <Loader type="BallTriangle" color="#141414" height={80} width={80} />
          <p>Fetching data. Please wait</p>
          </>
        ) : (
          <ProvinceTable prov={prov} />
        ) }
      </Container>
    </>
  );
};

export default IndoProvince;
