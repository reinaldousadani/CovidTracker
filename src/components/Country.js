import React from "react";
import Card from "react-bootstrap/Card";
import styled from "styled-components";
import Button from "./Button";
import noImg from "../image/NoImageFound.png";

const Wrapper = styled.div`
  .card-main {
    background-color: #141414;
    color: #fff;
    border-radius: 10px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.6);
    overflow: hidden;
  }
  
`;

const Country = ({ openModal, countryName, countryAlias }) => {
  return (
    <Wrapper>
      <Card className="card-main text-center" style={{ width: "18rem" }}>
        {countryAlias ? (
          <Card.Img
            className="card-img"
            variant="top"
            src={`https://flagcdn.com/w640/${countryAlias.toLowerCase()}.png`}
          />
        ) : (
          <Card.Img
            className="card-img"
            variant="top"
            src={noImg}
          />
        )}

        <Card.Body>
          <Card.Title>
            <Button onClick={openModal}>{countryName.toUpperCase()}</Button>
          </Card.Title>
        </Card.Body>
      </Card>
    </Wrapper>
  );
};

export default Country;
