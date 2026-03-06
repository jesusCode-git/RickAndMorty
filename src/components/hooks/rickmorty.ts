import { useEffect, useState } from "react"
import type { Personaje } from "../types"

const useCharacter = () => {
  const [character, setCharacter] = useState<Personaje[]>([])

  const traerCharacter = async () => {
    const respuesta = await fetch("https://rickandmortyapi.com/api/character")
    const datos = await respuesta.json()
    setCharacter(datos.results) // Rick & Morty API devuelve un objeto con "results"
  }

  useEffect(() => {
    traerCharacter()
  }, [])

  return {
    character,
    traerCharacter,
  }
}

export default useCharacter
