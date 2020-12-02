import React, { useState, useRef, useEffect, useCallback } from "react";
import { useSpring, animated } from "react-spring";
import styled from "styled-components";
import { MdClose } from "react-icons/md";
import noImg from "../image/NoImageFound.png";
import axios from "axios";

const Background = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin: 0;
  top: 0;
  left: 0;
`;

const ModalWrapper = styled.div`
  width: 800px;
  height: 500px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #141414;
  color: #000;
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative;
  z-index: 10;
  border-radius: 10px;
  overflow: hidden;
`;

const ModalImg = styled.img`
  z-index: -1;
  width: 400px;
  height: 100%;
  object-fit: cover;
  place-items: center;
  border-radius: 10px 0 0 10px;
  background: #000;
  overflow: hidden;
`;

const ModalContent = styled.div`
  display: flex;
  z-index: 1;
  flex-direction: column;
  justify-content: center;
  place-items: center;
  line-height: 1.8;
  .confirmed {
    color: #ffa500;
  }
  .death {
    color: #ff0000;
  }
  .recovered {
    color: #3cb371;
  }
  .country-name {
    color: #fff;
  }
  .last-updated {
    color: #fff;
  }
  p {
    margin-bottom: 1rem;
  }
  button {
    padding: 10px 24px;
    background: #141414;
    color: #fff;
    border: none;
  }
`;

const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
  color: #fff;
`;

export const Modal = ({
  showModal,
  setShowModal,
  countryName,
  countryAlias,
}) => {
  const [countryDisplayed, setCountryDisplayed] = useState({
    confirmed: NaN,
    recovered: NaN,
    deaths: NaN,
  });

  useEffect(() => {
    axios
      .get(`https://covid19.mathdro.id/api/countries/${countryName}`)
      .then((res) => {
        setCountryDisplayed({
          confirmed: res.data.confirmed.value,
          deaths: res.data.deaths.value,
          recovered: res.data.recovered.value,
        });
      })
      .catch((err) => console.log(err));
  }, [countryName]);

  const modalRef = useRef();

  const animation = useSpring({
    config: {
      duration: 250,
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0%)` : `translateY(-100%)`,
  });

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const keyPress = useCallback(
    (e) => {
      if (e.key === "Escape" && showModal) {
        setShowModal(false);
      }
    },
    [setShowModal, showModal]
  );

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);

  return (
    <>
      {showModal ? (
        <Background onClick={closeModal} ref={modalRef}>
          <animated.div style={animation}>
            <ModalWrapper showModal={showModal}>
              {countryAlias ? (
                <ModalImg
                  src={`https://flagcdn.com/w640/${countryAlias.toLowerCase()}.png`}
                  alt="country flag"
                />
              ) : (
                <ModalImg src={noImg} alt="country flag" />
              )}
              <ModalContent>
                <h3 className="country-name">{countryName}</h3>
                <br />
                <h4 className="confirmed">Confirmed</h4>
                <p className="confirmed">{countryDisplayed.confirmed}</p>
                <h4 className="recovered">Recovered</h4>
                <p className="recovered">{countryDisplayed.recovered}</p>
                <h4 className="death">Deaths</h4>
                <p className="death">{countryDisplayed.deaths}</p>
              </ModalContent>
              <CloseModalButton
                aria-label="Close modal"
                onClick={() => setShowModal((prev) => !prev)}
              />
            </ModalWrapper>
          </animated.div>
        </Background>
      ) : null}
    </>
  );
};
