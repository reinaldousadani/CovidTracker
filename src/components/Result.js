import styled from "styled-components";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import { formatter } from "../utilities/formatNumber";

const CardWrapper = styled.div`
  .card-main {
    display: grid;
    text-align: center;
    max-width: 250px;
    min-width: 200px;
    place-items: center;
    border-radius: 10px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5);
    background-color: #141414;
  }
  .card-title-confirmed {
    color: #ffa500;
  }
  .card-text-confirmed {
    color: #ffa500;
  }
  .card-title-recovered {
    color: #3cb371;
  }
  .card-text-recovered {
    color: #3cb371;
  }
  .card-title-deaths {
    color: #ff0000;
  }
  .card-text-deaths {
    color: #ff0000;
  }
`;

const Result = ({ confirmed, recovered, deaths }) => {
  return (
    <>
      <CardWrapper>
        <CardDeck>
          <Card className="card-main">
            <Card.Body className="card-body">
              <Card.Title className="card-title-confirmed">
                Confirmed
              </Card.Title>
              <Card.Text className="card-text-confirmed">
                {formatter.format(confirmed)}
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="card-main">
            <Card.Body>
              <Card.Title className="card-title-recovered">
                Recovered
              </Card.Title>
              <Card.Text className="card-text-recovered">
                {formatter.format(recovered)}
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="card-main">
            <Card.Body>
              <Card.Title className="card-title-deaths">Deaths</Card.Title>
              <Card.Text className="card-text-deaths">
                {formatter.format(deaths)}
              </Card.Text>
            </Card.Body>
          </Card>
        </CardDeck>
      </CardWrapper>
    </>
  );
};

export default Result;
