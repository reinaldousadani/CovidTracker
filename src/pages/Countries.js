import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { Modal } from "../components/Modal";
import Topnav from "../components/Topnav";
import Country from "../components/Country";
import Button from "react-bootstrap/Button";

const Container = styled.div`
  height: auto;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(4, 1fr);
  place-items: center;
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
  }
`;

const Countries = () => {
  const [showModal, setShowModal] = useState(false);
  const [allCountry, setAllCountry] = useState([]);
  const [specificCountry, setSpecificCountry] = useState({
    name: "",
    alias: "",
  });

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
      })
      .catch((err) => console.log(err));
  }, []);

  console.log(specificCountry.name);

  return (
    <>
      <Topnav />
      <Header>
        <h1>COVID-19 CASES</h1>
        <h1>BY COUNTRY</h1>
      </Header>
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
    </>
  );
};

export default Countries;
