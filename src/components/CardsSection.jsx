import { useState } from "react"
import "./CardsSection.css"

const CardsSection = ({ listCharacters }) => {

  const [infoCharacter, setInfoCharacteter] = useState(null)


  return (

    <section className="cardsContainer">
      {
        listCharacters.map((element) => {
          return  <div className="infoContainer" key={element.id}>
                    <div className="characterCard">
                    <img src={element.image} alt="" />
                    <h2>{element.name}</h2>
                    <button onClick={() => setInfoCharacteter(element.id)}>Know More..</button>
                  </div>
            {infoCharacter === element.id && (
              <div className="characterInfo">
                <button onClick={() => setInfoCharacteter(null)}>X</button>
                <ul>
                  <li><span>Character Status {element.status} </span></li>
                  <li>Species <span>{element.species}</span></li>
                  <li>Origin <span>{element.origin.name}</span></li>
                  <li>Gender <span>{element.gender}</span></li>
                </ul>
              </div>
            )}
          </div>
        })
      }
    </section>
  )
}

export default CardsSection
