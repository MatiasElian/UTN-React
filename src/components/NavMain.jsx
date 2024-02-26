import { Link } from "react-router-dom"
import styled from "styled-components"
import "./NavMain.css"

const HeaderCharacters = styled.header`
  background-color: #344d67;
  padding: 20px;
  width: 100%;
  height: 160px;
`

const NavMain = () => {

  
  return (
    <HeaderCharacters>
          <div className="navContainer">
            <Link to="/">Rick & Morty</Link>
            <div className="navChild">
              <ul>
                <Link to="/characters">Characters</Link>
                <Link to="/contact">Contact</Link>
              </ul>
            </div>
          </div>
      </HeaderCharacters>
  )
}

export default NavMain
