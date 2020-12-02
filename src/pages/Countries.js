import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { Modal } from "../components/Modal";
import Button from "../components/Button";
import Topnav from "../components/Topnav";
import Country from "../components/Country";

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

const Countries = () => {
  const [showModal, setShowModal] = useState(false);
  const [allCountry, setAllCountry] = useState([]);

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

  console.log(allCountry);

  return (
    <>
      <Topnav />
      <Header>
        <h1>COUNTRY LIST</h1>
      </Header>
      <Container>
        {allCountry.map((country) => (
          <>
            <Country
              key={country.name.toString()}
              onClick={openModal}
              openModal={openModal}
              countryName={country.name}
              countryAlias={country.iso2}
            ></Country>
           
          </>
        ))}
         <Modal showModal={showModal} setShowModal={setShowModal} />
      </Container>
    </>
  );
};

export default Countries;
{
  /* <Country onClick={openModal} openModal={openModal}></Country>
        <Modal showModal={showModal} setShowModal={setShowModal} /> */
}
