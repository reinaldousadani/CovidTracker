import React, {useState, useEffect} from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Modal } from './components/Modal';
import { GlobalStyle } from './globalStyles';
import Topnav from './components/Topnav';


const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Button = styled.button`
  min-width: 100px;
  padding: 16px 32px;
  border-radius: 4px;
  border: none;
  background: #141414;
  color: #fff;
  font-size: 24px;
  cursor: pointer;
  margin: 10px;
`;

function App() {
  const [showModal, setShowModal] = useState(false)

  const openModal = () => {
    setShowModal(prev => !prev)
  }

  return (
    <>
      <Topnav />
      <GlobalStyle />
      <Container>
        <Button onClick={openModal}>Global Case</Button>
          <Modal showModal={showModal} setShowModal={setShowModal} />
          
      </Container>
    </>
  );
}

export default App;
