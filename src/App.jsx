import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import styled from "styled-components";
import Characters from "./components/Characters";
import Contact from "./components/Contact";
import "./App.css"

const HeaderMain = styled.header`
  display: flex;
  justify-content: center;
  height: 100vh;
  padding: 20px 12px;
  flex-direction: column;
  align-items: center;
`;

const DivMain = styled.div`
  background-color: #ffffffe6;
  height: 600px;
  width: 600px;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const ButtonsNav = styled(Link)`
  background-color: #344d67;
  color: #b1f0dc;
  margin: 8px;
  padding: 16px;
  justify-content: center;
  width: 145px;
  height: 56px;
  border: 0px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  border-radius: 8px;
`;


function App() {

  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  )

  function Home() {
    return (
      <HeaderMain>
        <DivMain className="divMain">
          <h1>Proyect Rick & Morty</h1>
          <h2>Welcome to Rick & Morty Project!</h2>
          <p>This project was made for practicing React and to create a functional website</p>
          <p>In this website you can know information of the characters of this animated series.<br />
            Also you can filter for different types of properties to find the character that you are looking for or send us a message for any concern or suggestion</p>
          <h2>Let's go!</h2>
          <div className="navMain">
            <ButtonsNav to="/characters">Characters</ButtonsNav>
            <ButtonsNav to="/contact">Contact</ButtonsNav>
          </div>
        </DivMain>
      </HeaderMain>
    );
  }
}

export default App;
