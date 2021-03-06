import React from "react";
import Card from "react-bootstrap/Card";
import styled from "styled-components";
import noImg from "../image/NoImageFound.png";

const Wrapper = styled.div`
  .card-main {
    position: relative;
    background-color: #141414;
    color: #fff;
    border-radius: 10px 10px 0px 0px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.3);
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
          <Card.Img className="card-img" variant="top" src={noImg} />
        )}
      </Card>
    </Wrapper>
  );
};

export default Country;
