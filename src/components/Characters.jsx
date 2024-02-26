import { useState, useEffect } from "react"
import styled from "styled-components"

import NavMain from "./NavMain"
import Filter from "./Filter"
import CardsSection from "./CardsSection"

const CharactersContainer = styled.div`
  overflow-y: auto;
  height: 100vh;
`

const Characters = () => {
  const [listCharacters, setListCharacters] = useState([])
  const [allCharacters, setAllCharacters] = useState([])
  const [appliedFilters, setAppliedFilters] = useState([])


  useEffect(() => {
    async function fetchData(){
      const response1 = await fetch("https://rickandmortyapi.com/api/character?page=1")
      .then(resp => resp.json())
      .then(data => data.results)
      .catch(err => console.log(err))
      const response2 = await fetch("https://rickandmortyapi.com/api/character?page=2")
      .then(resp => resp.json())
      .then(data => data.results)
      .catch(err => console.log(err))
    
    setAllCharacters([...response1, ...response2])
    setListCharacters([...response1, ...response2])
    }
    fetchData()
  }, [])

  const filterCharacters = (target) => {
    if (target.checked === true) {
      setAppliedFilters([...appliedFilters, target.value])
    } else {
      setListCharacters(allCharacters)
      let newFilters = appliedFilters.filter((filter) => filter !== target.value)
      setAppliedFilters(newFilters)
    }
  }

  useEffect(() => {
    let filteredCharacters = allCharacters

    appliedFilters.forEach((data) => {
      if (data === "Dead" || data === "Alive") {
        filteredCharacters = filteredCharacters.filter((character) => character.status === data)
      } else if (data === "Female" || data === "Male") {
        filteredCharacters = filteredCharacters.filter((character) => character.gender === data)
      } else if (data === "Unknown") {
        filteredCharacters = filteredCharacters.filter((character) => character.origin.name === "unknown")
      }
    })
    setListCharacters(filteredCharacters)

  }, [appliedFilters, allCharacters])


  return (
    <CharactersContainer>
      <NavMain />
      <Filter filterCharacters={filterCharacters} />
      <CardsSection listCharacters={listCharacters} />
    </CharactersContainer>
  )
}

export default Characters
