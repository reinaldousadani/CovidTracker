import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { Modal } from "../components/Modal";
import Topnav from "../components/Topnav";
import Country from "../components/Country";
import Button from "react-bootstrap/Button";
import Loader from "react-loader-spinner";

const Container = styled.div`
  height: auto;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(4, 1fr);
  place-items: center;
  p {
    margin: 20px;
    padding: 20px;
  }
`;

const LoadingContainer = styled.div`
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

const CountryStyling = styled.div`
  display: grid;
  .country-button {
    border-radius: 0px 0px 10px 10px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.3);
    background: #141414;
  }
`;

const Countries = () => {
  const [showModal, setShowModal] = useState(false);
  const [allCountry, setAllCountry] = useState([]);
  const [specificCountry, setSpecificCountry] = useState({
    name: "",
    alias: "",
  });
  const [loading, setLoading] = useState(true);

  const setCountry = (name, alias) => {
    setSpecificCountry({
      name: name,
      alias: alias,
    });
  };

  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  useEffect(() => {
    axios
      .get("https://covid19.mathdro.id/api/countries")
      .then((res) => {
        setAllCountry(res.data.countries);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Topnav />
      <Header>
        <h1>COVID-19 CASES</h1>
        <h1>BY COUNTRY</h1>
      </Header>
      {loading ? (
        <LoadingContainer>
          <>
            <Loader
              type="BallTriangle"
              color="#141414"
              height={80}
              width={80}
            />
            <p>Fetching data. Please wait</p>
          </>
        </LoadingContainer>
      ) : (
        <Container>
          {allCountry.map((country) => (
            <CountryStyling>
              <Country
                key={country.id}
                openModal={openModal}
                countryName={country.name}
                countryAlias={country.iso2}
              ></Country>
              <Button
                value={country.name}
                className="country-button"
                variant="secondary"
                size="lg"
                block
                onClick={() => {
                  openModal();
                  setCountry(country.name, country.iso2);
                }}
              >
                {country.name}
              </Button>
            </CountryStyling>
          ))}
          <Modal
            showModal={showModal}
            setShowModal={setShowModal}
            countryName={specificCountry.name}
            countryAlias={specificCountry.alias}
          />
        </Container>
      )}
    </>
  );
};

export default Countries;
